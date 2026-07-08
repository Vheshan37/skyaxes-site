"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";
import FadeInSection from "@/components/ui/FadeInSection";

export default function Hero() {
  const { lang } = useLanguage();
  const th = t.home;

  return (
    <section
      className="section-white watermark-container"
      style={{ paddingTop: 104, paddingBottom: 112 }}
      aria-label="メインビジュアル"
    >
      <div className="text-watermark">SKYAXES</div>
      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          {/* ── Left copy ── */}
          <div className="hero-copy">
            <FadeInSection translateY={8} delay={0}>
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <p className="hero-eyebrow" style={{ margin: 0 }}>
                  {th.hero.eyebrow[lang]}
                </p>
              </div>
            </FadeInSection>

            <FadeInSection translateY={8} delay={100}>
              <h1 className="hero-headline">
                {th.hero.headline.part1[lang]}
                <br />
                {th.hero.headline.part2[lang]}
                <br />
                <span className="hero-headline-accent">
                  {th.hero.headline.accent[lang]}
                </span>
              </h1>
            </FadeInSection>

            <FadeInSection translateY={8} delay={200}>
              <p className="hero-sub">
                {th.hero.sub[lang]}
              </p>
            </FadeInSection>

            <FadeInSection translateY={8} delay={300}>
              <div className="hero-ctas">
                <Link href="/contact" className="btn-primary hero-btn-primary" id="hero-cta-consult">
                  {th.hero.ctaPrimary[lang]}
                </Link>
                <Link href="/case-studies" className="btn-outline hero-btn-secondary" id="hero-cta-cases">
                  {th.hero.ctaSecondary[lang]}
                </Link>
              </div>
            </FadeInSection>
          </div>

          {/* ── Right: hero image ── */}
          <div className="hero-visual" aria-hidden="true">
            <FadeInSection translateY={16} scaleStart={0.98} delay={450}>
              <div className="hero-img-wrap">
                <img
                  src="/images/hero-dental-3d.jpg"
                  alt="Dental 3D Viewer — flagship case study developed by SkyAxes"
                  className="w-full h-auto block"
                  style={{ borderRadius: 12 }}
                />
                {/* Floating badge */}
                <div className="hero-float-badge">
                  <p className="hero-float-label">Featured case study</p>
                  <p className="hero-float-title">Dental 3D Viewer</p>
                  <span className="hero-float-chip">Qt / OpenGL · Windows</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
