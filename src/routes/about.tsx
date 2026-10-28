import { createFileRoute, Link } from "@tanstack/react-router";
import racks from "@/assets/racks.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Spectrum Solutions" },
      { name: "description", content: "Spectrum Solutions: 15+ years designing, producing and distributing protective packaging for India's leading manufacturers." },
      { property: "og:title", content: "About Us — Spectrum Solutions" },
      { property: "og:description", content: "We make good ideas happen — protective packaging built for the severest transport and storage conditions." },
      { property: "og:url", content: "https://cargo-career-compass.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://cargo-career-compass.lovable.app/about" }],
  }),
  component: About,
});

const customers = ["Ashok Leyland", "Tata Motors", "TVS", "Bosch", "Ather", "Tenneco"];
const colors = ["bg-spec-green", "bg-spec-cyan", "bg-spec-yellow", "bg-spec-red"];

const principles = [
  { title: "Reduce", text: "Right-sized designs that use less material without compromising protection." },
  { title: "Reuse", text: "Returnable packaging systems that circulate for years, not single trips." },
  { title: "Recycle", text: "Materials chosen so every pack can re-enter the value chain at end of life." },
];

function About() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-charcoal text-charcoal-foreground">
        <img src={racks.url} alt="Spectrum Solutions warehouse racking" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-spec-yellow">About Spectrum</p>
          <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">We make good ideas happen.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">A company specialised in the design, production and distribution of packing, packaging products and systems — in the market for more than 15 years.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Our story</h2>
            <p className="mt-4 text-muted-foreground">Spectrum Packaging began its business in the traditional packaging sector and has evolved since then. Building on the experience gained in this field, it has been constantly growing in the sector of safety packing.</p>
            <p className="mt-4 text-muted-foreground">Today we aim at protecting every type of manufactured goods in the severest transport and storage conditions — from design and 3D rendering through to palletisation and delivery.</p>
          </div>
          <div className="grid content-start gap-4">
            {[
              { k: "15+", v: "years in the packaging market" },
              { k: "2", v: "manufacturing units — Sanand & Rajkot" },
              { k: "8", v: "operational centres across India" },
            ].map((s, n) => (
              <div key={s.v} className="flex items-center gap-5 rounded border bg-card p-5">
                <span className={`h-12 w-2 ${colors[n % 4]}`} />
                <div>
                  <p className="font-display text-3xl">{s.k}</p>
                  <p className="text-sm text-muted-foreground">{s.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl">Our customers</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Trusted by India's leading automotive and engineering manufacturers.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {customers.map((c, n) => (
              <div key={c} className="flex items-center gap-4 rounded border bg-card p-5">
                <span className={`h-10 w-2 ${colors[n % 4]}`} />
                <span className="font-semibold">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl">Our environmental commitment</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {principles.map((p, n) => (
            <div key={p.title} className="overflow-hidden rounded border bg-card">
              <span className={`block h-1.5 ${colors[n % 4]}`} />
              <div className="p-6">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/contact" className="rounded bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Talk to us</Link>
        </div>
      </section>
    </main>
  );
}
