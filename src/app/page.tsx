import Hero from "./components/hero";

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* Additional homepage-specific content */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="mt-4">Ting Global Academy is revolutionizing education...</p>
      </section>
    </div>
  );
}
