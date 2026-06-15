"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      zipcode: form.zipcode.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("Your booking request has been sent successfully ✨");
      form.reset();
    } catch (err) {
      setStatus(err.message || "Failed to send request.");
    } finally {
      setLoading(false);
    }
  }

  const contactItems = [
    {
      label: "Phone",
      value: "303- 437-7274",
      href: "tel:+14054316088",
      icon: "/Payment/googlemessages.svg",
    },
    {
      label: "WhatsApp",
      value: "303- 437-7274",
      href: "https://wa.me/14054316088",
      icon: "/Payment/whatsapp.svg",
    },
    {
      label: "Telegram",
      value: "@RubyMayTherapeutics_Relax_Renew",
      href: "https://t.me/RubyMayTherapeutics_Relax_Renew",
      icon: "/Payment/telegram.svg",
    },
    {
      label: "Discord",
      value: "rubby_service609",
      href: "#",
      icon: "/Payment/discord.svg",
    },
    {
      label: "Email",
      value: " Rubymay.service@gmail.com",
      href: "mailto: Rubymay.service@gmail.com",
      icon: "/Payment/gmail.svg",
    },
  ];

  const qrCodes = [
    {
      title: "WhatsApp QR",
      image: "/RelaxRenewWhatsAppQr.jpeg",
    },
    {
      title: "Signal QR",
      image: "/RelaxRenewSignalQr.jpeg",
    },
    {
      title: "Telegram QR",
      image: "/RelaxRenewTelegramQr.jpeg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffafc] py-16 sm:py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-[-140px] top-10 h-72 w-72 rounded-full bg-[#ffe1ea]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-140px] h-80 w-80 rounded-full bg-[#fff0f6]/80 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#e88aa3] sm:text-[11px] sm:tracking-[0.28em]">
            Contact
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#2b1f24] sm:text-5xl">
            Contact & Booking
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#7b5d67] sm:text-base sm:leading-8">
            Reach out privately for bookings, availability, and session
            requests. Responses are handled with care, discretion, and clear
            communication.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* LEFT */}
          <div className="min-w-0 space-y-6 lg:space-y-8">
            {/* Contact methods */}
            <div className="rounded-[1.5rem] border border-[#f3d9df] bg-white/75 p-4 shadow-[0_18px_50px_rgba(232,138,163,0.10)] backdrop-blur sm:rounded-[1.85rem] sm:p-6 md:p-8">
              <h2 className="font-serif text-2xl text-[#2b1f24]">
                Reach Ruby May Therapeutics
              </h2>

              <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4">
                {contactItems.map((item) => (
                  <ContactItem key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="min-w-0">
            <div className="rounded-[1.5rem] border border-[#f3d9df] bg-white/75 p-4 shadow-[0_18px_50px_rgba(232,138,163,0.10)] backdrop-blur sm:rounded-[1.85rem] sm:p-6 md:p-8 lg:sticky lg:top-28">
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#e88aa3] sm:text-[11px]">
                Booking Form
              </p>

              <h2 className="mt-3 font-serif text-2xl text-[#2b1f24] sm:text-3xl">
                Request a session
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#7b5d67]">
                Share your preferred session details and availability. Replies
                are handled privately with clear next steps.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:mt-8 sm:gap-5">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="min-w-0 rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-sm text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white sm:text-base"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="min-w-0 rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-sm text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white sm:text-base"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="min-w-0 rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-sm text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white sm:text-base"
                  />

                  <input
                    name="zipcode"
                    type="text"
                    placeholder="Zip Code"
                    required
                    className="min-w-0 rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-sm text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white sm:text-base"
                  />
                </div>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Preferred service, date, time, and booking notes"
                  required
                  className="min-w-0 resize-none rounded-2xl border border-[#f3d9df] bg-[#fffafd] px-4 py-3 text-sm text-[#2b1f24] outline-none transition placeholder:text-[#a47b86] focus:border-[#e88aa3] focus:bg-white sm:text-base"
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#e88aa3] px-8 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(232,138,163,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d96f8d] disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit"
                  >
                    {loading ? "Sending..." : "Request Appointment"}
                  </button>

                  <p className="text-center text-xs leading-6 text-[#a47b86] sm:text-right">
                    Private replies. Clear next steps.
                  </p>
                </div>

                {status && (
                  <div className="rounded-2xl border border-[#f3d9df] bg-[#fff1f5] px-4 py-3 text-sm leading-6 text-[#7b5d67]">
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, href, icon }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex min-w-0 items-center justify-between gap-3 rounded-[1.25rem] border border-[#f3d9df] bg-[#fffafd] px-3.5 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:bg-white sm:rounded-[1.4rem] sm:px-5 sm:py-4"
    >
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f3d9df] bg-white sm:h-12 sm:w-12">
          <Image src={icon} alt={label} width={22} height={22} className="h-5 w-5 object-contain sm:h-[22px] sm:w-[22px]" />
        </div>

        <div className="min-w-0">
          <p className="text-xs text-[#a47b86] sm:text-sm">{label}</p>
          <p className="truncate text-sm font-medium text-[#2b1f24] sm:text-base">
            {value}
          </p>
        </div>
      </div>

      <span className="shrink-0 text-xs font-medium text-[#e88aa3] sm:text-sm">
        Open
      </span>
    </a>
  );
}