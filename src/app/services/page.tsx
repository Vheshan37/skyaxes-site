"use client";

import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

const servicesMeta = [
  {
    svgPath: "M14 2a12 12 0 100 24A12 12 0 0014 2zm0 2a10 10 0 110 20A10 10 0 0114 4zm-1 5v4H9l5 8 5-8h-4V9h-2z",
    href: "/services/offshore",
    accent: "var(--color-accent)",
    tagClass: "tag-navy",
  },
  {
    svgPath: "M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",
    href: "/services/3dvrar",
    accent: "var(--color-clinical)",
    tagClass: "tag-clinical",
  },
  {
    svgPath: "M4 17h16v2H4v-2zm0-6h4v4H4v-4zm6-4h4v8h-4V7zm6 2h4v6h-4V9z",
    href: "/services/iot",
    accent: "var(--color-green-iot)",
    tagClass: "tag-iot",
  },
];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const ts = t.services;

  return (
    <>
      {/* Page hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            {ts.hero.eyebrow[lang]}
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            {ts.hero.title[lang]}
          </h1>
          <p style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 560 }}>
            {ts.hero.sub[lang]}
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-white" style={{ paddingBlock: 88 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6">
            {servicesMeta.map((meta, i) => {
              const card = ts.cards[i];
              return (
                <FadeInSection key={meta.href}>
                  <div
                    className="grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-6 lg:gap-10 items-center p-8 rounded-xl border transition-shadow duration-200"
                    style={{
                      borderColor: "var(--color-border)",
                      background: i % 2 === 0 ? "#ffffff" : "var(--color-surface)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${meta.accent}18`, color: meta.accent }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d={meta.svgPath} />
                      </svg>
                    </div>
                    <div>
                      <span className={`${meta.tagClass} mb-3 inline-block`}>{card.tag[lang]}</span>
                      <h2
                        className="font-bold mb-1"
                        style={{ fontSize: 22, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                      >
                        {lang === "JP" ? card.titleJP : card.titleEN}
                      </h2>
                      <p className="text-sm mb-3" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                        {lang === "JP" ? card.titleEN : card.titleJP}
                      </p>
                      <p style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.8, fontFamily: "var(--font-noto)", maxWidth: 640 }}>
                        {card.desc[lang]}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href={meta.href}
                        className="btn-primary whitespace-nowrap"
                        style={{ background: meta.accent }}
                      >
                        {ts.viewDetails[lang]}
                      </Link>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
          >
            {ts.cta.title[lang]}
          </h2>
          <p className="mb-8" style={{ fontSize: 14, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
            {ts.cta.sub[lang]}
          </p>
          <Link href="/contact" className="btn-primary">{ts.cta.btn[lang]}</Link>
        </div>
      </section>
    </>
  );
}
