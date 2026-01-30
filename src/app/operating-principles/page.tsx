"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function OperatingPrinciples() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <style jsx global>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.6s ease-out,
            transform 0.6s ease-out;
        }

        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 {
          transition-delay: 0.1s;
        }

        .stagger-2 {
          transition-delay: 0.2s;
        }

        .stagger-3 {
          transition-delay: 0.3s;
        }

        .stagger-4 {
          transition-delay: 0.4s;
        }
      `}</style>

      <main className="px-4 py-3">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[60vh] md:min-h-[80vh] rounded-3xl overflow-hidden flex items-center justify-center text-center">
          {/* Background Image */}
          <Image
            src={assets.images.operatingPrinciplesHero}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/80" />

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto p-6 flex flex-col">
            <h1 className="fade-in-up text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl mx-auto">
              How Marble Group operates across essential industries
            </h1>

            <div className="mt-6 md:mt-8 space-y-4 max-w-2xl mx-auto">
              <p className="fade-in-up stagger-1 text-white/80 text-sm md:text-base leading-relaxed">
                Marble Group&apos; operations are guided by a set of operating
                principles that define how decisions are made, how work is
                executed, and how accountability is maintained across the Group
                and its subsidiaries
              </p>
              <p className="fade-in-up stagger-2 text-white/80 text-sm md:text-base leading-relaxed">
                These principles reflect the Group&apos; commitment to
                disciplined execution, responsible operations, and long-term
                value creation across regulated and operationally complex
                sectors
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* QUALITY AND STANDARDS SECTION */}
      <section
        id="quality-standards"
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-[#F3F2EB]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="fade-in-up rounded-md overflow-hidden order-1 lg:order-1">
            <Image
              src={assets.images.homeImage1}
              alt="What We Do"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="fade-in-up stagger-1 order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#212121] font-normal">
              Quality and Standards
            </h2>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Marble Group is committed to maintaining high standards of quality
              across all activities. Quality considerations are embedded into
              operational planning, execution, and performance monitoring.
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Apply sector-appropriate quality controls
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Comply with applicable industry standards and regulations
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Maintain consistency and reliability in delivery
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
              Quality is treated as a baseline operational requirement, not a
              differentiator
            </p>
            <button
              onClick={() => scrollToSection("integrity-transparency")}
              className="bg-[#867A33] text-white flex items-center px-4 py-3 gap-2 rounded-full mt-4 md:mt-6 hover:bg-[#6d6129] transition-colors text-sm md:text-base"
            >
              <span>Integrity and Transparency</span>
              <Image
                src={assets.icons.arrowDown}
                alt="arrow down"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </section>

      {/* INTEGRITY AND TRANSPARENCY SECTION */}
      <section
        id="integrity-transparency"
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#212121] font-normal">
              Integrity and Transparency
            </h2>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              The Group operates with integrity in its dealings with
              stakeholders, partners, regulators, and communities.
            </p>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Integrity is reflected through:
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Ethical conduct and responsible decision-making
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Compliance with applicable laws and regulations
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Transparent engagement with relevant stakeholders
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
              Marble Group does not compromise ethical standards in pursuit of
              commercial objectives
            </p>
            <button
              onClick={() => scrollToSection("execution-discipline")}
              className="bg-[#867A33] text-white flex items-center px-4 py-3 gap-2 rounded-full mt-4 md:mt-6 hover:bg-[#6d6129] transition-colors text-sm md:text-base"
            >
              <span>Execution Discipline</span>
              <Image
                src={assets.icons.arrowDown}
                alt="arrow down"
                className="w-4 h-4"
              />
            </button>
          </div>
          {/* Image */}
          <div className="fade-in-up stagger-1 rounded-md overflow-hidden order-1 lg:order-2">
            <Image
              src={assets.images.operatingPrinciplesImage1}
              alt="What We Do"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EXECUTION DISCIPLINE SECTION */}
      <section
        id="execution-discipline"
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="fade-in-up rounded-md overflow-hidden order-1 lg:order-1">
            <Image
              src={assets.images.operatingPrinciplesImage2}
              alt="What We Do"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="fade-in-up stagger-1 order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#212121] font-normal">
              Execution Discipline
            </h2>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Marble Group places strong emphasis on disciplined execution.
              Activities are planned, resourced, and executed within defined
              frameworks designed to support control, accountability, and
              performance.
            </p>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Execution discipline includes
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Defined roles and responsibilities
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Structured planning and approval processes
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Monitoring of progress against agreed objectives
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
              Quality is treated as a baseline operational requirement, not a
              differentiator
            </p>
            <button
              onClick={() => scrollToSection("on-time-performance")}
              className="bg-[#867A33] text-white flex items-center px-4 py-3 gap-2 rounded-full mt-4 md:mt-6 hover:bg-[#6d6129] transition-colors text-sm md:text-base"
            >
              <span>On-Time Performance</span>
              <Image
                src={assets.icons.arrowDown}
                alt="arrow down"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ON-TIME PERFORMANCE SECTION */}
      <section
        id="on-time-performance"
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#212121] font-normal">
              On-Time Performance
            </h2>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Timely delivery is a critical consideration across the Group&apos;
              businesses, particularly in sectors where delays carry
              operational, financial, or reputational impact.
            </p>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Marble Group emphasises:
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Realistic planning and scheduling
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Accountability for delivery commitments
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Proactive identification and management of potential delays
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
              Marble Group does not compromise ethical standards in pursuit of
              commercial objectives
            </p>
            <button
              onClick={() => scrollToSection("teamwork-accountability")}
              className="bg-[#867A33] text-white flex items-center px-4 py-3 gap-2 rounded-full mt-4 md:mt-6 hover:bg-[#6d6129] transition-colors text-sm md:text-base"
            >
              <span>Teamwork and Accountability</span>
              <Image
                src={assets.icons.arrowDown}
                alt="arrow down"
                className="w-4 h-4"
              />
            </button>
          </div>
          {/* Image */}
          <div className="fade-in-up stagger-1 rounded-md overflow-hidden order-1 lg:order-2">
            <Image
              src={assets.images.operatingPrinciplesImage1}
              alt="What We Do"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* TEAMWORK AND ACCOUNTABILITY SECTION */}
      <section
        id="teamwork-accountability"
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-[#F3F2EB]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="fade-in-up rounded-md overflow-hidden order-1 lg:order-1">
            <Image
              src={assets.images.operatingPrinciplesImage2}
              alt="What We Do"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="fade-in-up stagger-1 order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#212121] font-normal">
              Teamwork and Accountability
            </h2>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Marble Group recognises that effective operations depend on
              capable teams working within clear accountability structures
            </p>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              The Group promotes:
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Collaboration across functions and subsidiaries
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Defined accountability at all levels
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Professional conduct and mutual respect
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
              While teamwork is encouraged, accountability for decisions and
              outcomes remains clearly assigned.
            </p>
            <button
              onClick={() => scrollToSection("risk-awareness")}
              className="bg-[#867A33] text-white flex items-center px-4 py-3 gap-2 rounded-full mt-4 md:mt-6 hover:bg-[#6d6129] transition-colors text-sm md:text-base"
            >
              <span>Risk Awareness and Responsibility</span>
              <Image
                src={assets.icons.arrowDown}
                alt="arrow down"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </section>

      {/* RISK AWARENESS SECTION */}
      <section
        id="risk-awareness"
        className="w-full px-4 sm:px-6 py-12 md:py-20 bg-[#14161A]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="fade-in-up rounded-md overflow-hidden order-1 lg:order-1">
              <Image
                src={assets.images.homeImage3}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="fade-in-up stagger-1 order-2 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                Risk Awareness and Responsibility
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Operating across essential industries involves technical,
                regulatory, and operational risk. Marble Group applies a
                risk-aware approach to decision-making and execution.
              </p>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                This includes:
              </p>

              <ul className="mt-6 space-y-3 md:space-y-4">
                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Identification and assessment of material risks
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Implementation of appropriate controls and mitigation
                    measures
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Continuous review of risk exposure
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS IMPROVEMENT SECTION */}
      <section
        id="continuous-improvement"
        className="w-full px-4 sm:px-6 py-12 md:py-20 bg-[#14161A]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="fade-in-up order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                Continuous Improvement
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Marble Group recognises the importance of continuous improvement
                in maintaining operational effectiveness and relevance
              </p>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Processes, controls, and performance are reviewed periodically
                to:
              </p>

              <ul className="mt-6 space-y-3 md:space-y-4">
                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Reflect changes in regulatory or market conditions
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Incorporate operational learning
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Support efficiency and resilience
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Align with national development priorities
                  </span>
                </li>
              </ul>

              <p className="mt-6 text-sm md:text-base text-white leading-relaxed">
                Growth is pursued deliberately, with emphasis on operational
                readiness, governance maturity, and sustainable value creation.
              </p>
            </div>
            {/* Image */}
            <div className="fade-in-up stagger-1 rounded-md overflow-hidden order-1 lg:order-2">
              <Image
                src={assets.images.homeImage3}
                alt="What We Do"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ALIGNMENT ACROSS THE GROUP SECTION */}
      <section className="w-full bg-[#14161A] text-white">
        {/* Top header */}
        <div className="fade-in-up mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Alignment Across the <br className="hidden sm:block" /> Group
          </h2>

          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            These operating principles apply across Marble Group and its
            subsidiaries, providing a consistent foundation while allowing
            flexibility for sector-specific requirements. Each subsidiary is
            responsible for applying these principles within its operating
            environment, subject to Group-level oversight and governance.
          </p>
        </div>

        {/* Image section */}
        <div className="fade-in-up stagger-1 relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src={assets.images.aboutImage1}
            fill
            className="object-cover object-center"
            priority
            quality={90}
            alt="about image"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>
    </>
  );
}
