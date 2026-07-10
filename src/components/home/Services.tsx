"use client";

import React from "react";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";
import { services } from "@/lib/data/data";

export default function Services() {
  const { lang } = useLanguage();
  const th = t.home;

  return (
    <section
      className="section-surface"
      style={{ paddingBlock: 112 }}
      aria-labelledby="services-heading"
    >
      <FadeInSection>
        <div className="container-site">
          <div className="section-header">
            <p className="section-eyebrow">{th.servicesSection.eyebrow[lang]}</p>
            <h2 id="services-heading" className="section-title">
              {th.servicesSection.title[lang]}
            </h2>
            <p className="section-sub">
              {th.servicesSection.sub[lang]}
            </p>
          </div>

          <div className="services-container">
            {/* Featured Offshore Service Card */}
            {(() => {
              const s = services[0];
              return (
                <FadeInSection key={s.href} delay={0} translateY={16}>
                  <Link
                    href={s.href}
                    className="featured-service-card"
                    aria-label={`${s.titleEN} サービスページへ`}
                  >
                    <div className="flex flex-col items-start w-full">
                      <div className="service-card-top w-full" style={{ marginBottom: 24 }}>
                        <div
                          className="service-icon"
                          style={{ background: s.accentBg, color: s.accentColor }}
                        >
                          {s.icon}
                        </div>
                        <span
                          className="service-tag"
                          style={{ color: s.accentColor, background: s.accentBg }}
                        >
                          {s.tag}
                        </span>
                      </div>
                      <h3 className="service-title-en" style={{ fontSize: 24, marginBottom: 8, fontFamily: lang === "JP" ? "var(--font-noto)" : "var(--font-jakarta)" }}>
                        {lang === "JP" ? s.titleJP : s.titleEN}
                      </h3>
                      <p className="service-desc" style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 520, margin: "0 0 24px" }}>
                        {lang === "JP" ? s.descJP : s.descEN}
                      </p>
                      <span
                        className="btn-primary"
                        style={{ background: s.accentColor, pointerEvents: "none" }}
                      >
                        {th.servicesSection.learnMore[lang]}
                      </span>
                    </div>
                    <div className="border-t border-[#E5E9EF] pt-6 md:border-t-0 md:border-l md:border-[#E5E9EF] md:pt-0 md:pl-10 flex flex-col justify-center h-full">
                      <p className="font-semibold text-xs tracking-wider uppercase mb-4" style={{ color: "var(--color-navy)", fontFamily: "var(--font-jakarta)" }}>
                        {lang === "JP" ? "主な強み" : "Key Benefits"}
                      </p>
                      <ul className="flex flex-col gap-3">
                        {[
                          { 
                            JP: "要件定義から納品確認まで日本人PMが一括管理", 
                            EN: "End-to-end management by Japan-side PMs" 
                          },
                          { 
                            JP: "仕様書やコミュニケーションの二言語対応による透明性", 
                            EN: "Bilingual specifications and transparent progress tracking" 
                          },
                          { 
                            JP: "オフショア開発による大幅な開発コストの削減と効率性", 
                            EN: "Significant cost reduction using specialized offshore resources" 
                          }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#2D2D2D]">
                            <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span style={{ fontFamily: lang === "JP" ? "var(--font-noto)" : "var(--font-jakarta)", lineHeight: 1.5 }}>
                              {lang === "JP" ? item.JP : item.EN}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </FadeInSection>
              );
            })()}

            {/* Secondary Services Grid */}
            <div className="secondary-services-grid">
              {services.slice(1).map((s, i) => (
                <FadeInSection key={s.href} delay={(i + 1) * 100} translateY={16}>
                  <Link
                    href={s.href}
                    className={`secondary-service-card ${s.hoverClass.replace('service-card-', 'secondary-service-card-')}`}
                    aria-label={`${s.titleEN} サービスページへ`}
                  >
                    <div className="service-card-top">
                      <div
                        className="service-icon"
                        style={{ background: s.accentBg, color: s.accentColor }}
                      >
                        {s.icon}
                      </div>
                      <span
                        className="service-tag"
                        style={{ color: s.accentColor, background: s.accentBg }}
                      >
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="service-title-en" style={{ fontFamily: lang === "JP" ? "var(--font-noto)" : "var(--font-jakarta)" }}>
                      {lang === "JP" ? s.titleJP : s.titleEN}
                    </h3>
                    <p className="service-desc">
                      {lang === "JP" ? s.descJP : s.descEN}
                    </p>
                    <p
                      className="service-link"
                      style={{ color: s.accentColor }}
                    >
                      {th.servicesSection.learnMore[lang]} →
                    </p>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
