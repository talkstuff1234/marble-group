"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [aboutOpen, setAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const aboutPaths = [
    "/who-we-are",
    "/strategic-partners",
    "/operating-principles",
    "/media-centre",
  ];

  const isAboutActive = aboutPaths.some((path) => pathname.startsWith(path));

  const isActive = (href: string) => pathname === href;

  /* Scroll blur */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setAboutOpen(false);
    }, 250);
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 px-6 py-4 transition-all duration-300
        ${
          isScrolled
            ? "bg-black/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <div className="bg-white px-5 py-2 rounded-full flex items-center justify-center shadow-lg">
            <Image
              src={assets.icons.logo}
              alt="logo"
              width={140}
              height={140}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex items-center gap-2 px-3 py-3 rounded-full
                     bg-white/10 backdrop-blur-xl border border-white/20
                     shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        >
          {/* Home */}
          <li>
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300
                ${
                  isActive("/")
                    ? "bg-white text-[#212121] shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
            >
              Home
            </Link>
          </li>

          {/* About Dropdown */}
          <li
            className="relative"
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <button
              className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-light transition-all duration-300
                ${
                  isAboutActive
                    ? "bg-white text-[#212121] shadow-md"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
            >
              About us
              <svg
                className={`w-4 h-4 transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl
                          bg-white shadow-xl overflow-hidden transition-all duration-200
                          ${
                            aboutOpen
                              ? "opacity-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 translate-y-2 pointer-events-none"
                          }`}
            >
              <Link
                href="/who-we-are"
                className="block px-5 py-3 text-sm text-[#212121] hover:bg-[#EFEFF3]"
              >
                Who we are
              </Link>
              <Link
                href="/strategic-partners"
                className="block px-5 py-3 text-sm text-[#212121] hover:bg-[#EFEFF3]"
              >
                Strategic Partners
              </Link>
              <Link
                href="/operating-principles"
                className="block px-5 py-3 text-sm text-[#212121] hover:bg-[#EFEFF3]"
              >
                Operating Principles
              </Link>
              <Link
                href="/media-centre"
                className="block px-5 py-3 text-sm text-[#212121] hover:bg-[#EFEFF3]"
              >
                Media Center
              </Link>
            </div>
          </li>

          {/* Other links */}
          {[
            { name: "Our Subsidiaries", href: "/subsidiaries" },
            { name: "Leadership", href: "/leadership" },
            { name: "Governance", href: "/governance" },
            { name: "Careers", href: "/careers" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300
                  ${
                    pathname.startsWith(item.href)
                      ? "bg-white text-[#212121] shadow-md"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-white
                     shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <span className="text-[#6A6A6A] text-sm">Contact Us</span>
          <Image src={assets.icons.arrowRight} alt="" width={18} />
        </Link>
      </div>
    </nav>
  );
}
