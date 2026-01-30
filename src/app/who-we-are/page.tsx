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

export default function About() {
  const heroRef = useReveal<HTMLElement>();
  const groupRef = useReveal<HTMLElement>();
  const roleRef = useReveal<HTMLElement>();
  const governanceRef = useReveal<HTMLElement>();
  const aheadRef = useReveal<HTMLElement>();

  return (
    <>
      <header className="p-2">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[70vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.aboutHero}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Who We Are
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Marble Group is an established Nigerian operating group focused
                on developing and managing businesses across essential
                industries. The Group acts as an active owner, providing
                strategic direction, governance oversight, and shared standards
                to its subsidiaries.
              </p>
              <p className="text-white/80 text-sm md:text-base">
                Our role is to ensure that each business operates responsibly,
                efficiently, and in alignment with applicable regulations and
                long-term objectives.
              </p>
            </div>
          </div>
        </section>
      </header>

      <main className="px-4 py-3">
        {/* THE GROUP */}
        <section
          id="the-group"
          ref={groupRef}
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
                The Group
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Marble Group operates through a multi-sector structure that
                enables focus at the operating level while maintaining control
                and alignment at Group level.
              </p>

              <span className="text-[#6A6A6A]">The Group provides:</span>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Strategic oversight and capital discipline
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Governance, risk management, and compliance frameworks
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Performance monitoring and accountability standards
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-[#6A6A6A] max-w-lg">
                Subsidiaries retain operational autonomy within defined mandates
                and controls.
              </p>

              <a
                href="#our-role"
                className="bg-[#867A33] text-white inline-flex p-3 gap-2 rounded-full mt-4"
              >
                <span>Our Role</span>
                <Image src={assets.icons.arrowDown} alt="arrow down" />
              </a>
            </div>
          </div>
        </section>

        {/* OUR ROLE */}
        <section
          id="our-role"
          ref={roleRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Our Role
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                The Group’s role is to identify, develop, and steward businesses
                that deliver sustainable value within their respective sectors.
                Marble Group balances commercial performance with regulatory,
                operational, and reputational considerations.
              </p>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Decisions are made with a long-term perspective, recognising the
                importance of discipline, resilience, and responsible execution
              </p>

              <a
                href="#governance"
                className="bg-[#867A33] text-white inline-flex p-3 gap-2 rounded-full mt-4"
              >
                <span>How We Operate</span>
                <Image src={assets.icons.arrowDown} alt="arrow down" />
              </a>
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

      {/* GOVERNANCE */}
      <section
        id="governance"
        ref={governanceRef}
        className="w-full bg-[#14161A] text-white reveal"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
            Governance and <br className="hidden sm:block" /> Oversight
          </h2>

          <p className="text-sm text-neutral-300 leading-relaxed">
            Governance at Marble Group is designed to ensure transparency,
            accountability, and effective decision-making. Group-level
            frameworks guide strategy, risk management, and compliance, while
            subsidiary management teams are accountable for day-to-day
            operations.
          </p>
        </div>

        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src={assets.images.aboutImage1}
            fill
            className="object-cover object-center"
            priority
            quality={90}
            alt="about image"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 flex flex-col items-center text-center">
          <p className="mb-6 max-w-xl text-sm sm:text-base text-neutral-300">
            Further details are outlined in the Group’s Governance & Compliance
            framework.
          </p>

          <button className="group inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm transition bg-white text-black">
            Learn More
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </section>

      {/* LOOKING AHEAD */}
      <section ref={aheadRef} className="px-4 py-2 reveal">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden">
              <Image
                src={assets.images.aboutImage2}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Looking Ahead
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Marble Group remains focused on strengthening its existing
                businesses while positioning for measured expansion aligned with
                its long-term strategy.
              </p>
              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Growth is approached deliberately, with emphasis on operational
                readiness, regulatory alignment, and sustainable value creation.
              </p>

              <button className="bg-[#867A33] text-white flex p-3 gap-2 rounded-full mt-4">
                <span>Our Role</span>
                <Image src={assets.icons.arrowDown} alt="arrow down" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global reveal animation */}
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
