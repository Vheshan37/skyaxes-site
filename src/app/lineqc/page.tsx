"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function LineQCPage() {
  const { lang } = useLanguage();

  const mainFunctions = [
    {
      num: "01",
      title: lang === "JP" ? "部品の受入管理" : "Parts Incoming Inspection",
      desc: lang === "JP" ? "外部から調達した半製品・完成品の受入品質管理" : "Quality control for semi-finished and finished components procured externally",
    },
    {
      num: "02",
      title: lang === "JP" ? "工程内の品質管理" : "In-Process Quality Control",
      desc: lang === "JP" ? "各製造機械の真横でサンプリングチェックを実施" : "Conduct sampling checks right next to each manufacturing machine",
    },
    {
      num: "03",
      title: lang === "JP" ? "出荷前検査" : "Pre-Shipment Inspection",
      desc: lang === "JP" ? "製品出荷前に仕様への適合を確認" : "Confirm specification compliance before shipping the final product",
    },
  ];

  const keyFeatures = lang === "JP"
    ? [
        "自動・手動測定ともにデータ測定時間監視機能を装備",
        "SETUP規格値とMASS規格値の2種類で精度の高い機械調整",
        "工程毎の製品図面を管理・表示し誤測定を防止",
        "測定時にXチャート・CP/CPKチャートを自動表示",
        "測定データは自動記録、お客様仕様の検査成績書に出力可能",
        "品質傾向を工程・機械・製品別に時系列で監視",
        "通信環境不要の自律分散型システム",
        "スタンドアローン・クライアントサーバの2構成から選択",
        "コンパクトなワゴンタイプ、日本語・英語対応",
      ]
    : [
        "Equipped with data measurement time monitoring for both auto and manual measuring",
        "High-precision machine tuning using SETUP and MASS tolerance settings",
        "Manage and display drawings for each process to prevent measurement errors",
        "Automatically displays X charts and CP/CPK charts during measurements",
        "Automatically logs measurement data; outputs inspection reports to client specifications",
        "Monitor quality trends over time by process, machine, and product",
        "Autonomous distributed system requiring no communication network",
        "Selectable configurations: standalone or client-server",
        "Compact mobile workstation setup, supporting both Japanese and English",
      ];

  const specSpecsClient = [
    [lang === "JP" ? "OS" : "OS", "Windows 10"],
    [lang === "JP" ? "CPU" : "CPU", "Intel Celeron N4000"],
    [lang === "JP" ? "メモリ" : "RAM", "4 GB"],
    [lang === "JP" ? "ディスク" : "Disk", "64 GB"],
    [lang === "JP" ? "その他" : "Others", lang === "JP" ? "Wi-Fi / Bluetooth 4.0 / Excel 2019" : "Wi-Fi / Bluetooth 4.0 / Excel 2019"],
  ];

  const specSpecsServer = [
    [lang === "JP" ? "OS" : "OS", "Windows 10 Pro"],
    [lang === "JP" ? "CPU" : "CPU", "Intel Core i5"],
    [lang === "JP" ? "メモリ" : "RAM", "16 GB"],
    [lang === "JP" ? "ディスク" : "Disk", "128 GB"],
    [lang === "JP" ? "その他" : "Others", lang === "JP" ? "Bluetooth 4.0 / Excel 2019" : "Bluetooth 4.0 / Excel 2019"],
  ];

  return (
    <>
      {/* IoT accent bar */}
      <div style={{ height: 4, background: "var(--color-green-iot)" }} />

      {/* ── PROOF SUMMARY ── */}
      <section className="section-surface" style={{ paddingBlock: 16 }}>
        <div className="container-site">
          <div className="lqc-proof-banner">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="lqc-proof-banner-text">
              <strong>{lang === "JP" ? "製造システムの開発証明" : "Manufacturing system development proof"}</strong> — {lang === "JP" ? "LineQCは自社開発した製造向けシステムであり、データ収集・可視化・品質管理におけるSkyAxesの実績を裏付けるものです。" : "LineQC is our own in-production quality control system, demonstrating real-world capability in factory data collection, software-managed workflows, and manufacturing QA."}
            </p>
          </div>
        </div>
      </section>

      {/* ── HERO ── */}
      <section className="section-white" style={{ paddingBlock: 72 }} aria-label="LineQC overview">
        <div className="container-site lqc-hero-grid">
          <div className="lqc-hero-copy">
            <div className="lqc-hero-tags">
              <span className="tag-iot">{lang === "JP" ? "製造システム / Manufacturing" : "Manufacturing System"}</span>
              <span className="lqc-product-badge">In Production</span>
            </div>

            <h1 className="lqc-hero-headline">LineQC</h1>

            <p className="lqc-hero-tagline">
              {lang === "JP" ? "品質管理システム" : "Quality Control System"}
              <span className="lqc-hero-tagline-en"> — Manufacturing Line Quality Control</span>
            </p>

            <p className="lqc-hero-intro">
              {lang === "JP" ? (
                <>
                  製造部門が決めたルールを仕組み化し、ソフトウェアが監視することで
                  <strong>工程内不良ゼロの実現</strong>を目指す品質管理システム。
                  ワゴンタイプの装置で各製造機械の真横でサンプリングチェックを行います。
                </>
              ) : (
                <>
                  A quality control system aiming to <strong>eliminate in-process defects</strong> by codifying operational rules and letting software monitor compliance. A mobile workstation setup is deployed right next to machines for manual sampling checks.
                </>
              )}
            </p>

            <div className="lqc-hero-ctas">
              <Link
                href="/contact"
                className="btn-primary"
                id="lineqc-cta-contact"
                style={{ background: "var(--color-green-iot)" }}
              >
                {lang === "JP" ? "LineQCについて問い合わせる →" : "Inquire about LineQC →"}
              </Link>
              <Link
                href="/services/iot"
                className="btn-outline"
                id="lineqc-cta-iot"
                style={{ color: "var(--color-green-iot)", borderColor: "var(--color-green-iot)" }}
              >
                {lang === "JP" ? "IoT開発サービスへ" : "IoT Services"}
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
            <p className="lqc-mission-jp">{lang === "JP" ? "目指しているのは『工程内不良の撲滅』です" : "Our goal is the eradication of in-process defects."}</p>
            <p className="lqc-mission-en">{lang === "JP" ? "Zero in-process defects — enforced by software, not by manual checks alone." : "Zero in-process defects — enforced by software, not by manual checks alone."}</p>
            <div className="lqc-mission-notes">
              <span className="lqc-mission-note">{lang === "JP" ? "※ ルール・マニュアルから外れた操作ができません" : "* Operators cannot bypass manual process rules or instructions"}</span>
              <span className="lqc-mission-note">{lang === "JP" ? "※ NG品が発生しそうな場合、監視ソフトが警告を発出します" : "* Monitoring software issues alerts if quality trends point toward defects"}</span>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── 3 MAIN FUNCTIONS ── */}
      <section className="section-white" style={{ paddingBlock: 72 }} aria-labelledby="functions-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{lang === "JP" ? "LineQCの機能" : "LineQC Functions"}</p>
              <h2 id="functions-heading" className="section-title">3 Main Functions</h2>
            </div>

            <div className="lqc-functions-grid">
              {mainFunctions.map((fn) => (
                <div key={fn.num} className="lqc-function-card">
                  <div className="lqc-function-num" style={{ color: "var(--color-green-iot)" }}>{fn.num}</div>
                  <h3 className="lqc-function-title-jp">{fn.title}</h3>
                  <div className="lqc-function-divider" style={{ background: "var(--color-green-iot)" }} />
                  <p className="lqc-function-desc-jp" style={{ fontSize: 13, lineHeight: 1.6, color: "var(--color-text)", fontFamily: "var(--font-noto)" }}>{fn.desc}</p>
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
              <p className="section-eyebrow">{lang === "JP" ? "システムの主な特徴" : "System Strengths"}</p>
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
              <p className="section-eyebrow">{lang === "JP" ? "システム概要" : "System Architecture"}</p>
              <h2 id="spec-heading" className="section-title">{lang === "JP" ? "動作環境（推奨スペック）" : "Recommended Specs"}</h2>
            </div>

            <div className="lqc-spec-grid">
              <div className="lqc-spec-card">
                <div className="lqc-spec-header" style={{ background: "var(--color-navy)" }}>
                  <h3 className="lqc-spec-type">{lang === "JP" ? "クライアント" : "Client Unit"}</h3>
                </div>
                <table className="lqc-spec-table">
                  <tbody>
                    {specSpecsClient.map(([label, val]) => (
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
                  <h3 className="lqc-spec-type">{lang === "JP" ? "サーバ／スタンドアローン" : "Server / Standalone"}</h3>
                </div>
                <table className="lqc-spec-table">
                  <tbody>
                    {specSpecsServer.map(([label, val]) => (
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

      {/* ── BROADER CAPABILITY NOTE ── */}
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
                {lang === "JP" ? (
                  <p className="lqc-proof-body">
                    LineQCはSkyAxesが自社開発し製造現場で稼働中のプロダクトです。
                    工場データ収集・品質管理・プロセス制御という複雑な要件を実装した実績として、
                    製造業向けシステム開発のご相談にご参照ください。
                    SkyAxesはLineQCに限らず、工場向けカスタムシステム、センサーデータ収集基盤、
                    品質管理ソフトウェアの設計・開発・保守に対応しています。
                  </p>
                ) : (
                  <p className="lqc-proof-body">
                    LineQC is a proprietary system built by SkyAxes currently running on active production floors. As a proven implementation of complex requirements like factory data acquisition, process monitoring, and real-time control, it serves as a testament to our manufacturing capability. SkyAxes builds custom plant systems, data ingestion pipelines, and quality control software tailored to your specific plant configuration.
                  </p>
                )}
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
              {lang === "JP" ? (
                <>製造システム開発の<br />ご相談はこちら</>
              ) : (
                <>Discuss Custom<br />Manufacturing Systems</>
              )}
            </h2>
            <p className="cta-sub">
              {lang === "JP" ? "LineQCに関するご質問、または類似システムの開発相談はお気軽にどうぞ。" : "Have questions about LineQC or looking to develop custom factory software? Contact us for a technical consultation."}
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
                {lang === "JP" ? "お問い合わせ / Contact Us →" : "Contact Us →"}
              </Link>
              <Link href="/services/iot" className="cta-btn-ghost" id="lineqc-iot-link">
                {lang === "JP" ? "IoT・製造システム開発" : "IoT & Manufacturing Services"}
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
