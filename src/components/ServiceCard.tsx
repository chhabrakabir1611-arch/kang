import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "./ServiceIcon";
import type { Service } from "@/data/site";

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]"
    >
      <div className="absolute inset-x-0 top-0 h-px scale-x-0 gold-hairline transition-transform duration-500 group-hover:scale-x-100" />
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <ServiceIcon name={service.icon} className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-gold" />
      </div>
      <h3 className="mt-5 text-xl font-bold transition-colors duration-300 group-hover:text-gold">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      {detailed ? (
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {service.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {b}
            </li>
          ))}
        </ul>
      ) : null}
      <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
        Residential &amp; Commercial
      </span>
    </Link>
  );
}
