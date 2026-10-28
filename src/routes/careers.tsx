import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import racks from "@/assets/racks.jpg.asset.json";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Spectrum Solutions" },
      { name: "description", content: "Open roles at Spectrum Solutions: Logistics Coordinator, Logistics Supervisor and Database Administrator. Apply with your resume." },
      { property: "og:title", content: "Careers at Spectrum Solutions" },
      { property: "og:description", content: "Apply for Logistics Coordinator, Logistics Supervisor or Database Administrator roles." },
    ],
  }),
  component: Careers,
});

const HR_EMAIL = "corporate@spectrumsolutions.org.in";
const HR_PHONE = "+91 81974 44479";

const jobs = [
  {
    title: "Logistics Coordinator",
    meta: "Full-time · Chennai · 1–3 yrs",
    color: "bg-spec-green",
    points: ["Plan and track inbound/outbound shipments of returnable packaging", "Coordinate with transporters, warehouses and customer plants", "Maintain dispatch records, e-way bills and delivery documents"],
  },
  {
    title: "Logistics Supervisor",
    meta: "Full-time · Hosur / Chennai · 4–7 yrs",
    color: "bg-spec-cyan",
    points: ["Lead warehouse and dispatch teams across shifts", "Own fleet scheduling, packaging rotation and turnaround KPIs", "Drive safety, 5S and cost-reduction initiatives"],
  },
  {
    title: "Database Administrator",
    meta: "Full-time · Chennai · 3–6 yrs",
    color: "bg-spec-red",
    points: ["Install, tune and secure SQL Server / PostgreSQL databases", "Manage backups, recovery and high availability", "Support ERP and inventory-tracking systems"],
  },
];

const steps = ["Submit your resume", "HR screening call", "Technical / functional interview", "Final discussion & offer"];

function Careers() {
  const [role, setRole] = useState("Logistics Coordinator");
  const [file, setFile] = useState<File | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!file) return setError("Please attach your resume.");
    if (file.size > 5 * 1024 * 1024) return setError("Resume must be under 5 MB.");
    setError("");
    const body = `Position: ${role}\nName: ${f.get("name")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\nExperience: ${f.get("exp")} years\n\n${f.get("note") || ""}\n\n(Please attach resume: ${file.name})`;
    window.location.href = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(`Application – ${role} – ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-charcoal text-charcoal-foreground">
        <img src={racks.url} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-spec-yellow">Careers</p>
          <h1 className="max-w-2xl text-4xl md:text-5xl">Build the logistics behind India's manufacturing.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl">Open positions</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {jobs.map((j) => (
            <article key={j.title} className="flex flex-col overflow-hidden rounded border bg-card">
              <div className={`h-1.5 ${j.color}`} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl">{j.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{j.meta}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm">
                  {j.points.map((p) => <li key={p} className="border-l-2 pl-3">{p}</li>)}
                </ul>
                <a href="#apply" onClick={() => setRole(j.title)} className="mt-6 rounded bg-primary px-4 py-2.5 text-center font-semibold text-primary-foreground hover:opacity-90">Apply now</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl">Our hiring process</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="rounded bg-background p-6">
                <span className="font-display text-4xl text-primary">0{i + 1}</span>
                <p className="mt-3 font-semibold">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-20">
        <h2 className="text-3xl">Submit your resume</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Applications go to {HR_EMAIL}. Questions about a role? Call {HR_PHONE} or write to sales@spectrumsolutions.org.in.
        </p>
        {sent ? (
          <div className="mt-8 rounded border-l-4 border-primary bg-card p-6">
            <p className="font-semibold">Thanks! Your email app should now be open.</p>
            <p className="mt-2 text-sm text-muted-foreground">Attach your resume ({file?.name}) to the email and send it to {HR_EMAIL}. Our HR team replies within 5 working days.</p>
            <button onClick={() => setSent(false)} className="mt-4 text-sm font-semibold text-primary">Submit another application</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Position" className="sm:col-span-2">
              <select value={role} onChange={(e) => setRole(e.target.value)} className="input">
                {jobs.map((j) => <option key={j.title}>{j.title}</option>)}
              </select>
            </Field>
            <Field label="Full name"><input name="name" required maxLength={100} className="input" /></Field>
            <Field label="Email"><input name="email" type="email" required maxLength={255} className="input" /></Field>
            <Field label="Phone"><input name="phone" type="tel" required pattern="[0-9+ \-]{8,15}" className="input" /></Field>
            <Field label="Years of experience"><input name="exp" type="number" min={0} max={50} required className="input" /></Field>
            <Field label="Resume (PDF / DOC, max 5 MB)" className="sm:col-span-2">
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="input file:mr-4 file:rounded file:border-0 file:bg-secondary file:px-3 file:py-1" />
            </Field>
            <Field label="Cover note (optional)" className="sm:col-span-2"><textarea name="note" rows={4} maxLength={1000} className="input" /></Field>
            {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
            <button className="rounded bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90 sm:col-span-2">Send application</button>
          </form>
        )}
      </section>
    </main>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm font-medium ${className}`}>
      {label}
      {children}
    </label>
  );
}
