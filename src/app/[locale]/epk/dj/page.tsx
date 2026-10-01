import { notFound } from "next/navigation";
import EpkPage from "@/components/EpkPage";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

// Regenerate hourly so played shows move into the references without a redeploy.
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "epkDj") : {};
}

export default async function EpkDjPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return <EpkPage locale={locale} kind="dj" />;
}
