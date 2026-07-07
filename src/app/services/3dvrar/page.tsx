import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "3D・VR・AR開発 / 3D VR AR Development",
  description:
    "歯科用3Dビューア開発実績。Qt/OpenGLによる3D可視化、VR/ARアプリケーション受託開発。SkyAxesの3D技術力をご紹介。",
};

const capabilities = [
  { icon: "🦷", jp: "3D可視化", en: "3D Visualization", desc: "歯科・医療・産業用の高精度3Dレンダリング" },
  { icon: "🔬", jp: "データインポート", en: "Data Import", desc: "STL/OBJ/DICOMなど各種3Dフォーマット対応" },
  { icon: "💻", jp: "Windowsアプリ", en: "Windows Desktop", desc: "Qt/OpenGLベースの業務用デスクトップアプリ" },
  { icon: "🥽", jp: "VR/AR拡張", en: "VR/AR Extension", desc: "将来的なVR/AR対応に備えたアーキテクチャ設計" },
  { icon: "📊", jp: "断面解析", en: "Cross-section Analysis", desc: "リアルタイムスライス・計測・アノテーション" },
  { icon: "⚡", jp: "低レイテンシ描画", en: "Low-latency Rendering", desc: "50ms以下の描画応答を実現" },
];

export default function ThreeDVRPage() {
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
            3D・VR・AR<br />アプリケーション開発
          </h1>
          <p
            style={{ fontSize: 16, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520, lineHeight: 1.75 }}
          >
            Advanced 3D visualization for dental, medical, and industrial sectors.
            Practical and business-oriented — not entertainment or speculative VR.
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
              >
                フラッグシップ事例：<br />歯科用3Dビューア
              </h2>
              <p
                className="mb-6"
                style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.8, fontFamily: "var(--font-noto)" }}
              >
                歯科診療現場でのリアルタイム3Dスキャンデータ可視化システム。
                Qt/OpenGLによるWindowsデスクトップアプリとして実装し、
                50ms以下の低レイテンシ描画を達成しました。
              </p>
              <Link href="/case-studies/dental-3d-viewer" className="btn-primary" style={{ background: "var(--color-clinical)" }}>
                事例の詳細を見る&nbsp;→
              </Link>
            </div>
            <div>
              <Image
                src="/images/hero-dental-3d.jpg"
                alt="歯科用3Dビューア"
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
              技術ケイパビリティ&nbsp;<span style={{ fontFamily: "var(--font-jakarta)", fontSize: 18, fontWeight: 400, color: "var(--color-muted)" }}>Technical Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {capabilities.map(({ icon, jp, en, desc }) => (
                <div
                  key={jp}
                  className="p-6 rounded-xl"
                  style={{ background: "#ffffff", border: "1px solid var(--color-border)" }}
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <p
                    className="font-bold mb-1"
                    style={{ fontSize: 16, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                  >
                    {jp}
                  </p>
                  <p className="text-xs mb-2" style={{ color: "var(--color-clinical)", fontFamily: "var(--font-jakarta)" }}>
                    {en}
                  </p>
                  <p style={{ fontSize: 13, color: "var(--color-muted)", fontFamily: "var(--font-noto)", lineHeight: 1.7 }}>
                    {desc}
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
              歯科用3Dビューア — 画面スクリーンショット
            </h2>
            <Image
              src="/images/dental-screenshots.jpg"
              alt="歯科用3Dビューア — 咬合面観・矢状断スライス・全顎3Dスキャン"
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
            3D開発のご相談
          </h2>
          <Link href="/contact" className="btn-primary" style={{ background: "var(--color-clinical)" }}>
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
