"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Treatments" },
    { href: "/prices", label: "Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/review", label: "Reviews" },
    { href: "/contact", label: "Contact" },
    { href: "/termsandconditions", label: "Terms" },
  ];

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-white">
      {/* Main nav */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex h-[68px] items-center justify-between lg:h-[80px]">

            {/* Brand */}
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center text-white justify-center rounded-full bg-[#c4622d] text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition duration-300 group-hover:bg-[#a34e22]">
                RMT
              </div>
              <div className="min-w-0">
                <p className="truncate font-['Cormorant_Garamond'] text-xl font-semibold italic tracking-[-0.01em] text-black transition group-hover:opacity-80 sm:text-2xl">
                  RubyMayTherapeutics
                </p>
                <p className="hidden text-[9px] uppercase tracking-[0.32em] text-black/60 sm:block">
                  Relax & Renew
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 lg:flex">
              <nav className="flex items-center gap-7">
                {navLinks.slice(0, 6).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative text-[13px] font-medium text-black/80 transition duration-300"
                  >
                    {link.label}
                    <span className="absolute left-1/2 top-[calc(100%+6px)] h-px w-0 -translate-x-1/2 bg-[#c4622d] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-black/25 px-5 py-2 text-[13px] font-medium text-black transition duration-300 "
                >
                  Enquire
                </Link>
                <Link
                  href="/prices"
                  className="inline-flex items-center justify-center rounded-full bg-[#c4622d] px-5 py-2 text-[13px] font-semibold text-white transition duration-300 hover:bg-[#a34e22]"
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Mobile button */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-4 py-2 backdrop-blur transition hover:bg-white/10 lg:hidden"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/80">
                Menu
              </span>
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 top-0 h-px w-4 bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[5px] h-px w-4 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-[10px] h-px w-4 bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          />
          <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <div className="mx-auto max-w-sm animate-[menuIn_0.25s_ease-out] overflow-hidden rounded-2xl border border-[#e8e2da] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

              {/* Mobile header */}
              <div className="flex items-center justify-between border-b border-[#e8e2da] px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c4622d] text-[10px] font-semibold uppercase tracking-[0.15em] text-black">
                    RL
                  </div>
                  <p className="font-['Cormorant_Garamond'] text-lg font-semibold italic text-[#1a1612]">
                    RubyMayTherapeutics
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2da] text-[#6b6259] transition hover:bg-[#f3f0ec]"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Links */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl border border-[#e8e2da] px-4 py-3 text-sm font-medium text-[#6b6259] transition hover:border-[#c4622d]/30 hover:bg-[#f9f7f5] hover:text-[#1a1612]"
                    >
                      {link.label}
                      <span className="text-[#c4622d] text-xs">→</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 grid gap-2">
                  <Link
                    href="/prices"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center rounded-full bg-[#c4622d] py-3 text-sm font-semibold text-black transition hover:bg-[#a34e22]"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center rounded-full border border-[#e8e2da] py-3 text-sm font-medium text-[#6b6259] transition hover:bg-[#f3f0ec]"
                  >
                    Ask a Question
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes menuIn {
              from { opacity: 0; transform: translateY(-10px) scale(0.98); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
        </div>
      )}
    </header>
  );
}