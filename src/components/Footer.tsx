import { Link } from "@tanstack/react-router";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { services, site } from "@/data/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "All Services" },
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/70 bg-[var(--gradient-dark)]">
      <div className="absolute inset-x-0 top-0 h-px gold-hairline" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kang Constructions Inc logo"
              width={56}
              height={56}
              loading="lazy"
              className="h-12 w-12 rounded-md object-contain"
            />
            <span className="font-display text-lg font-bold">Kang Constructions Inc</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Construction, renovation and property services for residential and commercial clients across Ontario.
            Quality workmanship, reliable scheduling and clean, professional results.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kang Constructions Inc on Facebook"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 text-muted-foreground hover:text-gold">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="flex items-start gap-3 break-all text-muted-foreground hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.areas.join(" · ")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kang Constructions Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
