"use client";

import Link from "next/link";
import { ArrowLeft, ShareNetwork, EnvelopeSimple, PaperPlaneTilt } from "@phosphor-icons/react";

interface JobDetailProps {
  title: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  slug: string;
}

export function JobDetail({
  title,
  type,
  location,
  description,
  responsibilities,
  requirements,
  niceToHave,
  slug,
}: JobDetailProps) {
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/careers/${slug}`
      : "";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} — MenteE`,
          text: `Check out this role at MenteE: ${title}`,
          url: shareUrl,
        });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert("Role link copied to clipboard");
    }
  };

  const handleInvite = () => {
    const subject = encodeURIComponent(`Engineering role at MenteE: ${title}`);
    const body = encodeURIComponent(
      `Hey,\n\nI came across this engineering role at MenteE and thought you'd be a great fit:\n\n${title} (${type}, ${location})\n\n${shareUrl}\n\nCheck it out!`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="bg-white text-neutral-950 min-h-[85vh]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-3xl px-6 pt-12 text-xs font-mono text-neutral-500 flex items-center gap-2">
        <Link href="/careers" className="hover:text-black transition-colors font-medium">
          Careers
        </Link>
        <span>/</span>
        <span className="text-neutral-900 font-bold">{title}</span>
      </div>

      <section className="mx-auto max-w-3xl px-6 pb-24 pt-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-neutral-200 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-600">
              <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-0.5 font-bold text-neutral-900">
                {type}
              </span>
              <span>{location}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-xs transition-colors hover:bg-neutral-50"
            >
              <ShareNetwork size={14} />
              <span>Share</span>
            </button>
            <button
              type="button"
              onClick={handleInvite}
              className="flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-xs transition-colors hover:bg-neutral-50"
            >
              <EnvelopeSimple size={14} />
              <span>Invite</span>
            </button>
          </div>
        </div>

        <p className="mt-8 text-base text-neutral-700 leading-relaxed font-normal">{description}</p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-lg font-bold text-neutral-950 mb-4">
              Key Responsibilities
            </h2>
            <ul className="space-y-3">
              {responsibilities.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-neutral-600 font-normal"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-neutral-950 mb-4">
              Core Technical Requirements
            </h2>
            <ul className="space-y-3">
              {requirements.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-neutral-600 font-normal"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {niceToHave.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-neutral-950 mb-4">
                Preferred Experience
              </h2>
              <ul className="space-y-3">
                {niceToHave.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-600 font-normal"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 rounded-3xl border border-neutral-200 bg-neutral-50/80 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-neutral-950">How to Apply</h2>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed font-normal">
            Send your GitHub profile, resume, and a brief note regarding your production systems experience directly to{" "}
            <a
              href="mailto:hr@menteeai.org"
              className="text-neutral-950 underline underline-offset-4 hover:text-neutral-700 font-mono font-semibold"
            >
              hr@menteeai.org
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:hr@menteeai.org?subject=${encodeURIComponent(`${title} Application`)}`}
              className="flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-neutral-800 active:scale-95"
            >
              <span>Apply via Email</span>
              <PaperPlaneTilt size={15} weight="bold" />
            </a>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-neutral-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to all open positions</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
