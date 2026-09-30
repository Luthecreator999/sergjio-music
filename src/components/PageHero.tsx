import Image from "next/image";

type Props = {
  /** Hero image path under /public. */
  image: string;
  /** Descriptive alt text for the hero image. */
  imageAlt: string;
  /** Small eyebrow label above the title. */
  label: string;
  /** Page H1. */
  title: string;
  /** Optional sub-headline under the title. */
  subtitle?: string;
  /** CSS object-position, e.g. "70% 35%". Defaults to "center 30%". */
  objectPosition?: string;
  /** "tall" = 16/7 on desktop, "wide" = 16/6. Defaults to "wide". */
  size?: "tall" | "wide";
};

/**
 * Full-bleed page hero: portrait on mobile, cinematic landscape on desktop.
 * Shared across the About / DJ / Tour / Releases / Booking pages so the crop,
 * gradient and type scale stay consistent.
 */
export default function PageHero({
  image,
  imageAlt,
  label,
  title,
  subtitle,
  objectPosition = "center 30%",
  size = "wide",
}: Props) {
  const aspect =
    size === "tall"
      ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/7]"
      : "aspect-[4/5] sm:aspect-[16/9] lg:aspect-[16/6]";

  return (
    <section className="container-site pt-24 sm:pt-28">
      <div className={`relative tile-quiet ${aspect} flex items-end overflow-hidden`}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1280px) 1184px, 100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent sm:bg-gradient-to-b sm:from-ink/40 sm:via-ink/30 sm:to-ink/85" />
        <div className="relative p-6 sm:p-10 lg:p-14 w-full">
          <p className="uppercase-brand text-xs text-cream/80 mb-3">{label}</p>
          <h1 className="uppercase-brand text-display-xl text-white drop-shadow-lg">{title}</h1>
          {subtitle && (
            <p className="uppercase-brand text-display-md text-cream/90 mt-3 max-w-3xl">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
