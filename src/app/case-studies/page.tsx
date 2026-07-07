"use client";

import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

const cases = [
  {
    tagJP: "医療 / Healthcare",
    tagEN: "Healthcare",
    tagClass: "tag-clinical",
    metricJP: "< 50ms レイテンシ",
    metricEN: "< 50ms Latency",
    metricColor: "var(--color-clinical)",
    titleJP: "歯科用3Dビューア導入事例",
    titleEN: "Dental 3D Viewer Implementation",
    descJP: "歯科診療現場でのリアルタイム3Dスキャンデータ可視化。Qt/OpenGLによるWindowsデスクトップアプリ。",
    descEN: "Real-time 3D scan visualization for dental. Qt/OpenGL Windows desktop app.",
    href: "/case-studies/dental-3d-viewer",
    featured: true,
  },
  {
    tagJP: "製造 / Manufacturing",
    tagEN: "Manufacturing",
    tagClass: "tag-iot",
    metricJP: "ライン品質自動化",
    metricEN: "Automated Line QC",
    metricColor: "var(--color-green-iot)",
    titleJP: "製造ライン品質管理：LineQC",
    titleEN: "Manufacturing Line QC System",
    descJP: "センサーデータをリアルタイム収集・可視化し、不良品検出を自動化。製造現場で稼働中。",
    descEN: "Real-time sensor data with automated defect detection. In production.",
    href: "/lineqc",
    featured: false,
  },
  {
    tagJP: "産業 / Industrial",
    tagEN: "Industrial",
    tagClass: "tag-navy",
    metricJP: "AR研修システム",
    metricEN: "AR Training System",
    metricColor: "var(--color-accent)",
    titleJP: "AR製造研修システム",
    titleEN: "AR Manufacturing Training",
    descJP: "製造現場向けAR技術を活用した作業手順の可視化・研修支援システム。",
    descEN: "AR-based work procedure visualization for manufacturing.",
    href: "/case-studies",
    featured: false,
  },
];

export default function CaseStudiesPage() {
  const { lang } = useLanguage();

  return (
    <>
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            {t.caseStudies.hero.eyebrow[lang]}
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            {t.caseStudies.hero.title[lang]}
          </h1>
          <p style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520 }}>
            {t.caseStudies.hero.sub[lang]}
          </p>
        </div>
      </section>

      <section className="section-white" style={{ paddingBlock: 80 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map(({ tagJP, tagEN, tagClass, metricJP, metricEN, metricColor, titleJP, titleEN, descJP, descEN, href, featured }) => (
              <FadeInSection key={titleJP}>
                <Link
                  href={href}
                  className="case-card-hover block rounded-xl border overflow-hidden h-full"
                  style={{
                    borderColor: featured ? "var(--color-clinical)" : "var(--color-border)",
                    background: "#ffffff",
                    textDecoration: "none",
                    borderWidth: featured ? 2 : 1,
                  }}
                >
                  {featured && (
                    <div style={{ height: 4, background: "var(--color-clinical)" }} />
                  )}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className={tagClass}>{lang === 'JP' ? tagJP : tagEN}</span>
                      {featured && (
                        <span
                          className="text-xs font-semibold px-2 py-1 rounded"
                          style={{ background: "var(--color-clinical-light)", color: "var(--color-clinical)", fontFamily: "var(--font-jakarta)" }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <div
                      className="text-lg font-bold mb-4"
                      style={{ color: metricColor, fontFamily: "var(--font-jakarta)" }}
                    >
                      {lang === 'JP' ? metricJP : metricEN}
                    </div>

                    <h2
                      className="font-bold mb-1"
                      style={{ fontSize: 17, color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
                    >
                      {lang === 'JP' ? titleJP : titleEN}
                    </h2>
                    {lang === 'JP' && (
                      <p className="text-xs mb-3" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                        {titleEN}
                      </p>
                    )}
                    <p style={{ fontSize: 13, color: "var(--color-text)", lineHeight: 1.75, fontFamily: "var(--font-noto)" }}>
                      {lang === 'JP' ? descJP : descEN}
                    </p>

                    <p
                      className="mt-5 text-sm font-semibold"
                      style={{ color: metricColor, fontFamily: "var(--font-jakarta)" }}
                    >
                      {lang === 'JP' ? '事例を見る\u00a0→' : 'View Case →'}
                    </p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
