"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const budgetOptions = [
  { value: "", label: "選択してください / Please select" },
  { value: "under300", label: "〜300万円" },
  { value: "300to1000", label: "300万〜1,000万円" },
  { value: "1000to3000", label: "1,000万〜3,000万円" },
  { value: "over3000", label: "3,000万円〜" },
  { value: "consult", label: "ご相談 / Undecided" },
];

const timelineOptions = [
  { value: "", label: "選択してください / Please select" },
  { value: "1month", label: "1ヶ月以内" },
  { value: "1to3", label: "1〜3ヶ月" },
  { value: "3to6", label: "3〜6ヶ月" },
  { value: "over6", label: "6ヶ月以上" },
  { value: "undecided", label: "未定" },
];

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);
  const [antiSalesChecked, setAntiSalesChecked] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

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
          お問い合わせを受け付けました
        </h2>
        <p style={{ fontSize: 15, color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.8 }}>
          {state.message}
        </p>
        <p
          className="mt-2"
          style={{ fontSize: 13, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
        >
          We will respond within 2 business days.
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
            className="font-semibold mb-2"
            style={{ fontSize: 14, color: "#7a1a14", fontFamily: "var(--font-noto)", lineHeight: 1.7 }}
          >
            このフォームは、自社サービス・製品のご案内、広告掲載、業務提携以外の営業目的でのご連絡はご遠慮いただいております。
            該当するご連絡には返信いたしかねますので、あらかじめご了承ください。
          </p>
          <p
            style={{ fontSize: 13, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", lineHeight: 1.6 }}
          >
            This form is intended for genuine business inquiries only. We are unable to respond to
            unsolicited sales, advertising, or vendor-partnership pitches submitted through this channel.
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
              会社名&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
            <span className="label-en">Company Name (required)</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            autoComplete="organization"
            placeholder="株式会社〇〇"
          />
        </div>

        {/* 部署名 */}
        <div className="form-field">
          <label htmlFor="department" className="bilingual-label mb-2 block">
            <span className="label-jp">部署名</span>
            <span className="label-en">Department (optional)</span>
          </label>
          <input
            id="department"
            name="department"
            type="text"
            autoComplete="organization-title"
            placeholder="システム部、経営企画室など"
          />
        </div>

        {/* ご担当者名 */}
        <div className="form-field">
          <label htmlFor="contactName" className="bilingual-label mb-2 block">
            <span className="label-jp">
              ご担当者名&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
            <span className="label-en">Contact Name (required)</span>
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            autoComplete="name"
            placeholder="山田 太郎"
          />
        </div>

        {/* Email */}
        <div className="form-field">
          <label htmlFor="email" className="bilingual-label mb-2 block">
            <span className="label-jp">
              メールアドレス&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
            <span className="label-en">Email Address (required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="taro.yamada@example.co.jp"
          />
        </div>

        {/* 電話番号 */}
        <div className="form-field">
          <label htmlFor="phone" className="bilingual-label mb-2 block">
            <span className="label-jp">電話番号</span>
            <span className="label-en">Phone Number (optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="03-XXXX-XXXX"
          />
        </div>

        {/* ご予算感 */}
        <div className="form-field">
          <label htmlFor="budget" className="bilingual-label mb-2 block">
            <span className="label-jp">
              ご予算感&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
            <span className="label-en">Project Budget (required)</span>
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
              希望時期&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
            <span className="label-en">Desired Timeline (required)</span>
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
              お問い合わせ内容&nbsp;<span style={{ color: "var(--color-warning-red)" }}>*</span>
            </span>
            <span className="label-en">Message / Project Overview (required)</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="ご相談内容・プロジェクトの概要をご記入ください。&#10;Please describe your project or inquiry in detail."
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
                本お問い合わせが、自社製品・サービスの営業やご提案を目的としたものではないことを確認します。&nbsp;
                <span style={{ color: "var(--color-warning-red)" }}>*</span>
              </p>
              <p
                className="mt-1"
                style={{ fontSize: 12, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", lineHeight: 1.5 }}
              >
                I confirm this inquiry is not intended as a sales or marketing pitch.
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
              送信中…
            </>
          ) : (
            "送信する / Submit"
          )}
        </button>

        {!antiSalesChecked && (
          <p
            style={{ fontSize: 12, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
            aria-live="polite"
          >
            ※ 上の確認チェックボックスにチェックを入れると送信できます。
            Check the confirmation box above to enable submission.
          </p>
        )}
      </div>
    </form>
  );
}
