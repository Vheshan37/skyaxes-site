"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const { lang } = useLanguage();
  const tf = t.contact.form;

  const [state, action, isPending] = useActionState(submitContactForm, initialState);
  const [antiSalesChecked, setAntiSalesChecked] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const budgetOptions = [
    { value: "", label: tf.budgetSelect[lang] },
    { value: "under300", label: tf.budgetOptions.under300[lang] },
    { value: "300to1000", label: tf.budgetOptions["300to1000"][lang] },
    { value: "1000to3000", label: tf.budgetOptions["1000to3000"][lang] },
    { value: "over3000", label: tf.budgetOptions.over3000[lang] },
    { value: "consult", label: tf.budgetOptions.consult[lang] },
  ];

  const timelineOptions = [
    { value: "", label: tf.timelineSelect[lang] },
    { value: "1month", label: tf.timelineOptions["1month"][lang] },
    { value: "1to3", label: tf.timelineOptions["1to3"][lang] },
    { value: "3to6", label: tf.timelineOptions["3to6"][lang] },
    { value: "over6", label: tf.timelineOptions.over6[lang] },
    { value: "undecided", label: tf.timelineOptions.undecided[lang] },
  ];

  // Scroll to success message
  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        className="rounded-xl p-10 text-center"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
      >
        <div className="text-4xl mb-4">✅</div>
        <h2
          className="font-bold mb-3"
          style={{ fontSize: 22, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
        >
          {tf.successTitle[lang]}
        </h2>
        <p style={{ fontSize: 15, color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.8 }}>
          {state.message}
        </p>
        <p
          className="mt-2"
          style={{ fontSize: 13, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
        >
          {tf.successSub[lang]}
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate>
      {/* ── Anti-sales notice block ── */}
      <div
        className="mb-8 p-5 rounded-lg flex items-start gap-3"
        style={{
          borderLeft: "4px solid var(--color-warning-red)",
          background: "var(--color-warning-bg)",
        }}
        role="note"
        aria-label="このフォームに関するご案内"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="flex-shrink-0 mt-0.5"
        >
          <circle cx="10" cy="10" r="9" stroke="#B3261E" strokeWidth="1.5" />
          <path d="M10 6v5" stroke="#B3261E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="10" cy="13.5" r="0.75" fill="#B3261E" />
        </svg>
        <div>
          <p
            className="font-semibold"
            style={{ fontSize: 14, color: "#7a1a14", fontFamily: "var(--font-noto)", lineHeight: 1.7, margin: 0 }}
          >
            {tf.warningTitle[lang]}
          </p>
        </div>
      </div>

      {/* ── Error summary ── */}
      {state.status === "error" && (
        <div
          className="mb-6 p-4 rounded-lg"
          style={{ background: "var(--color-warning-bg)", border: "1px solid rgba(179,38,30,0.3)" }}
          role="alert"
          aria-live="assertive"
        >
          <p style={{ fontSize: 14, color: "var(--color-warning-red)", fontFamily: "var(--font-noto)" }}>
            {state.message}
          </p>
        </div>
      )}

      <div className="space-y-5">
        {/* 会社名 */}
        <div className="form-field">
          <label htmlFor="companyName" className="bilingual-label mb-2 block">
            <span className="label-jp">
              {tf.companyLabel[lang]}&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            autoComplete="organization"
            placeholder={tf.companyPlaceholder[lang]}
          />
        </div>

        {/* 部署名 */}
        <div className="form-field">
          <label htmlFor="department" className="bilingual-label mb-2 block">
            <span className="label-jp">{tf.deptLabel[lang]}</span>
          </label>
          <input
            id="department"
            name="department"
            type="text"
            autoComplete="organization-title"
            placeholder={tf.deptPlaceholder[lang]}
          />
        </div>

        {/* ご担当者名 */}
        <div className="form-field">
          <label htmlFor="contactName" className="bilingual-label mb-2 block">
            <span className="label-jp">
              {tf.nameLabel[lang]}&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            autoComplete="name"
            placeholder={tf.namePlaceholder[lang]}
          />
        </div>

        {/* Email */}
        <div className="form-field">
          <label htmlFor="email" className="bilingual-label mb-2 block">
            <span className="label-jp">
              {tf.emailLabel[lang]}&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder={tf.emailPlaceholder[lang]}
          />
        </div>

        {/* 電話番号 */}
        <div className="form-field">
          <label htmlFor="phone" className="bilingual-label mb-2 block">
            <span className="label-jp">{tf.phoneLabel[lang]}</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={tf.phonePlaceholder[lang]}
          />
        </div>

        {/* ご予算感 */}
        <div className="form-field">
          <label htmlFor="budget" className="bilingual-label mb-2 block">
            <span className="label-jp">
              {tf.budgetLabel[lang]}&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
          </label>
          <div className="relative">
            <select id="budget" name="budget" required style={{ paddingRight: 40 }}>
              {budgetOptions.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
            >
              <path d="M4 6l4 4 4-4" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* 希望時期 */}
        <div className="form-field">
          <label htmlFor="timeline" className="bilingual-label mb-2 block">
            <span className="label-jp">
              {tf.timelineLabel[lang]}&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
          </label>
          <div className="relative">
            <select id="timeline" name="timeline" required style={{ paddingRight: 40 }}>
              {timelineOptions.map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
              width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
            >
              <path d="M4 6l4 4 4-4" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* お問い合わせ内容 */}
        <div className="form-field">
          <label htmlFor="message" className="bilingual-label mb-2 block">
            <span className="label-jp">
              {tf.messageLabel[lang]}&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder={tf.messagePlaceholder[lang]}
          />
        </div>

        {/* Anti-sales checkbox */}
        <div
          className="p-5 rounded-lg"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <label
            htmlFor="antiSales"
            className="flex items-start gap-3 cursor-pointer"
          >
            <input
              id="antiSales"
              name="antiSales"
              type="checkbox"
              required
              checked={antiSalesChecked}
              onChange={(e) => setAntiSalesChecked(e.target.checked)}
              className="mt-1 flex-shrink-0"
              style={{
                width: 18,
                height: 18,
                accentColor: "var(--color-accent)",
                cursor: "pointer",
              }}
            />
            <div>
              <p
                className="font-medium"
                style={{ fontSize: 14, color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.7 }}
              >
                {tf.confirmCheckbox[lang]}&nbsp;
                <span style={{ color: "var(--color-warning-red)" }}>*</span>
              </p>
            </div>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          id="contact-submit-btn"
          disabled={!antiSalesChecked || isPending}
          aria-disabled={!antiSalesChecked || isPending}
          className="btn-primary w-full md:w-80 flex items-center justify-center gap-2"
          style={{ height: 48, fontSize: 16 }}
        >
          {isPending ? (
            <>
              <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <path d="M9 2a7 7 0 0 1 7 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {tf.submittingBtn[lang]}
            </>
          ) : (
            tf.submitBtn[lang]
          )}
        </button>

        {!antiSalesChecked && (
          <p
            style={{ fontSize: 12, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
            aria-live="polite"
          >
            {tf.submitHint[lang]}
          </p>
        )}
      </div>
    </form>
  );
}
