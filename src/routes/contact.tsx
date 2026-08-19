import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { services, site } from "@/data/site";
import { PageHero, SectionHeading } from "@/components/ui-kit";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Kang Constructions Inc" },
      {
        name: "description",
        content:
          "Contact Kang Constructions Inc at +1 705-288-6830 or kangconstructionsinc@gmail.com for residential and commercial construction and property services in Ontario.",
      },
      { property: "og:title", content: "Contact Us | Kang Constructions Inc" },
      { property: "og:description", content: "Let's discuss your next residential or commercial project." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fieldCls =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(false);
    const data = new FormData(e.currentTarget);
    try {
      const name = data.get("name");
      const phone = data.get("phone");
      const email = data.get("email");
      const service = data.get("service");
      const propertyType = data.get("propertyType");
      const city = data.get("city");
      const message = data.get("message");

      await emailjs.send(
        "service_tjr9dtc",
        "template_jht9beb",
        {
          name,
          from_name: name,
          phone,
          email,
          from_email: email,
          reply_to: email,
          service,
          service_required: service,
          propertyType,
          property_type: propertyType,
          city,
          city_service_area: city,
          message,
        },
        "Wy5uJM-Ic3sdpAkL9",
      );
      setSent(true);
      setError(false);
      e.currentTarget.reset();
    } catch (submissionError) {
      console.error("EmailJS contact form submission failed", submissionError);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Discuss Your Next Project"
        subtitle="Tell us about your residential or commercial property and what you need done. We'll get back to you to talk through the details."
      />

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <SectionHeading eyebrow="Get In Touch" title="Contact details" />
            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-gold/50"
              >
                <Phone className="h-5 w-5 text-gold" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</span>
                  <span className="text-base font-semibold">{site.phone}</span>
                </span>
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-gold/50"
              >
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
                  <span className="block break-all text-base font-semibold">{site.email}</span>
                </span>
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-gold/50"
              >
                <Facebook className="h-5 w-5 text-gold" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Facebook</span>
                  <span className="text-base font-semibold">Follow our work</span>
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Service Areas</span>
                  <span className="text-base font-semibold">{site.areas.join(", ")}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <form onSubmit={onSubmit} className="glass-panel rounded-3xl p-6 sm:p-9">
              <h2 className="text-2xl font-bold">Project Enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the details below and we will receive your enquiry by email.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Full Name
                  </label>
                  <input id="name" name="name" required className={fieldCls} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" required className={fieldCls} placeholder="(000) 000-0000" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Email Address
                  </label>
                  <input id="email" name="email" type="email" required className={fieldCls} placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Service Required
                  </label>
                  <select id="service" name="service" required className={fieldCls} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multiple / Other">Multiple / Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="propertyType" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Property Type
                  </label>
                  <select id="propertyType" name="propertyType" required className={fieldCls} defaultValue="Residential">
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="city" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    City / Service Area
                  </label>
                  <input id="city" name="city" required className={fieldCls} placeholder="Ottawa, Sudbury, ..." />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={fieldCls}
                    placeholder="Tell us about the property and the work you need."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-7 w-full rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition-transform hover:-translate-y-0.5"
              >
                {sending ? "Sending..." : "Send Enquiry"}
              </button>
              {sent ? (
                <p className="mt-4 text-center text-sm text-gold">
                  Thanks, your enquiry has been sent. We will be in touch soon.
                </p>
              ) : error ? (
                <p className="mt-4 text-center text-sm text-destructive">
                  We could not send your enquiry. Please call {site.phone} or try again.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
