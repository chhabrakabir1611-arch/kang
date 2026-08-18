import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck, Clock, Users, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import interior from "@/assets/interior.jpg";
import commercialImg from "@/assets/commercial.jpg";
import { services, site } from "@/data/site";
import { GoldButton, Eyebrow, SectionHeading, CTASection } from "@/components/ui-kit";
import { ServiceCard } from "@/components/ServiceCard";
import { BuildJourney } from "@/components/BuildJourney";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kang Constructions Inc | Residential & Commercial Construction" },
      {
        name: "description",
        content:
          "Quality work, reliable service. Drywall, plaster, painting, siding, flooring, roofing, cleaning and lawn care for residential and commercial properties in Ontario.",
      },
      { property: "og:title", content: "Kang Constructions Inc | Residential & Commercial Construction" },
      {
        property: "og:description",
        content:
          "Construction, renovation and property services for homes and businesses across Ottawa, Timmins, Sudbury, Toronto and nearby areas.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const whyChooseUs = [
  { icon: ShieldCheck, title: "Quality Workmanship", text: "Careful preparation and finishing on every job, large or small." },
  { icon: Clock, title: "Reliable Scheduling", text: "Clear timelines and consistent communication from start to finish." },
  { icon: Users, title: "Residential & Commercial", text: "One team for homes, offices, retail units and rental properties." },
  { icon: CheckCircle2, title: "Clean, Professional Finish", text: "We leave sites tidy and walk the work through with you." },
];

function HeroVideo() {
  const videos = ["/video1.mp4"];
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // attempt to play when mounted or when idx changes
    v.load();
    void v.play().catch(() => {});
  }, [idx]);

  return (
    <>
      <video
        ref={ref}
        className="ken-burns absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        autoPlay
        preload="auto"
        loop
        
      >
        <source src={videos[idx]} type="video/mp4" />
      </video>

      {/* Play/Pause control removed; logo moved to navbar */}
    </>
  );
}

function Index() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-32">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        <div className="glow-pulse pointer-events-none absolute -left-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_28%,transparent),transparent_70%)] blur-2xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20">
          <div className="max-w-3xl">
            <div className="reveal-up">
              <Eyebrow>Residential &amp; Commercial · Ontario</Eyebrow>
            </div>
            <h1 className="reveal-up anim-delay-1 mt-6 text-4xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">
              Quality Work. <span className="shimmer-text">Reliable Service.</span> Built for Every Property.
            </h1>
            <p className="reveal-up anim-delay-2 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Professional construction, renovation, property maintenance, cleaning and lawn care services for
              residential and commercial properties.
            </p>
            <div className="reveal-up anim-delay-3 mt-9 flex flex-wrap gap-3">
              <GoldButton to="/services">Explore Our Services</GoldButton>
              <GoldButton to="/contact" variant="outline">
                Contact Us
              </GoldButton>
            </div>
            <div className="reveal-up anim-delay-4 mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {site.areas.map((a) => (
                <span key={a} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <MapPin className="h-4 w-4 text-gold" />
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="scroll-hint absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-gold sm:block">
          Scroll
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={interior}
                alt="Finished interior with smooth painted walls and new hardwood flooring"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Kang Constructions Inc"
              title="A single team for building, finishing and maintaining property"
              subtitle="Kang Constructions Inc delivers construction and property services for homeowners, businesses and property managers. From drywall and plaster through painting, siding, flooring and roofing — and continuing with cleaning and lawn care — we cover the full life of a property."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Residential and commercial projects",
                "Eight core services under one roof",
                "Serving Ontario communities",
                "Clear communication throughout",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <GoldButton to="/about" variant="outline">
                More About Us
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-y border-border/60 bg-[var(--gradient-dark)]">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            center
            eyebrow="Our Services"
            title="Eight services. Residential and commercial."
            subtitle="Every service we offer is available for both homes and commercial properties."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <GoldButton to="/services">View All Services</GoldButton>
          </div>
        </div>
      </section>

      <BuildJourney showClipButtons={false} />

      <section className="section-pad border-y border-border/60">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2">
          {[
            {
              title: "Residential",
              text: "Homes, renovations, repairs and ongoing property upkeep — interior and exterior.",
              to: "/residential",
              img: interior,
              alt: "Renovated residential interior",
            },
            {
              title: "Commercial",
              text: "Offices, retail, rental and commercial buildings maintained to a professional standard.",
              to: "/commercial",
              img: commercialImg,
              alt: "Modern commercial building exterior at night",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <Link
                to={c.to}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border"
              >
                <img
                  src={c.img}
                  alt={c.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">{c.text}</p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Explore →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading center eyebrow="Why Choose Us" title="Built on care, consistency and clean results" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-7 transition-colors hover:border-gold/45">
                  <w.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-y border-border/60 bg-[var(--gradient-dark)]">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <SectionHeading
              eyebrow="Service Areas"
              title="Proudly Serving Ontario Communities"
              subtitle="We work across several Ontario regions and welcome enquiries from nearby communities."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {site.areas.map((a) => (
                <div
                  key={a}
                  className="rounded-xl border border-border bg-card/50 px-4 py-4 text-sm font-medium transition-colors hover:border-gold/50 hover:text-gold"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <GoldButton to="/service-areas" variant="outline">
              See Service Areas
            </GoldButton>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
