"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { setIsOpen(true); }, 600);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setIsOpen(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/25 backdrop-blur-sm"
        onClick={close}
      />
      <div className="relative w-full max-w-sm animate-[modalIn_0.3s_ease-out] overflow-hidden rounded-2xl border border-[#e8e2da] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
        <div className="p-6 sm:p-7">

          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.36em] text-[#c4622d]">
                Welcome
              </p>
              <h2 className="mt-2 font-['Cormorant_Garamond'] text-2xl font-light italic text-[#1a1612]">
                Before your session
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e8e2da] text-sm text-[#9e9389] transition hover:bg-[#f3f0ec]"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="mt-1 h-px w-8 bg-[#c4622d]" />

          {/* Content */}
          <div className="mt-5 space-y-3 text-sm leading-7 text-[#6b6259]">
            <p>This is a private, calm, and professional space designed for your comfort.</p>
            <div className="space-y-2.5">
              {[
                "Respectful communication only",
                "Sessions are handled professionally",
                "You can check reviews for reassurance",
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4622d]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={close}
              className="w-full rounded-full bg-[#c4622d] py-3.5 text-sm font-semibold text-white transition hover:bg-[#a34e22]"
            >
              Continue
            </button>
            <Link
              href="/review"
              onClick={close}
              className="w-full text-center text-sm text-[#9e9389] transition hover:text-[#c4622d]"
            >
              View Reviews
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}