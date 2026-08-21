import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GithubLogo, LinkedinLogo, XLogo, Globe } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 p-1 shadow-sm">
                <Image
                  src="/MenteE.png"
                  alt="MenteE"
                  height={22}
                  width={22}
                  className="h-5 w-auto object-contain"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-neutral-950">
                MenteE™
              </span>
            </Link>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-600 max-w-sm font-normal">
              Engineering autonomous AI ecosystems, zero-knowledge document systems, and enterprise workflow platforms built for scale.
            </p>

            <div className="mt-6 flex items-center gap-3 text-neutral-700">
              <a
                href="https://github.com/SyabAhmad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 transition-colors hover:border-neutral-400 hover:text-black shadow-xs"
              >
                <GithubLogo size={16} weight="fill" />
              </a>
              <a
                href="https://www.linkedin.com/in/SyedSyab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 transition-colors hover:border-neutral-400 hover:text-black shadow-xs"
              >
                <LinkedinLogo size={16} weight="fill" />
              </a>
              <a
                href="https://twitter.com/SyabSays"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 transition-colors hover:border-neutral-400 hover:text-black shadow-xs"
              >
                <XLogo size={16} weight="fill" />
              </a>
              <a
                href="https://syab.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syab Portfolio"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 transition-colors hover:border-neutral-400 hover:text-black shadow-xs"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 text-xs">
            <div>
              <p className="font-mono text-neutral-900 font-bold uppercase tracking-wider">
                Products
              </p>
              <ul className="mt-4 space-y-2.5 text-neutral-600 font-medium">
                <li>
                  <Link href="/products" className="transition-colors hover:text-black">
                    RecruAI (Talent Engine)
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="transition-colors hover:text-black">
                    DocsBox (Encrypted Vault)
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/SyabAhmad/datafit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 transition-colors hover:text-black"
                  >
                    <span>DataFit (PyPI)</span>
                    <ArrowUpRight size={11} />
                  </a>
                </li>
                <li>
                  <Link href="/products" className="transition-colors hover:text-black">
                    Vision Systems (YOLO)
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="transition-colors hover:text-black">
                    MenteE Automate
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-neutral-900 font-bold uppercase tracking-wider">
                Ecosystem
              </p>
              <ul className="mt-4 space-y-2.5 text-neutral-600 font-medium">
                <li>
                  <Link href="/solutions" className="transition-colors hover:text-black">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/#approach" className="transition-colors hover:text-black">
                    Architecture & Flow
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="transition-colors hover:text-black">
                    Research & Papers
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="transition-colors hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition-colors hover:text-black">
                    About MenteE
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-neutral-900 font-bold uppercase tracking-wider">
                Founder & Studio
              </p>
              <ul className="mt-4 space-y-2.5 text-neutral-600 font-medium">
                <li>
                  <a
                    href="https://syab.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-900 font-bold hover:underline"
                  >
                    <span>Syed Syab Ahmad</span>
                    <ArrowUpRight size={11} />
                  </a>
                </li>
                <li>
                  <span className="text-neutral-500 font-mono">Riyadh, Saudi Arabia</span>
                </li>
                <li>
                  <a
                    href="https://orcid.org/0009-0003-9183-582X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-600 hover:text-black"
                  >
                    <span>ORCID Record</span>
                    <ArrowUpRight size={11} />
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-black">
                    Contact Engineering
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© 2026 MenteE™. All rights reserved. Production AI Ecosystem.</p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy" className="transition-colors hover:text-black">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-black">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-black">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
