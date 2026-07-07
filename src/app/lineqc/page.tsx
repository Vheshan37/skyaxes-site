import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "LineQC — Manufacturing Line Quality Control System",
  description:
    "LineQC is a quality control system by SkyAxes that systematizes manufacturing rules so software monitors compliance — targeting zero in-process defects. Wagon-type unit with real-time sampling checks.",
};

/* ─── Data ─────────────────────────────────────────────── */

const monitoredItems = [
  {
    jp: "測定頻度、部位、本数、管理値",
    en: "Measurement frequency, location, count & control values",
  },
  {
    jp: "量産承認手順の仕組化",
    en: "Systematized mass-production approval process",
  },
  {
    jp: "測定時間の監視",
    en: "Measurement time monitoring",
  },
  {
    jp: "測定器の校正時間",
    en: "Calibration timing for measurement equipment",
  },
];

const mainFunctions = [
  {
    num: "01",
    jp: "部品の受入管理",
    en: "Parts Incoming Inspection",
    desc: "外部から調達した半製品、完成品の受入管理",
    descEN: "Incoming quality control for externally sourced semi-finished and finished products.",
  },
  {
    num: "02",
    jp: "工程内の品質管理",
    en: "In-Process Quality Control",
    desc: "各製造機械の真横まで行ってサンプルチェック",
    descEN: "Sampling checks performed directly beside each manufacturing machine on the floor.",
  },
  {
    num: "03",
    jp: "出荷前検査",
    en: "Pre-Shipment Inspection",
    desc: "製品出荷前に仕様に合致しているかを検査",
    descEN: "Final verification that products meet specifications before shipment.",
  },
];

const capabilities = [
  {
    title: "電子化",
    titleEN: "Digitization",
    items: [
      "管理の合理化",
      "記入作業の省力化",
      "記入間違いの回避",
      "データの信頼性向上",
      "保管場所の削減 / ペーパーレス化",
      "容易なデータアクセス",
      "データ集計・分類",
      "分析結果の有効活用",
    ],
  },
  {
    title: "ソフトによる作業手順の管理",
    titleEN: "Software-Managed Workflow",
    items: [
      "測定器の校正",
      "量産承認手順の仕組化（校正 → セットアップ → 量産管理値クリア → 量産開始）",
      "サンプリング検査・傾向予兆管理",
      "ルール逸脱時の機械停止・時間監視・アラート",
      "受入検査（外部調達品対象）",
      "出荷前検査",
    ],
  },
  {
    title: "データ分析",
    titleEN: "Data Analysis",
    items: [
      "NG追跡・原因特定の遡り調査",
      "設備の工程能力を見える化",
      "人材育成へのデータ活用",
      "測定データを基にした分析",
    ],
  },
];

const keyFeatures = [
  "自動・手動測定ともにデータ測定時間監視機能を装備",
  "測定器の校正管理（構成内容、時間）機能を装備",
  "SETUP（機械調整用）規格値と MASS（量産）規格値の2種類で精度の高い機械調整が可能",
  "工程毎の製品図面を管理・表示。誤測定防止と測定時間短縮",
  "複数の工程や測定物の管理が可能",
  "測定時にXチャート、CP/CPKチャートを自動表示",
  "測定データは自動記録。お客様仕様の検査成績書に出力可能",
  "品質傾向を工程・機械・製品・測定部位毎に時系列で監視",
  "パトライトが装備可能で自動判定結果を視覚的に確認",
  "通信環境が整っていない現場でも使える自律分散型システム",
  "スタンドアローンタイプ、クライアントサーバタイプから選択",
  "コンパクトなワゴンタイプで移動可能。設置場所を選ばない",
  "日本語・英語対応（多言語対応も可能）",
];

/* ─── Page ──────────────────────────────────────────────── */

export default function LineQCPage() {
  return (
    <>
      {/* IoT accent top bar */}
      <div style={{ height: 4, background: "var(--color-green-iot)" }} />

      {/* ════ HERO ════ */}
      <section className="section-surface" style={{ paddingBlock: 80 }} aria-label="LineQC overview">
        <div className="container-site">
          <div className="lqc-hero-grid">
            <div className="lqc-hero-copy">
              <div className="lqc-hero-tags">
                <span className="tag-iot">製造システム / Manufacturing</span>
                <span className="lqc-product-badge">In Production</span>
              </div>

              <h1 className="lqc-hero-headline">LineQC</h1>

              <p className="lqc-hero-tagline">
                品質管理システム
                <span className="lqc-hero-tagline-en"> — Manufacturing Line Quality Control</span>
              </p>

              <p className="lqc-hero-intro">
                LineQCは、製造部門が決めたルールを仕組み化し、ソフトウェアが監視することで
                <strong>工程内不良ゼロの実現</strong>を目指す品質管理システムです。
                ワゴンタイプの装置で、各製造機械の真横でサンプリングチェックを行います。
              </p>
              <p className="lqc-hero-intro-en">
                LineQC systematizes manufacturing rules so software can monitor compliance —
                targeting zero in-process defects. The wagon-type unit performs sampling checks
                right beside each machine on the floor.
              </p>

              <div className="lqc-hero-ctas">
                <Link
                  href="/contact"
                  className="btn-primary"
                  id="lineqc-cta-contact"
                  style={{ background: "var(--color-green-iot)" }}
                >
                  LineQCについて問い合わせる →
                </Link>
                <Link
                  href="/services/iot"
                  className="btn-outline"
                  id="lineqc-cta-iot"
                  style={{ color: "var(--color-green-iot)", borderColor: "var(--color-green-iot)" }}
                >
                  IoT開発サービスへ
                </Link>
              </div>
            </div>

            <div className="lqc-hero-visual">
              <Image
                src="/images/services-iot.jpg"
                alt="LineQC manufacturing line quality control system"
                width={620}
                height={430}
                className="w-full h-auto"
                style={{ borderRadius: 12, border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
                priority
              />
              <div className="lqc-hero-stat">
                <span className="lqc-stat-label">Mission</span>
                <span className="lqc-stat-value">工程内不良ゼロ</span>
                <span className="lqc-stat-sub">Zero in-process defects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ 4 MONITORED ITEMS ════ */}
      <section className="section-white" style={{ paddingBlock: 80 }} aria-labelledby="monitored-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">What LineQC monitors</p>
              <h2 id="monitored-heading" className="section-title">
                監視・管理する4つの項目
              </h2>
              <p className="section-sub">
                ソフトウェアがこれらをすべて自動で管理・監視します。
              </p>
            </div>

            <div className="lqc-monitored-grid">
              {monitoredItems.map((item, i) => (
                <div key={i} className="lqc-monitored-card">
                  <div className="lqc-monitored-num">{String(i + 1).padStart(2, "0")}</div>
                  <p className="lqc-monitored-jp">{item.jp}</p>
                  <p className="lqc-monitored-en">{item.en}</p>
                </div>
              ))}
            </div>

            {/* Central rule statement */}
            <div className="lqc-rule-banner" role="note">
              <div className="lqc-rule-arrow" aria-hidden="true">▼</div>
              <div className="lqc-rule-box">
                <p className="lqc-rule-main">すべてのルールをソフトが管理</p>
                <p className="lqc-rule-en">All rules managed and enforced by software</p>
                <div className="lqc-rule-notes">
                  <p className="lqc-rule-note">※ ルール・マニュアルから外れた操作・作業ができません</p>
                  <p className="lqc-rule-note">※ NG品が生まれそうになったら監視ソフトが警告を発出します</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ 3 MAIN FUNCTIONS ════ */}
      <section className="section-surface" style={{ paddingBlock: 80 }} aria-labelledby="functions-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">LineQCの機能</p>
              <h2 id="functions-heading" className="section-title">
                3 Main Functions
              </h2>
              <p className="section-sub">LineQCには主に3つの機能があります。</p>
            </div>

            <div className="lqc-functions-grid">
              {mainFunctions.map((fn) => (
                <div key={fn.num} className="lqc-function-card">
                  <div className="lqc-function-num" style={{ color: "var(--color-green-iot)" }}>
                    {fn.num}
                  </div>
                  <h3 className="lqc-function-title-jp">{fn.jp}</h3>
                  <p className="lqc-function-title-en">{fn.en}</p>
                  <div className="lqc-function-divider" style={{ background: "var(--color-green-iot)" }} />
                  <p className="lqc-function-desc-jp">{fn.desc}</p>
                  <p className="lqc-function-desc-en">{fn.descEN}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ SYSTEM CAPABILITIES ════ */}
      <section className="section-white" style={{ paddingBlock: 80 }} aria-labelledby="capabilities-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">このシステムでできること</p>
              <h2 id="capabilities-heading" className="section-title">
                System Capabilities
              </h2>
            </div>

            <div className="lqc-caps-grid">
              {capabilities.map((cap, i) => (
                <div key={i} className="lqc-cap-card">
                  <div
                    className="lqc-cap-header"
                    style={{ borderColor: "var(--color-green-iot)", background: "rgba(13,143,111,0.06)" }}
                  >
                    <h3 className="lqc-cap-title-jp">{cap.title}</h3>
                    <p className="lqc-cap-title-en">{cap.titleEN}</p>
                  </div>
                  <ul className="lqc-cap-list">
                    {cap.items.map((item, j) => (
                      <li key={j} className="lqc-cap-item">
                        <span className="lqc-cap-dot" style={{ background: "var(--color-green-iot)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ KEY FEATURES ════ */}
      <section className="section-surface" style={{ paddingBlock: 80 }} aria-labelledby="features-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">システムの主な特徴</p>
              <h2 id="features-heading" className="section-title">
                Key Features
              </h2>
            </div>

            <div className="lqc-features-wrap">
              <div className="lqc-features-grid">
                {keyFeatures.map((feat, i) => (
                  <div key={i} className="lqc-feature-item">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    >
                      <circle cx="9" cy="9" r="8" fill="var(--color-green-iot)" opacity="0.12" />
                      <path
                        d="M5.5 9l2.5 2.5 4.5-5"
                        stroke="var(--color-green-iot)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="lqc-feature-text">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ SYSTEM REQUIREMENTS ════ */}
      <section className="section-white" style={{ paddingBlock: 80 }} aria-labelledby="spec-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">システム概要</p>
              <h2 id="spec-heading" className="section-title">
                動作環境（推奨スペック）
              </h2>
              <p className="section-sub">System requirements — recommended specifications</p>
            </div>

            <div className="lqc-spec-grid">
              {/* Client */}
              <div className="lqc-spec-card">
                <div className="lqc-spec-header" style={{ background: "var(--color-navy)" }}>
                  <h3 className="lqc-spec-type">クライアント</h3>
                  <p className="lqc-spec-type-en">Client Unit</p>
                </div>
                <table className="lqc-spec-table">
                  <tbody>
                    {[
                      ["OS", "Windows 10"],
                      ["CPU", "Intel Celeron N4000"],
                      ["メモリ", "4 GB"],
                      ["ディスク容量", "64 GB"],
                      ["モニタ", "1920 × 1080"],
                      ["その他", "Wi-Fi / Bluetooth 4.0 / Excel 2019（データ分析時）"],
                    ].map(([label, val]) => (
                      <tr key={label} className="lqc-spec-row">
                        <td className="lqc-spec-label">{label}</td>
                        <td className="lqc-spec-val">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Server / Standalone */}
              <div className="lqc-spec-card">
                <div className="lqc-spec-header" style={{ background: "var(--color-green-iot)" }}>
                  <h3 className="lqc-spec-type">サーバ／スタンドアローン</h3>
                  <p className="lqc-spec-type-en">Server / Standalone</p>
                </div>
                <table className="lqc-spec-table">
                  <tbody>
                    {[
                      ["OS", "Windows 10 Pro"],
                      ["CPU", "Intel Core i5"],
                      ["メモリ", "16 GB"],
                      ["ディスク容量", "128 GB"],
                      ["モニタ", "1920 × 1080"],
                      ["その他", "Bluetooth 4.0（サーバは不要）/ Excel 2019"],
                    ].map(([label, val]) => (
                      <tr key={label} className="lqc-spec-row">
                        <td className="lqc-spec-label">{label}</td>
                        <td className="lqc-spec-val">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="lqc-spec-note">
              スタンドアローンタイプとクライアントサーバタイプから用途に合わせて選択いただけます。
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* ════ MANUFACTURING PROOF NOTE ════ */}
      <section className="section-surface" style={{ paddingBlock: 64 }}>
        <FadeInSection>
          <div className="container-site">
            <div className="lqc-proof-note">
              <div className="lqc-proof-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="3" y="3" width="22" height="22" rx="4" stroke="var(--color-green-iot)" strokeWidth="1.8" />
                  <path d="M8 20l4-8 4 6 2-3 3 5" stroke="var(--color-green-iot)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="lqc-proof-title">SkyAxes — Manufacturing System Capability Proof</p>
                <p className="lqc-proof-body">
                  LineQCはSkyAxesが自社開発し、実際に製造現場で稼働中のプロダクトです。
                  工場データ収集・品質管理・プロセス制御という複雑な要件を、
                  日本のクライアント向けに実装した実績として、製造業向けシステム開発の評価にご参照ください。
                </p>
                <p className="lqc-proof-body-en">
                  LineQC is SkyAxes&apos; own in-production product — direct proof of factory-system
                  development capability. SkyAxes designs, builds, and maintains custom manufacturing
                  data collection, quality management, and process-control systems.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════ FINAL CTA ════ */}
      <section className="section-navy" style={{ paddingBlock: 88 }} aria-labelledby="lineqc-cta-heading">
        <FadeInSection>
          <div className="container-site cta-inner">
            <p className="cta-eyebrow">Get in touch</p>
            <h2 id="lineqc-cta-heading" className="cta-heading">
              製造システム開発の<br />ご相談はこちら
            </h2>
            <p className="cta-sub">
              LineQCに関するご質問、または類似システムの開発相談はお気軽にどうぞ。<br />
              2営業日以内にご回答いたします。
            </p>
            <div className="cta-notice" role="note">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span>
                <strong>Development consultations only.</strong> Sales pitches, recruiting,
                advertising and unrelated vendor proposals will not receive a reply.
              </span>
            </div>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-btn-primary" id="lineqc-final-cta">
                お問い合わせ / Contact Us →
              </Link>
              <Link href="/services/iot" className="cta-btn-ghost" id="lineqc-iot-link">
                IoT・製造システム開発
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
