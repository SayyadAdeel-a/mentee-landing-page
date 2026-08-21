"use client";

import {
    useRef,
    useEffect,
    useState,
    useMemo,
    type CSSProperties,
    type PointerEvent as ReactPointerEvent,
} from "react";

interface FontValue {
    fontFamily?: string;
    fontWeight?: string | number;
    fontSize?: string | number;
    letterSpacing?: string | number;
    lineHeight?: string | number;
    textAlign?: string;
}

interface CurvedLoopProps {
    text?: string;
    font?: FontValue;
    color?: string;
    direction?: "left" | "right";
    baseVelocity?: number;
    curveAmount?: number;
    gap?: number;
    draggable?: boolean;
    dragIntensity?: number;
    fade?: boolean;
    fadePercent?: number;
    style?: CSSProperties;
}

const MAX_SPEED = 800;

export default function CurvedLoop({
    text = "Originkit",
    font = {
        fontFamily: "Inter",
        fontWeight: 900,
        fontSize: 40,
        lineHeight: "1.2em",
        letterSpacing: "1px",
        textAlign: "left",
    },
    color = "#09090b",
    direction = "left",
    baseVelocity = 25,
    curveAmount = -75,
    gap = 14,
    draggable = true,
    dragIntensity = 10,
    fade = true,
    fadePercent = 14,
    style,
}: CurvedLoopProps) {
    const measureRef = useRef<SVGTextElement>(null);
    const tspansRef = useRef<SVGTSpanElement[]>([]);
    const pathRef = useRef<SVGPathElement>(null);
    const [pathLength, setPathLength] = useState(0);
    const [textWidth, setTextWidth] = useState(0);

    const staticId = useMemo(() => {
        const propsString = `${text}-${curveAmount}-${direction}-${baseVelocity}`;
        let hash = 0;
        for (let i = 0; i < propsString.length; i++) {
            const char = propsString.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash;
        }
        return Math.abs(hash).toString(36);
    }, [text, curveAmount, direction, baseVelocity]);

    const pathId = `curve-${staticId}`;
    const fadeGradientId = `fadeGradient-${staticId}`;
    const fadeMaskId = `fadeMask-${staticId}`;
    const pathD = `M-200,220 Q720,${220 + curveAmount} 1640,220`;

    const isDragging = useRef(false);
    const dragVelocity = useRef(0);
    const effectiveVelocity = (baseVelocity / 100) * MAX_SPEED;
    const actualBaseVelocity =
        direction === "left" ? -effectiveVelocity : effectiveVelocity;
    const dragFactor = dragIntensity * 0.1;

    const gapPx = (gap + 1) * 10;

    const processedText = useMemo(() => {
        return text.trim();
    }, [text]);

    const spacing = textWidth + gapPx;

    useEffect(() => {
        if (measureRef.current) {
            setTextWidth(measureRef.current.getComputedTextLength());
        }
    }, [text, font, color, direction, baseVelocity, curveAmount, gap, draggable, dragIntensity, fade, fadePercent]);

    useEffect(() => {
        if (pathRef.current) {
            setPathLength(pathRef.current.getTotalLength());
        }
    }, [curveAmount]);

    // Ensure plenty of repeats to continuously fill entire curve track without gaps
    const calculatedRepeats =
        spacing > 0 ? Math.ceil((pathLength || 2000) / spacing) + 6 : 0;
    const ready = (pathLength > 0 || textWidth > 0) && spacing > 0;

    useEffect(() => {
        if (!ready) return;
        let raf = 0;
        let last = performance.now();

        const tick = (now: number) => {
            const delta = now - last;
            last = now;
            const spans = tspansRef.current;
            const totalCount = spans.length;

            if (totalCount > 0) {
                const totalLoopWidth = totalCount * spacing;

                let moveBy = 0;
                if (isDragging.current) {
                    moveBy = dragVelocity.current;
                    dragVelocity.current *= 0.92;
                    if (Math.abs(dragVelocity.current) < 0.01) {
                        dragVelocity.current = 0;
                    }
                } else {
                    moveBy = actualBaseVelocity * (delta / 1000) + dragVelocity.current;
                    if (Math.abs(dragVelocity.current) > 0.01) {
                        dragVelocity.current *= 0.95;
                    } else {
                        dragVelocity.current = 0;
                    }
                }

                for (let i = 0; i < totalCount; i++) {
                    const tspan = spans[i];
                    if (!tspan) continue;

                    let x = parseFloat(tspan.getAttribute("x") || (i * spacing).toString());
                    x += moveBy;

                    // Perfect continuous infinite toroidal wrap
                    while (x < -spacing) {
                        x += totalLoopWidth;
                    }
                    while (x > totalLoopWidth - spacing) {
                        x -= totalLoopWidth;
                    }

                    tspan.setAttribute("x", x.toString());
                }
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [ready, spacing, actualBaseVelocity]);

    const lastPointerPosition = useRef({ x: 0, y: 0 });
    const handlePointerDown = (e: ReactPointerEvent<SVGTextElement>) => {
        if (!draggable) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        e.currentTarget.style.cursor = "grabbing";
        isDragging.current = true;
        lastPointerPosition.current = { x: e.clientX, y: e.clientY };
        dragVelocity.current = 0;
    };

    const handlePointerMove = (e: ReactPointerEvent<SVGTextElement>) => {
        if (!draggable) return;
        if (!isDragging.current) return;
        const currentPosition = { x: e.clientX, y: e.clientY };
        const deltaX = currentPosition.x - lastPointerPosition.current.x;
        dragVelocity.current = deltaX * dragFactor;
        lastPointerPosition.current = currentPosition;
    };

    const handlePointerUp = (e: ReactPointerEvent<SVGTextElement>) => {
        if (!draggable) return;
        e.currentTarget.releasePointerCapture(e.pointerId);
        e.currentTarget.style.cursor = "grab";
        isDragging.current = false;
    };

    const cursorStyle = draggable
        ? isDragging.current
            ? "grabbing"
            : "grab"
        : "default";

    const fadeStart = `${fadePercent}%`;
    const fadeEnd = `${100 - fadePercent}%`;

    return (
        <div
            style={{
                visibility: ready ? "visible" : "hidden",
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                ...style,
            }}
        >
            <svg
                viewBox="0 0 1440 320"
                style={{
                    width: "100%",
                    height: "100%",
                    userSelect: "none",
                    overflow: "visible",
                    display: "block",
                    fill: color,
                    fontFamily: font.fontFamily,
                    fontSize: font.fontSize,
                    letterSpacing: font.letterSpacing,
                    lineHeight: font.lineHeight,
                }}
            >
                <text
                    ref={measureRef}
                    xmlSpace="preserve"
                    style={{
                        visibility: "hidden",
                        opacity: 0,
                        pointerEvents: "none",
                        cursor: cursorStyle,
                    }}
                >
                    {processedText}
                </text>
                <defs>
                    <path
                        ref={pathRef}
                        id={pathId}
                        d={pathD}
                        fill="none"
                        stroke="transparent"
                    />
                    {fade && (
                        <>
                            <linearGradient
                                id={fadeGradientId}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                                <stop
                                    offset={fadeStart}
                                    stopColor="white"
                                    stopOpacity="1"
                                />
                                <stop
                                    offset={fadeEnd}
                                    stopColor="white"
                                    stopOpacity="1"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="white"
                                    stopOpacity="0"
                                />
                            </linearGradient>
                            <mask id={fadeMaskId}>
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill={`url(#${fadeGradientId})`}
                                />
                            </mask>
                        </>
                    )}
                </defs>
                {ready && (
                    <text
                        fontWeight={font.fontWeight}
                        xmlSpace="preserve"
                        mask={fade ? `url(#${fadeMaskId})` : undefined}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                    >
                        <textPath href={`#${pathId}`} xmlSpace="preserve">
                            {Array.from({ length: calculatedRepeats }).map(
                                (_, i) => (
                                    <tspan
                                        key={i}
                                        x={i * spacing}
                                        ref={(el) => {
                                            if (el) tspansRef.current[i] = el;
                                        }}
                                    >
                                        {processedText}
                                    </tspan>
                                )
                            )}
                        </textPath>
                    </text>
                )}
            </svg>
        </div>
    );
}