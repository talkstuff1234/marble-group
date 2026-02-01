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

export default function Careers() {
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
            src={assets.images.careerHero}
            alt="Careers at Marble Group"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Building capability across essential industries
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Careers within Marble Group offer the opportunity to contribute
                to businesses that operate in sectors critical to economic
                development and infrastructure growth.
              </p>
            </div>
          </div>
        </section>

        {/* WORKING AT MARBLE GROUP */}
        <section
          id="working-at-marble"
          ref={workingRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.careerImage1}
                alt="Working at Marble Group"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Working at Marble Group
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                Careers within Marble Group offer the opportunity to contribute
                to businesses that operate in sectors critical to economic
                development and infrastructure growth. Our work environment is
                professional, structured, and performance-driven. We value
                individuals who demonstrate:
              </p>

              <ul className="mt-6 space-y-4">
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Sound judgment and accountability
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Technical and professional competence
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    Respect for governance and compliance
                  </span>
                </li>
                <li className="inline-flex items-center gap-3 text-sm border border-[#EFEFF3] rounded-full p-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33]" />
                  <span className="text-[#6A6A6A]">
                    A long-term perspective
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm text-[#6A6A6A] max-w-lg">
                As a holding company, we provide strategic direction and
                group-level oversight while enabling our subsidiaries to operate
                with operational focus and autonomy.
              </p>
              <a
                href="#career-opportunities"
                className="bg-[#867A33] text-white inline-flex items-center px-6 py-3 gap-2 rounded-full mt-4 hover:bg-[#4a2f16] transition-colors"
              >
                <span>Career Opportunities</span>
                <Image
                  src={assets.icons.arrowDown}
                  alt="arrow down"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        </section>

        {/* CAREER OPPORTUNITIES */}
        <section
          id="career-opportunities"
          className="w-full bg-white py-16 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-[#212121] text-2xl md:text-3xl font-normal mb-4">
                Career Opportunities Across the Group
              </h2>
              <p className="text-[#6A6A6A]">
                From time to time, career opportunities arise within the Group
                and its subsidiaries, including
              </p>
            </div>
            <div
              ref={opportunitiesRef}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 reveal-stagger"
            >
              {/* CARD 1 */}
              <div className="bg-[#F5F7FA] rounded-lg p-6 stagger-item hover:shadow-lg transition-shadow duration-300">
                <div className="bg-white py-12 flex justify-center items-center rounded-lg">
                  <Image
                    src={assets.images.subsidiariesImage1}
                    alt="Marble & Grove Foods Ltd"
                    width={260}
                    height={120}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-[#212121]">
                    Marble Grove Foods Ltd
                  </h3>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-[#F5F7FA] rounded-lg p-6 stagger-item hover:shadow-lg transition-shadow duration-300">
                <div className="bg-white py-12 flex justify-center items-center rounded-lg">
                  <Image
                    src={assets.images.subsidiariesImage2}
                    alt="Westlands Minerals & Mining"
                    width={260}
                    height={120}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-[#212121]">
                    Responsible Resource Development
                  </h3>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-[#F5F7FA] rounded-lg p-6 stagger-item hover:shadow-lg transition-shadow duration-300">
                <div className="bg-white py-12 flex justify-center items-center rounded-lg">
                  <Image
                    src={assets.images.carrerImage1}
                    alt="Marble Air"
                    width={260}
                    height={120}
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-[#212121]">
                    Aviation & Air Services (Under Development)
                  </h3>
                </div>
              </div>
            </div>
            <p className="text-[#6A6A6A] mt-8 text-center">
              Roles may be based at the Group level or within individual
              operating companies
            </p>
          </div>
        </section>

        {/* CURRENT VACANCIES */}
        <section
          id="current-vacancies"
          ref={vacanciesRef}
          className="max-w-7xl mx-auto px-6 py-20 reveal"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
                Current Vacancies
              </h2>

              <p className="mt-4 text-[#6A6A6A] max-w-lg">
                There are currently no open positions
              </p>
            </div>

            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.careerImage2}
                alt="Current Vacancies"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
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
                src={assets.images.careerImage3}
                alt="Expressions of Interest"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                Expressions of Interest
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Professionals who wish to be considered for future opportunities
                may submit an expression of interest.
              </p>
              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Expressions of interest should include:
              </p>

              <ul className="mt-6 space-y-3 md:space-y-4">
                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    A current curriculum vitae
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    A brief cover note outlining area of expertise or interest
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Submissions can be sent to:{" "}
                <a
                  href="mailto:info@marblegroup.ng"
                  className="underline hover:text-white/80 transition-colors"
                >
                  info@marblegroup.ng
                </a>
              </p>
              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                All submissions are reviewed as part of our ongoing talent
                assessment process. Only shortlisted candidates will be
                contacted.
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
                Equal Opportunity
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Marble Group is committed to fair and equitable employment
                practices. Recruitment and advancement decisions are based on
                merit, qualifications, and role requirements.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.careerImage4}
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
