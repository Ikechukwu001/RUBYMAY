"use client";

import Image from "next/image";
import Link from "next/link";

export default function KnowMe() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
          Meet RubyMayTherapeutics
        </p>

        {/* Main grid — image left, text right */}
        <div className="mt-12 grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* LEFT — image composition */}
          <div className="relative">
            {/* Main image */}
            <div className="relative h-[480px] overflow-hidden rounded-2xl sm:h-[560px]">
              <Image
                src="/maytwentythree.jpeg"
                alt="RubyMayTherapeutics Relax & Renew"
                fill
                priority
                className="object-cover transition duration-[1200ms] hover:scale-[1.02]"
              />
            </div>

            {/* Floating secondary image — bottom right overlap */}
            <div className="absolute -bottom-8 -right-4 hidden w-[180px] overflow-hidden rounded-2xl border-4 border-white shadow-[0_16px_48px_rgba(0,0,0,0.12)] md:block lg:-right-8">
              <div className="relative h-[170px]">
                <Image
                  src="/maytwentyfour.jpeg"
                  alt="RubyMayTherapeutics detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Rating pill — top left */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <span className="text-sm font-semibold text-[#1a1612]">★ 4.9</span>
              <span className="text-xs text-[#9e9389]">200+ reviews</span>
            </div>
          </div>

          {/* RIGHT — text */}
          <div>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4.5vw,3.6rem)] font-light italic leading-[1.1] tracking-[-0.01em] text-[#1a1612]">
              A gentle space created for your comfort and complete ease.
            </h2>

            <div className="mt-1 h-px w-12 bg-[#c4622d]" />

            <p className="mt-7 text-base leading-8 text-[#6b6259]">
              RubyMayTherapeutics Relax & Renew is a personal, one-on-one experience
              focused on calm care, soft attention, and deep relaxation. Every
              session is handled individually — a warm, private atmosphere
              created just for you.
            </p>

            <p className="mt-4 text-base leading-8 text-[#9e9389]">
              From the moment you arrive, everything is designed to help your
              body relax, your mind settle, and your tension gently melt away.
            </p>

            {/* Feature rows */}
            <div className="mt-10 divide-y divide-[#e8e2da]">
              {[
                { label: "One-on-one attention", detail: "Fully private, just you" },
                { label: "Soft luxury setting",  detail: "Warm, calm atmosphere" },
                { label: "Tailored experience",  detail: "Adapted to your needs" },
                { label: "Complete privacy",     detail: "No distractions, ever" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3.5"
                >
                  <span className="text-sm font-medium text-[#1a1612]">{item.label}</span>
                  <span className="text-xs text-[#9e9389]">{item.detail}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-[#c4622d] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a34e22]"
              >
                Explore Treatments
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#e8e2da] px-7 py-3.5 text-sm font-medium text-[#6b6259] transition hover:border-[#c4622d]/30 hover:bg-[#f9f7f5]"
              >
                Make an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}