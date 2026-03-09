"use client";
import React, { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Video = {
  id: string;   // YouTube ID
  title: string;
};

const videos: Video[] = [
  { id: "cIMQkIKilBQ", title: "Session 1" },
  { id: "KEwxkX-Bcl0", title: "Session 2" },
  { id: "CVgSUMk5FvE", title: "Session 3" },
  { id: "6-40NKkks04", title: "Session 4" },
  { id: "97ZZWAGjgpE", title: "Session 5" },
  { id: "DKtbvMKpbaU", title: "Session 6" },
  { id: "4H-RRyMoAlA", title: "Session 7" },
  { id: "5PeJWm6K7co", title: "Session 8" },
];

const Highlight = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(videos[0]?.id ?? "");

  const openModal = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-IcyBreeze dark:bg-darklight">
      <div className="container">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center max-w-[125rem] mx-auto">
          {/* Left text */}
          <div
            className="col-span-5 py-0 px-7"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h2>SYNERGYCON 1.0</h2>
            <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-404 pt-7 pb-11">
              Relive the moments that made our inaugural conference unforgettable.
            </p>

            <div className="flex items-center flex-wrap gap-30">
              <div className="text-start sm:pb-0 pb-5">
                <h2 className="text-primary">1000+</h2>
                <p className="text-lg font-medium text-secondary dark:text-darktext">
                  Creatives
                </p>
              </div>
              <div className="text-start sm:pb-0 pb-5">
                <h2 className="text-primary">25+</h2>
                <p className="text-lg font-medium text-secondary dark:text-darktext">
                  Speakers
                </p>
              </div>
            </div>
          </div>

          {/* Right slider */}
          <div
            className="col-span-7 year_slider px-7"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <Slider {...settings}>
              {videos.map((v) => (
                <div key={v.id} className="mt-14 relative">
                  <Image
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    width={0}
                    height={0}
                    layout="responsive"
                    sizes="100vw"
                    className="rounded-22"
                  />

                  {/* play button */}
                  <button
                    type="button"
                    onClick={() => openModal(v.id)}
                    className="bg-white group sm:w-12 w-10 sm:h-12 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/4 rounded-full shadow-[0_0px_30px_rgba(24,23,23,0.1)] flex items-center justify-center dark:text-black"
                    aria-label={`Play ${v.title}`}
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 163.861 163.861"
                      className="w-4 h-4 group-hover:text-primary"
                    >
                      <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                    </svg>
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-darkmode rounded-lg w-full max-w-5xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-solid border-border dark:border-dark_border p-5">
              <h3 className="text-secondary dark:text-white">Video Gallery</h3>
              <button
                onClick={closeModal}
                className="bg-[url('/images/highlight/closed.svg')] bg-no-repeat bg-contain w-5 h-5 inline-block dark:invert"
                aria-label="Close"
              />
            </div>

            <div className="p-4">
              {/* Player */}
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Thumbnails */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {videos.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveVideoId(v.id)}
                    className={`text-left rounded-lg overflow-hidden border transition ${
                      v.id === activeVideoId
                        ? "border-primary"
                        : "border-black/10 dark:border-white/10 hover:border-primary/60"
                    }`}
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                        alt={v.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-2 text-xs font-semibold text-secondary dark:text-white line-clamp-2">
                      {v.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Highlight;