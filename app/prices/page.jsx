"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Shield,
  Clock,
  Wallet,
  ChevronRight,
} from "lucide-react";

export default function PricingPage() {
  const pricing = [
    { duration: "60 min Escape",       price: "$200",  note: "A focused, restorative session" },
    { duration: "90 min Tease",        price: "$250",  note: "Extended calm and comfort" },
    { duration: "2 hr Indulgence",     price: "$350",  note: "Deep relaxation experience" },
    { duration: "4 hr Extended Bliss", price: "$450",  note: "Unhurried, full attention" },
    { duration: "6 hr Surrender",      price: "$800",  note: "Premium extended session" },
    { duration: "24 hr Surrender",     price: "$1,000", note: "Full-day exclusive experience" },
  ];

  const paymentMethods = [
    {
      name: "Cash App",
      logo: "/Payment/cashapp.svg",
      color: "#00D632",
      note: "Fast mobile transfer",
    },
    {
      name: "Crypto",
      logo: "/Payment/bitcoin.svg",
      color: "#F7931A",
      note: "Digital payment option",
    },
    {
      name: "Chime",
      logo: "/Payment/internetarchive.svg",
      color: "#00C4CC",
      note: "Banking app transfer",
    },
    {
      name: "Zelle",
      logo: "/Payment/zelle.svg",
      color: "#6D1ED4",
      note: "Direct bank transfer",
    },
    {
      name: "Apple Pay / Card",
      logo: "/Payment/applepay.svg",
      color: "#111111",
      note: "Card and wallet payment",
    },
    {
      name: "Venmo",
      logo: "/Payment/venmo.svg",
      color: "#008CFF",
      note: "Quick personal transfer",
    },
    {
      name: "PayPal",
      logo: "/Payment/paypal.svg",
      color: "#003087",
      note: "Trusted online payment",
    },
    {
      name: "Bank Transfer",
      logo: "/Payment/bankofamerica.svg",
      color: "#7C7C7C",
      note: "Bank-to-bank option",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
            Pricing & Payments
          </p>
          <h1 className="mt-4 font-['Cormorant_Garamond'] text-4xl font-light italic leading-[1.1] tracking-[-0.01em] text-[#1a1612] md:text-5xl">
            Exclusive time packages
          </h1>
          <div className="mt-3 h-px w-10 bg-[#c4622d]" />
          <p className="mt-6 text-base leading-8 text-[#6b6259]">
            Choose the session length that works for you. Booking details and
            payment instructions are shared privately after confirmation.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((item, i) => (
            <div
              key={item.duration}
              className="group flex items-center justify-between rounded-2xl border border-[#e8e2da] bg-[#f9f7f5] px-6 py-6 transition duration-300 hover:-translate-y-1 hover:border-[#c4622d]/30 hover:bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]"
            >
              <div>
                <p className="text-base font-semibold text-[#1a1612]">
                  {item.duration}
                </p>
                <p className="mt-1 text-sm text-[#9e9389]">{item.note}</p>
              </div>
              <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#c4622d]">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mt-10 rounded-2xl border border-[#e8e2da] bg-[#f9f7f5] p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e8e2da] bg-white">
              <Wallet className="h-5 w-5 text-[#c4622d]" />
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#c4622d]">
                Payment Methods
              </p>
              <h2 className="font-['Cormorant_Garamond'] text-2xl font-light italic text-[#1a1612]">
                Accepted payment options
              </h2>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="rounded-xl border border-[#e8e2da] bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#e8e2da] bg-[#f9f7f5]">
                    <Image
                      src={method.logo}
                      alt={method.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-[#1a1612]">
                      {method.name}
                    </p>
                    <p className="truncate text-xs text-[#9e9389]">
                      {method.note}
                    </p>
                  </div>
                </div>
                <div
                  className="mt-3 h-px rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${method.color}60, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Booking Flow */}
        <div className="mt-10 rounded-2xl border border-[#e8e2da] bg-white p-6 md:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
            Booking Process
          </p>
          <h2 className="mt-3 font-['Cormorant_Garamond'] text-3xl font-light italic text-[#1a1612]">
            How booking works
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Choose your session",
                text: "Select your preferred session length from the packages above.",
              },
              {
                icon: BadgeCheck,
                title: "Send booking request",
                text: "Reach out with your preferred time and any booking details.",
              },
              {
                icon: Shield,
                title: "Receive confirmation",
                text: "Payment instructions and final confirmation are shared privately.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[#e8e2da] bg-[#f9f7f5] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e8e2da] bg-white">
                  <item.icon className="h-4 w-4 text-[#c4622d]" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#1a1612]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#6b6259]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#c4622d] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#a34e22]"
            >
              Request Booking
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#e8e2da] px-8 py-3 text-sm font-medium text-[#6b6259] transition duration-300 hover:bg-[#f9f7f5]"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#e8e2da] bg-[#f9f7f5] p-6 sm:flex-row sm:items-center md:p-7">
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-light italic text-[#1a1612]">
              Need help before booking?
            </h3>
            <p className="mt-2 text-sm leading-7 text-[#6b6259]">
              Reach out for availability, service clarification, or assistance
              with payment methods.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e8e2da] bg-white px-6 py-3 text-sm font-medium text-[#c4622d] transition hover:border-[#c4622d]/30 hover:bg-[#f9f7f5]"
          >
            Contact now
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}