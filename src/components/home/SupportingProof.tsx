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

          <div className="flex flex-col gap-16 lg:gap-32">
            {proofItems.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeInSection key={item.title} delay={i * 120} translateY={16}>
                  {/* Card on mobile, clean borderless row on desktop */}
                  <div className={`flex flex-col lg:flex-row ${
                    isEven ? "" : "lg:flex-row-reverse"
                  } items-stretch gap-8 lg:gap-16 p-5 lg:p-0 rounded-2xl border border-black/5 lg:border-none bg-white lg:bg-transparent shadow-md lg:shadow-none`}>
                    
                    {/* Visual Slider Column - Independent Glass Block */}
                    <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-black/10 shadow-lg min-h-[300px] lg:min-h-[400px]">
                      {i === 0 ? (
                        <RippleDisplacementSlider slides={lineQcSlides} className="absolute inset-0 w-full h-full" />
                      ) : i === 1 ? (
                        <RippleDisplacementSlider slides={arSlides} className="absolute inset-0 w-full h-full" />
                      ) : (
                        <img
                          src={item.imgSrc}
                          alt={item.imgAlt}
                          className="absolute inset-0 w-full h-full object-cover block"
                        />
                      )}
                      <div className="proof-img-overlay" />
                    </div>

                    {/* Content Column - Independent Text Block */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center py-2 lg:py-8">
                      <div>
                        <span
                          className="proof-tag px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block mb-4"
                          style={{ color: item.tagColor, background: item.tagBg }}
                        >
                          {item.tag}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-extrabold text-navy mb-4" style={{ fontFamily: "var(--font-jakarta)", lineHeight: 1.2 }}>
                          {lang === "JP" ? item.titleJP : item.title}
                        </h3>
                        <p className="text-muted leading-relaxed" style={{ fontSize: 16, margin: 0 }}>
                          {lang === "JP"
                            ? (item.href === "/lineqc"
                              ? "製造現場のラインデータをリアルタイムで収集・可視化。品質管理の自動化と不良品の早期検出を実現する実稼働システム。"
                              : "組み立てラインや保守点検作業において、ARで手順をオーバーレイ表示。誤作業の防止と技術教育の効率化を実現。")
                            : item.desc}
                        </p>
                        
                        {/* Unified Button Row with Spacing */}
                        <div className="flex flex-wrap items-center gap-6 mt-6">
                          <div
                            className="proof-metric-chip flex items-center gap-2 border rounded-lg px-4 py-2 w-fit"
                            style={{ borderColor: item.metricColor + "33", background: item.metricColor + "0d", margin: 0 }}
                          >
                            <span className="text-lg font-bold" style={{ color: item.metricColor, fontFamily: "var(--font-jakarta)" }}>
                              {item.metric}
                            </span>
                            <span className="text-xs text-muted font-medium">{item.metricLabel}</span>
                          </div>
                          
                          <Link
                            href={item.href}
                            className="proof-cta font-bold hover:opacity-80 transition-opacity inline-flex items-center gap-1 text-[15px]"
                            style={{ color: item.tagColor }}
                          >
                            {lang === "JP"
                              ? (item.href === "/lineqc" ? "LineQCの詳細を見る →" : "3D/VR/ARサービスを見る →")
                              : item.cta}
                          </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
