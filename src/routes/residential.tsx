import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import interior from "@/assets/interior.jpg";
import { services } from "@/data/site";
import { PageHero, CTASection, SectionHeading } from "@/components/ui-kit";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Services | Kang Constructions Inc" },
      {
        name: "description",
        content:
          "Home renovations, repairs, drywall, plaster, painting, flooring, roofing, siding, cleaning and lawn care for homeowners across Ontario.",
      },
      { property: "og:title", content: "Residential Services | Kang Constructions Inc" },
      { property: "og:description", content: "Interior and exterior home improvement and maintenance services." },
      { property: "og:url", content: "/residential" },
    ],
    links: [{ rel: "canonical", href: "/residential" }],
  }),
  component: ResidentialPage,
});

const highlights = [
  "Home renovations and remodelling support",
  "Interior repairs and finishing",
  "Exterior improvements and protection",
  "Basement and room build-outs",
  "Seasonal cleaning and clean-ups",
  "Ongoing lawn and property maintenance",
];

function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Improve and maintain your home with one trusted team"
        subtitle="From interior finishing to exterior protection and ongoing upkeep, Kang Constructions Inc helps homeowners keep their properties looking and performing their best."
        image={interior}
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="For Homeowners"
              title="Renovations, repairs and everyday property care"
              subtitle="Whether you're updating a single room, refreshing the exterior or keeping the grounds tidy through the season, we handle the work with the same standard of care."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={interior}
              alt="Freshly renovated residential room with painted walls and hardwood floor"
              width={1600}
              height={1000}
              loading="lazy"
              className="rounded-3xl border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-border/60 bg-[var(--gradient-dark)]">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading center eyebrow="Home Services" title="All eight services, available for homes" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 55}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Planning Work on Your Home?" />
    </>
  );
}
