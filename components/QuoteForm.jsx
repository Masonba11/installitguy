import { useMemo } from "react";

export default function QuoteForm({
  title = "Book Your Service",
  subtitle = "Choose a time that works for you and we'll confirm right away",
  className = "",
}) {
  return (
    <section id="quote-form" className={`py-16 bg-white ${className}`.trim()}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
        <div className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-10 text-slate-600 shadow-sm text-center">
          <p className="text-lg font-medium">
            Ready to choose your time? Head to our booking page to grab a slot.
          </p>
          <a
            href="/book-online.html"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#8BCB6B] px-6 py-3 text-base font-semibold text-[#0f2135] shadow-md transition hover:bg-[#7bb65f]"
          >
            Book Online
          </a>
        </div>
      </div>
    </section>
  );
}
