"use client";

import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

const servicesMeta = [
  {
    imageSrc: "/images/content-img/services-offshore.jpg",
    href: "/services/offshore",
    accent: "var(--color-accent)",
    tagClass: "tag-navy",
    features: {
      JP: [
        "日本人PMによる要件定義・品質管理の一括マネジメント",
        "仕様書からデイリーな報告まで完全日本語対応でストレスゼロ",
        "国内開発と比較して大幅な開発コストの削減（最大40-50%カット）"
      ],
      EN: [
        "End-to-end requirement definition & QA by Japan-side PMs",
        "100% Japanese support for all specs, meetings, and daily reporting",
        "Significant development cost savings of up to 40-50% compared to local dev"
      ]
    },
    techStack: ["Qt", "C++", "OpenGL", "React", "Next.js", "Node.js"]
  },
  {
    imageSrc: "/images/hero-dental-3d.jpg",
    href: "/services/3dvrar",
    accent: "var(--color-clinical)",
    tagClass: "tag-clinical",
    features: {
      JP: [
        "歯科・医療用画像診断（DICOM）向けの超高速3Dレンダリング",
        "Qt / OpenGL / C++ をベースとした高性能デスクトップアプリ構築",
        "WebGL (Three.js) を活用したブラウザ完結型の3Dビジュアライザ"
      ],
      EN: [
        "Ultra-fast 3D rendering for medical & dental diagnostics (DICOM)",
        "High-performance desktop applications built on Qt / OpenGL / C++",
        "Browser-based 3D visualizers powered by WebGL (Three.js)"
      ]
    },
    techStack: ["Qt", "C++", "OpenGL", "WebGL", "Three.js", "Windows Desktop"]
  },
  {
    imageSrc: "/images/content-img/services-iot.jpg",
    href: "/services/iot",
    accent: "var(--color-green-iot)",
    tagClass: "tag-iot",
    features: {
      JP: [
        "工場ラインのリアルタイム異常検知・稼働状況監視システム",
        "自社品質管理システム「LineQC」の開発実績 and ノウハウの応用",
        "産業用各種センサーデータ（MQTT/REST API）のパイプライン構築"
      ],
      EN: [
        "Real-time anomaly detection & uptime monitoring for assembly lines",
        "Proven factory QC implementation based on proprietary LineQC systems",
        "Robust industrial sensor data pipeline integrations (MQTT/REST APIs)"
      ]
    },
    techStack: ["Node.js", "Python", "MQTT", "SQL / PostgreSQL", "React", "LineQC"]
  },
];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const ts = t.services;

  return (
    <>
      {/* Page hero */}
      <section className="section-surface" style={{ paddingBlock: 88, borderBottom: "1px solid var(--color-border)" }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.12em" }}
          >
            {ts.hero.eyebrow[lang]}
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(30px, 5vw, 48px)", color: "var(--color-navy)", fontFamily: "var(--font-jakarta)", lineHeight: 1.15, letterSpacing: "-0.03em" }}
          >
            {ts.hero.title[lang]}
          </h1>
          <p style={{ fontSize: 16, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 640, lineHeight: 1.7 }}>
            {ts.hero.sub[lang]}
          </p>
        </div>
      </section>

      {/* Service alternating rows */}
      <section className="section-white" style={{ paddingBlock: 48 }}>
        <div className="container-site">
          <div className="flex flex-col">
            {servicesMeta.map((meta, i) => {
              const card = ts.cards[i];
              const isEven = i % 2 === 0;

              return (
                <div 
                  key={meta.href} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-20 border-b border-[#E5E9EF] last:border-b-0"
                >
                  {/* Left or Right Text Column */}
                  <div 
                    className={`lg:col-span-6 flex flex-col justify-center order-2 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <FadeInSection delay={100} translateY={12}>
                      <div>
                        <span className={`${meta.tagClass} mb-4 inline-block`}>
                          {card.tag[lang]}
                        </span>
                      </div>
                      
                      <h2
                        className="font-bold mb-1"
                        style={{ fontSize: "clamp(26px, 3.5vw, 34px)", color: "var(--color-navy)", fontFamily: "var(--font-jakarta)", lineHeight: 1.25, letterSpacing: "-0.02em" }}
                      >
                        {lang === "JP" ? card.titleJP : card.titleEN}
                      </h2>
                      <p 
                        className="text-xs mb-5 font-semibold tracking-wider uppercase" 
                        style={{ color: "var(--color-accent)", fontFamily: "var(--font-jakarta)" }}
                      >
                        {lang === "JP" ? card.titleEN : card.titleJP}
                      </p>

                      <p className="mb-8" style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.8, fontFamily: "var(--font-noto)" }}>
                        {card.desc[lang]}
                      </p>

                      {/* Benefits Checklist */}
                      <ul className="flex flex-col gap-4 mb-8">
                        {meta.features[lang].map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#2D2D2D]">
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: meta.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span style={{ fontFamily: "var(--font-noto)", lineHeight: 1.6 }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badge strip */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {meta.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#F0F5FA] text-[#4A5568]"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div>
                        <Link
                          href={meta.href}
                          className="btn-primary inline-flex items-center gap-2"
                          style={{ background: meta.accent, padding: "12px 28px", fontSize: 14 }}
                        >
                          <span>{ts.viewDetails[lang]}</span>
                        </Link>
                      </div>
                    </FadeInSection>
                  </div>

                  {/* Left or Right Image/Mockup Column */}
                  <div 
                    className={`lg:col-span-6 order-1 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <FadeInSection delay={200} translateY={16}>
                      <div 
                        className="relative rounded-2xl overflow-hidden border border-[#E5E9EF] shadow-md aspect-4/3 group transition-all duration-300 hover:shadow-lg hover:scale-[1.005]"
                      >
                        <img
                          src={meta.imageSrc}
                          alt={`${card.titleEN} Preview Screenshot`}
                          className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </FadeInSection>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-surface" style={{ paddingBlock: 96, borderTop: "1px solid var(--color-border)" }}>
        <div className="container-site text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 3.5vw, 32px)", color: "var(--color-navy)", fontFamily: "var(--font-jakarta)", letterSpacing: "-0.02em" }}
          >
            {ts.cta.title[lang]}
          </h2>
          <p className="mb-8" style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 500, marginInline: "auto" }}>
            {ts.cta.sub[lang]}
          </p>
          <Link href="/contact" className="btn-primary" style={{ padding: "14px 36px" }}>{ts.cta.btn[lang]}</Link>
        </div>
      </section>
    </>
  );
}
