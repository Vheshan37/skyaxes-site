"use client";

import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

import { services, proofItems } from "@/lib/data/data";

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
  const { lang } = useLanguage();
  const th = t.home;

  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section
        className="section-white"
        style={{ paddingTop: 80, paddingBottom: 88 }}
        aria-label="メインビジュアル"
      >
        <div className="container-site">
          <div className="hero-grid">
            {/* ── Left copy ── */}
            <div className="hero-copy">
              <p className="hero-eyebrow">
                {th.hero.eyebrow[lang]}
              </p>

              <h1 className="hero-headline">
                {th.hero.headline.part1[lang]}
                <br />
                {th.hero.headline.part2[lang]}
                <br />
                <span className="hero-headline-accent">
                  {th.hero.headline.accent[lang]}
                </span>
              </h1>

              <p className="hero-sub">
                {th.hero.sub[lang]}
              </p>

              <div className="hero-ctas">
                <Link href="/contact" className="btn-primary hero-btn-primary" id="hero-cta-consult">
                  {th.hero.ctaPrimary[lang]}
                </Link>
                <Link href="/case-studies" className="btn-outline hero-btn-secondary" id="hero-cta-cases">
                  {th.hero.ctaSecondary[lang]}
                </Link>
              </div>

              {/* Trust badges */}
              <div className="hero-badges">
                <span className="hero-badge">
                  <span className="hero-badge-dot" style={{ background: "var(--color-green-iot)" }} />
                  {th.hero.badgePm[lang]}
                </span>
                <span className="hero-badge">
                  <span className="hero-badge-dot" style={{ background: "var(--color-accent)" }} />
                  {th.hero.badgeCost[lang]}
                </span>
                <span className="hero-badge">
                  <span className="hero-badge-dot" style={{ background: "var(--color-clinical)" }} />
                  {th.hero.badgeQa[lang]}
                </span>
              </div>
            </div>

            {/* ── Right: hero image ── */}
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-img-wrap">
                <Image
                  src="/images/hero-dental-3d.jpg"
                  alt="Dental 3D Viewer — flagship case study developed by SkyAxes"
                  width={700}
                  height={525}
                  className="w-full h-auto block"
                  priority
                  style={{ borderRadius: 12 }}
                />
                {/* Floating badge */}
                <div className="hero-float-badge">
                  <p className="hero-float-label">Featured case study</p>
                  <p className="hero-float-title">Dental 3D Viewer</p>
                  <span className="hero-float-chip">Qt / OpenGL · Windows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-belt" aria-label="Trusted by">
        <div className="container-site">
          <p className="trust-belt-label">TRUSTED BY</p>
          <div className="trust-belt-row">
            {[
              { name: "Travancore Analytics", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/travancore-analytics_logo.png" },
              { name: "Curvelogics", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/curvelogics-a_logo.png" },
              { name: "Thought Katalyst", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/thout-katalyst_logo.png" },
              { name: "LiveRoom", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/liveroom_logo.png" },
              { name: "Eimsky", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/eimsky_logo.png" },
              { name: "Omobio", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/omobio_logo.png" },
            ].map(({ name, src }) => (
              <div key={name} className="trust-logo">
                <div className="trust-logo-img-container">
                  <img
                    src={src}
                    alt={name}
                    width="140"
                    height="48"
                    className="trust-logo-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          THREE SERVICE CARDS
      ════════════════════════════════ */}
      <section
        className="section-surface"
        style={{ paddingBlock: 88 }}
        aria-labelledby="services-heading"
      >
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{th.servicesSection.eyebrow[lang]}</p>
              <h2 id="services-heading" className="section-title">
                {th.servicesSection.title[lang]}
              </h2>
              <p className="section-sub">
                {th.servicesSection.sub[lang]}
              </p>
            </div>

            <div className="services-grid">
              {services.map(({ icon, titleEN, titleJP, descEN, descJP, href, accentColor, accentBg, hoverClass, tag }) => (
                <Link
                  key={href}
                  href={href}
                  className={`service-card ${hoverClass}`}
                  aria-label={`${titleEN} サービスページへ`}
                >
                  <div className="service-card-top">
                    <div
                      className="service-icon"
                      style={{ background: accentBg, color: accentColor }}
                    >
                      {icon}
                    </div>
                    <span
                      className="service-tag"
                      style={{ color: accentColor, background: accentBg }}
                    >
                      {tag}
                    </span>
                  </div>
                  <h3 className="service-title-en" style={{ fontFamily: lang === "JP" ? "var(--font-noto)" : "var(--font-jakarta)" }}>
                    {lang === "JP" ? titleJP : titleEN}
                  </h3>
                  <p className="service-desc">
                    {lang === "JP" ? descJP : descEN}
                  </p>
                  <p
                    className="service-link"
                    style={{ color: accentColor }}
                  >
                    {th.servicesSection.learnMore[lang]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════════════════════════════════
          FEATURED CASE STUDY — Dental 3D
      ════════════════════════════════ */}
      <section
        className="section-white"
        style={{ paddingBlock: 88 }}
        aria-labelledby="case-study-heading"
      >
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{th.caseStudiesSection.eyebrow[lang]}</p>
              <h2 id="case-study-heading" className="section-title">
                {th.caseStudiesSection.title[lang]}
              </h2>
              <p className="section-sub">
                {th.caseStudiesSection.sub[lang]}
              </p>
            </div>

            <div className="case-study-card">
              {/* Image panel */}
              <div className="case-study-img-panel">
                <Image
                  src="/images/dental-screenshots.jpg"
                  alt="Dental 3D Viewer application screenshot — SkyAxes flagship project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="case-study-img-overlay">
                  <span className="tag-clinical">Healthcare</span>
                </div>
              </div>

              {/* Content panel */}
              <div className="case-study-content">
                <div className="case-accent-bar" style={{ background: "var(--color-clinical)" }} />

                <h3 className="case-title">
                  {th.caseStudiesSection.dentalTitle[lang]}
                </h3>

                <p className="case-desc">
                  {th.caseStudiesSection.dentalDesc[lang]}
                </p>

                <div className="case-metrics">
                  <div className="case-metric">
                    <span
                      className="case-metric-value"
                      style={{ color: "var(--color-clinical)" }}
                    >
                      &lt;50ms
                    </span>
                    <span className="case-metric-label">Rendering latency</span>
                  </div>
                  <div className="case-metric">
                    <span
                      className="case-metric-value"
                      style={{ color: "var(--color-clinical)" }}
                    >
                      Qt/OpenGL
                    </span>
                    <span className="case-metric-label">Technology stack</span>
                  </div>
                  <div className="case-metric">
                    <span
                      className="case-metric-value"
                      style={{ color: "var(--color-clinical)" }}
                    >
                      Windows
                    </span>
                    <span className="case-metric-label">Deployment</span>
                  </div>
                </div>

                <div className="case-ctas">
                  <Link
                    href="/case-studies/dental-3d-viewer"
                    className="btn-primary"
                    id="case-study-cta-dental"
                  >
                    {th.caseStudiesSection.viewCase[lang]}
                  </Link>
                  <Link
                    href="/case-studies"
                    className="case-all-link"
                  >
                    All case studies →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════════════════════════════════
          SUPPORTING PROOF — LineQC + AR Training
      ════════════════════════════════ */}
      <section
        className="section-surface"
        style={{ paddingBlock: 88 }}
        aria-labelledby="proof-heading"
      >
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">Supporting proof</p>
              <h2 id="proof-heading" className="section-title">
                Real Deployments
              </h2>
              <p className="section-sub">
                SkyAxes capabilities backed by live and delivered projects.
              </p>
            </div>

            <div className="proof-grid">
              {proofItems.map((item) => (
                <div key={item.title} className="proof-card">
                  <div className="proof-img-wrap">
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="proof-img-overlay" />
                  </div>
                  <div className="proof-content">
                    <span
                      className="proof-tag"
                      style={{ color: item.tagColor, background: item.tagBg }}
                    >
                      {item.tag}
                    </span>
                    <h3 className="proof-title">
                      {lang === "JP" ? item.titleJP : item.title}
                    </h3>
                    <p className="proof-desc">
                      {lang === "JP"
                        ? (item.href === "/lineqc"
                          ? "製造現場のラインデータをリアルタイムで収集・可視化。品質管理の自動化と不良品の早期検出を実現する実稼働システム。"
                          : "組み立てラインや保守点検作業において、ARで手順をオーバーレイ表示。誤作業の防止と技術教育の効率化を実現。")
                        : item.desc}
                    </p>
                    <div
                      className="proof-metric-chip"
                      style={{ borderColor: item.metricColor + "33", background: item.metricColor + "0d" }}
                    >
                      <span className="proof-metric-val" style={{ color: item.metricColor }}>
                        {item.metric}
                      </span>
                      <span className="proof-metric-lbl">{item.metricLabel}</span>
                    </div>
                    <Link
                      href={item.href}
                      className="proof-cta"
                      style={{ color: item.tagColor }}
                    >
                      {lang === "JP"
                        ? (item.href === "/lineqc" ? "LineQCの詳細を見る →" : "3D/VR/ARサービスを見る →")
                        : item.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════════════════════════════════
          DEVELOPMENT FLOW
      ════════════════════════════════ */}
      <section
        className="section-white"
        style={{ paddingBlock: 88 }}
        aria-labelledby="flow-heading"
      >
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">{th.flowSection.eyebrow[lang]}</p>
              <h2 id="flow-heading" className="section-title">
                {th.flowSection.title[lang]}
              </h2>
              <p className="section-sub">
                {th.flowSection.sub[lang]}
              </p>
            </div>

            <div className="flow-grid">
              {th.flowSection.steps.map(({ num, JP, EN }, i) => (
                <div key={num} className="flow-step">
                  {/* connector line */}
                  {i < th.flowSection.steps.length - 1 && (
                    <div className="flow-connector" aria-hidden="true" />
                  )}
                  <div className="flow-circle">
                    <span>{num}</span>
                  </div>
                  <p className="flow-label-jp" style={{ fontFamily: "var(--font-noto)" }}>
                    {lang === "JP" ? JP : EN}
                  </p>
                </div>
              ))}
            </div>

            {/* PM note */}
            <div className="flow-note">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="8" stroke="var(--color-accent)" strokeWidth="1.5" />
                <path d="M9 8v5M9 6v.5" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>
                {lang === "JP"
                  ? "キックオフ時だけでなく、要件定義・仕様作成・テスト・検収サポートの全工程で日本側のPMが責任を持って管理します。"
                  : "A Japan-side PM owns communication, specification, and QA throughout — not just during kickoff."}
              </span>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════════════════════════════════
          CONTACT CTA — Development consultations only
      ════════════════════════════════ */}
      <section
        className="section-navy"
        style={{ paddingBlock: 96 }}
        aria-labelledby="cta-heading"
      >
        <FadeInSection>
          <div className="container-site cta-inner">
            <p className="cta-eyebrow">{lang === "JP" ? "お問い合わせ" : "Get in touch"}</p>
            <h2 id="cta-heading" className="cta-heading">
              {lang === "JP" ? (
                <>オフショア開発の<br />ご相談はこちら</>
              ) : (
                <>Discuss an Offshore<br />Development Project</>
              )}
            </h2>
            <p className="cta-sub">
              {lang === "JP"
                ? "開発要件がお決まりのプロジェクトについて、2営業日以内にご返信いたします。"
                : "We respond to qualified project inquiries within 2 business days."}
            </p>

            {/* Anti-sales notice */}
            <div className="cta-notice" role="note">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span>
                {lang === "JP" ? (
                  <>
                    <strong>開発案件の相談専用窓口です。</strong> 本フォームはシステム開発、オフショア開発、3D/VR/AR、IoT開発の相談のみを受け付けています。営業、紹介、勧誘、広告掲載、Web制作アライアンス等の提案には返信いたしません。
                  </>
                ) : (
                  <>
                    <strong>Development consultations only.</strong> This form is for system, offshore,
                    3D/VR/AR and IoT development inquiries. Sales pitches, recruiting, advertising,
                    SEO offers and web-production proposals will not receive a reply.
                  </>
                )}
              </span>
            </div>

            <div className="cta-buttons">
              <Link
                href="/contact"
                className="cta-btn-primary"
                id="final-cta-contact"
              >
                {lang === "JP" ? "ご相談フォームへ →" : "Start a Consultation →"}
              </Link>
              <Link
                href="/services/offshore"
                className="cta-btn-ghost"
                id="final-cta-services"
              >
                {lang === "JP" ? "オフショア開発サービスについて" : "Learn about Offshore Development"}
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
