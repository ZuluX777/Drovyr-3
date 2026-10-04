"use client";

import Link from "next/link";
import Image from "next/image";
import { footerLegalLinks, navLinks, siteConfig } from "@/lib/site";
import { reopenCookiePreferences } from "./CookieConsent";

export default function Footer() {
  return (
    <footer className="border-t border-operational/20 bg-focus">
      <div className="container-content grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logo-wordmark.png"
            alt="Drovyr"
            width={168}
            height={44}
            className="h-auto w-[168px]"
          />
          <p className="mt-4 max-w-xs text-sm text-operational">{siteConfig.tagline}</p>
          <p className="mt-1 text-sm text-operational">{siteConfig.location}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-elevation">Company</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-link text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-link text-sm">
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
                <Link href={link.href} className="text-link text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button type="button" onClick={() => reopenCookiePreferences()} className="text-link text-sm">
                Cookie preferences
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-content flex flex-col gap-2 border-t border-operational/20 py-6 text-xs text-operational md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Drovyr. All rights reserved.</p>
        <p>
          {siteConfig.location} · Serving {siteConfig.serviceArea}
        </p>
      </div>
    </footer>
  );
}
