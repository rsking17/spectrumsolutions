import { createFileRoute, Link } from "@tanstack/react-router";
import warehouse from "@/assets/warehouse.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spectrum Solutions — Protective & Returnable Packaging" },
      { name: "description", content: "15+ years designing, producing and distributing protective packaging for automotive, steel, defence, power and FMCG." },
      { property: "og:title", content: "Spectrum Solutions — Protective & Returnable Packaging" },
      { property: "og:description", content: "Packaging that fits the product and fits the logistics." },
    ],
  }),
  component: Index,
});

const industries = ["Distribution & Logistics", "Automobile", "Steel Industry", "Defence & Aeronautical", "Power Sector", "FMCG & Retail"];
const centres = ["Hosur", "Chennai", "Chakan", "Pithampur", "Sanand", "Alwar", "Manesar", "Pant Nagar"];
const colors = ["bg-spec-green", "bg-spec-cyan", "bg-spec-yellow", "bg-spec-red"];

const contacts = [
  { label: "Call us", value: "+91 81974 44479", href: "tel:+918197444479", color: "bg-spec-green" },
  { label: "Corporate office", value: "corporate@spectrumsolutions.org.in", href: "mailto:corporate@spectrumsolutions.org.in", color: "bg-spec-cyan" },
  { label: "Sales enquiries", value: "sales@spectrumsolutions.org.in", href: "mailto:sales@spectrumsolutions.org.in", color: "bg-spec-red" },
];

function Index() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-charcoal text-charcoal-foreground">
        <img src={warehouse.url} alt="Spectrum Solutions warehouse with returnable containers" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-spec-yellow">15+ years in packaging</p>
          <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">Packaging that fits the product. And the logistics.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Design, production and distribution of protective and returnable packaging systems for India's leading manufacturers.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/careers" className="rounded bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Join our team</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl">Industries we serve</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i, n) => (
            <div key={i} className="flex items-center gap-4 rounded border bg-card p-5">
              <span className={`h-10 w-2 ${colors[n % 4]}`} />
              <span className="font-semibold">{i}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Our network</h2>
            <p className="mt-4 text-muted-foreground">Manufacturing units in Sanand and Rajkot, with operational centres close to our customers.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {centres.map((c) => (
              <span key={c} className="rounded-full border bg-background px-4 py-2 text-sm font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
        <h2 className="text-3xl">Get in touch</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} className="flex flex-col overflow-hidden rounded border bg-card transition hover:border-primary">
              <span className={`h-1.5 ${c.color}`} />
              <span className="flex flex-1 flex-col p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c.label}</span>
                <span className="mt-3 break-words font-semibold">{c.value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
