"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/who-we-are" },
  { name: "Our Subsidiaries", href: "/subsidiaries" },
  { name: "Oprating Principles", href: "/operating-principles" },

  { name: "Leadership", href: "/leadership" },
  { name: "Governance", href: "/governance" },
  // { name: "Media Centre", href: "/media-centre" },
  // { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href) || false;
  };

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleOverlayClick = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/20 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          aria-label="Marble Group Home"
        >
          <Image
            src={assets.icons.logo}
            alt="Marble Group Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
            priority
          />
        </Link>

        {/* Desktop Navigation (Glass) */}
        <ul
          className="hidden lg:flex items-center gap-1 px-6 xl:px-8 py-3 rounded-full
                   bg-white/10 backdrop-blur-xl border border-white/20
                   shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                   hover:bg-white/15 transition-all duration-300"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`relative text-sm xl:text-base font-light tracking-wide px-4 xl:px-5 py-2 rounded-full
                         transition-all duration-300
                         ${
                           isActive(link.href)
                             ? "bg-white text-[#212121] shadow-md"
                             : "text-white hover:bg-white/10"
                         }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button - Desktop */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 xl:gap-3 px-5 xl:px-6 py-3 rounded-full bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          aria-label="Contact Us"
        >
          <span className="text-[#6A6A6A] text-sm xl:text-base font-medium">
            Contact Us
          </span>
          <Image
            src={assets.icons.arrowRight}
            alt=""
            width={18}
            height={18}
            className="w-4 h-4 xl:w-5 xl:h-5"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="lg:hidden bg-white p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 relative z-50"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-[#212121] transition-all duration-300 ${
                open ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#212121] transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#212121] transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
        aria-hidden={!open}
      />

      {/* Mobile Menu (Glass) */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white/10 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-40 lg:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-light px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-white text-[#212121] shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Contact Button */}
          <div className="mt-auto">
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
