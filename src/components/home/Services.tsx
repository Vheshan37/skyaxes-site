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
                    <div className="flex flex-col">
                      <div className="service-card-top" style={{ marginBottom: 24 }}>
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
                      <p className="service-desc" style={{ fontSize: 15, lineHeight: 1.75, maxWidth: 520, margin: 0 }}>
                        {lang === "JP" ? s.descJP : s.descEN}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end justify-center">
                      <span
                        className="btn-primary"
                        style={{ background: s.accentColor, pointerEvents: "none" }}
                      >
                        {th.servicesSection.learnMore[lang]}
                      </span>
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
