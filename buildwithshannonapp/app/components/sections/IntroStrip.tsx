export default function IntroStrip() {
  return (
    <section
      className="relative h-14 overflow-hidden bg-[#0F0E1A]"
      style={{ marginTop: '-1px' }}
    >
      {/* Off-white right section — diagonal left edge */}
      <div
        className="absolute inset-0 bg-[#F4F3F9]"
        style={{ clipPath: 'polygon(52% 0%, 100% 0%, 100% 100%, 46% 100%)' }}
      />

      {/* Tagline — in the off-white zone */}
      <div className="absolute inset-0 flex items-center" style={{ zIndex: 4 }}>
        <div className="flex-none" style={{ width: '56%' }} />
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#3D3B4F] whitespace-nowrap">
          Real builds.&nbsp;&nbsp;Real understanding.&nbsp;&nbsp;No black boxes.
        </p>
      </div>
    </section>
  );
}
