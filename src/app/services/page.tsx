import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "サービス / Services",
  description:
    "SkyAxesのサービス — オフショア開発、3D/VR/AR開発、IoT・製造システム開発。日本人PMによる高品質な受託開発。",
};

const services = [
  {
    icon: "🌐",
    tag: "Offshore",
    titleJP: "オフショア開発",
    titleEN: "Offshore Development",
    desc: "日本人PMが要件定義・設計・品質管理を一括担当し、オフショアチームを管理します。コスト効率とクオリティを両立した開発体制を提供します。",
    href: "/services/offshore",
    accent: "var(--color-accent)",
    tagClass: "tag-navy",
  },
  {
    icon: "🎯",
    tag: "3D / VR / AR",
    titleJP: "3D・VR・AR開発",
    titleEN: "3D / VR / AR Development",
    desc: "歯科用3Dビューアをフラッグシップとして、Qt/OpenGLをはじめとした高度な3D可視化・VR/ARアプリケーションの受託開発を行います。",
    href: "/services/3dvrar",
    accent: "var(--color-clinical)",
    tagClass: "tag-clinical",
  },
  {
    icon: "⚙️",
    tag: "IoT / Manufacturing",
    titleJP: "IoT・製造システム",
    titleEN: "IoT & Manufacturing Systems",
    desc: "品質管理・センサーデータ収集・工場管理システム。LineQCを通じて培った製造業向けシステム開発のノウハウを提供します。",
    href: "/services/iot",
    accent: "var(--color-green-iot)",
    tagClass: "tag-iot",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            Services
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            サービス一覧
          </h1>
          <p style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 560 }}>
            Japan-side PM-led technical software development across three core capability areas.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-white" style={{ paddingBlock: 88 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6">
            {services.map(({ icon, tag, titleJP, titleEN, desc, href, accent, tagClass }, i) => (
              <FadeInSection key={href}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[80px_1fr_auto] gap-6 lg:gap-10 items-center p-8 rounded-xl border transition-shadow duration-200"
                  style={{
                    borderColor: "var(--color-border)",
                    background: i % 2 === 0 ? "#ffffff" : "var(--color-surface)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: `${accent}18` }}
                  >
                    {icon}
                  </div>
                  <div>
                    <span className={`${tagClass} mb-3 inline-block`}>{tag}</span>
                    <h2
                      className="font-bold mb-1"
                      style={{ fontSize: 22, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                    >
                      {titleJP}
                    </h2>
                    <p className="text-sm mb-3" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                      {titleEN}
                    </p>
                    <p style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.8, fontFamily: "var(--font-noto)", maxWidth: 640 }}>
                      {desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      href={href}
                      className="btn-primary whitespace-nowrap"
                      style={{ background: accent }}
                    >
                      詳しく見る&nbsp;→
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
          >
            まずはご相談ください
          </h2>
          <p className="mb-8" style={{ fontSize: 14, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
            Development consultations only — we respond within 2 business days.
          </p>
          <Link href="/contact" className="btn-primary">お問い合わせ&nbsp;/&nbsp;Contact</Link>
        </div>
      </section>
    </>
  );
}
