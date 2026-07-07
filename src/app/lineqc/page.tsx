import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "LineQC — Manufacturing Line Quality Control System | SkyAxes",
  description:
    "LineQC is a quality control system by SkyAxes that systematizes manufacturing rules for zero in-process defects. Proof of SkyAxes manufacturing-system development capability.",
};

const mainFunctions = [
  {
    num: "01",
    jp: "部品の受入管理",
    en: "Parts Incoming Inspection",
    desc: "外部から調達した半製品・完成品の受入品質管理",
  },
  {
    num: "02",
    jp: "工程内の品質管理",
    en: "In-Process Quality Control",
    desc: "各製造機械の真横でサンプリングチェックを実施",
  },
  {
    num: "03",
    jp: "出荷前検査",
    en: "Pre-Shipment Inspection",
    desc: "製品出荷前に仕様への適合を確認",
  },
];

const keyFeatures = [
  "自動・手動測定ともにデータ測定時間監視機能を装備",
  "SETUP規格値とMASS規格値の2種類で精度の高い機械調整",
  "工程毎の製品図面を管理・表示し誤測定を防止",
  "測定時にXチャート・CP/CPKチャートを自動表示",
  "測定データは自動記録、お客様仕様の検査成績書に出力可能",
  "品質傾向を工程・機械・製品別に時系列で監視",
  "通信環境不要の自律分散型システム",
  "スタンドアローン・クライアントサーバの2構成から選択",
  "コンパクトなワゴンタイプ、日本語・英語対応",
];

export default function LineQCPage() {
  return (
    <>
      {/* IoT accent bar */}
      <div style={{ height: 4, background: "var(--color-green-iot)" }} />

      {/* ── PROOF SUMMARY (doc §6.5: add short proof summary at top) ── */}
      <section className="section-surface" style={{ paddingBlock: 16 }}>
        <div className="container-site">
          <div className="lqc-proof-banner">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="lqc-proof-banner-text">
              <strong>Manufacturing system development proof</strong> — LineQC is
              SkyAxes&apos; own in-production quality control system, demonstrating
              real-world capability in factory data collection, software-managed
              workflows, and manufacturing QA.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERO ── */}
      <section className="section-white" style={{ paddingBlock: 72 }} aria-label="LineQC overview">
        <div className="container-site lqc-hero-grid">
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
              製造部門が決めたルールを仕組み化し、ソフトウェアが監視することで
              <strong>工程内不良ゼロの実現</strong>を目指す品質管理システム。
              ワゴンタイプの装置で各製造機械の真横でサンプリングチェックを行います。
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
              alt="LineQC manufacturing quality control system"
              width={600}
              height={420}
              className="w-full h-auto"
              style={{ borderRadius: 10, border: "1px solid var(--color-border)", boxShadow: "var(--shadow-card)" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="section-surface" style={{ paddingBlock: 64 }}>
        <FadeInSection>
          <div className="container-site lqc-mission-wrap">
            <p className="lqc-mission-jp">目指しているのは『工程内不良の撲滅』です</p>
            <p className="lqc-mission-en">Zero in-process defects — enforced by software, not by manual checks alone.</p>
            <div className="lqc-mission-notes">
              <span className="lqc-mission-note">※ ルール・マニュアルから外れた操作ができません</span>
              <span className="lqc-mission-note">※ NG品が発生しそうな場合、監視ソフトが警告を発出します</span>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── 3 MAIN FUNCTIONS ── */}
      <section className="section-white" style={{ paddingBlock: 72 }} aria-labelledby="functions-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">LineQCの機能</p>
              <h2 id="functions-heading" className="section-title">3 Main Functions</h2>
            </div>

            <div className="lqc-functions-grid">
              {mainFunctions.map((fn) => (
                <div key={fn.num} className="lqc-function-card">
                  <div className="lqc-function-num" style={{ color: "var(--color-green-iot)" }}>{fn.num}</div>
                  <h3 className="lqc-function-title-jp">{fn.jp}</h3>
                  <p className="lqc-function-title-en">{fn.en}</p>
                  <div className="lqc-function-divider" style={{ background: "var(--color-green-iot)" }} />
                  <p className="lqc-function-desc-jp">{fn.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="section-surface" style={{ paddingBlock: 72 }} aria-labelledby="features-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">システムの主な特徴</p>
              <h2 id="features-heading" className="section-title">Key Features</h2>
            </div>

            <div className="lqc-features-wrap">
              <div className="lqc-features-grid">
                {keyFeatures.map((feat, i) => (
                  <div key={i} className="lqc-feature-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="12" cy="12" r="10" fill="var(--color-green-iot)" opacity="0.12" />
                      <polyline points="20 6 9 17 4 12" stroke="var(--color-green-iot)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="lqc-feature-text">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── SPEC TABLE ── */}
      <section className="section-white" style={{ paddingBlock: 72 }} aria-labelledby="spec-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">システム概要</p>
              <h2 id="spec-heading" className="section-title">動作環境（推奨スペック）</h2>
            </div>

            <div className="lqc-spec-grid">
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
                      ["ディスク", "64 GB"],
                      ["その他", "Wi-Fi / Bluetooth 4.0 / Excel 2019"],
                    ].map(([label, val]) => (
                      <tr key={label} className="lqc-spec-row">
                        <td className="lqc-spec-label">{label}</td>
                        <td className="lqc-spec-val">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

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
                      ["ディスク", "128 GB"],
                      ["その他", "Bluetooth 4.0 / Excel 2019"],
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
          </div>
        </FadeInSection>
      </section>

      {/* ── BROADER CAPABILITY NOTE (doc §6.5) ── */}
      <section className="section-surface" style={{ paddingBlock: 56 }}>
        <FadeInSection>
          <div className="container-site">
            <div className="lqc-proof-note">
              <div className="lqc-proof-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-green-iot)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 17l3-5 3 4 2-3 3 4" />
                </svg>
              </div>
              <div>
                <p className="lqc-proof-title">SkyAxes — Manufacturing System Capability</p>
                <p className="lqc-proof-body">
                  LineQCはSkyAxesが自社開発し製造現場で稼働中のプロダクトです。
                  工場データ収集・品質管理・プロセス制御という複雑な要件を実装した実績として、
                  製造業向けシステム開発のご相談にご参照ください。
                  SkyAxesはLineQCに限らず、工場向けカスタムシステム、センサーデータ収集基盤、
                  品質管理ソフトウェアの設計・開発・保守に対応しています。
                </p>
                <p className="lqc-proof-body-en">
                  LineQC is SkyAxes&apos; own in-production product — proof of factory-system
                  development capability. Beyond LineQC, SkyAxes designs and builds custom
                  manufacturing systems, sensor data collection platforms, and quality
                  management software for industrial clients.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── CTA ── */}
      <section className="section-navy" style={{ paddingBlock: 80 }} aria-labelledby="lineqc-cta-heading">
        <FadeInSection>
          <div className="container-site cta-inner">
            <p className="cta-eyebrow">Get in touch</p>
            <h2 id="lineqc-cta-heading" className="cta-heading">
              製造システム開発の<br />ご相談はこちら
            </h2>
            <p className="cta-sub">
              LineQCに関するご質問、または類似システムの開発相談はお気軽にどうぞ。
            </p>
            <div className="cta-notice" role="note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>Development consultations only. Sales pitches and unrelated vendor proposals will not receive a reply.</span>
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
