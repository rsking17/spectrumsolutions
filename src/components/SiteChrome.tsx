import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="spectrum-bar h-1" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg tracking-wide text-foreground">
          SPECTRUM <span className="text-primary">SOLUTIONS</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            About Us
          </Link>
          <Link to="/careers" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Careers
          </Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg">SPECTRUM SOLUTIONS</p>
          <p className="mt-2 text-sm opacity-70">We make good ideas happen · Manufacturing at Sanand &amp; Rajkot</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.15em] text-spec-yellow">Phone</p>
          <a href="tel:+918197444479" className="mt-3 block font-medium hover:opacity-80">+91 81974 44479</a>
        </div>
        <div className="text-sm">
          <p className="font-semibold uppercase tracking-[0.15em] text-spec-yellow">Email</p>
          <a href="mailto:corporate@spectrumsolutions.org.in" className="mt-3 block font-medium hover:opacity-80">corporate@spectrumsolutions.org.in</a>
          <a href="mailto:sales@spectrumsolutions.org.in" className="mt-1 block font-medium hover:opacity-80">sales@spectrumsolutions.org.in</a>
        </div>
      </div>
      <div className="spectrum-bar h-1" />
    </footer>
  );
}
