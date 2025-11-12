import dynamic from "next/dynamic";

const ZenbookerEmbed = dynamic(() => import("./ZenbookerEmbed"), {
  ssr: false,
});

export default function QuoteForm({
  title = "Book Your Service",
  subtitle = "Choose a time that works for you and we'll confirm right away",
  className = "",
}) {
  return (
    <section
      id="quote-form"
      className={`py-16 bg-white ${className}`.trim()}
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
        <ZenbookerEmbed />
      </div>
    </section>
  );
}
