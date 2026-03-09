import Image from "next/image";
import Link from "next/link";
import CountdownCard from "@/components/Home/Hero/CountdownCard";

const Hero = () => {
  return (
    <section className="dark:bg-darkmode">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
          <div className="col-span-6">
            <h1
              className="py-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              SYNERGYCON 2.0
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal pb-4"
            >
              
              Three days of creativity, technology, economy and culture converging in the heart of Lagos. The Blueprint for Creative Growth.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
  {/* Date */}
  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-2 ring-1 ring-slate-900/10 text-xs font-semibold tracking-wide text-slate-900 dark:bg-white/5 dark:ring-white/15 dark:text-white/80">
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/10">
      <svg className="h-4 w-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    </span>
    MAR 26, 2026
  </div>

  {/* Location */}
  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-2 ring-1 ring-slate-900/10 text-xs font-semibold tracking-wide text-slate-900 dark:bg-white/5 dark:ring-white/15 dark:text-white/80">
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/10">
      <svg className="h-4 w-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </span>
    NATIONAL THEATRE, LAGOS
  </div>
</div>
{/* <div className="mt-6 flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
              <Link
                href="/"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
              >
                <span className="!flex !items-center gap-14">
                  <i className="bg-[url('/images/hero/tickets.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                  Get Tickets
                </span>
              </Link>
              <Link
                href="/"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className="btn_outline btn-2 hover-outline-slide-down group"
              >
                <span className="!flex !items-center gap-14">
                  <i className="bg-[url('/images/hero/calander.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block group-hover:bg-[url('/images/hero/calander-hover-white.svg')]"></i>
                  Register
                </span>
              </Link>
            </div> */}
          </div>
          <div
  data-aos="fade-left"
  data-aos-delay="200"
  data-aos-duration="1000"
  className="col-span-6 lg:flex hidden items-center gap-3"
>
  {/* Image 1 */}
  <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full overflow-hidden">
    <Image
      src="/images/hero/event-1.png"
      alt="SynergyCon speaker"
      width={0}
      height={0}
      quality={90}
      layout="responsive"
      sizes="100vw"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image 2 */}
  <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32 overflow-hidden">
    <Image
      src="/images/hero/event-2.jpg"
      alt="SynergyCon networking"
      width={0}
      height={0}
      quality={90}
      layout="responsive"
      sizes="100vw"
      className="w-full h-full object-cover"
    />
  </div>
          </div>
        </div>
        {/* <div className="mt-12 w-full flex justify-center">
  <CountdownCard eventDate="2026-03-26T09:00:00+01:00" primaryHref="/tickets" secondaryHref="/schedule" />
</div> */}
      </div>
    </section>
  );
};

export default Hero;
