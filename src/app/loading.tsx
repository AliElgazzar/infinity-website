export default function Loading() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center bg-navy text-white">
      <div className="flex flex-col items-center gap-4" role="status" aria-live="polite">
        <span className="relative flex size-10 items-center justify-center border border-white/20">
          <span className="pulse-dot size-2 rounded-full bg-orange" />
        </span>
        <span className="font-mono-tech text-[0.68rem] tracking-[0.2em] text-white/60 uppercase">
          Loading systems
        </span>
      </div>
    </div>
  );
}
