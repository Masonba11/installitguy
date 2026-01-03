import QuoteFormWithIP from "./QuoteFormWithIP";

export default function QuoteForm({
  title = "Get Your Free Quote",
  subtitle = "Fill out the form below and we'll get back to you soon",
  className = "",
}) {
  return (
    <QuoteFormWithIP title={title} subtitle={subtitle} className={className} />
  );
}
