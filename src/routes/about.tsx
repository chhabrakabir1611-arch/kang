import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import { PageHero, SectionHeading, CTASection } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";
import { site, services } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Kang Constructions Inc" },
      {
        name: "description",
        content:
          "Kang Constructions Inc provides construction, renovation and property services for residential and commercial clients across Ontario, focused on quality workmanship.",
      },
      { property: "og:title", content: "About Us | Kang Constructions Inc" },
      {
        property: "og:description",
        content: "Learn about Kang Constructions Inc, our mission and our residential and commercial expertise.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A construction and property services company built on doing the job properly"
        subtitle="Kang Constructions Inc serves residential and commercial clients with construction, renovation, finishing and ongoing property maintenance services."
        image={hero}
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="One team across the full life of a property"
              subtitle="We take on drywall, plaster, painting, house siding, flooring and roofing, and continue looking after properties with professional cleaning and lawn care. That range means fewer contractors to coordinate and a more consistent result."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Whether the work is a single room repair, a full renovation or recurring maintenance for a commercial
              property, our approach is the same: understand the scope, prepare properly, communicate clearly and
              finish clean.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={interior}
              alt="Interior space finished with smooth walls and new flooring"
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
          <SectionHeading center eyebrow="Our Mission" title="Quality workmanship and results clients can rely on" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Quality First",
                d: "Preparation, materials and finishing details decide how work looks in a year — not just on handover day.",
              },
              {
                t: "Customer Focused",
                d: "We listen to what the property needs, explain options plainly and keep you informed throughout.",
              },
              {
                t: "Reliable Results",
                d: "Consistent standards on every visit, whether it's a one-time project or ongoing maintenance.",
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-8">
                  <h3 className="text-xl font-bold text-gold">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Expertise" title="Residential and commercial capability" />
            <ul className="mt-8 space-y-3">
              {services.map((s) => (
                <li key={s.slug} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="font-semibold text-foreground">{s.title}</span> — {s.short}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Coverage" title="Where we work" />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {site.areas.map((a) => (
                <div key={a} className="rounded-xl border border-border bg-card/50 px-4 py-4 text-sm font-medium">
                  {a}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Outside these communities? Get in touch and we'll let you know whether we can cover your location.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Work With Kang Constructions Inc" />
    </>
  );
}
