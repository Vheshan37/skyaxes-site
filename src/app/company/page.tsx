"use client";

import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

const companyInfo = [
  { label: "会社名", labelEN: "Company Name", value: "SkyAxes株式会社 / SkyAxes Co., Ltd." },
  { label: "設立", labelEN: "Founded", value: "2018年" },
  { label: "所在地", labelEN: "Location", value: "東京都" },
  { label: "事業内容", labelEN: "Business", value: "ソフトウェア受託開発・オフショア開発マネジメント・3D/VR/AR・IoTシステム開発" },
  { label: "対応言語", labelEN: "Languages", value: "日本語・English" },
  { label: "対応地域", labelEN: "Service Area", value: "日本全国・海外企業（英語対応可）" },
  { label: "ウェブサイト", labelEN: "Website", value: "skyaxes.jp" },
];

const strengths = [
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    titleJP: "日本人PM主導",
    titleEN: "Japan-side PM Leadership",
    descJP: "要件定義・仕様書作成・品質管理・クライアントコミュニケーションを日本語で行います。",
    descEN: "Requirements, specs, QA, and client communication — all in Japanese.",
    color: "var(--color-accent)",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    titleJP: "技術特化",
    titleEN: "Technical Specialization",
    descJP: "3D/VR、IoT、業務システムに特化。汎用的なオフショア仲介とは異なる専門性を提供します。",
    descEN: "Specialized in 3D/VR, IoT, and business systems. Not generic offshore.",
    color: "var(--color-clinical)",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    titleJP: "現実的なコスト",
    titleEN: "Realistic Cost",
    descJP: "最安値ではなく、品質と価格のバランスを重視した「コスト効率の高い開発」を提供します。",
    descEN: "Not cheapest — cost-efficient development balancing quality and price.",
    color: "var(--color-green-iot)",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
      </svg>
    ),
    titleJP: "運用・保守まで対応",
    titleEN: "Post-launch Support",
    descJP: "納品後の運用・保守・機能追加まで継続的にサポートします。",
    descEN: "Continuous post-delivery support: operations, maintenance, and feature additions.",
    color: "var(--color-navy)",
  },
];

export default function CompanyPage() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            {t.company.hero.eyebrow[lang]}
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            {t.company.hero.title[lang]}
          </h1>
          <p
            style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520 }}
          >
            {t.company.hero.sub[lang]}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
              >
                {lang === 'JP' ? 'ミッション' : 'Our Mission'}
              </h2>
              <p
                className="mb-5"
                style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.85, fontFamily: "var(--font-noto)" }}
              >
                {lang === 'JP'
                  ? '日本の製造業・医療・専門サービス業界において、技術的に高度なソフトウェア開発を現実的なコストで実現することを使命としています。'
                  : 'Our mission is to deliver technically advanced software at realistic cost for Japan\'s manufacturing, medical, and specialized service industries.'}
              </p>
              <p
                style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.85, fontFamily: "var(--font-noto)" }}
              >
                {lang === 'JP'
                  ? '「安いオフショア」ではなく、日本人PMによる要件管理・品質保証・コミュニケーション品質を強みとした「コスト効率の高い技術開発パートナー」として、お客様の事業成長を技術面で支援します。'
                  : 'Not \'cheap offshore\' — we are a cost-efficient technical development partner. Japan-side PM manages requirements, quality assurance, and communication quality to support our clients\' business growth through technology.'}
              </p>
            </div>

            {/* Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map(({ svg, titleJP, titleEN, descJP, descEN, color }) => (
                <div
                  key={titleJP}
                  className="p-6 rounded-xl"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${color}18`, color }}
                  >
                    {svg}
                  </div>
                  <p
                    className="font-bold mb-1"
                    style={{ fontSize: 15, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                  >
                    {lang === 'JP' ? titleJP : titleEN}
                  </p>
                  {lang === 'JP' && (
                    <p
                      className="text-xs mb-3"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                    >
                      {titleEN}
                    </p>
                  )}
                  <p
                    style={{ fontSize: 13, color: "var(--color-text)", lineHeight: 1.7, fontFamily: "var(--font-noto)" }}
                  >
                    {lang === 'JP' ? descJP : descEN}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Company info table */}
      <section className="section-surface" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <h2
              className="font-bold mb-10"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              {lang === 'JP' ? (
                <>会社情報&nbsp;<span style={{ fontFamily: "var(--font-jakarta)", fontSize: 18, fontWeight: 400, color: "var(--color-muted)" }}>Company Profile</span></>
              ) : (
                'Company Information'
              )}
            </h2>

            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--color-border)" }}
            >
              {companyInfo.map(({ label, labelEN, value }, i) => (
                <div
                  key={label}
                  className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-0"
                  style={{ borderBottom: i < companyInfo.length - 1 ? "1px solid var(--color-border)" : "none" }}
                >
                  <div
                    className="px-6 py-4 flex flex-col justify-center"
                    style={{ background: "var(--color-surface)" }}
                  >
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                    >
                      {lang === 'JP' ? label : labelEN}
                    </span>
                    {lang === 'JP' && (
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                      >
                        {labelEN}
                      </span>
                    )}
                  </div>
                  <div
                    className="px-6 py-4 flex items-center"
                    style={{ background: "#ffffff" }}
                  >
                    <span
                      style={{ fontSize: 14, color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.6 }}
                    >
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA */}
      <section className="section-white" style={{ paddingBlock: 72 }}>
        <div className="container-site text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
          >
            {lang === 'JP' ? '開発のご相談・お問い合わせ' : 'Development Inquiry'}
          </h2>
          <Link href="/contact" className="btn-primary">
            {lang === 'JP' ? 'お問い合わせ\u00a0/\u00a0Contact' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </>
  );
}
