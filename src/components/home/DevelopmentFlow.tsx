"use client";

import React from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

export default function DevelopmentFlow() {
  const { lang } = useLanguage();
  const th = t.home;

  return (
    <section
      className="section-white"
      style={{ paddingBlock: 112 }}
      aria-labelledby="flow-heading"
    >
      <FadeInSection>
        <div className="container-site">
          <div className="section-header">
            <p className="section-eyebrow">{th.flowSection.eyebrow[lang]}</p>
            <h2 id="flow-heading" className="section-title">
              {th.flowSection.title[lang]}
            </h2>
            <p className="section-sub">
              {th.flowSection.sub[lang]}
            </p>
          </div>

          <div className="flow-grid">
            {th.flowSection.steps.map(({ num, JP, EN }, i) => (
              <FadeInSection key={num} className={`delay-${(i + 1) * 50}`}>
                <div className="flow-step-card">
                  <div className="flow-circle-badge">
                    <span>{num}</span>
                  </div>
                  <p className="flow-step-label-jp" style={{ fontFamily: "var(--font-noto)" }}>
                    {JP}
                  </p>
                  <p className="flow-step-label-en">
                    {EN}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* PM note */}
          <div className="flow-note">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="8" stroke="var(--color-accent)" strokeWidth="1.5" />
              <path d="M9 8v5M9 6v.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>
              {lang === "JP"
                ? "キックオフ時だけでなく、要件定義・仕様作成・テスト・検収サポートの全工程で日本側のPMが責任を持って管理します。"
                : "A Japan-side PM owns communication, specification, and QA throughout — not just during kickoff."}
            </span>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
