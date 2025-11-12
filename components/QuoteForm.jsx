import ZenbookWidget from "./ZenbookWidget";

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

        <ZenbookWidget
          wrapperClassName="mx-auto w-full max-w-3xl"
          placeholder={
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-slate-500 shadow-sm">
              <div className="flex h-[650px] flex-col items-center justify-center space-y-4 text-center">
                <span className="inline-flex h-10 w-10 animate-spin items-center justify-center rounded-full border-2 border-slate-300 border-t-primary-500" />
                <p className="text-lg font-medium">
                  Booking calendar loads once you reach this section.
                </p>
                <p className="text-sm text-slate-400">
                  Scroll a little further or tap anywhere to load the scheduler.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}
