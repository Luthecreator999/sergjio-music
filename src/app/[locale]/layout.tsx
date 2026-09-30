import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { display } from "@/lib/font";
import { isLocale, locales, t, type Locale } from "@/lib/i18n";
import { musicGroupSchema } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const tr = t(locale as Locale);

  return (
    <html lang={locale} className={display.variable}>
      <body className="bg-ink text-cream antialiased">
        <JsonLd data={musicGroupSchema(locale as Locale)} />
        <a href="#main" className="skip-link">
          {tr.common.skipToContent}
        </a>
        <Header locale={locale as Locale} />
        <main id="main">{children}</main>
        <Footer locale={locale as Locale} />
      </body>
    </html>
  );
}
