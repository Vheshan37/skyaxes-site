import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { seo } from "@/lib/data/seo-content";

export const metadata: Metadata = seo.home;

/* ─── Data ─────────────────────────────────────────────────── */

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
    titleEN: "Offshore Development",
    titleJP: "オフショア開発",
    desc: "Japan-side PM manages requirements, design, offshore team communication, and QA end-to-end — at a realistic development cost.",
    href: "/services/offshore",
    accentColor: "var(--color-accent)",
    accentBg: "rgba(46,117,182,0.10)",
    hoverClass: "service-card-accent",
    tag: "Main service",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 20l4-8 4 6 2-3 3 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    titleEN: "3D / VR / AR Development",
    titleJP: "3D・VR・AR開発",
    desc: "Advanced 3D visualization, VR/AR applications, and image processing — from dental/medical-adjacent software to industrial training.",
    href: "/services/3dvrar",
    accentColor: "var(--color-clinical)",
    accentBg: "rgba(74,144,196,0.10)",
    hoverClass: "service-card-clinical",
    tag: "Specialized",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="12" width="6" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="11" y="7" width="6" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="18" y="4" width="6" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    titleEN: "IoT / Manufacturing Systems",
    titleJP: "IoT・製造システム",
    desc: "QC systems, sensor data pipelines, factory management software. Real-world LineQC deployment running in production.",
    href: "/services/iot",
    accentColor: "var(--color-green-iot)",
    accentBg: "rgba(13,143,111,0.10)",
    hoverClass: "service-card-iot",
    tag: "In production",
  },
];

const flowSteps = [
  { num: "01", jp: "ヒアリング", en: "Consultation" },
  { num: "02", jp: "要件定義", en: "Requirements" },
  { num: "03", jp: "見積もり", en: "Estimate" },
  { num: "04", jp: "開発", en: "Development" },
  { num: "05", jp: "品質確認", en: "QA" },
  { num: "06", jp: "運用・保守", en: "Maintenance" },
];

const proofItems = [
  {
    tag: "Manufacturing / IoT",
    tagColor: "var(--color-green-iot)",
    tagBg: "var(--color-green-light)",
    title: "LineQC — Manufacturing Line Quality Control",
    titleJP: "製造ライン品質管理システム",
    desc: "Real-time sensor data collection, line visualization, and automated QC for manufacturing floors. Running in production — proof of SkyAxes factory-system capability.",
    metric: "Real-time",
    metricLabel: "QC monitoring",
    metricColor: "var(--color-green-iot)",
    href: "/lineqc",
    cta: "View LineQC →",
    imgSrc: "/images/services-iot.jpg",
    imgAlt: "LineQC manufacturing line quality control system dashboard",
  },
  {
    tag: "AR Training",
    tagColor: "var(--color-accent)",
    tagBg: "rgba(46,117,182,0.10)",
    title: "AR-based Industrial Training",
    titleJP: "AR産業トレーニングシステム",
    desc: "Augmented reality overlays guide technicians through complex assembly and maintenance procedures — reducing onboarding time and human error on the factory floor.",
    metric: "AR-guided",
    metricLabel: "Step-by-step training",
    metricColor: "var(--color-accent)",
    href: "/services/3dvrar",
    cta: "View 3D/VR/AR Services →",
    imgSrc: "/images/dental-screenshots.jpg",
    imgAlt: "AR industrial training system overlaying assembly instructions",
  },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function HomePage() {
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
                Offshore Development Partner&nbsp;/&nbsp;オフショア開発パートナー
              </p>

              <h1 className="hero-headline">
                Japan-side PM-led
                <br />
                Offshore Development
                <br />
                <span className="hero-headline-accent">
                  for 3D/VR, IoT &amp; Business Systems
                </span>
              </h1>

              <p className="hero-sub">
                We help manufacturing, dental/medical-adjacent and technical
                businesses turn specialized software ideas into practical
                systems at a realistic development cost.
              </p>

              <div className="hero-ctas">
                <Link href="/contact" className="btn-primary hero-btn-primary" id="hero-cta-consult">
                  Discuss an Offshore Development Project
                </Link>
                <Link href="/case-studies" className="btn-outline hero-btn-secondary" id="hero-cta-cases">
                  View 3D/VR Case Studies
                </Link>
              </div>

              {/* Trust badges */}
              <div className="hero-badges">
                <span className="hero-badge">
                  <span className="hero-badge-dot" style={{ background: "var(--color-green-iot)" }} />
                  Japan-side PM
                </span>
                <span className="hero-badge">
                  <span className="hero-badge-dot" style={{ background: "var(--color-accent)" }} />
                  Realistic cost
                </span>
                <span className="hero-badge">
                  <span className="hero-badge-dot" style={{ background: "var(--color-clinical)" }} />
                  Technical QA
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

      {/* ════════════════════════════════
          TRUSTED BRANDS
      ════════════════════════════════ */}
      <section className="trust-belt" aria-label="信頼いただいている企業 / Trusted by">
        <div className="container-site">
          <p className="trust-belt-label">信頼いただいている企業 / TRUSTED BY</p>
          <div className="trust-belt-row">
            {[
              { name: "OPExPARK",         abbr: "OPE",  color: "#2E75B6" },
              { name: "Uhuru Corp.",       abbr: "UHU",  color: "#0D8F6F" },
              { name: "SORACOM",           abbr: "SOR",  color: "#1A3C6E" },
              { name: "Preferred Networks",abbr: "PFN",  color: "#4A90C4" },
              { name: "eSolia",            abbr: "ESO",  color: "#2E75B6" },
            ].map(({ name, abbr, color }) => (
              <div key={name} className="trust-logo" style={{ "--logo-color": color } as React.CSSProperties}>
                <span className="trust-logo-mark" aria-hidden="true">{abbr}</span>
                <span className="trust-logo-name">{name}</span>
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
              <p className="section-eyebrow">What we build</p>
              <h2 id="services-heading" className="section-title">
                Our Services
              </h2>
              <p className="section-sub">
                Three focused disciplines — all managed Japan-side, delivered offshore.
              </p>
            </div>

            <div className="services-grid">
              {services.map(({ icon, titleEN, titleJP, desc, href, accentColor, accentBg, hoverClass, tag }) => (
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
                  <h3 className="service-title-en">{titleEN}</h3>
                  <p className="service-title-jp">{titleJP}</p>
                  <p className="service-desc">{desc}</p>
                  <p
                    className="service-link"
                    style={{ color: accentColor }}
                  >
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ════════════════════════════════
          FEATURED CASE STUDY — Dental 3D Viewer
      ════════════════════════════════ */}
      <section
        className="section-white"
        style={{ paddingBlock: 88 }}
        aria-labelledby="case-study-heading"
      >
        <FadeInSection>
          <div className="container-site">
            <div className="section-header">
              <p className="section-eyebrow">Featured case study</p>
              <h2 id="case-study-heading" className="section-title">
                Dental 3D Viewer Development
              </h2>
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
                  <span className="tag-clinical">Healthcare / 医療</span>
                </div>
              </div>

              {/* Content panel */}
              <div className="case-study-content">
                <div className="case-accent-bar" style={{ background: "var(--color-clinical)" }} />

                <h3 className="case-title">
                  歯科用3Dビューア
                  <br />
                  <span className="case-title-en">Dental 3D Viewer</span>
                </h3>

                <p className="case-desc">
                  Real-time 3D scan data visualization for dental clinics.
                  Delivered as a Windows application using Qt and OpenGL — built
                  for usability, extensibility and practical implementation cost.
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
                    View case study →
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
                    <h3 className="proof-title">{item.title}</h3>
                    <p className="proof-title-jp">{item.titleJP}</p>
                    <p className="proof-desc">{item.desc}</p>
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
                      {item.cta}
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
              <p className="section-eyebrow">How we work</p>
              <h2 id="flow-heading" className="section-title">
                Development Process
              </h2>
              <p className="section-sub">
                From first consultation to long-term operation — Japan-side PM guides every stage.
              </p>
            </div>

            <div className="flow-grid">
              {flowSteps.map(({ num, jp, en }, i) => (
                <div key={num} className="flow-step">
                  {/* connector line */}
                  {i < flowSteps.length - 1 && (
                    <div className="flow-connector" aria-hidden="true" />
                  )}
                  <div className="flow-circle">
                    <span>{num}</span>
                  </div>
                  <p className="flow-label-jp">{jp}</p>
                  <p className="flow-label-en">{en}</p>
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
                A Japan-side PM owns communication, specification, and QA throughout — not just during kickoff.
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
            <p className="cta-eyebrow">Get in touch</p>
            <h2 id="cta-heading" className="cta-heading">
              Discuss an Offshore
              <br />
              Development Project
            </h2>
            <p className="cta-sub">
              We respond to qualified project inquiries within 2 business days.
            </p>

            {/* Anti-sales notice */}
            <div className="cta-notice" role="note">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span>
                <strong>Development consultations only.</strong> This form is for system, offshore,
                3D/VR/AR and IoT development inquiries. Sales pitches, recruiting, advertising,
                SEO offers and web-production proposals will not receive a reply.
              </span>
            </div>

            <div className="cta-buttons">
              <Link
                href="/contact"
                className="cta-btn-primary"
                id="final-cta-contact"
              >
                Start a Consultation →
              </Link>
              <Link
                href="/services/offshore"
                className="cta-btn-ghost"
                id="final-cta-services"
              >
                Learn about Offshore Development
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
