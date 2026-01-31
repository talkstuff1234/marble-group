"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

/* ---------------- Intersection Observer Hook ---------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("reveal-active");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Subsidiaries() {
  const heroRef = useReveal<HTMLElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const nextRef = useReveal<HTMLDivElement>();
  const next2Ref = useReveal<HTMLDivElement>();
  const next3Ref = useReveal<HTMLDivElement>();

  return (
    <>
      <main className="px-4 py-3">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[60vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.mediaCenterHero}
            alt="subsidiaries"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Official news and corporate communications
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                The Media Centre provides access to official news, statements,
                and corporate communications relating to Marble Group and its
                subsidiaries
              </p>
            </div>
          </div>
        </section>

        <section
          id="our-role"
          ref={gridRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Latest Updates
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Official announcements, corporate developments, and approved
                public statements from Marble Group are published here as they
                become available.
              </p>

              <a
                href="#governance"
                className="bg-[#867A33] text-white inline-flex p-3 gap-2 rounded-full mt-4"
              >
                <span>Press Releases</span>
                <Image src={assets.icons.arrowDown} alt="arrow down" />
              </a>
            </div>

            <div className="rounded-md overflow-hidden">
              <Image
                src={assets.images.mediaImage1}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="our-role"
          ref={nextRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden">
              <Image
                src={assets.images.mediaImage2}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Press Releases
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Press releases issued by Marble Group are made available to
                media organizations and stakeholders for reference.
              </p>
              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Only materials published through this Media Centre or issued
                directly by the Group should be considered official.
              </p>

              <a
                href="#governance"
                className="bg-[#867A33] text-white inline-flex p-3 gap-2 rounded-full mt-4"
              >
                <span>Media Enquiries</span>
                <Image src={assets.icons.arrowDown} alt="arrow down" />
              </a>
            </div>
          </div>
        </section>
        <section
          id="our-role"
          ref={next2Ref}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Media Enquiries
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                All media enquiries relating to Marble Group and its
                subsidiaries should be directed to the Group’s communications
                team.
              </p>
              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                To ensure consistency and accuracy, employees and
                representatives are not authorized to provide statements on
                behalf of the Group without prior approval.
              </p>
              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Email: media@marbleandgroove.com
              </p>
            </div>

            <div className="rounded-md overflow-hidden">
              <Image
                src={assets.images.mediaImage3}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <div className="px-4 py-3 ">
          <div className="mb-10 text-center">
            <h1 className="text-[#212121] text-3xl">About Marble Group</h1>
            <p className="text-[#6A6A6A]">
              Marble Group is an established Nigerian holding company with
              diversified interests across food systems, natural resources, and
              aviation services.
            </p>
          </div>
          <section
            ref={next3Ref}
            className="relative w-full overflow-hidden reveal h-[400px]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Background Image */}
            <Image
              src={assets.images.homeImage1}
              alt=""
              fill
              priority
              className="object-cover"
            />
          </section>
        </div>
      </main>

      {/* GLOBAL ANIMATIONS */}
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.7s ease,
            transform 0.7s ease;
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-stagger.reveal-active .stagger-item {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-item {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .reveal-stagger.reveal-active .stagger-item:nth-child(1) {
          transition-delay: 0.05s;
        }
        .reveal-stagger.reveal-active .stagger-item:nth-child(2) {
          transition-delay: 0.1s;
        }
        .reveal-stagger.reveal-active .stagger-item:nth-child(3) {
          transition-delay: 0.15s;
        }
        .reveal-stagger.reveal-active .stagger-item:nth-child(4) {
          transition-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
