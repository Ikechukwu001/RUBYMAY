export const metadata = {
  title: "Terms & Conditions | Olivia Body Rub Service",
  description:
    "Terms and conditions for booking, payment, cancellations, and professional conduct.",
};

const sections = [
  {
    title: "Booking",
    items: [
      "Appointments are subject to availability and are only confirmed after direct approval.",
      "Please provide accurate contact details when making a booking request.",
      "Arriving late may reduce your session time in order to avoid affecting other appointments.",
      "Respectful and clear communication is required throughout the booking process.",
    ],
  },
  {
    title: "Payment",
    items: [
      "Accepted payment methods may include Cash App, Crypto, Chime, Zelle, Apple Pay, Venmo, PayPal, and bank transfer.",
      "Payment instructions are shared only after a booking request has been reviewed and accepted.",
      "Full or partial payment may be required to secure an appointment, depending on the booking arrangement.",
      "Payments already processed may be subject to the cancellation policy below.",
    ],
  },
  {
    title: "Cancellations & Rescheduling",
    items: [
      "At least 24 hours notice is requested for cancellations or rescheduling.",
      "Late cancellations may be subject to a cancellation fee.",
      "Missed appointments or no-shows may result in loss of deposit or refusal of future bookings.",
      "Rescheduling requests are handled based on availability.",
    ],
  },
  {
    title: "Professional Standards",
    items: [
      "All services are provided in a respectful, professional, and private setting.",
      "Any inappropriate, aggressive, unsafe, or disrespectful behavior may result in immediate termination of the appointment.",
      "The service provider reserves the right to refuse or end a session when necessary for safety, comfort, or professionalism.",
      "Client privacy and discretion are treated with care and respect.",
    ],
  },
  {
    title: "Health & Comfort",
    items: [
      "Clients should communicate any relevant discomfort, pressure preference, or physical concerns before and during the session.",
      "If you are feeling unwell, please reschedule your appointment in advance where possible.",
      "Sessions are tailored to comfort, but results and preferences may vary from one person to another.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <section className="relative w-full overflow-hidden bg-[#fffafc] py-20 md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-[#ffe1ea]/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-[#fff0f6]/80 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e88aa3]">
            Policies
          </p>

          <h1 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#2b1f24] md:text-5xl">
            Terms & Conditions
          </h1>

          <div className="mt-4 h-[2px] w-24 rounded-full bg-[#e88aa3]" />

          <p className="mt-6 text-base leading-8 text-[#7b5d67] md:text-lg">
            Please read these terms carefully before booking. By requesting or
            confirming an appointment, you agree to the guidelines below.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.75rem] border border-[#f3d9df] bg-white/75 p-7 shadow-[0_18px_50px_rgba(232,138,163,0.10)] backdrop-blur md:p-8"
            >
              <h2 className="font-serif text-2xl text-[#2b1f24]">
                {section.title}
              </h2>

              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-[#7b5d67] md:text-[15px]"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#e88aa3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 rounded-[1.5rem] border border-[#f3d9df] bg-gradient-to-b from-[#fff1f5] to-[#fffafc] p-6 shadow-[0_14px_38px_rgba(232,138,163,0.08)]">
          <p className="text-sm leading-7 text-[#7b5d67]">
            These terms may be updated from time to time to reflect business
            practices, booking policies, or operational changes.
          </p>

          <p className="mt-4 text-sm font-medium text-[#2b1f24]">
            Last updated:{" "}
            <span className="font-normal text-[#7b5d67]">
              {lastUpdated}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}