import React from "react";
import Link from "next/link";

const districts = [
  {
    title: "Arts, Sculpture & Design",
    desc: "A celebration of visual storytelling, from traditional sculpture to digital art, NFTs, and immersive design.",
  },
  {
    title: "Fashion, Film & Photography",
    desc: "Exploring the narrative power of the lens and the loom, from sustainable fashion to cinematic excellence.",
  },
  {
    title: "Tech, Gaming & Music",
    desc: "The fusion of sound, code, and play. Discover the future of digital entertainment and innovation.",
  },
  {
    title: "Main Conference",
    desc: "Conference, presentations, panel discussions, exhibitions, masterclasses, networking, and the festival finale.",
  },
];

const Upcoming = () => {
  return (
    <section className="upcoming dark:bg-darkmode">
      <div className="max-w-1068 m-auto">
        <div className="container">
          <div className="text-center">
            <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              Four Creative Districts
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="mt-3 text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-2xl mx-auto"
            >
              One venue. Four immersive tracks. Pick your lane or explore them all.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {districts.map((d, i) => (
              <div
                key={d.title}
                data-aos="fade-up"
                data-aos-delay={String(200 + i * 100)}
                data-aos-duration="1000"
                className="rounded-22 border border-solid dark:border-dark_border bg-white/50 dark:bg-white/5 p-6 md:p-8"
              >
                <h6 className="text-[22px] leading-[1.8rem] font-bold text-secondary dark:text-white">
                  {d.title}
                </h6>
                <p className="mt-2 text-base font-normal text-SlateBlueText dark:text-opacity-80">
                  {d.desc}
                </p>

                <div className="mt-5">
                  <Link
                    href="/schedules"
                    className="btn_outline btn-2 hover-outline-slide-down"
                  >
                    <span>View Programme</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/schedules"
              className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
            >
              <span>See Full Schedule</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;