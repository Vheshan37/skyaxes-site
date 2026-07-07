import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "IoT・製造システム開発 / IoT Manufacturing Systems",
  description: "IoTセンサーデータ収集・品質管理・工場管理システムの設計・開発。LineQCを通じた製造業向け実績多数。",
};

const features = [
  {
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5.5 12a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0zm6.5 0v-3m0 0l-2 2m2-2l2 2" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2" /></svg>,
    jp: "センサーデータ収集", en: "Sensor Data Collection",
  },
  {
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 17l3-5 3 4 2-3 3 4" /></svg>,
    jp: "リアルタイム可視化", en: "Real-time Visualization",
  },
  {
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>,
    jp: "品質管理・異常検知", en: "QC & Anomaly Detection",
  },
  {
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>,
    jp: "ライン管理システム", en: "Production Line Management",
  },
  {
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    jp: "モバイル対応", en: "Mobile Compatibility",
  },
  {
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>,
    jp: "ERP・MES連携", en: "ERP / MES Integration",
  },
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
                {features.map(({ svg, jp, en }) => (
                  <div
                    key={jp}
                    className="p-5 rounded-xl flex items-start gap-4"
                    style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(13,143,111,0.10)", color: "var(--color-green-iot)" }}
                    >
                      {svg}
                    </div>
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
