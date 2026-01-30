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

  return (
    <>
      <main className="px-4 py-3">
        {/* HERO SECTION */}
        <section
          ref={heroRef}
          className="relative w-full min-h-[60vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center reveal"
        >
          <Image
            src={assets.images.subsidiariesHero}
            alt="subsidiaries"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-5xl p-6 flex flex-col">
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
              Our Subsidiaries
            </h1>

            <div className="mt-6 space-y-4 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm md:text-base">
                Marble Group operates through controlled subsidiaries, each
                focused on its sector while aligned with Group standards and
                governance.
              </p>
            </div>
          </div>
        </section>

        {/* SUBSIDIARIES GRID */}
        <section className="w-full bg-white py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger"
            >
              {/* CARD 1 */}
              <div className="bg-[#F5F7FA] rounded-lg p-6 stagger-item">
                <div className="bg-white py-12 flex justify-center items-center">
                  <Image
                    src={assets.images.subsidiariesImage1}
                    alt="Marble & Grove Foods Ltd"
                    width={260}
                    height={120}
                    className="mb-6"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-[#212121]">
                    Food Systems & Agro-Commodity Solutions
                  </h3>

                  <p className="mt-3 text-sm text-[#6A6A6A] leading-relaxed">
                    Marble Foods operates across food processing, trading,
                    warehousing, and supply solutions, serving consumer,
                    institutional, and commercial markets. The business
                    emphasizes quality control, food safety, efficient
                    logistics, and compliance with applicable standards.
                  </p>

                  <p className="mt-3 text-sm text-[#6A6A6A] leading-relaxed">
                    Marble Foods supports reliable supply chains and value
                    creation across agricultural and food systems.
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] px-5 py-2 text-sm text-[#212121] hover:bg-white transition">
                    Visit Website <span>→</span>
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-[#F5F7FA] rounded-lg p-6 stagger-item">
                <div className="bg-white py-12 flex justify-center items-center">
                  <Image
                    src={assets.images.subsidiariesImage2}
                    alt="Marble & Grove Foods Ltd"
                    width={260}
                    height={120}
                    className="mb-6"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-[#212121]">
                    Solid Mineral Development
                  </h3>

                  <p className="mt-3 text-sm text-[#6A6A6A] leading-relaxed">
                    Westlands Mining and Minerals Ltd is engaged in solid
                    mineral exploration, development, and responsible resource
                    extraction. The company operates within Nigeria’s regulatory
                    framework and applies disciplined operating standards
                    aligned with international best practices.
                  </p>

                  <p className="mt-3 text-sm text-[#6A6A6A] leading-relaxed">
                    Westlands Mining and Minerals Ltd benefits from Group-level
                    governance, risk management, and strategic oversight.
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] px-5 py-2 text-sm text-[#212121] hover:bg-white transition">
                    Visit Website <span>→</span>
                  </button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-[#F5F7FA] rounded-lg p-6 stagger-item">
                <div className="bg-white py-12 flex justify-center items-center">
                  <Image
                    src={assets.images.subsidiariesImage3}
                    alt="Marble & Grove Foods Ltd"
                    width={260}
                    height={120}
                    className="mb-6"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-[#212121]">
                    Construction & Contracts
                  </h3>

                  <p className="mt-3 text-sm text-[#6A6A6A] leading-relaxed">
                    Marble & Grove Nigeria Ltd is the construction and contracts
                    arm of Marble Group. The company focuses on civil works,
                    industrial construction, infrastructure projects, and
                    contracts execution across public and private sectors.
                  </p>

                  <p className="mt-3 text-sm text-[#6A6A6A] leading-relaxed">
                    The business supports infrastructure development and project
                    delivery, including construction services related to
                    industrial, logistics, and resource-based operations.
                    Activities are executed with emphasis on quality, safety,
                    compliance, and on-time performance.
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] px-5 py-2 text-sm text-[#212121] hover:bg-white transition">
                    Visit Website <span>→</span>
                  </button>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="bg-[#F5F7FA] rounded-lg p-6 stagger-item">
                <div className="bg-white py-12 flex justify-center items-center">
                  <Image
                    src={assets.images.subsidiariesImage4}
                    alt="Marble & Grove Foods Ltd"
                    width={260}
                    height={120}
                    className="mb-6"
                  />
                </div>

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-[#212121]">
                    Aviation & Air Services (Under Development)
                  </h3>

                  <p className="mt-3 text-sm text-[#6A6A6A] leading-relaxed">
                    Marble Air is an aviation-focused subsidiary currently under
                    development. The business is being structured to support air
                    services in accordance with international safety,
                    operational, and regulatory frameworks.
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D1D5DB] px-5 py-2 text-sm text-[#212121] hover:bg-white transition">
                    Visit Website <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
