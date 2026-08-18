import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function GoldButton({
  to,
  href,
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  [key: string]: unknown;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gold-gradient text-primary-foreground shadow-[var(--shadow-gold)] hover:-translate-y-0.5 hover:brightness-110"
      : "border border-gold/40 text-gold hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5";
  const cls = `${base} ${styles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a className={cls} href={href} {...rest}>
      {children}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
      <span className="h-px w-8 bg-gold/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pb-16 pt-36 lg:pb-24 lg:pt-44">
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="ken-burns absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="glow-pulse absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="reveal-up">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="reveal-up anim-delay-1 mt-5 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="reveal-up anim-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Let's Discuss Your Next Project",
  subtitle = "Residential or commercial — tell us what you need and we'll take it from there.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="glass-panel reveal-up relative overflow-hidden rounded-3xl px-6 py-14 text-center lg:px-16 lg:py-20">
          <div className="absolute inset-x-0 top-0 h-px gold-hairline" />
          <div className="glow-pulse pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)] blur-2xl" />
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <GoldButton to="/contact">Contact Us</GoldButton>
            <GoldButton variant="outline" href="tel:+17052886830">
              Call +1 705-288-6830
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}
