"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container">
        {/* Top area */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            {/* OPTION A (recommended): use a white logo asset */}
            <div className="flex items-center gap-3">
            <Image src="/images/logo/logo.png" alt="logo" width={160} height={40} className="invert" />
            </div>

            {/* OPTION B (quick): invert black logo (uncomment if needed) */}
            {/*
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo-black.png"
                alt="SynergyCon"
                width={160}
                height={40}
                className="h-10 w-auto invert"
              />
            </div>
            */}

            <p className="mt-4 text-white/70 text-sm leading-6 max-w-sm">
              Nigeria&apos;s flagship summit for the creative economy. One
              transformative day. Four immersive districts. National Theatre,
              Lagos
              <br />
              <span className="inline-block mt-2">• March 26, 2026.</span>
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/15 grid place-items-center transition"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/15 grid place-items-center transition"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="text-xl" />
              </a>
              <a
                href="mailto:info@synergycon.com"
                className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/15 grid place-items-center transition"
                aria-label="Email"
              >
                <Icon icon="mdi:email-outline" className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-white/70 text-sm">
              <li>
                <Link href="/overview" className="hover:text-white transition">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-white transition">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-white transition">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Finesser Network */}
          <div>
            <h4 className="text-white font-semibold text-lg">Finesser Network</h4>
            <ul className="mt-4 space-y-3 text-white/70 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Finesser
                </Link>
              </li>
              <li>
                <Link href="/become-a-speaker" className="hover:text-white transition">
                  Become a Speaker
                </Link>
              </li>
              <li>
                <Link href="/partner" className="hover:text-white transition">
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-white font-semibold text-lg">Stay Updated</h4>
            <p className="mt-4 text-white/70 text-sm">
              Get the latest updates about SynergyCon 2.0
            </p>

            <form
              className="mt-4 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full rounded-xl bg-white/10 border border-white/10 px-4 text-sm outline-none placeholder:text-white/40 focus:border-white/25"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-11 w-28 rounded-xl bg-white text-black font-semibold text-sm hover:opacity-90 transition"
              >
                <Icon icon="mdi:send" className="text-lg" />
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-white/10 py-6">
          <p className="text-white/60 text-sm">
            © 2026 SynergyCon. A Finesser Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;