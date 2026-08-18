import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { services } from "@/data/site";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/projects", label: "Projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls =
    "relative text-sm font-medium text-foreground/80 transition-colors hover:text-gold data-[status=active]:text-gold";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel border-x-0 border-t-0 py-2" : "border-b border-transparent py-4"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 xl:flex xl:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Kang logo" className="h-10 w-auto rounded-md object-contain" />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight sm:text-lg">
              Kang Constructions
            </span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-gold">Inc</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          {mainLinks.slice(0, 2).map((l) => (
            <Link key={l.to} to={l.to} className={linkCls} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}

          <div className="group relative">
            <Link to="/services" className={`${linkCls} inline-flex items-center gap-1`}>
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="glass-panel overflow-hidden rounded-2xl p-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.slice(2).map((l) => (
            <Link key={l.to} to={l.to} className={linkCls}>
              {l.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="tel:+17052886830"
            aria-label="Call Kang Constructions Inc"
            className="rounded-full border border-gold/40 p-2.5 text-gold"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-gold/40 p-2.5 text-gold"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="absolute inset-x-0 top-full z-50 max-h-[85vh] overflow-y-auto overscroll-contain border-t border-border bg-background px-5 py-6 shadow-2xl xl:hidden">
          <div className="flex flex-col gap-1">
            {mainLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-gold/10 hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-foreground/85"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen ? (
              <div className="ml-3 flex flex-col border-l border-gold/25 pl-3">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-gold"
                >
                  All Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-foreground/75 hover:text-gold"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            ) : null}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
