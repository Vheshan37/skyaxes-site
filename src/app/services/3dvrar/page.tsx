"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

const capabilities = [
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
    jp: "3D可視化", en: "3D Visualization",
    descJP: "歯科・医療・産業用の高精度3Dレンダリング",
    descEN: "High-precision 3D rendering for dental, medical, and industrial use",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3l4 9-4 9h14l-4-9 4-9H5z" /></svg>,
    jp: "データインポート", en: "Data Import",
    descJP: "STL/OBJ/DICOMなど各種3Dフォーマット対応",
    descEN: "Supports STL/OBJ/DICOM and other 3D formats",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>,
    jp: "Windowsアプリ", en: "Windows Desktop",
    descJP: "Qt/OpenGLベースの業務用デスクトップアプリ",
    descEN: "Business desktop applications built on Qt/OpenGL",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>,
    jp: "VR/AR拡張", en: "VR/AR Extension",
    descJP: "将来的なVR/AR対応に備えたアーキテクチャ設計",
    descEN: "Architecture designed for future VR/AR readiness",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="5" x2="19" y2="19" /></svg>,
    jp: "断面解析", en: "Cross-section Analysis",
    descJP: "リアルタイムスライス・計測・アノテーション",
    descEN: "Real-time slicing, measurement, and annotation",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    jp: "低レイテンシ描画", en: "Low-latency Rendering",
    descJP: "50ms以下の描画応答を実現",
    descEN: "Sub-50ms rendering response achieved",
  },
];

export default function ThreeDVRPage() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <span className="tag-clinical mb-5 inline-block">3D / VR / AR</span>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            {t.threeDVR.hero.title[lang]}
          </h1>
          <p
            style={{ fontSize: 16, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520, lineHeight: 1.75 }}
          >
            {t.threeDVR.hero.sub[lang]}
          </p>
        </div>
      </section>

      {/* Flagship link */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="mb-4"
                style={{ width: 40, height: 4, background: "var(--color-clinical)", borderRadius: 2 }}
              />
              <h2
                className="font-bold mb-3"
                style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.45 }}
                dangerouslySetInnerHTML={{
                  __html: lang === "JP"
                    ? "フラッグシップ事例：<br/>歯科用3Dビューア"
                    : "Flagship:<br/>Dental 3D Viewer",
                }}
              />
              <p
                className="mb-6"
                style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.8, fontFamily: "var(--font-noto)" }}
              >
                {lang === "JP"
                  ? "歯科診療現場でのリアルタイム3Dスキャンデータ可視化システム。Qt/OpenGLによるWindowsデスクトップアプリとして実装し、50ms以下の低レイテンシ描画を達成しました。"
                  : "Real-time 3D scan visualization for dental workflows. Qt/OpenGL Windows app with sub-50ms rendering."}
              </p>
              <Link href="/case-studies/dental-3d-viewer" className="btn-primary" style={{ background: "var(--color-clinical)" }}>
                {lang === "JP" ? "事例の詳細を見る\u00A0→" : "View Case Study\u00A0→"}
              </Link>
            </div>
            <div>
              <Image
                src="/images/hero-dental-3d.jpg"
                alt={lang === "JP" ? "歯科用3Dビューア" : "Dental 3D Viewer"}
                width={600}
                height={450}
                className="w-full h-auto rounded-xl"
                style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
              />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Capabilities grid */}
      <section className="section-surface" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <h2
              className="font-bold mb-12 text-center"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              {lang === "JP" ? (
                <>技術ケイパビリティ&nbsp;<span style={{ fontFamily: "var(--font-jakarta)", fontSize: 18, fontWeight: 400, color: "var(--color-muted)" }}>Technical Capabilities</span></>
              ) : (
                "Technical Capabilities"
              )}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map(({ svg, jp, en, descJP, descEN }) => (
                <div
                  key={jp}
                  className="p-6 rounded-xl"
                  style={{ background: "#ffffff", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: "rgba(74,144,196,0.12)", color: "var(--color-clinical)" }}
                  >
                    {svg}
                  </div>
                  <p
                    className="font-bold mb-1"
                    style={{ fontSize: 16, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                  >
                    {lang === "JP" ? jp : en}
                  </p>
                  <p className="text-xs mb-2" style={{ color: "var(--color-clinical)", fontFamily: "var(--font-jakarta)" }}>
                    {lang === "JP" ? en : jp}
                  </p>
                  <p style={{ fontSize: 13, color: "var(--color-muted)", fontFamily: "var(--font-noto)", lineHeight: 1.7 }}>
                    {lang === "JP" ? descJP : descEN}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Screenshots strip */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <h2
              className="font-bold mb-8 text-center"
              style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              {lang === "JP"
                ? "歯科用3Dビューア — 画面スクリーンショット"
                : "Dental 3D Viewer — Screenshots"}
            </h2>
            <Image
              src="/images/dental-screenshots.jpg"
              alt={lang === "JP"
                ? "歯科用3Dビューア — 咬合面観・矢状断スライス・全顎3Dスキャン"
                : "Dental 3D Viewer — Occlusal view · Cross-section slice · Full arch 3D scan"}
              width={1200}
              height={500}
              className="w-full h-auto rounded-xl"
              style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
            />
            <p
              className="mt-4 text-center text-xs"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
            >
              Left: Occlusal view with measurement overlays&nbsp;·&nbsp;Center: Cross-section slice with root canal overlay&nbsp;·&nbsp;Right: Full arch 3D scan
            </p>
          </div>
        </FadeInSection>
      </section>

      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
          >
            {lang === "JP" ? "3D開発のご相談" : "Discuss 3D Development"}
          </h2>
          <Link href="/contact" className="btn-primary" style={{ background: "var(--color-clinical)" }}>
            {lang === "JP" ? "お問い合わせ" : "Contact Us"}
          </Link>
        </div>
      </section>
    </>
  );
}
