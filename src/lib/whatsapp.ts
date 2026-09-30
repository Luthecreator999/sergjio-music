import { SITE } from "./site";
import { DICT, type Locale } from "./i18n";

export function whatsappLink(
  locale: Locale,
  eventTitle: string,
  dateLabel: string,
  venue: string,
  past = false,
) {
  const wa = DICT[locale].whatsapp;
  const text = (past ? wa.eventPastInquiry : wa.eventInquiry)(eventTitle, dateLabel, venue);
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}

export function whatsappBooking(locale: Locale, category: string, name: string, message: string) {
  const text = DICT[locale].whatsapp.bookingInquiry(category, name, message);
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}

export function whatsappEpk(locale: Locale, profile: string) {
  const text = DICT[locale].whatsapp.epkInquiry(profile);
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}
