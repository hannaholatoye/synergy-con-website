import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import ThumbnailCarousel from '@/components/Home/Conferences';
import WorkSpeakers from '@/components/Home/WorkSpeakers';
import Highlight from '@/components/Home/Partners/page';
import Upcoming from '@/components/Home/Upcoming';
import Testimonials from '@/components/Home/Testimonials';
import TicketSection from '@/components/Home/TicketSection';
import TicketsStub from "@/components/Home/TicketsStub";
import Past from '@/components/Home/Past';
import Faq from "@/components/Home/Faq";
import EventDetailsStrip from "@/components/Home/EventDetailStrip";
export const metadata: Metadata = {
  title: "Symposium",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <EventDetailsStrip />
      <ThumbnailCarousel/>
      <Upcoming />
      <WorkSpeakers />
      <Highlight />
      <Past />
      <TicketsStub />
      <Faq />
    </main>
  )
}
