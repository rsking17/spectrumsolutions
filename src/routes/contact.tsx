import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Spectrum Solutions" },
      { name: "description", content: "Reach Spectrum Solutions: call +91 81974 44479 or email corporate@spectrumsolutions.org.in / sales@spectrumsolutions.org.in." },
      { property: "og:title", content: "Contact Us — Spectrum Solutions" },
      { property: "og:description", content: "Call +91 81974 44479 or email our corporate and sales teams." },
      { property: "og:url", content: "https://cargo-career-compass.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://cargo-career-compass.lovable.app/contact" }],
  }),
  component: Contact,
});

const channels = [
  { label: "Call us", value: "+91 81974 44479", href: "tel:+918197444479", color: "bg-spec-green", note: "For anything urgent — we pick up." },
  { label: "Corporate office", value: "corporate@spectrumsolutions.org.in", href: "mailto:corporate@spectrumsolutions.org.in", color: "bg-spec-cyan", note: "General enquiries, partnerships and careers." },
  { label: "Sales enquiries", value: "sales@spectrumsolutions.org.in", href: "mailto:sales@spectrumsolutions.org.in", color: "bg-spec-red", note: "Quotes, designs and new packaging projects." },
];

const centres = ["Hosur", "Chennai", "Chakan", "Pithampur", "Sanand", "Alwar", "Manesar", "Pant Nagar"];

function Contact() {
  return (
    <main>
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-spec-yellow">Contact us</p>
          <h1 className="max-w-3xl text-4xl leading-tight md:text-6xl">Let's talk about your packaging.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Call, email or visit one of our centres — manufacturing at Sanand &amp; Rajkot, operations across India.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <a key={c.label} href={c.href} className="flex flex-col overflow-hidden rounded border bg-card transition hover:border-primary">
              <span className={`h-1.5 ${c.color}`} />
              <span className="flex flex-1 flex-col p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">{c.label}</span>
                <span className="mt-3 break-words font-semibold">{c.value}</span>
                <span className="mt-3 text-sm text-muted-foreground">{c.note}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Where to find us</h2>
            <p className="mt-4 text-muted-foreground">Manufacturing units in Sanand and Rajkot, with operational centres close to our customers.</p>
            <p className="mt-4 text-muted-foreground">Looking to join the team instead? <Link to="/careers" className="font-semibold text-primary hover:underline">See open roles</Link>.</p>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {centres.map((c) => (
              <span key={c} className="rounded-full border bg-background px-4 py-2 text-sm font-medium">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
