"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Props = {
  eventDate: string; // ISO string e.g. "2026-03-26T09:00:00+01:00"
  primaryHref?: string;
  secondaryHref?: string;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownCard({
  eventDate,
  primaryHref = "/buytickets",
  secondaryHref = "/schedule",
}: Props) {
  const target = useMemo(() => new Date(eventDate).getTime(), [eventDate]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="w-full max-w-[360px] rounded-[28px] bg-black text-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
      <div className="text-center">
        <p className="text-[11px] tracking-[0.3em] font-semibold text-white/70">
          EVENT STARTS IN
        </p>
        <div className="mx-auto mt-4 h-px w-28 bg-white/15" />
      </div>

      <div className="mt-7 grid grid-cols-2 gap-x-10 gap-y-8 text-center">
        <div>
          <div className="text-6xl font-extrabold leading-none">{pad(days)}</div>
          <div className="mt-2 text-[11px] tracking-[0.3em] text-white/70">DAYS</div>
        </div>
        <div>
          <div className="text-6xl font-extrabold leading-none">{pad(hours)}</div>
          <div className="mt-2 text-[11px] tracking-[0.3em] text-white/70">HOURS</div>
        </div>
        <div>
          <div className="text-6xl font-extrabold leading-none">{pad(minutes)}</div>
          <div className="mt-2 text-[11px] tracking-[0.3em] text-white/70">MINUTES</div>
        </div>
        <div>
          <div className="text-6xl font-extrabold leading-none">{pad(seconds)}</div>
          <div className="mt-2 text-[11px] tracking-[0.3em] text-white/70">SECONDS</div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-3 text-[11px] tracking-[0.25em] text-white/70">
        <span className="inline-block h-2 w-2 rounded-full bg-[#7BE38F]" />
        REGISTRATION IS LIVE
      </div>

      <div className="mt-7 grid gap-3">
        <Link
          href={primaryHref}
          className="w-full rounded-2xl bg-white text-black py-4 text-center font-semibold tracking-wide hover:bg-white/90 transition"
        >
          SECURE YOUR SPOT&nbsp;&nbsp;→
        </Link>

        <Link
          href={secondaryHref}
          className="w-full rounded-2xl border border-white/20 bg-transparent py-4 text-center font-semibold tracking-wide hover:bg-white/5 transition"
        >
          VIEW AGENDA
        </Link>
      </div>
    </div>
  );
}