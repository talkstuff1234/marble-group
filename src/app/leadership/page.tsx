"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Leadership() {
  const heroRef = useRef<HTMLElement | null>(null);
  const leadershipRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = [heroRef.current, leadershipRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el as Element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="px-4 py-3">
      {/* HERO SECTION */}
      <section
        id="who-we-are"
        ref={heroRef}
        className="relative w-full min-h-[70vh] md:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center text-center fade-up"
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

        <header className="relative z-10 max-w-5xl p-6 flex flex-col">
          <h1 className="text-white text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
            Who We Are
          </h1>

          <div className="mt-6 space-y-4 max-w-2xl mx-auto">
            <p className="text-white/80 text-sm md:text-base">
              Marble Group is an established Nigerian operating group focused on
              developing and managing businesses across essential industries.
            </p>
            <p className="text-white/80 text-sm md:text-base">
              The Group acts as an active owner, providing strategic direction,
              governance oversight, and shared standards to its subsidiaries.
            </p>
          </div>
        </header>
      </section>

      {/* LEADERSHIP SECTION */}
      <section
        id="leadership"
        ref={leadershipRef}
        className="relative py-20 overflow-hidden fade-in"
      >
        {/* Background text */}
        <h1 className="pointer-events-none absolute inset-x-0 top-6 text-center text-[72px] sm:text-[120px] md:text-[180px] font-bold text-[#F2F2F2] tracking-widest select-none leading-none">
          Leaders
        </h1>

        <div className="relative max-w-7xl mx-auto px-4 space-y-20">
          {/* Group & Senior Leadership */}
          <section aria-labelledby="group-senior-leadership">
            <h2
              id="group-senior-leadership"
              className="text-center text-xl md:text-2xl font-semibold mb-10"
            >
              Group & Senior Leadership
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Abdullahi Naziru Abdullahi
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  President / Chief Executive Officer
                </p>
              </article>

              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Mohammed Sanusi Bello
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Executive Vice President
                </p>
              </article>
            </div>
          </section>

          {/* Operations & Business Units */}
          <section aria-labelledby="operations-business-units">
            <h2
              id="operations-business-units"
              className="text-center text-xl md:text-2xl font-semibold mb-10"
            >
              Operations & Business Units
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Mohammed Sani Suleiman
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Managing Director, Agro Trading (Marble Foods)
                </p>
              </article>

              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Ali Olabode Yusuf
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">Export Manager</p>
              </article>
            </div>
          </section>

          {/* Quality, Finance & Administration */}
          <section aria-labelledby="quality-finance-admin">
            <h2
              id="quality-finance-admin"
              className="text-center text-xl md:text-2xl font-semibold mb-10"
            >
              Quality, Finance & Administration
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-54 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">Idrees Adekanmbi</h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Quality Assurance Manager
                </p>
              </article>

              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-54 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Ismail Yusuf Salihu
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">Inventory Manager</p>
              </article>

              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-54 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">Success Ogbadu</h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Corporate Financial Assistant
                </p>
              </article>
            </div>
          </section>

          {/* Executive & Technical Support */}
          <section aria-labelledby="executive-technical-support">
            <h2
              id="executive-technical-support"
              className="text-center text-xl md:text-2xl font-semibold mb-10"
            >
              Executive & Technical Support
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Audu Abdulaziz Yahya
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Technical Assistant
                </p>
              </article>

              <article className="bg-[#F5F5F9] border border-[#EFEFF3] rounded-xl p-3 text-center card-reveal">
                <div className="w-full h-56 bg-white rounded-lg mb-4" />
                <h3 className="font-medium text-[#212121]">
                  Kabiru Muhammad Inuwa
                </h3>
                <p className="text-sm text-[#6A6A6A] mt-1">
                  Technical Assistant
                </p>
              </article>
            </div>
          </section>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 0.8s ease,
            transform 0.8s ease;
        }

        .fade-in {
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .is-visible {
          opacity: 1;
          transform: none;
        }

        .card-reveal {
          opacity: 0;
          transform: translateY(20px);
          animation: cardFade 0.6s ease forwards;
        }

        @keyframes cardFade {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
