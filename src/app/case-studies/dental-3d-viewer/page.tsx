import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "歯科用3Dビューア導入事例 / Dental 3D Viewer Case Study",
  description:
    "歯科診療向けリアルタイム3Dビューア開発事例。Qt/OpenGLによる50ms以下の低レイテンシ描画を実現。SkyAxesのフラッグシップ実績。",
};

const quadrants = [
  {
    num: "01",
    titleJP: "課題",
    titleEN: "Challenge",
    content: (
      <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-noto)", color: "var(--color-text)" }}>
        歯科診療現場では、治療計画の説明時に3Dスキャンデータを患者にわかりやすく見せる手段がなく、
        複数の断面や角度を素早く切り替えながら説明することが困難でした。
        既存のDICOMビューアは臨床ワークフローに適しておらず、
        レイテンシが高く診察中のリアルタイム操作に耐えられませんでした。
      </p>
    ),
  },
  {
    num: "02",
    titleJP: "解決策",
    titleEN: "Solution",
    content: (
      <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-noto)", color: "var(--color-text)" }}>
        SkyAxesはQt/OpenGLをベースとしたWindowsデスクトップアプリケーションを設計・開発しました。
        日本人PMが歯科医師へのヒアリングから要件定義・仕様書作成を担当し、
        オフショアチームの実装・品質管理を一括で管理。
        直感的な操作性と50ms以下のリアルタイム描画レスポンスを実現しました。
      </p>
    ),
  },
  {
    num: "03",
    titleJP: "技術要素",
    titleEN: "Technology Elements",
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
    titleJP: "成果",
    titleEN: "Outcome",
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
            描画レイテンシ&nbsp;/&nbsp;Rendering latency
          </span>
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.8, fontFamily: "var(--font-noto)", color: "var(--color-text)" }}>
          診察中のリアルタイム操作が可能となり、患者への説明品質が大幅に向上。
          日本人PMによる一貫したコミュニケーション体制により、仕様変更にも迅速に対応しました。
          納品後も継続的なメンテナンスサポートを提供しています。
        </p>
      </>
    ),
  },
];

export default function DentalCaseStudyPage() {
  return (
    <>
      {/* ── Hero band ── */}
      <section className="section-white" style={{ paddingBlock: 0 }}>
        {/* 4px clinical accent bar at very top */}
        <div style={{ height: 4, background: "var(--color-clinical)" }} />
        <div className="container-site" style={{ paddingBlock: 64 }}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="tag-clinical">医療&nbsp;/&nbsp;Healthcare</span>
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
            歯科用3Dビューア導入事例
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
              描画レイテンシを達成&nbsp;/&nbsp;Rendering latency achieved
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
              {quadrants.map(({ num, titleJP, titleEN, content }, i) => (
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
                    {titleJP}
                  </h2>
                  <p
                    className="mb-5 text-xs"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                  >
                    {titleEN}
                  </p>
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
              ソフトウェア画面&nbsp;/&nbsp;Software Screenshots
            </h2>
            <p
              className="text-center text-xs mb-10"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
            >
              ※ 実際のスクリーンショットは本番公開前にSkyAxesエンジニアリングチームより差し替えてください
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
                  "[SCREENSHOT: 3D viewer — 咬合面観 / Occlusal view]",
                  "[SCREENSHOT: 3D viewer — 矢状断スライス / Cross-section]",
                  "[SCREENSHOT: 3D viewer — 全顎3Dスキャン / Full arch scan]",
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
            ← すべての事例へ戻る&nbsp;/&nbsp;Back to Case Studies
          </Link>
          <Link href="/contact" className="btn-primary">
            類似の開発についてご相談する
          </Link>
        </div>
      </section>
    </>
  );
}
