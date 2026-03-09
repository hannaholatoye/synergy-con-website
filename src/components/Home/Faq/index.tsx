"use client";
import React, { useState } from "react";

type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "What is SynergyCon 2.0?",
    a: "SynergyCon 2.0 is Nigeria's flagship creative economy summit—a single, action-packed day bringing together creators, industry titans, policymakers, and investors to shape the future of Nigeria's creative industries.",
  },
  {
    q: "When and where is the event taking place?",
    a: "SynergyCon 2.0 takes place on March 26, 2026 at Wole Soyinka Centre for Culture and Creative Arts (National Theatre Nigeria) in Lagos. All four creative districts (Arts & Design, Fashion & Film, Tech & Gaming, and the Main Conference) run simultaneously in different zones within the venue.",
  },
  {
    q: "Who should attend SynergyCon?",
    a: "Whether you're a seasoned creative professional, ambitious entrepreneur, policymaker shaping regulations, investor seeking the next big thing, or a student hungry to learn—SynergyCon is designed for anyone passionate about Nigeria's creative economy.",
  },
  {
    q: "How do I register for the event?",
    a: "Click the Register Now or Secure Your Spot button anywhere on the website. Complete the form with your details and select your preferred ticket tier to confirm your attendance.",
  },
  {
    q: "What ticket options are available?",
    a: "We offer four ticket tiers: VIP Access (₦25,000) for full-day access to all districts and sessions, VIP+ Premium (₦50,000) with priority seating and VIP lounge access, VVIP Experience (₦100,000) including backstage access and speaker meet-and-greets, and Priority Pass (₦150,000) for the ultimate experience with personal concierge and exclusive speaker dinner.",
  },
  {
    q: "Can I become a speaker at SynergyCon?",
    a: "Absolutely! We welcome proposals from industry experts and rising voices alike. Click Apply to Speak in our navigation or footer to submit your session idea.",
  },
  {
    q: "How can my organization partner with SynergyCon?",
    a: "We offer tailored partnership packages from Title Sponsor to Ecosystem Partner. Visit our Partners page or click Partner with Us to explore opportunities and connect with our team.",
  },
  {
    q: "What networking opportunities are available?",
    a: "Beyond the sessions, SynergyCon features dedicated networking lounges, curated deal rooms for investor meetings, exhibition spaces, and informal meetup zones throughout National Theatre—plus our signature after-party.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 bg-white dark:bg-darkmode">
      <div className="container">
        <div className="text-center">
          <h2 className="text-secondary dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-3 text-base md:text-lg text-SlateBlueText dark:text-opacity-80">
            Find answers to common questions about SynergyCon 2.0
          </p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto space-y-5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-black/10 dark:border-dark_border bg-white dark:bg-darklight overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left"
                >
                  <span className="font-semibold text-secondary dark:text-white">
                    {item.q}
                  </span>

                  <span
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    {/* chevron */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-secondary dark:text-white"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-6 text-SlateBlueText dark:text-opacity-80">
                    <p className="leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}