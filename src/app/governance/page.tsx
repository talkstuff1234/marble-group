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

const leaders = [
  {
    section: "Group & Senior Leadership",
    people: [
      {
        name: "Abdullahi Naziru Abdullahi",
        role: "President / Chief Executive Officer",
      },
      { name: "Mohammed Sanusi Bello", role: "Executive Vice President" },
    ],
  },
  {
    section: "Operations & Business Units",
    people: [
      {
        name: "Mohammed Sani Suleiman",
        role: "Managing Director, Agro Trading (Marble Foods)",
      },
      { name: "Ali Olabode Yusuf", role: "Export Manager" },
    ],
  },
  {
    section: "Quality, Finance & Administration",
    people: [
      { name: "Idrees Adekanmbi", role: "Quality Assurance Manager" },
      { name: "Ismail Yusuf Salihu", role: "Inventory Manager" },
      { name: "Success Ogbadu", role: "Corporate Financial Assistant" },
    ],
  },
];

export default function About() {
  const heroRef = useReveal<HTMLElement>();
  const frameworkRef = useReveal<HTMLElement>();
  const boardRef = useReveal<HTMLElement>();
  const subsidiaryRef = useReveal<HTMLElement>();
  const complianceRef = useReveal<HTMLElement>();
  const ethicsRef = useReveal<HTMLElement>();
  const riskRef = useReveal<HTMLElement>();
  const healthRef = useReveal<HTMLElement>();
  const reportingRef = useReveal<HTMLElement>();
  const reviewRef = useReveal<HTMLElement>();
  const legalRef = useReveal<HTMLElement>();

  return (
    <>
      <main className="px-4 py-3">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[70vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.governanceHero}
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/80" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl">
              Strong governance supporting responsible operations
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl">
              <p className="text-white/80 text-sm md:text-base">
                Marble Group operates within a governance and compliance
                framework designed to ensure accountability, transparency, and
                disciplined decision-making across all Group activities and
                subsidiaries.
              </p>
              <p className="text-white/80 text-sm md:text-base">
                The Group recognises that effective governance is essential to
                managing risk, maintaining regulatory alignment, and supporting
                long-term value creation across regulated and operationally
                complex sectors.
              </p>
            </div>
          </div>
        </section>
      </main>

      <section
        id="governance"
        ref={frameworkRef}
        className="w-full bg-[#14161A] text-white reveal"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
            Governance Framework
          </h2>

          <p className="text-sm text-neutral-300 leading-relaxed">
            Marble Group operates as a brand-facing identity. Governance
            responsibilities are defined at both Group and subsidiary levels to
            ensure clarity, effective oversight, and operational control.
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

        <ul className="mt-6 mx-auto max-w-4xl space-y-4 text-center px-4">
          <li className="inline-flex items-center bg-white gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
            <span className="w-3 h-3 rounded-full bg-[#867A33]" />
            <span className="text-[#6A6A6A]">
              Provide strategic direction and oversight
            </span>
          </li>
          <li className="inline-flex items-center bg-white gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
            <span className="w-3 h-3 rounded-full bg-[#867A33]" />
            <span className="text-[#6A6A6A]">
              Define roles, responsibilities, and decision-making authority
            </span>
          </li>
          <li className="inline-flex items-center bg-white gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
            <span className="w-3 h-3 rounded-full bg-[#867A33]" />
            <span className="text-[#6A6A6A]">
              Ensure consistency across subsidiaries
            </span>
          </li>
          <li className="inline-flex items-center bg-white gap-3 text-sm border border-[#EFEFF3] rounded-full p-2">
            <span className="w-3 h-3 rounded-full bg-[#867A33]" />
            <span className="text-[#6A6A6A]">
              Support regulatory compliance and risk management
            </span>
          </li>
        </ul>

        <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 flex flex-col items-center text-center">
          <p className="mb-6 max-w-xl text-sm sm:text-base text-neutral-300">
            This structure enables subsidiaries to operate with sector-specific
            focus while remaining aligned with Group standards.
          </p>
        </div>
      </section>

      <section
        id="risk-awareness"
        ref={boardRef}
        className="w-full px-4 sm:px-6 py-12 md:py-20 bg-[#14161A] reveal"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="rounded-md overflow-hidden order-1 lg:order-1 hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.governanceImage1}
                alt="Board and Executive Oversight"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                Board and Executive Oversight
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Strategic oversight of Marble Group is provided through a
                leadership and management structure responsible for:
              </p>

              <ul className="mt-6 space-y-3 md:space-y-4">
                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Group strategy and long-term planning
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Capital allocation and performance oversight
                  </span>
                </li>

                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Risk management and compliance alignment
                  </span>
                </li>
                <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Approval of material decisions
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Executive management is accountable for implementing strategy
                and ensuring adherence to governance frameworks across the
                Group&apos;s businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="subsidiary-oversight"
        ref={subsidiaryRef}
        className="w-full px-4 sm:px-6 py-12 md:py-20 bg-[#14161A] reveal"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image — LEFT */}
            <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <Image
                src={assets.images.governanceImage2}
                alt="Subsidiary Oversight"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content — RIGHT */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
                Subsidiary Oversight and Accountability
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Each subsidiary operates under defined mandates and governance
                arrangements aligned with Group standards.
              </p>

              <ul className="mt-6 space-y-3 md:space-y-4">
                <li className="flex items-center gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Day-to-day operational execution
                  </span>
                </li>

                <li className="flex items-center gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Compliance with applicable laws, licences, and regulations
                  </span>
                </li>

                <li className="flex items-center gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Health, safety, and environmental performance
                  </span>
                </li>

                <li className="flex items-center gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                  <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                  <span className="text-[#6A6A6A]">
                    Reporting and internal controls
                  </span>
                </li>
              </ul>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
                Group-level oversight supports consistency, performance
                monitoring, and accountability
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="risk-management"
        ref={riskRef}
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 reveal"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="rounded-md overflow-hidden order-1 lg:order-1 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={assets.images.governanceImage3}
              alt="Risk Management"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#212121] font-normal">
              Risk Management
            </h2>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Marble Group applies a structured, risk-aware approach to
              decision-making and operations
            </p>

            <p className="mt-4 text-[#6A6A6A] text-sm md:text-base leading-relaxed">
              Risk management considerations include:
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Operational and technical risks
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Regulatory and compliance risks
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Financial and commercial risks
                </span>
              </li>
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Health, safety, and environmental risks
                </span>
              </li>
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Reputational and stakeholder risks
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-[#6A6A6A] leading-relaxed">
              Risks are identified, assessed, and managed through internal
              controls, approval processes, and oversight mechanisms appropriate
              to each sector.
            </p>
          </div>
        </div>
      </section>
      <section
        id="integrity-transparency"
        ref={complianceRef}
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-[#383315] reveal"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="rounded-md overflow-hidden order-1 lg:order-2 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={assets.images.operatingPrinciplesImage1}
              alt="Compliance"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
              Compliance
            </h2>

            <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
              The Group is committed to operating in compliance with applicable
              laws, regulations, and industry standards in all jurisdictions
              where it operates.
            </p>

            <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
              Compliance is supported through:
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Internal policies and procedures
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Defined responsibilities for compliance oversight
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Monitoring and reporting mechanisms
                </span>
              </li>
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Engagement with relevant regulatory authorities
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-white leading-relaxed">
              Compliance obligations are integrated into operational processes
              rather than treated as standalone requirements.
            </p>
          </div>
        </div>
      </section>

      <section
        id="ethics"
        ref={ethicsRef}
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-[#383315] reveal"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="rounded-md overflow-hidden order-1 lg:order-1 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={assets.images.operatingPrinciplesImage2}
              alt="Ethics and Conduct"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
              Ethics and Conduct
            </h2>

            <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
              Marble Group promotes a culture of integrity, professionalism, and
              ethical conduct.
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Act honestly and responsibly
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Comply with applicable laws and internal policies
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Avoid conflicts of interest
                </span>
              </li>
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Conduct business in a manner that protects the Group&apos;s
                  reputation
                </span>
              </li>
            </ul>

            <p className="mt-6 text-sm md:text-base text-white leading-relaxed">
              Breaches of ethical standards or policies are addressed in
              accordance with established procedures
            </p>
          </div>
        </div>
      </section>

      <div className="px-4 py-3">
        <section
          ref={healthRef}
          className="relative w-full rounded-3xl overflow-hidden reveal"
        >
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/videos/governance-video-1.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 px-6 py-24 flex flex-col items-center text-center text-white">
            <h2 className="text-2xl md:text-3xl font-light">
              Health, Safety, and Environmental Responsibility
            </h2>

            <p className="mt-3 text-sm text-white/70 max-w-xl">
              Where applicable, the Group maintains health, safety, and
              environmental practices aligned with the nature and scale of its
              operations.
            </p>

            <p className="mt-3 text-sm text-white/70 max-w-xl">
              Safety and environmental responsibility are treated as operational
              priorities and embedded into relevant policies, procedures, and
              oversight mechanisms, particularly within resource-based and
              construction activities.
            </p>
          </div>
        </section>
      </div>

      <section
        id="reporting"
        ref={reportingRef}
        className="w-full bg-[#14161A] text-white reveal"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
            Reporting and Disclosure
          </h2>
          <div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Information disclosed publicly by Marble Group is subject to
              internal review and approval processes to ensure accuracy,
              consistency, and regulatory alignment.
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed mt-4">
              The Group does not disclose sensitive commercial, operational, or
              financial information beyond what is appropriate and required.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src={assets.images.aboutImage1}
            fill
            className="object-cover object-center"
            priority
            quality={90}
            alt="Reporting and Disclosure"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      <section
        id="continuous-review"
        ref={reviewRef}
        className="mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-[#14161A] reveal"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="rounded-md overflow-hidden order-1 lg:order-1 hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={assets.images.operatingPrinciplesImage1}
              alt="Continuous Review"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-normal">
              Continuous Review and Improvement
            </h2>

            <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
              Marble Group recognises that governance and compliance frameworks
              must evolve as the Group grows and operating conditions change.
            </p>
            <p className="mt-4 text-white text-sm md:text-base leading-relaxed">
              Governance practices are reviewed periodically to:
            </p>

            <ul className="mt-6 space-y-3 md:space-y-4">
              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Reflect changes in regulatory requirements
                </span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">Address emerging risks</span>
              </li>

              <li className="flex items-center justify-start gap-3 text-sm md:text-base border border-[#EFEFF3] bg-white rounded-full px-3 py-2 hover:border-[#867A33] transition-colors">
                <span className="w-3 h-3 rounded-full bg-[#867A33] flex-shrink-0" />
                <span className="text-[#6A6A6A]">
                  Support operational effectiveness and resilience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="our-role"
        ref={legalRef}
        className="max-w-7xl mx-auto px-6 py-20 reveal"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-[#212121] font-normal">
              Legal and Regulatory Standing
            </h2>

            <p className="mt-4 text-[#6A6A6A] max-w-lg">
              Marble Group operates as the brand identity of Marble & Groove
              Nig. Ltd, a company incorporated in Nigeria. All subsidiaries
              operate within applicable legal and regulatory frameworks relevant
              to their respective sectors.
            </p>
          </div>

          <div className="rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <Image
              src={assets.images.homeImage2}
              alt="Legal and Regulatory Standing"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
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
