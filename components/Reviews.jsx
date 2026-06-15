"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

const reviews = [
  { name: "Amanda R.", text: "Absolutely amazing massage. I felt relaxed and refreshed immediately." },
  { name: "James K.", text: "Very professional and calming experience. Highly recommend." },
  { name: "Sophia M.", text: "The best massage session I've had in years." },
  { name: "Daniel T.", text: "Clean environment, great technique, and very respectful." },
  { name: "Lauren P.", text: "Helped relieve my back pain after just one session." },
  { name: "Michael B.", text: "Truly therapeutic and worth every minute." },
  { name: "Rachel S.", text: "Felt comfortable from start to finish." },
  { name: "Chris W.", text: "Professional, attentive, and very skilled." },
  { name: "Emily D.", text: "A perfect balance of relaxation and deep tissue work." },
  { name: "Joshua L.", text: "Exceeded my expectations. Booking again soon." },
  { name: "Nicole A.", text: "Soothing atmosphere and great energy." },
  { name: "Brian H.", text: "Helped me unwind after a stressful week." },
  { name: "Vanessa O.", text: "Excellent service and communication." },
  { name: "Kevin N.", text: "One of the best wellness experiences I've had." },
  { name: "Melissa J.", text: "Very knowledgeable and intuitive therapist." },
  { name: "Andrew C.", text: "Felt like a reset for my body and mind." },
  { name: "Tina E.", text: "Gentle, calming, and extremely professional." },
  { name: "Robert F.", text: "Great pressure and attention to detail." },
  { name: "Hannah V.", text: "Relaxing from the first minute." },
  { name: "Eric Z.", text: "I left feeling lighter and pain-free." },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const current = reviews[index];
  const rating = 4.9;
  const totalReviews = useMemo(() => 200, []);

  useEffect(() => {
    if (pause) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5400);
    return () => clearInterval(timer);
  }, [pause]);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <section
      className="bg-white py-24 sm:py-32"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
              Client Reviews
            </p>
            <h2 className="mt-4 font-['Cormorant_Garamond'] text-[clamp(2rem,4.5vw,3.4rem)] font-light italic leading-[1.1] text-[#1a1612]">
              Kind words from clients who trusted the experience.
            </h2>
          </div>

          {/* Rating */}
          <div className="inline-flex w-fit items-center gap-3 rounded-xl border border-[#e8e2da] px-5 py-3">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#c4622d] text-[#c4622d]" />
              ))}
            </div>
            <div className="h-4 w-px bg-[#e8e2da]" />
            <div>
              <span className="text-sm font-semibold text-[#1a1612]">{rating}</span>
              <span className="ml-1 text-xs text-[#9e9389]">{totalReviews}+ reviews</span>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">

          {/* Quote area */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9e9389]">
                {index + 1} / {reviews.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e2da] text-[#6b6259] transition hover:border-[#c4622d]/40 hover:text-[#c4622d]"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e2da] text-[#6b6259] transition hover:border-[#c4622d]/40 hover:text-[#c4622d]"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div key={index} className="mt-8 animate-[reviewFade_0.4s_ease-out]">
              <div className="font-['Cormorant_Garamond'] text-5xl font-light leading-none text-[#c4622d]/30">
                "
              </div>
              <p className="mt-1 font-['Cormorant_Garamond'] text-[clamp(1.5rem,3vw,2.1rem)] font-light italic leading-snug text-[#1a1612]">
                {current.text}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-[#e8e2da] pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#9e9389]">Client</p>
                  <p className="mt-1 text-base font-medium text-[#1a1612]">{current.name}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#c4622d] text-[#c4622d]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center gap-1.5">
              {reviews.slice(0, 8).map((_, i) => {
                const active = index % 8 === i;
                return (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-px rounded-full transition-all duration-300 ${
                      active ? "w-10 bg-[#c4622d]" : "w-5 bg-[#e8e2da] hover:bg-[#c4622d]/40"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="rounded-2xl border border-[#e8e2da] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#c4622d]">
                What clients value
              </p>
              <div className="mt-5 space-y-4">
                {[
                  "A calm and discreet environment",
                  "Thoughtful pressure tailored to the body",
                  "Professional, respectful one-on-one care",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4622d]" />
                    <p className="text-sm leading-6 text-[#6b6259]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#f9f7f5] p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#c4622d]">
                Appointment note
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6b6259]">
                Sessions are arranged by appointment to preserve privacy, calm
                timing, and a more personal experience from start to finish.
              </p>
              <Link
                href="/prices"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#c4622d] transition hover:gap-2.5"
              >
                View pricing →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reviewFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}