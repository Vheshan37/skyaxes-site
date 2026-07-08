"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

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
            <div className="flex items-center gap-3 flex-wrap mb-4">
              <p className="hero-eyebrow" style={{ margin: 0 }}>
                {th.hero.eyebrow[lang]}
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[#F0F5FA] border border-[#E5E9EF] rounded-full py-1 px-3 text-[11px] font-semibold text-navy uppercase tracking-wider">
                <svg className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <span>5.0 Star Rated Partner</span>
              </div>
            </div>

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
  );
}
