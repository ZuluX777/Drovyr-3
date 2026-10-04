"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/site";
import CTAButton from "./CTAButton";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Close the mobile menu on navigation. Intentional synchronous reset,
    // not a value derived from an external store.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-operational/20 bg-focus/95 backdrop-blur-sm">
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo-wordmark.png"
            alt="Drovyr home"
            width={168}
            height={44}
            priority
            className="h-auto w-[168px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium underline-offset-4 hover:text-elevation hover:underline hover:decoration-2 ${
                pathname === link.href ? "text-elevation" : "text-operational"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton
            href="/contact"
            onClick={() => trackEvent("ops_audit_cta_click", { location: "header" })}
          >
            {siteConfig.ctaPrimary}
          </CTAButton>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-elevation lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-operational/20 bg-focus lg:hidden">
          <nav className="container-content flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-3 text-base font-medium text-operational hover:text-elevation"
              >
                {link.label}
              </Link>
            ))}
            <CTAButton href="/contact" className="mt-3 w-full">
              {siteConfig.ctaPrimary}
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  );
}
