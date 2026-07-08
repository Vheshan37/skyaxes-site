"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

export default function ContactPage() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Page header */}
      <section className="section-surface" style={{ paddingBlock: 64 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            CONTACT
          </p>
          <h1
            className="font-bold mb-3"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            {t.contact.hero.title[lang]}
          </h1>
          <p style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 480 }}>
            {t.contact.hero.sub[lang]}
          </p>
        </div>
      </section>

      {/* Main 60/40 layout */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-16 items-start">

            {/* ── LEFT: Form (60%) ── */}
            <div>
              <ContactForm />
            </div>

            {/* ── RIGHT: Context panel (40%) ── */}
            <div className="space-y-6 lg:sticky lg:top-24">

              {/* Company mini-summary */}
              <div
                className="p-6 rounded-xl"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <h2
                  className="font-bold mb-4"
                  style={{ fontSize: 17, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                >
                  SkyAxes Co., Ltd.
                </h2>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.8 }}
                >
                  {lang === 'JP'
                    ? '日本人PMが主導するオフショア開発会社。3D/VR、IoT、業務システム開発に特化しています。'
                    : 'Japan-side PM-led offshore development company specializing in 3D/VR, IoT, and business systems.'}
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2E75B6] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                      >
                        {lang === 'JP' ? '対応地域' : 'Service Area'}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                      >
                        {lang === 'JP' ? '日本全国・海外（英語対応可）' : 'Japan-wide & international'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#2E75B6] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                      >
                        {lang === 'JP' ? '対応言語' : 'Languages'}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                      >
                        {lang === 'JP' ? '日本語・English' : 'Japanese & English'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response time — trust signal */}
              <div
                className="p-6 rounded-xl flex items-center gap-4"
                style={{ background: "#ffffff", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(46,117,182,0.1)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="8" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <path d="M10 6v4l2.5 2.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontSize: 15, color: "var(--color-accent)", fontFamily: "var(--font-noto)" }}
                  >
                    {lang === 'JP' ? '2営業日以内にご返信いたします' : 'We respond within 2 business days'}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                  >
                    {lang === 'JP' ? 'We respond within 2 business days' : '2 business day response guarantee'}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: "var(--color-border)" }} />

              {/* Map — static preview + click-through (no auto iframe) */}
              <div>
                <p
                  className="font-semibold mb-3 text-sm"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                >
                  {lang === 'JP' ? '所在地\u00a0/\u00a0Location' : 'Location'}
                </p>
                <a
                  href="https://maps.google.com/?q=Tokyo,Japan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl overflow-hidden border transition-opacity duration-150 hover:opacity-80"
                  style={{ border: "1px solid var(--color-border)" }}
                  aria-label={lang === 'JP' ? '地図を開く / Open map (Google Maps)' : 'Open map (Google Maps)'}
                >
                  {/* Static map placeholder */}
                  <div
                    className="w-full flex flex-col items-center justify-center gap-2"
                    style={{
                      height: 140,
                      background: "linear-gradient(135deg, var(--color-surface) 0%, #dde8f4 100%)",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path
                        d="M14 2C9.582 2 6 5.582 6 10c0 6 8 16 8 16s8-10 8-16c0-4.418-3.582-8-8-8z"
                        fill="var(--color-accent)"
                        fillOpacity="0.15"
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                      />
                      <circle cx="14" cy="10" r="3" fill="var(--color-accent)" />
                    </svg>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-jakarta)" }}
                    >
                      東京都&nbsp;·&nbsp;Tokyo, Japan
                    </span>
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "var(--color-accent)",
                        color: "#ffffff",
                        fontFamily: "var(--font-jakarta)",
                      }}
                    >
                      {lang === 'JP' ? '地図を開く / Open map ↗' : 'Open Map ↗'}
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
