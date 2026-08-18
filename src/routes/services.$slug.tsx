import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CheckCircle2, Home, Building2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { getService, services } from "@/data/site";
import { PageHero, CTASection, SectionHeading, GoldButton } from "@/components/ui-kit";
import { ServiceIcon } from "@/components/ServiceIcon";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service Unavailable | Kang Constructions Inc" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const title = `${s.title} Services | Kang Constructions Inc`;
    return {
      meta: [
        { title },
        { name: "description", content: `${s.short} Residential and commercial ${s.title.toLowerCase()} services in Ottawa, Timmins, Sudbury, Toronto and nearby areas.` },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center">
      <h1 className="text-3xl font-bold">This service page didn't load</h1>
      <p className="mt-4 text-muted-foreground">Please try again or browse all services.</p>
      <div className="mt-8 flex justify-center">
        <GoldButton to="/services">All Services</GoldButton>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center">
      <h1 className="text-3xl font-bold">Service not found</h1>
      <p className="mt-4 text-muted-foreground">The service you're looking for isn't listed.</p>
      <div className="mt-8 flex justify-center">
        <GoldButton to="/services">View All Services</GoldButton>
      </div>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={`${service.title} · Residential & Commercial`}
        title={`Professional ${service.title} Services`}
        subtitle={service.short}
        image={hero}
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">About our {service.title.toLowerCase()} work</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{service.intro}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We take on {service.title.toLowerCase()} work for both residential and commercial properties across
              Ottawa, Timmins, Sudbury, Toronto and nearby areas.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-panel rounded-2xl p-7">
              <h3 className="text-lg font-bold text-gold">Key Benefits</h3>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-border/60 bg-[var(--gradient-dark)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2">
          {[
            { icon: Home, label: "Residential Applications", items: service.residential },
            { icon: Building2, label: "Commercial Applications", items: service.commercial },
          ].map((block, i) => (
            <Reveal key={block.label} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card/50 p-8">
                <block.icon className="h-6 w-6 text-gold" />
                <h3 className="mt-5 text-xl font-bold">{block.label}</h3>
                <ul className="mt-5 space-y-3">
                  {block.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading center eyebrow="Our Process" title={`How we handle ${service.title.toLowerCase()} projects`} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-7">
                  <span className="font-display text-3xl font-bold text-gold/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-bold">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/60">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Why Kang Constructions Inc"
            title={`A careful approach to ${service.title.toLowerCase()}`}
            subtitle="We prepare properly, work tidily and check the result before we call a job finished — on homes and commercial sites alike."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Residential & commercial", "Clear communication", "Tidy work sites", "Consistent standards"].map((t) => (
              <div key={t} className="rounded-xl border border-border bg-card/50 px-5 py-5 text-sm font-medium">
                {t}
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-xl font-bold">Related Services</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group rounded-xl border border-border bg-card/50 px-5 py-5 text-sm font-medium transition-colors hover:border-gold/50 hover:text-gold"
              >
                {r.title}
                <span className="block text-xs text-muted-foreground group-hover:text-gold/80">View service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need ${service.title} Work Done?`} />
    </>
  );
}
