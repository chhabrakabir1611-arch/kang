import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import commercialImg from "@/assets/commercial.jpg";
import { services } from "@/data/site";
import { PageHero, CTASection, SectionHeading } from "@/components/ui-kit";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Services | Kang Constructions Inc" },
      {
        name: "description",
        content:
          "Construction, renovation, drywall, painting, flooring, roofing, siding, cleaning and grounds maintenance for offices, retail and rental properties in Ontario.",
      },
      { property: "og:title", content: "Commercial Services | Kang Constructions Inc" },
      { property: "og:description", content: "Professional property services for businesses and property managers." },
      { property: "og:url", content: "/commercial" },
    ],
    links: [{ rel: "canonical", href: "/commercial" }],
  }),
  component: CommercialPage,
});

const sectors = [
  { t: "Offices", d: "Fit-ups, partition walls, painting, flooring and recurring cleaning." },
  { t: "Retail Spaces", d: "Refresh work and repairs scheduled around trading hours." },
  { t: "Rental Properties", d: "Turnover repairs, painting and cleaning between tenants." },
  { t: "Commercial Buildings", d: "Roofing, siding, exterior maintenance and grounds care." },
];

const capabilities = [
  "Construction and renovation work",
  "Drywall, plaster and painting",
  "Flooring for high-traffic areas",
  "Roofing and siding maintenance",
  "Commercial cleaning programs",
  "Lawn and exterior upkeep",
];

function CommercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial"
        title="Property services for businesses, landlords and property managers"
        subtitle="Kang Constructions Inc supports commercial clients with construction, renovation, maintenance, cleaning and grounds care — scheduled to keep disruption low."
        image={commercialImg}
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Who We Serve" title="Built for commercial property needs" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-7">
                  <h3 className="text-lg font-bold text-gold">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img
                src={commercialImg}
                alt="Commercial building exterior with lit reception at night"
                width={1600}
                height={1000}
                loading="lazy"
                className="rounded-3xl border border-border object-cover"
              />
            </Reveal>
            <Reveal delay={110}>
              <SectionHeading
                eyebrow="Capabilities"
                title="A single point of contact for the whole property"
                subtitle="Reduce the number of contractors you coordinate. We handle construction and finishing work and can continue with maintenance, cleaning and exterior care."
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/60 bg-[var(--gradient-dark)]">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading center eyebrow="Commercial Services" title="All eight services, available for business properties" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 55}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Discuss Your Commercial Property" />
    </>
  );
}
