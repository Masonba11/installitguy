export default function HeroStats({ className = "" }) {
  return (
    <div className={`rounded-2xl border border-white/20 bg-white/5 p-6 text-white ${className}`}>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#8BCB6B]">30+</h3>
          <p className="text-xs md:text-sm text-slate-200 mt-1">years helping homeowners</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#8BCB6B]">150+</h3>
          <p className="text-xs md:text-sm text-slate-200 mt-1">projects completed each month</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#8BCB6B]">60,000+</h3>
          <p className="text-xs md:text-sm text-slate-200 mt-1">homes served across the Carolinas</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#8BCB6B]">Over 240</h3>
          <p className="text-xs md:text-sm text-slate-200 mt-1">Google reviews</p>
        </div>
      </div>
    </div>
  );
}

