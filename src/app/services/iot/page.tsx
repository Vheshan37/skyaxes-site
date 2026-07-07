import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "IoT・製造システム開発 / IoT Manufacturing Systems",
  description: "IoTセンサーデータ収集・品質管理・工場管理システムの設計・開発。LineQCを通じた製造業向け実績多数。",
};

const features = [
  { icon: "📡", jp: "センサーデータ収集", en: "Sensor Data Collection" },
  { icon: "📊", jp: "リアルタイム可視化", en: "Real-time Visualization" },
  { icon: "🔍", jp: "品質管理・異常検知", en: "QC & Anomaly Detection" },
  { icon: "🏭", jp: "ライン管理システム", en: "Production Line Management" },
  { icon: "📱", jp: "モバイル対応", en: "Mobile Compatibility" },
  { icon: "🔗", jp: "ERP・MES連携", en: "ERP / MES Integration" },
];

export default function IoTPage() {
  return (
    <>
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <span className="tag-iot mb-5 inline-block">IoT・製造</span>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            IoT・製造システム<br />開発サービス
          </h1>
          <p style={{ fontSize: 16, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520, lineHeight: 1.75 }}>
            Factory-floor IoT systems, quality control automation, and sensor data pipelines
            — built with manufacturing-sector discipline.
          </p>
        </div>
      </section>

      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
              >
                対応可能なシステム範囲
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map(({ icon, jp, en }) => (
                  <div
                    key={jp}
                    className="p-5 rounded-xl flex items-start gap-4"
                    style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
                  >
                    <span className="text-xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>
                        {jp}
                      </p>
                      <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                        {en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
              >
                実績：LineQC
              </h2>
              <div
                className="p-8 rounded-xl mb-6"
                style={{ border: "1px solid var(--color-border)", background: "#ffffff" }}
              >
                <span className="tag-iot mb-4 inline-block">製品実績</span>
                <h3
                  className="font-bold mb-2"
                  style={{ fontSize: 18, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                >
                  LineQC — 製造ライン品質管理
                </h3>
                <p style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.8, fontFamily: "var(--font-noto)" }}>
                  製造現場のラインデータをリアルタイムで収集・可視化。
                  品質管理の自動化と不良品の早期検出を実現する業務システムです。
                </p>
                <Link
                  href="/lineqc"
                  className="inline-block mt-5 text-sm font-semibold"
                  style={{ color: "var(--color-green-iot)", fontFamily: "var(--font-jakarta)" }}
                >
                  LineQCの詳細を見る&nbsp;→
                </Link>
              </div>
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
            IoT・製造システムのご相談
          </h2>
          <Link href="/contact" className="btn-primary" style={{ background: "var(--color-green-iot)" }}>
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
