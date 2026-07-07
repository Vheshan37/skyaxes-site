import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "SkyAxes — 日本人PMが導くオフショア開発",
  description:
    "3D/VR・IoT・業務システムのオフショア開発パートナー。日本人PMによるプロジェクト管理で、現実的なコストと確かな品質を両立します。",
};

const services = [
  {
    icon: "🌐",
    titleJP: "オフショア開発",
    titleEN: "Offshore Development",
    desc: "日本人PMが要件定義・設計・品質管理を一括担当。現実的なコストで確かな開発を実現します。",
    descEN: "Japan-side PM manages requirements, design, and QA end-to-end.",
    href: "/services/offshore",
    accentCls: "service-card service-card-accent",
    accent: "var(--color-accent)",
  },
  {
    icon: "🎯",
    titleJP: "3D・VR・AR開発",
    titleEN: "3D / VR / AR Development",
    desc: "歯科用3Dビューアをはじめとする高度な3D可視化・VR/ARアプリケーションの受託開発。",
    descEN: "Advanced 3D visualization, VR/AR applications from dental to industrial.",
    href: "/services/3dvrar",
    accentCls: "service-card service-card-clinical",
    accent: "var(--color-clinical)",
  },
  {
    icon: "⚙️",
    titleJP: "IoT・製造システム",
    titleEN: "IoT & Manufacturing",
    desc: "品質管理・センサーデータ収集・工場管理システムの設計・開発。LineQCも提供中。",
    descEN: "QC, sensor data pipelines, and factory management systems.",
    href: "/services/iot",
    accentCls: "service-card service-card-iot",
    accent: "var(--color-green-iot)",
  },
];

const flowSteps = [
  { num: "01", jp: "ヒアリング", en: "Consultation" },
  { num: "02", jp: "要件定義", en: "Requirements" },
  { num: "03", jp: "見積もり", en: "Estimate" },
  { num: "04", jp: "開発", en: "Development" },
  { num: "05", jp: "品質確認", en: "QA" },
  { num: "06", jp: "運用・保守", en: "Maintenance" },
];

const partners = ["OPExPARK", "Uhuru Corp.", "SORACOM", "Preferred Networks", "eSolia"];

export default function HomePage() {
  return (
    <>
      {/* ════ HERO ════ */}
      <section className="section-white" style={{ paddingTop: 96, paddingBottom: 80 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-6"
                style={{ color: "var(--color-accent)", letterSpacing: "0.08em", fontFamily: "var(--font-jakarta)" }}
              >
                オフショア開発パートナー&nbsp;/&nbsp;Offshore Development Partner
              </p>
              <h1
                className="font-bold leading-tight mb-5"
                style={{
                  fontSize: "clamp(26px, 4vw, 42px)",
                  color: "var(--color-navy)",
                  fontFamily: "var(--font-noto)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                }}
              >
                日本人PMが導く、<br />
                3D/VR・IoT・業務システムの<br />
                オフショア開発
              </h1>
              <p
                className="mb-8"
                style={{ fontSize: 16, color: "var(--color-muted)", maxWidth: 480, fontFamily: "var(--font-jakarta)", lineHeight: 1.75 }}
              >
                Japan-side PM-led offshore development for 3D/VR, IoT, and business systems —
                built on realistic development costs and disciplined delivery, not the cheapest bid.
              </p>
              <Link href="/services" className="btn-primary">
                サービスを見る&nbsp;<span style={{ fontFamily: "var(--font-jakarta)" }}>/ View Services</span>
              </Link>
            </div>

            <div className="relative order-first lg:order-last">
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: 16, border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
              >
                <Image
                  src="/images/hero-dental-3d.jpg"
                  alt="歯科用3Dビューア — DentalViewer 3D ソフトウェア画面"
                  width={700}
                  height={525}
                  className="w-full h-auto block"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 hidden lg:block"
                style={{
                  background: "#ffffff",
                  border: "1px solid var(--color-border)",
                  borderRadius: 10,
                  padding: "12px 18px",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                  Dental 3D Viewer
                </p>
                <p className="font-bold text-sm" style={{ color: "var(--color-navy)", fontFamily: "var(--font-jakarta)" }}>
                  フラッグシップ事例
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TRUST RIBBON ════ */}
      <section className="section-surface" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <p
              className="text-center mb-8 text-xs font-medium tracking-widest uppercase"
              style={{ color: "var(--color-muted)", letterSpacing: "0.05em", fontFamily: "var(--font-jakarta)" }}
            >
              信頼いただいている企業&nbsp;/&nbsp;Trusted By
            </p>
            {/* Desktop */}
            <div className="hidden md:flex justify-center items-center flex-wrap gap-14">
              {partners.map((name) => (
                <div key={name} className="trust-logo" style={{ height: 32, display: "flex", alignItems: "center" }}>
                  <span className="font-bold text-sm tracking-tight" style={{ color: "var(--color-navy)", fontFamily: "var(--font-jakarta)" }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
            {/* Mobile scroll */}
            <div className="md:hidden trust-fade-wrap">
              <div className="trust-scroll px-10">
                {partners.map((name) => (
                  <div key={name} className="trust-logo" style={{ height: 32, display: "flex", alignItems: "center" }}>
                    <span className="font-bold text-sm" style={{ color: "var(--color-navy)", fontFamily: "var(--font-jakarta)", whiteSpace: "nowrap" }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ SERVICES ════ */}
      <section className="section-white" style={{ paddingBlock: 88 }}>
        <FadeInSection>
          <div className="container-site">
            <div className="mb-12 text-center">
              <h2 className="font-bold mb-3" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>
                サービス
              </h2>
              <p style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>Our Services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map(({ icon, titleJP, titleEN, desc, descEN, href, accentCls, accent }) => (
                <Link key={href} href={href} className={accentCls}>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5"
                    style={{ background: `${accent}18` }}
                  >
                    {icon}
                  </div>
                  <h3 className="font-bold mb-1" style={{ fontSize: 18, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>
                    {titleJP}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>{titleEN}</p>
                  <p style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.75, fontFamily: "var(--font-noto)" }}>{desc}</p>
                  <p className="mt-2 text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>{descEN}</p>
                  <p className="mt-5 text-sm font-semibold flex items-center gap-1" style={{ color: accent, fontFamily: "var(--font-jakarta)" }}>
                    詳しく見る&nbsp;→
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ FEATURED CASE STUDY ════ */}
      <section className="section-surface" style={{ paddingBlock: 88 }}>
        <FadeInSection>
          <div className="container-site">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}>
                Featured Case Study
              </p>
              <h2 className="font-bold" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>
                フラッグシップ導入事例
              </h2>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl"
              style={{ border: "1px solid var(--color-border)", background: "#ffffff", boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative h-64 lg:h-auto">
                <Image src="/images/hero-dental-3d.jpg" alt="歯科用3Dビューア" fill className="object-cover" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="mb-6" style={{ width: 40, height: 4, background: "var(--color-clinical)", borderRadius: 2 }} />
                <span className="tag-clinical mb-4 self-start">医療&nbsp;/&nbsp;Healthcare</span>
                <h3 className="font-bold mb-2" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.45 }}>
                  歯科用3Dビューア導入事例
                </h3>
                <p className="text-sm mb-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>Dental 3D Viewer Implementation</p>
                <p className="mb-6 text-sm" style={{ color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.75 }}>
                  歯科診療現場でのリアルタイム3Dスキャンデータ可視化を実現。Qt/OpenGLベースのWindowsアプリケーションとして納品。
                </p>
                <div className="flex items-center gap-2 mb-8 p-4 rounded-lg" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
                  <span className="text-2xl font-bold" style={{ color: "var(--color-clinical)", fontFamily: "var(--font-jakarta)" }}>&lt;50ms</span>
                  <span className="text-sm" style={{ color: "var(--color-muted)", fontFamily: "var(--font-noto)" }}>描画レイテンシ&nbsp;/&nbsp;Rendering latency</span>
                </div>
                <Link href="/case-studies/dental-3d-viewer" className="btn-primary self-start">事例の詳細を見る&nbsp;→</Link>
              </div>
            </div>
            <div className="mt-6 text-right">
              <Link href="/case-studies" className="text-sm font-semibold" style={{ color: "var(--color-accent)", fontFamily: "var(--font-jakarta)" }}>
                すべての事例を見る&nbsp;→
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ DEVELOPMENT FLOW ════ */}
      <section className="section-white" style={{ paddingBlock: 88 }}>
        <FadeInSection>
          <div className="container-site">
            <div className="mb-12 text-center">
              <h2 className="font-bold mb-2" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>
                開発フロー
              </h2>
              <p style={{ fontSize: 14, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>Development Process</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {flowSteps.map(({ num, jp, en }, i) => (
                <div key={num} className="relative flex flex-col items-center text-center">
                  {i < flowSteps.length - 1 && (
                    <div className="absolute top-6 left-1/2 w-full h-px hidden lg:block" style={{ background: "var(--color-border)", zIndex: 0 }} />
                  )}
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-4"
                    style={{ background: "var(--color-navy)", color: "#ffffff", fontFamily: "var(--font-jakarta)" }}
                  >
                    {num}
                  </div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>{jp}</p>
                  <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>{en}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ LINEQC PROOF ════ */}
      <section className="section-surface" style={{ paddingBlock: 88 }}>
        <FadeInSection>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="tag-iot mb-5 inline-block">製造&nbsp;/&nbsp;Manufacturing</span>
                <h2 className="font-bold mb-3" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.45 }}>
                  LineQC — 製造ライン品質管理システム
                </h2>
                <p className="text-sm mb-2" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>Manufacturing Line Quality Control System</p>
                <p className="mb-8" style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.75, fontFamily: "var(--font-noto)" }}>
                  製造現場のラインデータを収集・可視化し、品質管理を自動化するシステム。SkyAxesの工場系システム開発力の実績として現在も稼働中です。
                </p>
                <Link href="/lineqc" className="btn-outline">LineQCの詳細&nbsp;→</Link>
              </div>
              <div>
                <Image
                  src="/images/services-iot.jpg"
                  alt="IoT製造分析プラットフォーム"
                  width={620}
                  height={430}
                  className="w-full h-auto rounded-xl"
                  style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ FINAL CTA ════ */}
      <section className="section-white" style={{ paddingBlock: 96 }}>
        <FadeInSection>
          <div className="container-site text-center">
            <h2 className="font-bold mb-4" style={{ fontSize: "clamp(22px, 3vw, 34px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>
              開発のご相談はお気軽に
            </h2>
            <p className="mb-10 mx-auto" style={{ fontSize: 15, color: "var(--color-muted)", maxWidth: 480, fontFamily: "var(--font-jakarta)", lineHeight: 1.75 }}>
              Japan-side PM-led development consultations only. We aim to respond within 2 business days.
            </p>
            <Link href="/contact" className="btn-primary text-base" style={{ padding: "14px 32px" }}>
              お問い合わせはこちら&nbsp;/&nbsp;Contact Us
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
