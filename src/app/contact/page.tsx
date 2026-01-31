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
  const workingRef = useReveal<HTMLElement>();
  const opportunitiesRef = useReveal<HTMLDivElement>();
  const vacanciesRef = useReveal<HTMLElement>();
  const expressionRef = useReveal<HTMLElement>();
  const equalRef = useReveal<HTMLElement>();

  return (
    <>
      <main className="px-4 py-3">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[60vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.contactHero}
            alt="Careers at Marble Group"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Corporate enquiries and official correspondence
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Marble Group welcomes enquiries related to corporate matters,
                partnerships, and official communications.
              </p>
              <p className="text-white/80 text-sm md:text-base">
                All correspondence is managed through the Group’s central office
                to ensure timely response and consistency.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* EXPRESSIONS OF INTEREST */}
      <section
        id="expressions-of-interest"
        ref={expressionRef}
        className="w-full px-4 sm:px-6 py-12 md:py-20 bg-[#14161A] reveal"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-md overflow-hidden order-1 lg:order-1 hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.contactImage1}
                alt="Expressions of Interest"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                Head Office
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Marble Group
              </p>
              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                [Head Office Address Line 1]
                <br /> [City, State, Nigeria]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUAL OPPORTUNITY */}
      <section
        id="equal-opportunity"
        ref={equalRef}
        className="w-full px-4 sm:px-6 py-12 md:py-20 bg-[#14161A] reveal"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                Corporate Enquiries
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                For general corporate enquiries, partnerships, and business
                development matters:
              </p>
              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Email: info@marbleandgroove.com (placeholder)
              </p>
            </div>

            {/* Image */}
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.contactImage2}
                alt="Equal Opportunity"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
      `}</style>
    </>
  );
}
