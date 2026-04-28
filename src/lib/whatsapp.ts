import { SITE } from "./site";
import { DICT, type Locale } from "./i18n";

export function whatsappLink(locale: Locale, eventTitle: string, dateLabel: string, venue: string) {
  const text = DICT[locale].whatsapp.eventInquiry(eventTitle, dateLabel, venue);
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}

export function whatsappBooking(locale: Locale, category: string, name: string, message: string) {
  const text = DICT[locale].whatsapp.bookingInquiry(category, name, message);
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}
