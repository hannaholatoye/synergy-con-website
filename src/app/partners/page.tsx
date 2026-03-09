"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================
   PARTNERS
========================= */
const partners = [
  { logo: "/images/partners/ster.png", href: "https://example.com" },
  { logo: "/images/partners/finess.png", href: "https://example.com" },
  { logo: "/images/partners/pelham.png", href: "https://example.com" },
  { logo: "/images/partners/city.png", href: "https://example.com" },
  { logo: "/images/partners/aris.png", href: "https://example.com" },
  { logo: "/images/partners/gov.png", href: "https://example.com" },
  { logo: "/images/partners/tour.png", href: "https://example.com" },
  { logo: "/images/partners/waka.png", href: "https://example.com" },
  { logo: "/images/partners/sodium.png", href: "https://example.com" },
  { logo: "/images/partners/asolar.png", href: "https://example.com" },
  { logo: "/images/partners/nelson.png", href: "https://example.com" },
  { logo: "/images/partners/plug.png", href: "https://example.com" },
];

/* =========================
   SPONSORS
========================= */
const sponsors = [
  { logo: "/images/sponsors/first.png", href: "https://example.com" },
  { logo: "/images/partners/finess.png", href: "https://example.com" },
  { logo: "/images/sponsors/mtn.jpg", href: "https://example.com" },
  { logo: "/images/sponsors/dangote.png", href: "https://example.com" },
];

const Highlight = () => {
  // duplicate arrays so the scroll loops seamlessly
  const partnerLoop = [...partners, ...partners];
  const sponsorLoop = [...sponsors, ...sponsors];

  return (
    <section className="bg-IcyBreeze dark:bg-darklight py-14">
      <div className="container">

        {/* ================= PARTNERS ================= */}
        <div className="text-center">
          <h2 className="text-secondary dark:text-white">
            Our Esteemed Partners
          </h2>
          <p className="mt-3 text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-2xl mx-auto">
            SynergyCon is made possible by these incredible organizations committed to advancing Nigeria's Creative Economy.
          </p>
        </div>

        <div className="mt-10 overflow-hidden border-y border-border/60 dark:border-dark_border py-6 marquee-wrap">
          <div className="marquee flex items-center gap-6">
            {partnerLoop.map((p, i) => (
              <a
                key={`partner-${i}`}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-22 border border-solid border-border/60 dark:border-dark_border bg-white/60 dark:bg-white/5 px-5 py-3 flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/10 transition"
              >
                <div className="relative h-14 w-44">
                  <Image
                    src={p.logo}
                    alt="Partner logo"
                    fill
                    className="object-contain opacity-90 hover:opacity-100 transition"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ================= SPONSORS ================= */}
        <div className="text-center mt-16">
          <h2 className="text-secondary dark:text-white">
            Sponsors
          </h2>
          <p className="mt-3 text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-2xl mx-auto">
            These sponsors support innovation and creativity through SynergyCon.
          </p>
        </div>

        <div className="mt-10 overflow-hidden border-y border-border/60 dark:border-dark_border py-6 marquee-wrap">
          <div className="marquee flex items-center gap-6 reverse">
            {sponsorLoop.map((s, i) => (
              <a
                key={`sponsor-${i}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-22 border border-solid border-border/60 dark:border-dark_border bg-white/60 dark:bg-white/5 px-5 py-3 flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/10 transition"
              >
                <div className="relative h-14 w-44">
                  <Image
                    src={s.logo}
                    alt="Sponsor logo"
                    fill
                    className="object-contain opacity-90 hover:opacity-100 transition"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link href="/partners" className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden">
            <span>Become a sponsor</span>
          </Link>
        </div>

      </div>

      {/* ================= MARQUEE ANIMATION ================= */}
      <style jsx global>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          width: max-content;
          animation: marqueeScroll 18s linear infinite;
          will-change: transform;
        }

        .reverse {
          animation-direction: reverse;
        }

        .marquee-wrap:hover .marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Highlight;