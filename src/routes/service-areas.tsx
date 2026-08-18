import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { site } from "@/data/site";
import { PageHero, CTASection, SectionHeading, GoldButton } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas | Kang Constructions Inc" },
      {
        name: "description",
        content:
          "Kang Constructions Inc serves Ottawa, Timmins, Sudbury, Toronto and nearby Ontario communities with residential and commercial property services.",
      },
      { property: "og:title", content: "Service Areas | Kang Constructions Inc" },
      { property: "og:description", content: "Proudly serving Ontario communities across multiple regions." },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: ServiceAreasPage,
});

const details: Record<string, string> = {
  Ottawa: "Residential and commercial work across the Ottawa region, from interior finishing to exterior maintenance.",
  Timmins: "Construction, renovation and property care services for homes and businesses in Timmins.",
  Sudbury: "Full-service support for Sudbury properties, including cleaning and seasonal grounds care.",
  Toronto: "Commercial fit-up, renovation and maintenance work plus residential projects in the Toronto area.",
  "Nearby Areas": "Communities near our service regions — contact us to confirm coverage for your location.",
};

function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Proudly Serving Ontario Communities"
        subtitle="We work with residential and commercial clients across several Ontario regions, and welcome enquiries from surrounding communities."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <div className="glass-panel relative aspect-square overflow-hidden rounded-3xl p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_65%)]" />
              <svg viewBox="0 0 400 400" className="relative h-full w-full" role="img" aria-label="Abstract map of Ontario service areas">
                <defs>
                  <linearGradient id="areaGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.72 0.12 78)" />
                    <stop offset="100%" stopColor="oklch(0.93 0.12 95)" />
                  </linearGradient>
                </defs>
                <path
                  d="M70 90 L180 55 L300 85 L340 170 L300 250 L235 330 L150 320 L95 250 L60 170 Z"
                  fill="none"
                  stroke="url(#areaGold)"
                  strokeWidth="2"
                  opacity="0.7"
                />
                {[
                  { x: 300, y: 250, l: "Ottawa" },
                  { x: 165, y: 100, l: "Timmins" },
                  { x: 190, y: 195, l: "Sudbury" },
                  { x: 240, y: 300, l: "Toronto" },
                ].map((p) => (
                  <g key={p.l}>
                    <circle cx={p.x} cy={p.y} r="16" fill="url(#areaGold)" opacity="0.14" />
                    <circle cx={p.x} cy={p.y} r="5" fill="url(#areaGold)" />
                    <text x={p.x + 14} y={p.y + 4} fill="currentColor" className="fill-foreground text-[13px]">
                      {p.l}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <SectionHeading eyebrow="Where We Work" title="Regions we cover" />
            <div className="mt-8 space-y-3">
              {site.areas.map((a) => (
                <div
                  key={a}
                  className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-gold/50"
                >
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <MapPin className="h-4 w-4 text-gold" />
                    {a}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{details[a]}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <GoldButton to="/contact" variant="outline">
                Not listed? Contact us
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Outside These Cities?"
        subtitle="Get in touch and we'll let you know whether we can cover your location for residential or commercial work."
      />
    </>
  );
}
