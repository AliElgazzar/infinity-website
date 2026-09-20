export default function Loading() {
  return (
    <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-orange to-electric"
      />
      <div className="noise-overlay opacity-[0.04]" />
      <div className="relative flex flex-col items-center gap-5" role="status" aria-live="polite">
        <span className="relative flex size-12 items-center justify-center border border-white/20">
          <span className="pulse-dot size-2 rounded-full bg-orange" />
          <span
            aria-hidden="true"
            className="absolute inset-0 border border-orange/30"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
        </span>
        <span className="font-mono-tech text-[0.68rem] tracking-[0.22em] text-white/55 uppercase">
          Loading systems
        </span>
      </div>
    </div>
  );
}
