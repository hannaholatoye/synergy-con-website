"use client";

import React from "react";
import Image from "next/image";
import { speakers } from "@/app/api/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WorkSpeakers = () => {
  return (
    <section className="bg-black py-6 md:py-8">
      {/* Moving banner */}
      <div className="border-y border-white/10 bg-black py-2 overflow-hidden">
        <div className="synergy-marquee gap-8">
          {/* duplicate the content twice so it loops seamlessly */}
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-8 pr-8">
              <span className="whitespace-nowrap text-white font-extrabold italic tracking-wide text-base md:text-lg">
                • MEET OUR SPEAKERS • MEET OUR SPEAKERS • MEET OUR SPEAKERS • MEET OUR SPEAKERS
              </span>
              <span className="whitespace-nowrap text-white font-extrabold italic tracking-wide text-base md:text-lg">
                • MEET OUR SPEAKERS • MEET OUR SPEAKERS • MEET OUR SPEAKERS • MEET OUR SPEAKERS
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="mt-4">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: ".speakers-prev", nextEl: ".speakers-next" }}
          pagination={{ el: ".speakers-pagination", clickable: true }}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 16 },
            1024: { slidesPerView: 3.2, spaceBetween: 18 },
            1280: { slidesPerView: 4.2, spaceBetween: 20 },
          }}
          className="px-5 md:px-10"
        >
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black">
                {/* Image */}
                <div className="relative aspect-[16/11]">
                  <Image
                    src={speaker.src}
                    alt={speaker.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition duration-300"
                  />
                  {/* dark fade for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                </div>

                {/* Text overlay (Synergy vibe) */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h6 className="text-white text-lg md:text-xl font-extrabold leading-tight">
                    {speaker.name}
                  </h6>
                  <p className="mt-0.5 text-white/70 text-xs md:text-sm">
                    {speaker.designation}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="mt-4 flex justify-center">
          <div className="flex items-center justify-between w-full max-w-[520px] gap-6">
            <button
              className="speakers-prev inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition"
              aria-label="Previous speakers"
            >
              <span className="text-lg font-black">←</span>
            </button>

            <div className="speakers-pagination flex items-center justify-center gap-2" />

            <button
              className="speakers-next inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition"
              aria-label="Next speakers"
            >
              <span className="text-lg font-black">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSpeakers;