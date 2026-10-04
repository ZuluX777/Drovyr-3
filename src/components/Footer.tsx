"use client";

import Link from "next/link";
import Image from "next/image";
import { footerLegalLinks, navLinks, siteConfig } from "@/lib/site";
import { reopenCookiePreferences } from "./CookieConsent";

export default function Footer() {
  return (
    <footer className="border-t border-focus-border/70 bg-focus">
      <div className="container-content grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logo-wordmark.png"
            alt="DROVYR"
            width={960}
            height={253}
            className="h-6 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-elevation-muted">{siteConfig.tagline}</p>
          <p className="mt-1 text-sm text-elevation-faint">{siteConfig.location}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-elevation">Company</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-elevation-muted hover:text-clarity">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-elevation-muted hover:text-clarity">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-elevation">Legal</h2>
          <ul className="mt-4 space-y-3">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-elevation-muted hover:text-clarity">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => reopenCookiePreferences()}
                className="text-sm text-elevation-muted hover:text-clarity"
              >
                Cookie Preferences
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-content flex flex-col gap-2 border-t border-focus-border/70 py-6 text-xs text-elevation-faint md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} DROVYR. All rights reserved.</p>
        <p>{siteConfig.location} · Serving {siteConfig.serviceArea}</p>
      </div>
    </footer>
  );
}
