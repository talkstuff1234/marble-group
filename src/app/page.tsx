"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

/* -------- Intersection Observer Hook -------- */
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

export default function HomePage() {
  const heroRef = useReveal<HTMLElement>();
  const whatWeDoRef = useReveal<HTMLElement>();
  const approachRef = useReveal<HTMLElement>();
  const strategyRef = useReveal<HTMLElement>();

  return (
    <>
      <header className="p-2">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[70vh] md:min-h-[95vh] rounded-3xl overflow-hidden flex items-end reveal "
        >
          <Image
            src={assets.images.hero}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl">
              Building essential industries for sustainable growth
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl">
              <p className="text-white/80 text-sm md:text-base">
                Marble Group is a diversified operating group with roots in
                Nigeria and activities extending across Africa, with interests
                spanning food systems, solid minerals, construction and
                contracts, and aviation services. Through disciplined execution
                and long-term investment, the Group develops businesses that
                support economic resilience, infrastructure development, and
                regional connectivity.
              </p>
              <p className="text-white/80 text-sm md:text-base">
                Marble Group operates through a portfolio of controlled
                subsidiaries, each focused on its sector while aligned with
                Group-wide governance, compliance, and performance standards.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#what-we-do"
                className="px-6 py-3 rounded-full bg-white text-sm"
              >
                Explore Our Group
              </a>
              <a
                href="#strategic-focus"
                className="px-6 py-3 rounded-full bg-white/20 text-white text-sm backdrop-blur-md"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </header>

      <main className="px-4 py-3">
        {/* WHAT WE DO */}
        <section
          id="what-we-do"
          ref={whatWeDoRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden">
              <Image
                src={assets.images.homeImage1}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                What We Do
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Marble Group builds and operates businesses in sectors critical
                to national development and long-term economic growth.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Food processing, trading, and supply systems
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Solid mineral exploration and development
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Construction, contracts, and project execution
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Aviation and air services (under development)
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-[#6A6A6A] max-w-lg">
                Each business operates with sector-specific expertise while
                benefiting from Group-level oversight and strategic direction.
              </p>

              <a
                href="#operating-approach"
                className="bg-[#867A33] text-white inline-flex p-3 gap-2 rounded-full mt-4"
              >
                <span>Our Operating Approach</span>
                <Image src={assets.icons.arrowDown} alt="arrow down" />
              </a>
            </div>
          </div>
        </section>

        {/* OPERATING APPROACH */}
        <section
          id="operating-approach"
          ref={approachRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Our Operating Approach
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Marble Group applies a disciplined operating approach designed
                to ensure consistency, accountability, and long-term performance
                across all subsidiaries.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Clear governance and reporting structures
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Defined accountability at Group and subsidiary levels
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Compliance with applicable legal and regulatory frameworks
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Risk-aware decision-making and capital discipline
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Continuous improvement aligned with operational realities
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-[#6A6A6A] max-w-lg">
                This approach enables the Group to manage diverse operations
                effectively while maintaining alignment with long-term
                objectives.
              </p>
            </div>

            <div className="rounded-md overflow-hidden">
              <Image
                src={assets.images.homeImage2}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* STRATEGIC FOCUS */}
      <section
        id="strategic-focus"
        ref={strategyRef}
        className="w-full px-6 py-20 bg-[#14161A] reveal"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-md overflow-hidden">
            <Image
              src={assets.images.homeImage3}
              alt="What We Do"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl text-white font-normal">
              Strategic Focus
            </h2>

            <p className="mt-4 text-white max-w-lg">
              The Group’s strategic focus is on building businesses that:
            </p>

            <ul className="mt-6 space-y-4">
              <li className="inline-flex items-center gap-3 text-sm bg-white border border-[#EFEFF3] rounded-full p-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                <span className="text-[#6A6A6A]">
                  Operate in regulated, essential sectors
                </span>
              </li>
              <li className="inline-flex items-center gap-3 text-sm bg-white border border-[#EFEFF3] rounded-full p-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                <span className="text-[#6A6A6A]">
                  Deliver measurable operational value
                </span>
              </li>
              <li className="inline-flex items-center gap-3 text-sm bg-white border border-[#EFEFF3] rounded-full p-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                <span className="text-[#6A6A6A]">
                  Scale responsibly over time
                </span>
              </li>
              <li className="inline-flex items-center gap-3 text-sm bg-white border border-[#EFEFF3] rounded-full p-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                <span className="text-[#6A6A6A]">
                  Align with national development priorities
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm text-white max-w-lg">
              Growth is pursued deliberately, with emphasis on operational
              readiness, governance maturity, and sustainable value creation.
            </p>
          </div>
        </div>
      </section>

      {/* Reveal animation styles */}
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
      `}</style>
    </>
  );
}
