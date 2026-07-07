import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "LineQC — 製造ライン品質管理システム",
  description:
    "SkyAxes開発の製造ライン品質管理システム「LineQC」。センサーデータのリアルタイム収集・可視化・異常検知。工場向けシステム開発の実績証明。",
};

const features = [
  { icon: "📡", title: "リアルタイムデータ収集", desc: "ラインセンサーからのデータを低遅延でリアルタイム収集・蓄積" },
  { icon: "📊", title: "ダッシュボード可視化", desc: "生産ライン全体の状況を直感的に把握できるダッシュボード" },
  { icon: "🔍", title: "不良品自動検知", desc: "設定した閾値を超えた場合に自動でアラート発報" },
  { icon: "📈", title: "トレンド分析", desc: "時系列データの傾向分析により品質低下を予防" },
  { icon: "📋", title: "レポート出力", desc: "日次・週次・月次の品質レポートを自動生成" },
  { icon: "🔗", title: "既存システム連携", desc: "MES・ERPシステムとのAPI連携に対応" },
];

export default function LineQCPage() {
  return (
    <>
      {/* Accent bar */}
      <div style={{ height: 4, background: "var(--color-green-iot)" }} />

      {/* Hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="tag-iot">製造システム</span>
              <span className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                Product
              </span>
            </div>
            <h1
              className="font-bold mb-3"
              style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
            >
              LineQC
            </h1>
            <p
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-green-iot)", fontFamily: "var(--font-noto)" }}
            >
              製造ライン品質管理システム
            </p>
            <p
              className="mb-8"
              style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 440, lineHeight: 1.75 }}
            >
              Manufacturing line quality control system — real-time sensor data collection,
              visualization, and automated anomaly detection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary" style={{ background: "var(--color-green-iot)" }}>
                LineQCについて問い合わせる
              </Link>
              <Link href="/services/iot" className="btn-outline" style={{ color: "var(--color-green-iot)", borderColor: "var(--color-green-iot)" }}>
                IoT開発サービスへ
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/services-iot.jpg"
              alt="LineQC — IoT製造分析ダッシュボード"
              width={620}
              height={430}
              className="w-full h-auto rounded-xl"
              style={{ border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
            />
          </div>
        </div>
      </section>

      {/* Context — connecting to broader capability */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <div
              className="p-8 rounded-xl mb-12"
              style={{ background: "var(--color-green-light)", border: "1px solid rgba(13,143,111,0.2)" }}
            >
              <p
                className="font-semibold mb-2"
                style={{ fontSize: 15, color: "var(--color-green-iot)", fontFamily: "var(--font-noto)" }}
              >
                製造システム開発力の実績証明
              </p>
              <p
                style={{ fontSize: 14, color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.8 }}
              >
                LineQCはSkyAxesが自社開発し実際に運用中のプロダクトです。
                工場データ収集・可視化・品質管理という複雑な要件を日本のクライアント向けに実装した実績として、
                製造業向けシステム開発の問い合わせを評価する際にご参照ください。
              </p>
            </div>

            {/* Features grid */}
            <h2
              className="font-bold mb-8"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              主な機能
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-xl"
                  style={{ border: "1px solid var(--color-border)", background: "#ffffff" }}
                >
                  <div className="text-2xl mb-3">{icon}</div>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontSize: 15, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.7, fontFamily: "var(--font-noto)" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
          >
            製造システム開発のご相談
          </h2>
          <p className="mb-8" style={{ fontSize: 14, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
            LineQCに関するご質問、または類似システムの開発相談はお気軽にどうぞ。
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: "var(--color-green-iot)" }}>
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
