"use client";

import { useState } from "react";
import { whatsappBooking } from "@/lib/whatsapp";
import { SITE } from "@/lib/site";
import { t, type Locale } from "@/lib/i18n";

export default function BookingForm({ locale }: { locale: Locale }) {
  const tr = t(locale);
  const [category, setCategory] = useState(tr.booking.categories[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking — ${category} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCategory: ${category}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
      <Field label={tr.booking.fields.name}>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          autoComplete="name"
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label={tr.booking.fields.email}>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            autoComplete="email"
          />
        </Field>
        <Field label={tr.booking.fields.phone}>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            autoComplete="tel"
          />
        </Field>
      </div>
      <Field label={tr.booking.fields.category}>
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input"
        >
          {tr.booking.categories.map((c) => (
            <option key={c} value={c} className="bg-ink">
              {c}
            </option>
          ))}
        </select>
      </Field>
      <Field label={tr.booking.fields.message}>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input resize-none"
        />
      </Field>

      <div className="flex flex-wrap gap-3 mt-2">
        <button type="submit" className="btn-solid">{tr.booking.sendEmail}</button>
        <a
          href={whatsappBooking(locale, category, name, message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {tr.booking.sendWa}
        </a>
      </div>

      <style jsx>{`
        .input {
          background: rgba(204, 204, 204, 0.05);
          border: 1px solid var(--hairline-strong);
          color: var(--cream);
          padding: 14px 18px;
          width: 100%;
          font-family: inherit;
          font-size: 14px;
          font-weight: 400;
          outline: none;
          border-radius: 12px;
          transition: border-color 0.2s, background 0.2s;
        }
        .input:focus {
          border-color: #fff;
          color: #fff;
          background: rgba(204, 204, 204, 0.08);
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="uppercase-brand text-[11px] text-cream/70">{label}</span>
      {children}
    </label>
  );
}
