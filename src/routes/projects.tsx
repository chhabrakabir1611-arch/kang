import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook } from "lucide-react";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import wall from "@/assets/wall.jpeg";
import commercialImg from "@/assets/commercial.jpg";
import { site } from "@/data/site";
import { PageHero, CTASection, SectionHeading } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Work | Kang Constructions Inc" },
      {
        name: "description",
        content:
          "Browse the type of residential and commercial work Kang Constructions Inc takes on: construction, drywall, plaster, painting, flooring, roofing, siding, cleaning and lawn care.",
      },
      { property: "og:title", content: "Our Work | Kang Constructions Inc" },
      { property: "og:description", content: "A look at the scope of our residential and commercial projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Item = { title: string; category: string; type: string; img: string; alt: string };

const items: Item[] = [
  { title: "New Build Exterior", category: "Construction", type: "Residential", img: hero, alt: "Modern home construction lit at dusk" },
  { title: "Interior Wall Boarding", category: "Drywall", type: "Residential", img: wall, alt: "Interior room with newly boarded walls" },
  { title: "Smooth Wall Finishing", category: "Plaster", type: "Residential", img: interior, alt: "Smoothly finished plaster wall interior" },
  { title: "Full Interior Repaint", category: "Painting", type: "Residential", img: interior, alt: "Freshly painted interior room" },
  { title: "Hardwood Installation", category: "Flooring", type: "Residential", img: interior, alt: "Newly installed hardwood flooring" },
  { title: "Roof Replacement", category: "Roofing", type: "Residential", img: "/roof.jpeg", alt: "House exterior showing roofline" },
  { title: "Exterior Siding Refresh", category: "Siding", type: "Residential", img: hero, alt: "Home exterior with siding" },
  { title: "Office Turnover Clean", category: "Cleaning", type: "Commercial", img: "/office.jpg", alt: "Clean modern commercial reception area" },
  { title: "Lawn Maintenance", category: "Lawn Care", type: "Commercial", img: "/lawn.jpeg", alt: "Commercial building with maintained grounds" },
];

const categories = ["All", "Construction", "Drywall", "Plaster", "Painting", "Flooring", "Roofing", "Siding", "Cleaning", "Lawn Care"];

function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="The kind of projects we take on"
        subtitle="A visual overview of the residential and commercial work Kang Constructions Inc delivers across Ontario."
        image={commercialImg}
      />

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Gallery" title="Browse by category" />

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((it, i) => (
              <Reveal key={`${it.title}-${i}`} delay={i * 50}>
                <figure className="group relative overflow-hidden rounded-2xl border border-border">
                  <img
                    src={it.img}
                    alt={it.alt}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      {it.category} · {it.type}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{it.title}</h3>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
            Images on this page are representative visuals of the service categories we work in. For photos of
            completed work, visit our Facebook page.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            <Facebook className="h-4 w-4" />
            See our work on Facebook
          </a>
        </div>
      </section>

      <CTASection title="Have a Project in Mind?" />
    </>
  );
}
