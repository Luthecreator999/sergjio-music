import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/lib/i18n";
import { SITE_URL, PAGE_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    Object.values(PAGE_PATHS).map((path) => {
      const languages: Record<string, string> = {};
      for (const l of locales) languages[l] = `${SITE_URL}/${l}${path}`;
      languages["x-default"] = `${SITE_URL}/${defaultLocale}${path}`;

      return {
        url: `${SITE_URL}/${locale}${path}`,
        lastModified,
        changeFrequency: path === "/tour" ? ("weekly" as const) : ("monthly" as const),
        priority: path === "" ? 1 : 0.8,
        alternates: { languages },
      };
    }),
  );
}
