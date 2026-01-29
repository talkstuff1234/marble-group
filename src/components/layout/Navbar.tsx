"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/who-we-are" },
  { name: "Governance", href: "/governance" },
  { name: "Media Centre", href: "/media-centre" },
  { name: "Careers", href: "/Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-transparent fixed z-50">
      {/* Logo */}
      <div className="bg-white px-6 py-3 rounded-full">
        <Image src={assets.icons.logo} alt="logo" width={40} />
      </div>

      {/* Desktop Navigation (Glass) */}
      <ul
        className="hidden md:flex items-center gap-8 px-10 py-3 rounded-full
                   bg-white/15 backdrop-blur-xl border border-white/30
                   shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-white text-sm font-light tracking-wide
                         hover:opacity-80 transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-white">
        <span className="text-[#6A6A6A] text-sm">Contact Us</span>
        <Image src={assets.icons.arrowRight} alt="arrow" width={18} />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-white p-3 rounded-full"
      >
        ☰
      </button>

      {/* Mobile Menu (Glass) */}
      {open && (
        <div className="absolute top-full left-0 w-full mt-4 px-6 md:hidden z-50">
          <div
            className="flex flex-col gap-6 px-8 py-6 rounded-2xl
                       bg-white/15 backdrop-blur-xl border border-white/30
                       shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-base font-light"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-full w-fit">
              <span className="text-[#6A6A6A] text-sm">Contact Us</span>
              <Image src={assets.icons.arrowRight} alt="arrow" width={18} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
