"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Zap, Heart, Feather, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Nuru Ritual",
      description: "A silky, full-body ritual designed for deep relaxation and a sense of total reset.",
      image: "/mayeighteen.jpeg",
      icon: Sparkles,
      tag: "Signature",
    },
    {
      id: 2,
      title: "Deep Tissue Renewal",
      description: "Focused, therapeutic techniques to release tension and restore mobility with care.",
      image: "/mayeight.jpeg",
      icon: Zap,
      tag: "Restorative",
    },
    {
      id: 3,
      title: "Full Body Serenity",
      description: "A balanced, head-to-toe session that calms the nervous system and softens stress.",
      image: "/mayfive.jpeg",
      icon: Heart,
      tag: "Relaxation",
    },
    {
      id: 4,
      title: "Sensory Ritual",
      description: "A refined, calming experience crafted around comfort, privacy, and mindful touch.",
      image: "/maytwentyfour.jpeg",
      icon: Feather,
      tag: "Private",
    },
  ];

  return (
    <section className="bg-[#f9f7f5] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
              Signature Rituals
            </p>
            <h2 className="mt-4 font-['Cormorant_Garamond'] text-[clamp(2rem,4.5vw,3.4rem)] font-light italic leading-[1.1] text-[#1a1612]">
              Curated treatments, designed with intention
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#6b6259] md:text-base">
              Choose from the most requested sessions — crafted for calm,
              comfort, and a soft premium experience.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#c4622d] transition-all hover:gap-3"
          >
            View all treatments <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
                    {service.tag}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <service.icon className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold italic text-[#1a1612]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6b6259]">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#c4622d] transition-all hover:gap-2.5"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA — light card, no dark background */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-[#e8e2da] bg-white">
          <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[#c4622d]">
                Booking
              </p>
              <h3 className="mt-3 font-['Cormorant_Garamond'] text-[clamp(1.7rem,3vw,2.4rem)] font-light italic text-[#1a1612]">
                A calm space, reserved for you
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#6b6259] md:text-base">
                Sessions are by appointment to ensure privacy and uninterrupted
                care. View pricing or send a message before booking.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/prices"
                  className="inline-flex items-center justify-center rounded-full bg-[#c4622d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#a34e22]"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#e8e2da] px-7 py-3 text-sm font-medium text-[#6b6259] transition hover:bg-[#f9f7f5]"
                >
                  Ask a Question
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-xl bg-[#f9f7f5] p-6">
                <p className="text-sm font-semibold text-[#1a1612]">What to expect</p>
                <ul className="mt-4 space-y-3 text-sm text-[#6b6259]">
                  {[
                    "Clean, serene environment",
                    "Tailored pressure & pacing",
                    "Private sessions by appointment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4622d]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}