export default function Home() {
  return (
    <div className="min-h-screen bg-brand-off-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-brand-charcoal mb-6">
          Build With Shannon
        </h1>
        <p className="text-xl text-brand-charcoal text-opacity-70 max-w-2xl mx-auto mb-12">
          Digital home for building, teaching, systems thinking, and offers.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-brand-primary text-brand-off-white font-medium rounded-[var(--radius-btn)] hover:opacity-90 transition-opacity">
            Explore the Site
          </button>
          <button className="px-8 py-3 border-2 border-brand-primary text-brand-primary font-medium rounded-[var(--radius-btn)] hover:bg-brand-primary hover:text-brand-off-white transition-colors">
            Build With Shannon
          </button>
        </div>
      </div>
    </div>
  );
}
