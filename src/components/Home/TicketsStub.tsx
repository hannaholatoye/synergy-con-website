"use client";

import React from "react";
import Link from "next/link";

type Ticket = {
  tier: string;
  price: string;
  badge: string;
  badgeColor: string; // tailwind bg class
  date: string;
  time: string;
  venue: string;
  perks: string[];
};

const tickets: Ticket[] = [
  {
    tier: "VIP",
    price: "₦25,000",
    badge: "DAY ACCESS",
    badgeColor: "bg-red-500",
    date: "26 MAR 2026",
    time: "10AM – 6PM",
    venue: "National Theatre, Lagos",
    perks: ["Day-specific sessions", "Exhibition area access", "Networking opportunities"],
  },
  {
    tier: "VIP+",
    price: "₦50,000",
    badge: "DAY ACCESS",
    badgeColor: "bg-blue-500",
    date: "26 MAR 2026",
    time: "10AM – 6PM",
    venue: "National Theatre, Lagos",
    perks: ["All VIP benefits", "Priority seating", "Exclusive networking lounge"],
  },
  {
    tier: "VVIP",
    price: "₦100,000",
    badge: "ALL-ACCESS PASS",
    badgeColor: "bg-emerald-500",
    date: "26 MAR 2026",
    time: "10AM – 6PM",
    venue: "National Theatre, Lagos",
    perks: ["Premium festival access", "All keynotes & panels", "VIP lounge access"],
  },
  {
    tier: "Priority Pass",
    price: "₦150,000",
    badge: "PREMIUM ACCESS",
    badgeColor: "bg-amber-500",
    date: "26 MAR 2026",
    time: "10AM – 6PM",
    venue: "National Theatre, Lagos",
    perks: ["All VVIP benefits", "Front-row reserved seating", "Exclusive speaker dinner invite"],
  },
];

function TicketStubCard({ t }: { t: Ticket }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* perforation line */}
      <div className="absolute left-[92px] top-0 h-full w-px bg-white/10" />

      {/* perforation holes */}
      <div className="absolute left-[84px] top-5 h-3 w-3 rounded-full bg-[#0b0f1a]" />
      <div className="absolute left-[84px] bottom-5 h-3 w-3 rounded-full bg-[#0b0f1a]" />

      <div className="flex">
        {/* Left date block (smaller) */}
        <div className="w-[92px] shrink-0 bg-white/10 px-3 py-4">
          <div className="text-white/70 text-[10px] font-semibold tracking-widest">
            DATE
          </div>
          <div className="mt-2 text-white text-sm font-extrabold leading-snug">
            {t.date}
          </div>

          <div className="mt-4 text-white/70 text-[10px] font-semibold tracking-widest">
            TYPE
          </div>
          <div
            className={`mt-2 inline-flex items-center rounded-full px-2 py-1 text-[9px] font-bold text-black ${t.badgeColor}`}
          >
            {t.badge}
          </div>
        </div>

        {/* Right details (tighter spacing) */}
        <div className="flex-1 px-4 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-white text-xl font-extrabold leading-tight">
                {t.tier}
              </div>
              <div className="mt-1 text-white/65 text-xs">{t.venue}</div>
              <div className="mt-1 text-white/65 text-xs">{t.time}</div>
            </div>

            <div className="text-right">
              <div className="text-white/60 text-[10px] font-semibold tracking-widest">
                PRICE
              </div>
              <div className="mt-1 text-white text-xl font-extrabold">
                {t.price}
              </div>
              <div className="text-white/50 text-[10px]">/day</div>
            </div>
          </div>

          <div className="mt-3 grid gap-1.5">
            {t.perks.slice(0, 3).map((p) => (
              <div key={p} className="flex items-start gap-2 text-white/75 text-xs">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* smaller barcode */}
          <div className="mt-4 h-7 w-full rounded-md bg-[linear-gradient(90deg,rgba(255,255,255,0.55)_0_2px,transparent_2px_6px)] opacity-40" />
        </div>
      </div>
    </div>
  );
}

export default function TicketsStub() {
  return (
    <section className="py-14 bg-[#0b0f1a]">
      <div className="container">
        <div className="text-center">
          <h2 className="text-white">One Day That Could Change Everything</h2>
          <p className="mt-3 text-white/70 text-lg max-w-2xl mx-auto">
            The brightest minds in Nigeria&apos;s creative economy converge at National Theatre.
            5,000+ innovators, four immersive districts, countless opportunities to collaborate,
            learn, and launch what&apos;s next.
          </p>
        </div>

        {/* Ticket grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tickets.map((t) => (
            <TicketStubCard key={t.tier} t={t} />
          ))}
        </div>

        {/* Shared buttons UNDER the tickets (like your screenshot) */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link
              href="/buytickets"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-black font-semibold hover:opacity-90 transition"
            >
              Secure Your Spot Now <span aria-hidden>→</span>
            </Link>

            {/* <Link
              href="/waitlist"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              <span aria-hidden>🔔</span> Join Waitlist
            </Link> */}

            <Link
              href="/schedule"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              View Full Schedule
            </Link>
          </div>

          {/* Date/time line */}
          <div className="mt-1 flex items-center gap-3 text-white/70">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10">
              {/* calendar icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <span className="text-sm">
              March 26, 2026 <span className="opacity-50">•</span> 9:00 AM - 6:00 PM WAT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}