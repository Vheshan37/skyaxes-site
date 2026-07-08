"use client";

import React from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();
  const th = t.privacyPolicy;

  return (
    <>
      {/* Page Header */}
      <section className="section-surface" style={{ paddingBlock: 64 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            PRIVACY POLICY
          </p>
          <h1
            className="font-bold mb-3"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            {th.hero.title[lang]}
          </h1>
          <p style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 640 }}>
            {th.hero.sub[lang]}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <div className="max-w-[800px] mx-auto" style={{ color: "var(--color-text)", lineHeight: 1.8, fontSize: 15 }}>
              
              {/* Intro paragraph */}
              <p className="mb-10 pb-8" style={{ borderBottom: "1px solid var(--color-border)", fontFamily: "var(--font-noto)" }}>
                {th.intro[lang]}
              </p>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="font-bold mb-4 text-navy text-xl" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec1Title[lang]}
                </h2>
                <p className="mb-6 text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec1Desc[lang]}
                </p>

                {/* Sub section 1.1 */}
                <div className="pl-4 border-l-2 border-[#2E75B6]/30 mb-6">
                  <h3 className="font-bold mb-3 text-navy text-sm" style={{ fontFamily: "var(--font-noto)" }}>
                    {th.sec1Sub1[lang]}
                  </h3>
                  <p className="mb-3 text-xs text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                    {th.sec1Sub1Desc[lang]}
                  </p>
                  <ul className="list-disc pl-5 text-xs text-muted space-y-1 mb-4" style={{ fontFamily: "var(--font-noto)" }}>
                    {th.sec1Sub1Items[lang].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Sub section 1.2 */}
                <div className="pl-4 border-l-2 border-[#2E75B6]/30 mb-6">
                  <h3 className="font-bold mb-3 text-navy text-sm" style={{ fontFamily: "var(--font-noto)" }}>
                    {th.sec1Sub2[lang]}
                  </h3>
                  <p className="mb-3 text-xs text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                    {th.sec1Sub2Desc[lang]}
                  </p>
                  <ul className="list-disc pl-5 text-xs text-muted space-y-1 mb-4" style={{ fontFamily: "var(--font-noto)" }}>
                    {th.sec1Sub2Items[lang].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-muted mt-4 p-4 rounded-lg bg-gray-50 border border-gray-100" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec1CookieNote[lang]}
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="font-bold mb-4 text-navy text-xl" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec2Title[lang]}
                </h2>
                <p className="mb-4 text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec2Desc[lang]}
                </p>
                <ul className="list-disc pl-5 text-xs text-muted space-y-1 mb-6" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec2Items[lang].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <p className="mb-4 text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec2ThirdParty[lang]}
                </p>
                <ul className="list-disc pl-5 text-xs text-muted space-y-2" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec2ThirdPartyItems[lang].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="font-bold mb-4 text-navy text-xl" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec3Title[lang]}
                </h2>
                <p className="text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec3Desc[lang]}
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="font-bold mb-4 text-navy text-xl" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec4Title[lang]}
                </h2>
                <p className="text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec4Desc[lang]}
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="font-bold mb-4 text-navy text-xl" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec5Title[lang]}
                </h2>
                <p className="text-muted" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.sec5Desc[lang]}
                </p>
              </div>

              {/* Footer contact info */}
              <div className="p-6 rounded-xl mb-8 bg-[#2E75B6]/5 border border-[#2E75B6]/10 text-navy">
                <h3 className="font-bold mb-3 text-sm" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.contactTitle[lang]}
                </h3>
                <ul className="text-xs space-y-1.5" style={{ fontFamily: "var(--font-noto)" }}>
                  {th.contactItems[lang].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Date */}
              <p className="text-right text-xs text-muted font-semibold" style={{ fontFamily: "var(--font-noto)" }}>
                {th.date[lang]}
              </p>

            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
