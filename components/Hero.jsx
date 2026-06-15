"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const images = useMemo(
    () => ["/maytwenty.jpeg", "/maytwentytwo.jpeg", "/maytwentythree.jpeg"],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#1a1612]">
      {/* Image slider */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`RubyMayTherapeutics Relax & Renew ${index + 1}`}
              fill
              priority={index === 0}
              className="scale-[1.03] object-cover"
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Clean dark overlay — lighter on right so image shows */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(26,22,18,0.82)_0%,rgba(26,22,18,0.60)_50%,rgba(26,22,18,0.30)_100%)]" />

      {/* Subtle bottom fade to white for section transition */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-[linear-gradient(to_top,rgba(255,255,255,0.08),transparent)]" />

      {/* Content — vertically centered, left-aligned */}
      <div className="relative z-10 flex min-h-[100svh] items-center px-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl animate-[heroFade_0.9s_ease-out]">

            {/* Label */}
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
              Private · By Appointment Only
            </p>

            {/* Heading */}
            <h1 className="font-['Cormorant_Garamond'] text-[clamp(3rem,7.5vw,6.2rem)] font-light italic leading-[1.0] tracking-[-0.01em] text-white">
              Soft care for
              <br />
              <span className="font-semibold not-italic">your body.</span>
            </h1>

            {/* Rule + description */}
            <div className="mt-8 flex gap-5">
              <div className="mt-2 h-12 w-px shrink-0 bg-[#c4622d]" />
              <p className="text-base leading-8 text-white/70 sm:text-lg">
                A one-on-one experience created for comfort, relaxation, and
                complete privacy. Every session is calm, attentive, and
                tailored to your needs.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/prices"
                className="inline-flex items-center justify-center rounded-full bg-[#c4622d] px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#a34e22]"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-medium text-white/85 transition duration-300 hover:border-white/50 hover:bg-white/10"
              >
                View Treatments
              </Link>
            </div>

            {/* Trust tags */}
            <div className="mt-10 flex flex-wrap gap-2">
              {["One-on-one care", "Private sessions", "Calm environment", "Professional touch"].map(
                (item, index) => (
                  <span
                    key={item}
                    className="animate-[softRise_0.6s_ease-out_both] rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/60"
                    style={{ animationDelay: `${index * 80 + 400}ms` }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators — bottom center */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show hero image ${index + 1}`}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-px rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-10 bg-[#c4622d]"
                : "w-5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes softRise {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}