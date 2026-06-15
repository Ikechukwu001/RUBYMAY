import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e8e2da] bg-white">

      {/* CTA strip */}
      <div className="border-b border-[#e8e2da] bg-[#f9f7f5]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
                Private Luxury Care
              </p>
              <h3 className="mt-4 font-['Cormorant_Garamond'] text-[clamp(1.8rem,3.5vw,2.8rem)] font-light italic leading-[1.1] text-[#1a1612]">
                Ready to relax in a soft, personal space?
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#6b6259]">
                Reserve your session and enjoy a one-on-one experience designed
                around privacy, comfort, and complete ease.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/prices"
                className="inline-flex items-center justify-center rounded-full bg-[#c4622d] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#a34e22]"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#e8e2da] px-7 py-3.5 text-sm font-medium text-[#6b6259] transition hover:bg-[#f3f0ec]"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c4622d] text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                RL
              </div>
              <div>
                <p className="font-['Cormorant_Garamond'] text-2xl font-semibold italic text-[#1a1612]">
                  RubyMayTherapeutics Relax & Renew
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.3em] text-[#9e9389]">
                  Calm · Warmth · Renewal
                </p>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#6b6259]">
              A one-person wellness experience built around attentive care,
              soothing atmosphere, privacy, and tailored body relaxation by
              appointment.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Private sessions", "Serene setting", "By appointment"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e8e2da] px-3.5 py-1.5 text-xs text-[#6b6259]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-[#1a1612]">Explore</h4>
            <div className="mt-2 h-px w-6 bg-[#c4622d]" />
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Treatments" },
                { href: "/prices", label: "Pricing & Payment" },
                { href: "/gallery", label: "Gallery" },
                { href: "/review", label: "Reviews" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6b6259] transition hover:text-[#c4622d]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold text-[#1a1612]">Contact</h4>
            <div className="mt-2 h-px w-6 bg-[#c4622d]" />
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.28em] text-[#9e9389]">Phone</span>
                <a href="tel:+14054316088" className="mt-1 inline-block text-[#6b6259] transition hover:text-[#c4622d]">
                  303- 437-7274
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.28em] text-[#9e9389]">Email</span>
                <a href="mailto: Rubymay.service@gmail.com" className="mt-1 inline-block break-all text-[#6b6259] transition hover:text-[#c4622d]">
                   Rubymay.service@gmail.com
                </a>
              </div>
              <div className="rounded-xl border border-[#e8e2da] p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#c4622d]">
                  Booking Note
                </p>
                <p className="mt-3 text-sm leading-7 text-[#6b6259]">
                  To maintain privacy and proper attention, all sessions are
                  handled by appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#e8e2da] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#9e9389]">
            © {currentYear} RubyMayTherapeutics Relax & Renew. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#9e9389]">
            <Link href="/termsandconditions" className="transition hover:text-[#c4622d]">
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline">·</span>
            <span>Calm. Private. Professional.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}