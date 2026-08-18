import { createFileRoute } from "@tanstack/react-router";
import commercialImg from "@/assets/commercial.jpg";
import { services } from "@/data/site";
import { PageHero, CTASection, SectionHeading } from "@/components/ui-kit";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Kang Constructions Inc" },
      {
        name: "description",
        content:
          "Drywall, plaster, painting, house siding, flooring, roofing, cleaning and lawn care — available for residential and commercial properties across Ontario.",
      },
      { property: "og:title", content: "Our Services | Kang Constructions Inc" },
      {
        property: "og:description",
        content: "Eight professional construction and property services for homes and businesses.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Construction, finishing and property care under one company"
        subtitle="Every service below is available for both residential and commercial properties."
        image={commercialImg}
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            center
            eyebrow="What We Do"
            title="Eight core services"
            subtitle="Select any service to see how we approach it for homes and for commercial properties."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 55}>
                <ServiceCard service={s} detailed />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
