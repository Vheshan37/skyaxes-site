import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "会社概要 / Company",
  description:
    "SkyAxes株式会社の会社概要。日本人PMが主導するオフショア開発会社。設立情報・事業内容・対応言語・所在地のご案内。",
};

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
    icon: "🇯🇵",
    titleJP: "日本人PM主導",
    titleEN: "Japan-side PM Leadership",
    desc: "要件定義・仕様書作成・品質管理・クライアントコミュニケーションを日本語で行います。",
  },
  {
    icon: "🎯",
    titleJP: "技術特化",
    titleEN: "Technical Specialization",
    desc: "3D/VR、IoT、業務システムに特化。汎用的なオフショア仲介とは異なる専門性を提供します。",
  },
  {
    icon: "💼",
    titleJP: "現実的なコスト",
    titleEN: "Realistic Cost",
    desc: "最安値ではなく、品質と価格のバランスを重視した「コスト効率の高い開発」を提供します。",
  },
  {
    icon: "🔧",
    titleJP: "運用・保守まで対応",
    titleEN: "Post-launch Support",
    desc: "納品後の運用・保守・機能追加まで継続的にサポートします。",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            Company
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            会社概要
          </h1>
          <p
            style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520 }}
          >
            Japan-side PM-led offshore development partner for 3D/VR, IoT, and business systems
            in manufacturing and dental/medical-adjacent technical fields.
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
                ミッション
              </h2>
              <p
                className="mb-5"
                style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.85, fontFamily: "var(--font-noto)" }}
              >
                日本の製造業・医療・専門サービス業界において、技術的に高度なソフトウェア開発を
                現実的なコストで実現することを使命としています。
              </p>
              <p
                style={{ fontSize: 15, color: "var(--color-text)", lineHeight: 1.85, fontFamily: "var(--font-noto)" }}
              >
                「安いオフショア」ではなく、日本人PMによる要件管理・品質保証・コミュニケーション品質を
                強みとした「コスト効率の高い技術開発パートナー」として、
                お客様の事業成長を技術面で支援します。
              </p>
            </div>

            {/* Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map(({ icon, titleJP, titleEN, desc }) => (
                <div
                  key={titleJP}
                  className="p-6 rounded-xl"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <p
                    className="font-bold mb-1"
                    style={{ fontSize: 15, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                  >
                    {titleJP}
                  </p>
                  <p
                    className="text-xs mb-3"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                  >
                    {titleEN}
                  </p>
                  <p
                    style={{ fontSize: 13, color: "var(--color-text)", lineHeight: 1.7, fontFamily: "var(--font-noto)" }}
                  >
                    {desc}
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
              会社情報&nbsp;<span style={{ fontFamily: "var(--font-jakarta)", fontSize: 18, fontWeight: 400, color: "var(--color-muted)" }}>Company Profile</span>
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
                      {label}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                    >
                      {labelEN}
                    </span>
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
            開発のご相談・お問い合わせ
          </h2>
          <Link href="/contact" className="btn-primary">お問い合わせ&nbsp;/&nbsp;Contact</Link>
        </div>
      </section>
    </>
  );
}
