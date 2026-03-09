"use client";

import React, { useMemo, useState } from "react";

type Track =
  | "All Tracks"
  | "Main Conference"
  | "Arts & Design"
  | "Fashion & Film"
  | "Tech & Gaming";

type ScheduleItem = {
  id: string;
  track: Exclude<Track, "All Tracks">;
  start: string; // e.g. "8:00 AM"
  end: string;   // e.g. "9:00 AM"
  title: string;
  venue: string;
  speaker?: string;
  description: string;
};

const TRACKS: Track[] = [
  "All Tracks",
  "Main Conference",
  "Arts & Design",
  "Fashion & Film",
  "Tech & Gaming",
];

// ✅ ONE-DAY schedule (your exact content), mapped only to creative districts.
// Registration + networking items are placed under Main Conference.
const SCHEDULE: ScheduleItem[] = [
  {
    id: "reg-1",
    track: "Main Conference",
    start: "8:00 AM",
    end: "9:00 AM",
    title: "Registration & Networking Breakfast",
    venue: "National Theatre - Grand Foyer",
    speaker: "All Welcome",
    description:
      "Arrive early to collect your badge, event materials, and swag bag. Enjoy complimentary coffee and light refreshments while networking with fellow attendees.",
  },
  {
    id: "mc-1",
    track: "Main Conference",
    start: "9:00 AM",
    end: "10:00 AM",
    title: "Opening Ceremony: The Framework for Brainwork",
    venue: "National Theatre - Main Auditorium",
    speaker: "Keynote Speaker TBA",
    description:
      "The official opening of SynergyCon 2.0 featuring welcome addresses from key government officials, organizers, and a keynote setting the stage for Nigeria's creative economy revolution.",
  },
  {
    id: "mc-2",
    track: "Main Conference",
    start: "10:15 AM",
    end: "11:15 AM",
    title: "The State of Nigeria's Creative Economy",
    venue: "National Theatre - Main Auditorium",
    speaker: "Industry Leaders Panel",
    description:
      "A comprehensive panel discussion featuring industry leaders and policymakers examining the current landscape, challenges, and opportunities in Nigeria's $29 billion creative economy.",
  },
  {
    id: "mc-3",
    track: "Main Conference",
    start: "11:30 AM",
    end: "12:30 PM",
    title: "Funding the Future: Investment in Creative Industries",
    venue: "National Theatre - Main Auditorium",
    speaker: "Investment Panel",
    description:
      "Venture capitalists, angel investors, and fund managers discuss funding opportunities, investment trends, and what it takes to attract capital for creative ventures.",
  },

  // Arts & Design (morning)
  {
    id: "ad-1",
    track: "Arts & Design",
    start: "10:15 AM",
    end: "11:15 AM",
    title: "Contemporary Nigerian Art: Global Impact",
    venue: "National Theatre - Gallery Hall",
    speaker: "Art Experts Panel",
    description:
      "Explore how Nigerian artists are making waves on the international stage, from gallery exhibitions to art auctions and cultural diplomacy.",
  },
  {
    id: "ad-2",
    track: "Arts & Design",
    start: "11:30 AM",
    end: "12:30 PM",
    title: "Masterclass: Digital Art & NFTs",
    venue: "National Theatre - Studio A",
    speaker: "Digital Art Instructor",
    description:
      "Learn how to create, mint, and market your digital art in the Web3 space with hands-on guidance from leading digital artists.",
  },

  // Fashion & Film (morning)
  {
    id: "ff-1",
    track: "Fashion & Film",
    start: "10:15 AM",
    end: "11:15 AM",
    title: "Fashion Forward: Building Global Brands from Lagos",
    venue: "National Theatre - Fashion Pavilion",
    speaker: "Fashion Designers Panel",
    description:
      "Success stories and strategies from Nigerian fashion designers making waves internationally, from local fashion weeks to global runways.",
  },
  {
    id: "ff-2",
    track: "Fashion & Film",
    start: "11:30 AM",
    end: "12:30 PM",
    title: "Workshop: Cinematography Essentials",
    venue: "National Theatre - Film Studio",
    speaker: "Film Instructor",
    description:
      "Hands-on training in camera work, lighting, and visual storytelling for filmmakers at every level.",
  },

  // Tech & Gaming (morning)
  {
    id: "tg-1",
    track: "Tech & Gaming",
    start: "10:15 AM",
    end: "11:15 AM",
    title: "Tech Innovation: Building Solutions for Nigeria",
    venue: "National Theatre - Tech Arena",
    speaker: "Tech Keynote Speaker",
    description:
      "How Nigerian tech entrepreneurs are solving local and global challenges through innovative technology solutions.",
  },
  {
    id: "tg-2",
    track: "Tech & Gaming",
    start: "11:30 AM",
    end: "12:30 PM",
    title: "Gaming Industry: From Players to Publishers",
    venue: "National Theatre - Gaming Zone",
    speaker: "Game Developers Panel",
    description:
      "Nigerian game developers share insights on building games, monetization strategies, and breaking into the global gaming market.",
  },

  // Lunch / Networking (Main Conference)
  {
    id: "mc-lunch",
    track: "Main Conference",
    start: "12:30 PM",
    end: "2:00 PM",
    title: "Networking Lunch & Exhibition Tour",
    venue: "National Theatre - Exhibition Hall",
    speaker: "Open Networking",
    description:
      "Enjoy a curated lunch experience while exploring exhibition booths from sponsors, partners, and creative entrepreneurs. Perfect opportunity for business connections.",
  },

  // Main Conference (afternoon)
  {
    id: "mc-4",
    track: "Main Conference",
    start: "2:00 PM",
    end: "3:00 PM",
    title: "Policy & Governance: Creating an Enabling Environment",
    venue: "National Theatre - Main Auditorium",
    speaker: "Policy Panel",
    description:
      "Government officials and policy experts discuss regulations, incentives, and infrastructure needed to support the creative economy.",
  },
  {
    id: "mc-5",
    track: "Main Conference",
    start: "3:15 PM",
    end: "4:15 PM",
    title: "IP & Copyright: Protecting Your Creative Works",
    venue: "National Theatre - Conference Room A",
    speaker: "Legal Experts",
    description:
      "Legal experts break down intellectual property protection, copyright registration, and monetization strategies for creatives.",
  },

  // Arts & Design (afternoon)
  {
    id: "ad-3",
    track: "Arts & Design",
    start: "2:00 PM",
    end: "3:00 PM",
    title: "Sustainable Art Practices",
    venue: "National Theatre - Gallery Hall",
    speaker: "Sustainability Panel",
    description:
      "Industry leaders discuss eco-friendly approaches to art production, sustainable materials, and environmental responsibility in creative industries.",
  },
  {
    id: "ad-4",
    track: "Arts & Design",
    start: "3:15 PM",
    end: "4:45 PM",
    title: "Live Art Installation Workshop",
    venue: "National Theatre - Art Studio",
    speaker: "Installation Artists",
    description:
      "Participate in a collaborative art installation led by renowned Nigerian sculptors and installation artists.",
  },

  // Fashion & Film (afternoon)
  {
    id: "ff-3",
    track: "Fashion & Film",
    start: "2:00 PM",
    end: "3:00 PM",
    title: "Music Business: Streaming, Sync & Beyond",
    venue: "National Theatre - Music Hall",
    speaker: "Music Industry Panel",
    description:
      "Music industry executives discuss revenue streams, distribution strategies, and the future of music monetization in Africa.",
  },
  {
    id: "ff-4",
    track: "Fashion & Film",
    start: "3:15 PM",
    end: "4:45 PM",
    title: "Masterclass: Music Production & Distribution",
    venue: "National Theatre - Recording Studio",
    speaker: "Music Producers",
    description:
      "Master the art of producing and distributing music in the digital age with hands-on guidance from hit producers.",
  },

  // Tech & Gaming (afternoon)
  {
    id: "tg-3",
    track: "Tech & Gaming",
    start: "2:00 PM",
    end: "3:00 PM",
    title: "AI & Creative Industries",
    venue: "National Theatre - Tech Arena",
    speaker: "AI Experts Panel",
    description:
      "Exploring how artificial intelligence is transforming creative workflows, from generative art to automated music composition.",
  },
  {
    id: "tg-4",
    track: "Tech & Gaming",
    start: "3:15 PM",
    end: "4:45 PM",
    title: "Workshop: Game Development Fundamentals",
    venue: "National Theatre - Gaming Lab",
    speaker: "Game Dev Instructors",
    description:
      "Introduction to game design, development tools, and monetization strategies for aspiring game developers.",
  },

  // End-of-day Main Conference
  {
    id: "mc-6",
    track: "Main Conference",
    start: "5:00 PM",
    end: "6:00 PM",
    title: "Fireside Chat: Creative Economy Visionaries",
    venue: "National Theatre - Main Auditorium",
    speaker: "Creative Visionaries",
    description:
      "An intimate conversation with leading figures shaping Nigeria's creative future, sharing insights, challenges, and aspirations.",
  },
  {
    id: "mc-7",
    track: "Main Conference",
    start: "6:15 PM",
    end: "7:00 PM",
    title: "Closing Ceremony & Awards",
    venue: "National Theatre - Main Auditorium",
    speaker: "Awards Presenters",
    description:
      "Celebrating excellence in Nigeria's creative industries with awards recognizing outstanding achievements and contributions.",
  },
  {
    id: "mc-8",
    track: "Main Conference",
    start: "7:00 PM",
    end: "10:00 PM",
    title: "SynergyCon After Party & Live Performances",
    venue: "National Theatre - Open Arena",
    speaker: "Live Performers",
    description:
      "End the day with live music, entertainment, networking, and celebration of Nigerian creativity at our exclusive after party.",
  },
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function Schedules() {
  const [activeTrack, setActiveTrack] = useState<Track>("All Tracks");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeTrack === "All Tracks") return SCHEDULE;
    return SCHEDULE.filter((x) => x.track === activeTrack);
  }, [activeTrack]);

  // Put your PDF in /public/schedule/
  // Example: public/schedule/SynergyCon-2.0-Schedule.pdf
  const pdfHref = "/schedule/SynergyCon-2.0-Schedule.pdf";

  return (
    <section className="bg-black text-white py-14">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-white">Schedule</h2>
          <p className="mt-3 text-lg font-normal text-white/70 max-w-2xl mx-auto">
            Filter sessions by creative district and explore the day’s lineup.
          </p>
        </div>

        {/* Filters + Download */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TRACKS.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setActiveTrack(t);
                  setOpenId(null);
                }}
                className={classNames(
                  "rounded-lg px-4 py-2 text-sm font-semibold border transition",
                  activeTrack === t
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white/25 hover:border-white/60"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <a
            href={pdfHref}
            download
            className="rounded-lg border border-white/20 bg-white text-black px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition whitespace-nowrap"
          >
            Download PDF
          </a>
        </div>

        {/* Schedule List */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {filtered.length === 0 ? (
            <div className="p-10 text-center text-white/70">
              No sessions found for this filter.
            </div>
          ) : (
            <div className="divide-y divide-white/10">
              {filtered.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <div key={item.id} className="px-6 md:px-10">
                    {/* Row */}
                    <button
                      type="button"
                      onClick={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
                      className="w-full py-6 flex flex-col lg:flex-row lg:items-center gap-5 text-left"
                      aria-expanded={isOpen}
                    >
                      {/* Left: Time + Track */}
                      <div className="min-w-[240px]">
                        <div className="text-sm font-semibold tracking-wide text-white/70">
                          {item.start} — {item.end}
                        </div>

                        <div className="mt-2 inline-flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-white/60" />
                          <span className="text-xs font-bold tracking-widest text-white/70 uppercase">
                            {item.track}
                          </span>
                        </div>
                      </div>

                      {/* Middle: Title + quick meta */}
                      <div className="flex-1">
                        <h4 className="text-white text-xl md:text-2xl font-extrabold leading-tight">
                          {item.title}
                        </h4>

                        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                          {item.speaker ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                              {item.speaker}
                            </span>
                          ) : null}

                          <span className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                            {item.venue}
                          </span>
                        </div>
                      </div>

                      {/* Right: Chevron */}
                      <div className="lg:ml-auto flex items-center">
                        <svg
                          className={classNames(
                            "h-5 w-5 text-white/70 transition-transform",
                            isOpen ? "rotate-180" : "rotate-0"
                          )}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={classNames(
                        "overflow-hidden transition-all",
                        isOpen ? "max-h-[400px] pb-6" : "max-h-0"
                      )}
                    >
                      <div className="rounded-xl border border-white/10 bg-black/40 p-5 text-white/75">
                        <p className="leading-relaxed">{item.description}</p>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <div className="text-white/60 text-xs font-semibold tracking-widest">
                              LOCATION
                            </div>
                            <div className="mt-1 text-white/80 font-semibold">
                              {item.venue}
                            </div>
                          </div>

                          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                            <div className="text-white/60 text-xs font-semibold tracking-widest">
                              SPEAKER / HOST
                            </div>
                            <div className="mt-1 text-white/80 font-semibold">
                              {item.speaker || "—"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}