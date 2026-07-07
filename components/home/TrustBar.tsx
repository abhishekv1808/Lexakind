const STATS = [
  { value: '50K+', label: 'Consultations delivered' },
  { value: '25K+', label: 'Cases resolved' },
  { value: '30K+', label: 'Happy clients served' },
  { value: '1K+', label: 'Cities covered' },
];

export function TrustBar() {
  return (
    <section className="bg-blk-2 border-t border-white/7">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 px-2 md:px-7 py-3 md:py-0 ${
                i < STATS.length - 1 ? 'md:border-r md:border-white/7' : ''
              }`}
            >
              <p className="font-display text-[22px] md:text-[28px] text-ora font-bold leading-none">
                {stat.value}
              </p>
              <p className="mt-1.5 font-body text-[12px] text-muted font-light leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
