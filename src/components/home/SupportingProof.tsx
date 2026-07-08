"use client";

import React from "react";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import RippleDisplacementSlider from "@/components/ui/ripple-displacement-slider";
import { useLanguage } from "@/lib/context/LanguageContext";
import { proofItems } from "@/lib/data/data";

export default function SupportingProof() {
  const { lang } = useLanguage();

  const lineQcSlides = [
    { title: "LineQC 1", description: "", image: "/images/lineqc-2.png" },
    { title: "LineQC 2", description: "", image: "/images/lineqc-chart.png" }
  ];

  const arSlides = [
    { title: "AR 1", description: "", image: "/images/ar-recognition.jpg" },
    { title: "AR 2", description: "", image: "/images/ar-iot.jpg" }
  ];

  return (
    <section
      className="section-surface"
      style={{ paddingBlock: 112 }}
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
            {proofItems.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 120} translateY={16}>
                <div className="proof-card">
                  <div className="proof-img-wrap relative overflow-hidden" style={{ minHeight: 220 }}>
                    {i === 0 ? (
                      <RippleDisplacementSlider slides={lineQcSlides} className="absolute inset-0 w-full h-full" />
                    ) : i === 1 ? (
                      <RippleDisplacementSlider slides={arSlides} className="absolute inset-0 w-full h-full" />
                    ) : (
                      <img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className="w-full h-full object-cover block"
                      />
                    )}
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
                          ? "製造現場のラインデータをリアルタイムで収集・可視化。品質管理の自動化と不良品の早期検出を実現する实稼働システム。"
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
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
