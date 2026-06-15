"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Heart,
  Feather,
  Flame,
  Flower2,
  Dumbbell,
  Footprints,
  Users,
  Gem,
  Leaf,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Full Body Massage",
      description:
        "A luxurious head-to-toe massage experience designed to ease tension, improve circulation, and leave your body feeling refreshed.",
      image: "/mayone.jpeg",
      icon: Heart,
      benefits: [
        "Full body relaxation",
        "Stress relief",
        "Improved circulation",
        "Body refresh",
      ],
      duration: "60 – 120 minutes",
    },
    {
      id: 2,
      title: "Nuru Glide",
      description:
        "Body-to-body silk sensation and deep relaxation experience that promotes a sense of calm, comfort, and total body ease.",
      image: "/maytwo.jpeg",
      icon: Feather,
      benefits: [
        "Gentle pressure",
        "Muscle relaxation",
        "Mental calmness",
        "Improved flexibility",
      ],
      duration: "60 – 90 minutes",
    },
    {
      id: 3,
      title: "Deep Tissue Release",
      description:
        "A focused massage treatment using firm pressure to target deeper muscle layers, tension points, and body stiffness.",
      image: "/maythree.jpeg",
      icon: Zap,
      benefits: [
        "Relieves deep tension",
        "Improves mobility",
        "Reduces stiffness",
        "Supports recovery",
      ],
      duration: "60 – 120 minutes",
    },
    {
      id: 4,
      title: "FBSM- full-body sensual worship",
      description:
        "Full-body sensual worship and massage experience designed to promote relaxation, body confidence, and a deep sense of comfort through attentive touch and care.",
      image: "/mayfour.jpeg",
      icon: Flower2,
      benefits: [
        "Essential oil therapy",
        "Mood balance",
        "Stress reduction",
        "Enhanced relaxation",
      ],
      duration: "60 – 90 minutes",
    },
    {
      id: 5,
      title: "Hot Stone Massage",
      description:
        "A warm and deeply relaxing massage treatment using heated stones to ease muscle tension and promote comfort.",
      image: "/mayfive.jpeg",
      icon: Flame,
      benefits: [
        "Warm muscle relief",
        "Deep relaxation",
        "Improved circulation",
        "Luxury spa comfort",
      ],
      duration: "75 – 120 minutes",
    },
    {
      id: 6,
      title: " GFE- Intimate girlfriend connection",
      description:
        "A calm and gentle session created to help you unwind, release stress, and enjoy a peaceful body reset.",
      image: "/maysix.jpeg",
      icon: Leaf,
      benefits: [
        "Mental relaxation",
        "Better sleep",
        "Reduced stress",
        "Peaceful comfort",
      ],
      duration: "60 – 90 minutes",
    },
    {
      id: 7,
      title: "Therapeutic Massage",
      description:
        "A personalized treatment focused on body discomfort, fatigue, muscle relief, and overall physical balance.",
      image: "/mayseven.jpeg",
      icon: Sparkles,
      benefits: [
        "Pain relief",
        "Body recovery",
        "Muscle support",
        "Therapeutic care",
      ],
      duration: "60 – 120 minutes",
    },
    {
      id: 8,
      title: " Prostate Pleasure / Milking Table",
      description:
        "A specialized treatment focusing on prostate health, sexual wellness, and overall physical comfort.",
      image: "/mayeight.jpeg",
      icon: Dumbbell,
      benefits: [
        "Muscle recovery",
        "Reduced soreness",
        "Improved performance",
        "Injury prevention",
      ],
      duration: "60 – 90 minutes",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#fffafc] py-20 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-[#ffe1ea]/70 blur-3xl" />
        <div className="absolute bottom-20 right-[-120px] h-96 w-96 rounded-full bg-[#fff0f6]/80 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e88aa3]">
            Luxury Wellness Services
          </p>

          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] text-[#2b1f24] md:text-5xl">
            Professional massage & wellness treatments tailored for relaxation,
            recovery, and total body comfort
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-[#7b5d67]">
            Our treatments are thoughtfully designed to promote wellness,
            relaxation, and body recovery in a calm, luxurious, and professional
            environment.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-[#f3d9df] bg-white/70 p-2 shadow-[0_24px_70px_rgba(232,138,163,0.13)]">
                  <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-[#fff1f5]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b1f24]/35 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f3d9df] bg-white/80 shadow-[0_10px_26px_rgba(232,138,163,0.12)]">
                    <service.icon className="h-6 w-6 text-[#e88aa3]" />
                  </div>

                  <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#2b1f24]">
                    {service.title}
                  </h2>
                </div>

                <p className="mt-6 leading-8 text-[#7b5d67]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#7b5d67]"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#e88aa3]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-[#7b5d67]">
                  <span className="font-semibold text-[#2b1f24]">
                    Recommended duration:
                  </span>{" "}
                  {service.duration}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#e88aa3] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(232,138,163,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f8d]"
                  >
                    Book this session
                  </Link>

                  <Link
                    href="/prices"
                    className="inline-flex items-center justify-center rounded-full border border-[#f3d9df] bg-white/75 px-7 py-3 text-sm font-semibold text-[#7b5d67] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff1f5]"
                  >
                    View pricing
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 rounded-[2rem] border border-[#f3d9df] bg-white/60 p-6 shadow-[0_24px_70px_rgba(232,138,163,0.1)] md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e88aa3]">
                Complete Wellness Care
              </p>

              <h2 className="mt-4 font-serif text-3xl tracking-[-0.03em] text-[#2b1f24] md:text-4xl">
                Not sure which treatment is right for you?
              </h2>

              <p className="mt-5 leading-8 text-[#7b5d67]">
                You can request a personalized recommendation based on your
                comfort level, relaxation goal, body tension, or preferred
                treatment style.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#e88aa3] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(232,138,163,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f8d]"
                >
                  Ask for recommendation
                </Link>
              </div>
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-[1.6rem] bg-[#fff1f5]">
              <Image
                src="/mayeighteen.jpeg"
                alt="Luxury wellness treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1f24]/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-28 border-t border-[#f3d9df] pt-16">
          <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#2b1f24]">
            What to expect
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 text-[#7b5d67] md:grid-cols-2">
            {[
              {
                title: "Before your session",
                text: "A short consultation helps match your treatment to your comfort, body needs, and wellness goals.",
              },
              {
                title: "During your session",
                text: "Relax in a calm, private setting while each technique is applied with care, professionalism, and attention.",
              },
              {
                title: "After your session",
                text: "Take time to unwind, hydrate, and enjoy the calm feeling that follows your treatment.",
              },
              {
                title: "Professional standards",
                text: "Respect, discretion, hygiene, and client comfort are maintained throughout every session.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-[#f3d9df] bg-white/65 p-6 shadow-[0_14px_38px_rgba(232,138,163,0.08)]"
              >
                <h3 className="mb-2 font-semibold text-[#2b1f24]">
                  {item.title}
                </h3>
                <p className="leading-7 text-[#7b5d67]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/prices"
              className="inline-flex items-center justify-center rounded-full bg-[#e88aa3] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(232,138,163,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f8d]"
            >
              Explore pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}