"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function DentalCaseStudyPage() {
  const { lang } = useLanguage();

  const quadrants = [
    {
      num: "01",
      title: lang === "JP" ? "課題" : "Challenge",
      content: lang === "JP" ? (
        <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-noto)", color: "var(--color-text)" }}>
          歯科診療現場では、治療計画の説明時に3Dスキャンデータを患者にわかりやすく見せる手段がなく、
          複数の断面や角度を素早く切り替えながら説明することが困難でした。
          既存のDICOMビューアは臨床ワークフローに適しておらず、
          レイテンシが高く診察中のリアルタイム操作に耐えられませんでした。
        </p>
      ) : (
        <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-jakarta)", color: "var(--color-text)" }}>
          In dental clinics, there was no easy way to present 3D scan data to patients during treatment planning, making it difficult to explain while switching quickly between multiple sections and angles. Existing DICOM viewers were not suited for clinical workflows, showing high latency and failing to support real-time operations during exams.
        </p>
      ),
    },
    {
      num: "02",
      title: lang === "JP" ? "解決策" : "Solution",
      content: lang === "JP" ? (
        <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-noto)", color: "var(--color-text)" }}>
          SkyAxesはQt/OpenGLをベースとしたWindowsデスクトップアプリケーションを設計・開発しました。
          日本人PMが歯科医師へのヒアリングから要件定義・仕様書作成を担当し、
          オフショアチームの実装・品質管理を一括で管理。
          直感的な操作性と50ms以下のリアルタイム描画レスポンスを実現しました。
        </p>
      ) : (
        <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-jakarta)", color: "var(--color-text)" }}>
          SkyAxes designed and developed a Windows desktop application based on Qt/OpenGL. A Japan-side PM handled requirements definition and specifications based on interviews with dentists, and managed implementation and quality control of the offshore team. This achieved intuitive operation and a real-time rendering response of under 50ms.
        </p>
      ),
    },
    {
      num: "03",
      title: lang === "JP" ? "技術要素" : "Technology Elements",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          {[
            ["Rendering", "Qt / OpenGL"],
            ["Language", "C++17"],
            ["Data Format", "STL / OBJ / DICOM"],
            ["Platform", "Windows 10/11 x64"],
            ["UI Framework", "Qt Widgets"],
            ["Data Pipeline", "Custom I/O layer"],
            ["QA", "Unit + Integration tests"],
            ["Deploy", "NSIS installer"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-start gap-2">
              <span
                className="text-xs mt-0.5"
                style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", width: 90, flexShrink: 0 }}
              >
                {label}
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-code)" }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: "04",
      title: lang === "JP" ? "成果" : "Outcome",
      content: (
        <>
          <div
            className="flex items-baseline gap-2 mb-5 p-4 rounded-lg"
            style={{ background: "var(--color-clinical-light)", border: "1px solid rgba(74,144,196,0.2)" }}
          >
            <span
              className="text-4xl font-bold"
              style={{ color: "var(--color-clinical)", fontFamily: "var(--font-jakarta)", lineHeight: 1 }}
            >
              &lt;50ms
            </span>
            <span style={{ fontSize: 14, color: "var(--color-clinical)", fontFamily: "var(--font-noto)" }}>
              {lang === "JP" ? "描画レイテンシ" : "Rendering latency"}
            </span>
          </div>
          {lang === "JP" ? (
            <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-noto)", color: "var(--color-text)" }}>
              診察中のリアルタイム操作が可能となり、患者への説明品質が大幅に向上。
              日本人PMによる一貫したコミュニケーション体制により、仕様変更にも迅速に対応しました。
              納品後も継続的なメンテナンスサポートを提供しています。
            </p>
          ) : (
            <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-jakarta)", color: "var(--color-text)" }}>
              Real-time operation during consultations became possible, significantly improving presentation quality to patients. With a consistent communication structure led by a Japan-side PM, we responded quickly to spec changes. We continue to provide ongoing maintenance support after delivery.
            </p>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      {/* ── Hero band ── */}
      <section className="section-white" style={{ paddingBlock: 0 }}>
        {/* 4px clinical accent bar at very top */}
        <div style={{ height: 4, background: "var(--color-clinical)" }} />
        <div className="container-site" style={{ paddingBlock: 64 }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="tag-clinical">
              {lang === "JP" ? "医療" : "Healthcare"}
            </span>
            <span
              className="text-xs"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
            >
              Case Study
            </span>
          </div>

          <h1
            className="font-bold mb-2"
            style={{
              fontSize: "clamp(22px, 3.5vw, 36px)",
              color: "var(--color-navy)",
              fontFamily: "var(--font-noto)",
              lineHeight: 1.4,
            }}
          >
            {lang === "JP" ? "歯科用3Dビューア導入事例" : "Dental 3D Viewer Implementation Case"}
          </h1>
          <p
            className="mb-8"
            style={{ fontSize: 16, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
          >
            Dental 3D Viewer Implementation
          </p>

          {/* Headline metric */}
          <div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg"
            style={{ background: "var(--color-clinical-light)", border: "1px solid rgba(74,144,196,0.25)" }}
          >
            <span
              className="text-2xl font-bold"
              style={{ color: "var(--color-clinical)", fontFamily: "var(--font-jakarta)" }}
            >
              &lt;50ms
            </span>
            <span style={{ fontSize: 14, color: "var(--color-clinical)", fontFamily: "var(--font-noto)" }}>
              {lang === "JP" ? "描画レイテンシを達成" : "Rendering latency achieved"}
            </span>
          </div>
        </div>
      </section>

      {/* ── 4-Quadrant Grid ── */}
      <FadeInSection>
        <section className="section-white">
          <div className="container-site pb-0">
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ border: "1px solid var(--color-border)", borderRadius: 12, overflow: "hidden" }}
            >
              {quadrants.map(({ num, title, content }, i) => (
                <div
                  key={num}
                  className="p-10 md:p-12"
                  style={{
                    minHeight: 320,
                    borderRight: i % 2 === 0 ? "1px solid var(--color-border)" : "none",
                    borderBottom: i < 2 ? "1px solid var(--color-border)" : "none",
                  }}
                >
                  {/* Quadrant header */}
                  <p
                    className="font-semibold mb-2"
                    style={{ fontSize: 12, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.05em" }}
                  >
                    {num}
                  </p>
                  <h2
                    className="font-bold mb-1"
                    style={{ fontSize: 18, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                  >
                    {title}
                  </h2>
                  {/* Thin accent rule */}
                  <div
                    style={{ height: 2, width: 32, background: "var(--color-clinical)", borderRadius: 1, marginBottom: 20 }}
                  />
                  {content}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ── Media Strip ── */}
      <section className="section-surface" style={{ paddingBlock: 64 }}>
        <FadeInSection>
          <div className="container-site">
            <h2
              className="font-bold mb-3 text-center"
              style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              {lang === "JP" ? "ソフトウェア画面" : "Software Screenshots"}
            </h2>
            <p
              className="text-center text-xs mb-10"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
            >
              {lang === "JP"
                ? "※ 実際のスクリーンショットは本番公開前にSkyAxesエンジニアリングチームより差し替えてください"
                : "* Actual screenshots will be replaced by the SkyAxes engineering team before final production launch"}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-0">
              <div
                className="overflow-hidden rounded-xl"
                style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
              >
                <Image
                  src="/images/dental-screenshots.jpg"
                  alt="歯科用3Dビューア スクリーンショット — 咬合面観・矢状断スライス・全顎3Dスキャン"
                  width={1200}
                  height={500}
                  className="w-full h-auto block"
                />
              </div>
              <div className="grid grid-cols-3 gap-6 mt-4">
                {[
                  lang === "JP" ? "[SCREENSHOT: 3D viewer — 咬合面観]" : "[SCREENSHOT: 3D viewer — Occlusal view]",
                  lang === "JP" ? "[SCREENSHOT: 3D viewer — 矢状断スライス]" : "[SCREENSHOT: 3D viewer — Cross-section]",
                  lang === "JP" ? "[SCREENSHOT: 3D viewer — 全顎3Dスキャン]" : "[SCREENSHOT: 3D viewer — Full arch scan]",
                ].map((caption, i) => (
                  <p
                    key={i}
                    className="text-center"
                    style={{ fontSize: 12, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", lineHeight: 1.5 }}
                  >
                    {caption}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Back to case studies + CTA at bottom only */}
      <section className="section-white" style={{ paddingBlock: 64 }}>
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/case-studies"
            className="text-sm font-semibold"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-jakarta)" }}
          >
            {lang === "JP" ? "← すべての事例へ戻る" : "← Back to all Case Studies"}
          </Link>
          <Link href="/contact" className="btn-primary">
            {lang === "JP" ? "類似の開発についてご相談する" : "Inquire about similar systems"}
          </Link>
        </div>
      </section>
    </>
  );
}
