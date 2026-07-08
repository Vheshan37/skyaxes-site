"use client";

import React from "react";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function LineQCPage() {
  const { lang } = useLanguage();

  const flowSteps = [
    {
      num: "01",
      title: lang === "JP" ? "測定器の校正" : "Instrument Calibration",
      desc: lang === "JP" ? "測定を開始する前に、ソフトが機器の校正状態と期限を自動確認します。" : "Before starting, the software verifies the calibration state and expiration of connected instruments.",
    },
    {
      num: "02",
      title: lang === "JP" ? "SETUP規格値の確認" : "SETUP Standards Check",
      desc: lang === "JP" ? "機械調整用のSETUP（調整用）規格値を確認し、確実な金型・設備調整を行います。" : "Check setup tolerances to perform precise machine, mold, or equipment adjustments.",
    },
    {
      num: "03",
      title: lang === "JP" ? "MASS規格値のクリア" : "MASS Standards Clearance",
      desc: lang === "JP" ? "量産（MASS）用の第2規格値をクリアし、量産開始ステップへ移行します。" : "Clear secondary mass-production standards to safely transitions to active manufacturing runs.",
    },
    {
      num: "04",
      title: lang === "JP" ? "リアルタイム監視 & 停止" : "Real-time Guardrails & Stop",
      desc: lang === "JP" ? "測定間隔を監視し、規格値逸脱や時間超過時はパトライト警告や機械停止を行います。" : "Monitor measurement intervals; trigger warning light towers or halt operations on any rules breach.",
    },
  ];

  const mainFunctions = [
    {
      num: "01",
      title: lang === "JP" ? "部品の受入管理" : "Parts Incoming Inspection",
      desc: lang === "JP" ? "外部から調達した半製品・完成品の受入品質管理を実施します。" : "Quality control for semi-finished and finished components procured from external suppliers.",
      img: "https://www.skyaxes.jp/wp-content/uploads/2021/10/Acceptance-management.png",
    },
    {
      num: "02",
      title: lang === "JP" ? "工程内の品質管理" : "In-Process Quality Control",
      desc: lang === "JP" ? "ワゴンタイプのコンパクト装置で、製造機械のすぐ真横でサンプリングチェックを行います。" : "Use compact mobile workstations right next to active machines for fast sample verification.",
      img: "https://www.skyaxes.jp/wp-content/uploads/2022/07/lineqc_02.jpg",
    },
    {
      num: "03",
      title: lang === "JP" ? "出荷前検査" : "Pre-Shipment Inspection",
      desc: lang === "JP" ? "出荷前に全仕様への適合性を検査し、お客様指定の成績書を出力します。" : "Check specification compliance before shipping the final product and print custom reports.",
      img: "https://www.skyaxes.jp/wp-content/uploads/2021/10/Pre-shipment-inspection.png",
    },
  ];

  const capabilityCards = [
    {
      title: lang === "JP" ? "① デジタル化・ペーパーレス" : "01. Digitization & Paperless",
      features: lang === "JP" 
        ? ["管理の合理化と手書き記入の削減", "転記ミスの撲滅とデータ信頼性向上", "保管コストの削減と過去ログへの瞬時アクセス", "データの自動集計および分類"]
        : ["Rationalize records and reduce manual typing", "Eliminate transcription errors; improve reliability", "Reduce storage cost; instant query for historical logs", "Automatic data aggregation and classification"],
      accent: "var(--color-accent)",
    },
    {
      title: lang === "JP" ? "② ソフトウェアによる手順制御" : "02. Software-Enforced Procedures",
      features: lang === "JP"
        ? ["測定器の校正期限チェック", "校正→SETUP値確認→量産開始の順序制御", "傾向監視による品質予兆検知", "ルール逸脱時のアラート発出・機械停止"]
        : ["Validate instrument calibration status", "Enforce step sequence: Calibrate -> Setup -> Mass Prod", "Detect early trends to forecast defect issues", "Trigger alarms and machine halt on layout breach"],
      accent: "var(--color-green-iot)",
    },
    {
      title: lang === "JP" ? "③ 高度なデータ分析" : "03. Advanced Data Analytics",
      features: lang === "JP"
        ? ["NG品の遡り原因調査をスピードアップ", "Cp/Cpk工程能力指数のリアルタイム見える化", "パトライト警告灯連携による合否直感表示", "測定データを基にした技術者の教育支援"]
        : ["Accelerate root-cause tracing for defective runs", "Visualize real-time Cp/Cpk process capability indexes", "Patlite tower lamp links for instant pass/fail alerts", "Use logged analytics to train and upskill operators"],
      accent: "var(--color-clinical)",
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
      {/* CSS Styles */}
      <style jsx global>{`
        .lqc-flow-grid {
          display: grid;
          grid-template-cols: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .lqc-flow-grid {
            grid-template-cols: repeat(4, 1fr);
          }
        }
        .lqc-flow-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          position: relative;
          transition: transform 150ms ease, box-shadow 150ms ease;
        }
        .lqc-flow-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }
        .lqc-flow-num {
          font-family: var(--font-jakarta);
          font-size: 32px;
          font-weight: 800;
          color: rgba(13, 143, 111, 0.15);
          position: absolute;
          top: 16px;
          right: 20px;
        }
        .lqc-caps-grid {
          display: grid;
          grid-template-cols: 1fr;
          gap: 32px;
          margin-top: 48px;
        }
        @media (min-width: 992px) {
          .lqc-caps-grid {
            grid-template-cols: repeat(3, 1fr);
          }
        }
        .lqc-cap-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-top: 4px solid var(--border-color);
          border-radius: 12px;
          padding: 32px 24px;
          box-shadow: 0 4px 12px rgba(26,60,110,0.03);
          transition: transform 150ms ease;
        }
        .lqc-cap-card:hover {
          transform: translateY(-4px);
        }
        .lqc-arch-container {
          background: var(--color-surface);
          border-radius: 16px;
          border: 1px solid var(--color-border);
          padding: 40px;
          margin-top: 48px;
        }
        .lqc-func-img-wrap {
          width: 100%;
          height: 180px;
          position: relative;
          background: #f8fafc;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 16px;
          border: 1px solid var(--color-border);
        }
        .lqc-charts-grid {
          display: grid;
          grid-template-cols: 1fr;
          gap: 32px;
          margin-top: 48px;
        }
        @media (min-width: 768px) {
          .lqc-charts-grid {
            grid-template-cols: 1fr 1fr;
          }
        }
      `}</style>

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
              <a
                href="https://www.skyaxes.jp/wp-content/uploads/2022/07/LineQC-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="lineqc-cta-catalog"
                style={{ color: "var(--color-green-iot)", borderColor: "var(--color-green-iot)" }}
              >
                {lang === "JP" ? "製品カタログ (PDF) ↓" : "Download Catalog (PDF) ↓"}
              </a>
            </div>
          </div>

          {/* Actual LineQC mobile unit photo */}
          <div className="lqc-hero-visual flex justify-center items-center">
            <img
              src="https://www.skyaxes.jp/wp-content/uploads/2021/10/LineQC2.png"
              alt="LineQC mobile workstation system unit"
              width="500"
              height="500"
              className="max-w-[380px] w-full h-auto block"
              style={{ filter: "drop-shadow(0 15px 30px rgba(26,60,110,0.15))" }}
            />
          </div>
        </div>
      </section>

      {/* ── RULE ENFORCEMENT TIMELINE ── */}
      <section className="section-surface" style={{ paddingBlock: 80 }} aria-labelledby="flow-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow" style={{ color: "var(--color-green-iot)" }}>
                {lang === "JP" ? "作業手順の仕組み化" : "Process Control Flow"}
              </p>
              <h2 id="flow-heading" className="section-title">
                {lang === "JP" ? "ソフトが手順ミスを完全防止" : "Software Enforced Guardrails"}
              </h2>
              <p className="section-sub">
                {lang === "JP"
                  ? "ルール手順やマニュアルから外れた操作が物理的に行えない仕組みをソフトで実現。"
                  : "We prevent human errors by locking procedures down via software-enforced steps."}
              </p>
            </div>

            <div className="lqc-flow-grid mt-12">
              {flowSteps.map((step) => (
                <div key={step.num} className="lqc-flow-card">
                  <span className="lqc-flow-num">{step.num}</span>
                  <h3 className="text-lg font-bold text-navy mb-2" style={{ paddingRight: 40 }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed" style={{ fontFamily: "var(--font-noto)" }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── 3 MAIN FUNCTIONS WITH IMAGES ── */}
      <section className="section-white" style={{ paddingBlock: 72 }} aria-labelledby="functions-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{lang === "JP" ? "LineQCの機能" : "LineQC Functions"}</p>
              <h2 id="functions-heading" className="section-title">3 Main Functions</h2>
            </div>

            <div className="lqc-functions-grid">
              {mainFunctions.map((fn) => (
                <div key={fn.num} className="lqc-function-card flex flex-col justify-between" style={{ height: "auto" }}>
                  <div>
                    <div className="lqc-function-num" style={{ color: "var(--color-green-iot)" }}>{fn.num}</div>
                    <h3 className="lqc-function-title-jp">{fn.title}</h3>
                    <div className="lqc-function-divider" style={{ background: "var(--color-green-iot)" }} />
                    <p className="lqc-function-desc-jp mb-6" style={{ fontSize: 13, lineHeight: 1.6, color: "var(--color-text)", fontFamily: "var(--font-noto)" }}>{fn.desc}</p>
                  </div>
                  {/* Real Feature Images */}
                  <div className="lqc-func-img-wrap">
                    <img
                      src={fn.img}
                      alt={fn.title}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── SYSTEM CAPABILITIES MATRIX ── */}
      <section className="section-surface" style={{ paddingBlock: 80 }} aria-labelledby="caps-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{lang === "JP" ? "システムでできること" : "Capabilities"}</p>
              <h2 id="caps-heading" className="section-title">
                {lang === "JP" ? "品質管理の合理化と可視化" : "What the System Achieves"}
              </h2>
            </div>

            <div className="lqc-caps-grid">
              {capabilityCards.map((card) => (
                <div
                  key={card.title}
                  className="lqc-cap-card"
                  style={{ "--border-color": card.accent } as React.CSSProperties}
                >
                  <h3 className="text-lg font-bold text-navy mb-6">
                    {card.title}
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {card.features.map((feat, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
                          <circle cx="12" cy="12" r="10" fill={card.accent} opacity="0.12" />
                          <polyline points="20 6 9 17 4 12" stroke={card.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-xs text-muted leading-relaxed" style={{ fontFamily: "var(--font-noto)" }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── REAL-TIME CHARTS GRAPHICS BLOCK ── */}
      <section className="section-white" style={{ paddingBlock: 80 }} aria-labelledby="charts-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0D8F6F] bg-[#0D8F6F]/5 border border-[#0D8F6F]/10 rounded-full px-3 py-1 mb-4 inline-block" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Real-time Statistical Control
                </span>
                <h2 id="charts-heading" className="text-3xl font-extrabold text-navy mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {lang === "JP" ? "Xチャート & Cp/Cpk 自動分析" : "Automated X-Bar & Cp/Cpk Analysis"}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-4" style={{ fontFamily: "var(--font-noto)" }}>
                  {lang === "JP"
                    ? "測定データは瞬時にデータベースへ保存され、自動合否判定とともに統計チャートを表示。不良品発生の品質傾向を時系列で直感的に監視できます。"
                    : "Measurement values are written to the database in real-time, instantly displaying key process capability metrics and run trends directly on screen."}
                </p>
                <div className="border-l-4 border-[#0D8F6F] pl-4 py-1 text-xs text-muted leading-relaxed" style={{ fontFamily: "var(--font-noto)" }}>
                  {lang === "JP"
                    ? "※ パトライト警告灯と連携し、異常値を検知した瞬間に現場へ音と光で警告を発出できます。"
                    : "※ Fully integrates with warning light towers (Patlite) to alert floor operators visually and acoustically on specs violations."}
                </div>
              </div>

              {/* Screen Dashboard screenshot */}
              <div className="flex justify-center items-center">
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white p-2">
                  <img
                    src="https://www.skyaxes.jp/wp-content/uploads/2021/10/xchart-cp-cpk.png"
                    alt="X-Chart and Cp/Cpk analytics display"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── KEY FEATURES LIST ── */}
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

      {/* ── SYSTEM CONFIGURATION DIAGRAM BLOCK ── */}
      <section className="section-white" style={{ paddingBlock: 80 }} aria-labelledby="arch-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{lang === "JP" ? "システム構成例" : "Architecture Example"}</p>
              <h2 id="arch-heading" className="section-title">
                {lang === "JP" ? "クライアントサーバタイプ" : "Client-Server System Design"}
              </h2>
              <p className="section-sub">
                {lang === "JP"
                  ? "モバイルワゴン型の複数クライアント端末からローカルサーバーへの連携図。"
                  : "How multiple LineQC mobile terminal wagons communicate with the Central server database."}
              </p>
            </div>

            {/* Config diagram image */}
            <div className="flex justify-center items-center mt-12">
              <div className="max-w-[760px] w-full border border-gray-200 rounded-xl overflow-hidden p-6 bg-white shadow-sm">
                <img
                  src="https://www.skyaxes.jp/wp-content/uploads/2021/10/lineqcsys-1.png"
                  alt="LineQC Client-Server configuration diagram flowchart"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── SPEC TABLE ── */}
      <section className="section-surface" style={{ paddingBlock: 72 }} aria-labelledby="spec-heading">
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{lang === "JP" ? "システム仕様" : "Specifications"}</p>
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
      <section className="section-white" style={{ paddingBlock: 56 }}>
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
              <a
                href="https://www.skyaxes.jp/wp-content/uploads/2022/07/LineQC-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-ghost"
                id="lineqc-catalog-download"
              >
                {lang === "JP" ? "製品カタログ (PDF) をダウンロード" : "Download Product Catalog (PDF)"}
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
