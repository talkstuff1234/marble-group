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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleAboutEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setAboutOpen(false);
    }, 250);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setAboutOpen(false); // Close desktop dropdown when mobile menu opens
  };

  const handleOverlayClick = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
  };

  const handleMobileAboutToggle = () => {
    setAboutOpen(!aboutOpen);
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300
        ${
          isScrolled
            ? "bg-black/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <div className="bg-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src={assets.icons.logo}
                alt="logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
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

          {/* Mobile Menu Toggle */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden bg-white p-2.5 sm:p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 relative z-50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-[#212121] transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#212121] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#212121] transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Menu (Glass) */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white/10 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-40 md:hidden transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-2" aria-label="Main navigation">
            {/* Home */}
            <Link
              href="/"
              className={`text-lg font-light px-5 py-4 rounded-2xl transition-all duration-300 ${
                isActive("/")
                  ? "bg-white text-[#212121] shadow-md"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={handleLinkClick}
            >
              Home
            </Link>

            {/* About Mobile Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={handleMobileAboutToggle}
                className={`flex items-center justify-between text-lg font-light px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isAboutActive
                    ? "bg-white text-[#212121] shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
              >
                About us
                <svg
                  className={`w-5 h-5 transition-transform ${
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

              {/* Mobile About Dropdown */}
              <div
                className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  aboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/who-we-are"
                  className="block text-base font-light px-5 py-3 rounded-2xl text-white hover:bg-white/10 transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  Who we are
                </Link>
                <Link
                  href="/strategic-partners"
                  className="block text-base font-light px-5 py-3 rounded-2xl text-white hover:bg-white/10 transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  Strategic Partners
                </Link>
                <Link
                  href="/operating-principles"
                  className="block text-base font-light px-5 py-3 rounded-2xl text-white hover:bg-white/10 transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  Operating Principles
                </Link>
                <Link
                  href="/media-centre"
                  className="block text-base font-light px-5 py-3 rounded-2xl text-white hover:bg-white/10 transition-all duration-300"
                  onClick={handleLinkClick}
                >
                  Media Center
                </Link>
              </div>
            </div>

            {/* Other mobile links */}
            {[
              { name: "Our Subsidiaries", href: "/subsidiaries" },
              { name: "Leadership", href: "/leadership" },
              { name: "Governance", href: "/governance" },
              { name: "Careers", href: "/careers" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-light px-5 py-4 rounded-2xl transition-all duration-300 ${
                  pathname.startsWith(item.href)
                    ? "bg-white text-[#212121] shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact Button */}
          <div className="mt-auto pt-4">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 bg-white px-6 py-4 rounded-2xl w-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleLinkClick}
              aria-label="Contact Us"
            >
              <span className="text-[#212121] text-base font-medium">
                Contact Us
              </span>
              <Image
                src={assets.icons.arrowRight}
                alt=""
                width={18}
                height={18}
                className="w-4 h-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
