"use client";

import React, { useEffect, useMemo, useState } from "react";

type Slide =
  | {
      type: "stat";
      center: string; // <-- middle text like "1.0 STATS"
      left: { value: string; label: string };
      right: { value: string; label: string };
    }
  | { type: "text"; text: string; big?: boolean };

const slides: Slide[] = [
  {
    type: "text",
    text: "IN SYNERGYCON 1.0, WE BROUGHT TOGETHER THE BRIGHTEST MINDS ON THE CONTINENT",
  },
  {
    type: "stat",
    center: "1.0 STATS",
    left: { value: "5,000+", label: "GUESTS" },
    right: { value: "148", label: "SPEAKERS" },
  },
  {
    type: "stat",
    center: "1.0 STATS",
    left: { value: "9", label: "CONTENT TRACKS" },
    right: { value: "3", label: "STAGES" },
  },
  {
    type: "text",
    text: "EXCHANGING IDEAS ON HOW WE CAN\nBUILD FOR THE WORLD",
    big: true,
  },
  {
    type: "text",
    text: "THIS YEAR, WE ARE MOVING FORWARD\nCOLLECTIVELY TO SCALABLE\nGROWTH",
  },
];

function StatCard({
  value,
  label,
  align,
}: {
  value: string;
  label: string;
  align: "left" | "right";
}) {
  return (
    <div className={`flex ${align === "left" ? "justify-start" : "justify-end"} w-full md:w-1/2`}>
      <div className="relative w-[360px] max-w-full">
        {/* offset shadow panel */}
        <div
          className={`absolute inset-0 ${
            align === "left" ? "-translate-x-2 translate-y-2" : "translate-x-2 translate-y-2"
          } border border-white/10 bg-black`}
        />
        {/* main card */}
        <div className="relative border border-white/20 bg-black px-10 py-12">
          <div className="text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            {value}
          </div>
          <div className="mt-3 text-sm md:text-base font-semibold tracking-[0.35em] text-white/60 uppercase">
            {label}
          </div>
          <div className="mt-6 h-[2px] w-14 bg-white/25" />
        </div>
      </div>
    </div>
  );
}

export default function EventDetailsStrip() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const slide = useMemo(() => slides[index], [index]);

  useEffect(() => {
    if (!playing) return;

    const t = setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= slides.length) {
          setPlaying(false);
          return i;
        }
        return next;
      });
    }, 2600);

    return () => clearInterval(t);
  }, [playing]);

  const prev = () => {
    setPlaying(false);
    setIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setPlaying(false);
    setIndex((i) => Math.min(slides.length - 1, i + 1));
  };

  const onPlayPause = () => {
    // if finished and they hit play, restart
    if (!playing && index === slides.length - 1) setIndex(0);
    setPlaying((p) => !p);
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container">
        {/* Slide area */}
        <div className="min-h-[320px] flex items-center justify-center">
          <div key={index} className="slide-up w-full">
            {slide.type === "text" ? (
              <div className="max-w-5xl mx-auto px-4 text-center">
                <h3
                  className={`font-extrabold italic whitespace-pre-line leading-tight text-white ${
                    slide.big ? "text-5xl md:text-7xl" : "text-4xl md:text-6xl"
                  }`}
                >
                  {slide.text}
                </h3>
              </div>
            ) : (
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
                <StatCard value={slide.left.value} label={slide.left.label} align="left" />

                {/* CENTER TEXT */}
                <div className="hidden md:flex flex-col items-center justify-center px-4 text-center">
                  <div className="text-xs tracking-[0.45em] text-white/40 uppercase">
                    SYNERGYCON
                  </div>
                  <div className="mt-2 text-3xl md:text-4xl font-extrabold tracking-wide text-white">
                    {slide.center}
                  </div>
                  <div className="mt-4 h-px w-16 bg-white/20" />
                </div>

                <StatCard value={slide.right.value} label={slide.right.label} align="right" />

                {/* Mobile center text (shows under cards) */}
                <div className="md:hidden text-center pt-2">
                  <div className="text-xs tracking-[0.45em] text-white/40 uppercase">
                    SYNERGYCON
                  </div>
                  <div className="mt-2 text-2xl font-extrabold tracking-wide">
                    {slide.center}
                  </div>
                  <div className="mx-auto mt-3 h-px w-16 bg-white/20" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="h-12 w-12 border border-white/25 bg-white/5 grid place-items-center hover:bg-white hover:text-black transition"
            aria-label="Previous"
          >
            ◀◀
          </button>

          <button
            onClick={onPlayPause}
            className="h-12 w-12 border border-white/25 bg-white text-black grid place-items-center hover:opacity-90 transition"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <button
            onClick={next}
            className="h-12 w-12 border border-white/25 bg-white/5 grid place-items-center hover:bg-white hover:text-black transition"
            aria-label="Next"
          >
            ▶▶
          </button>
        </div>

        {/* Progress */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}