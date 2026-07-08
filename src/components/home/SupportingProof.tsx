"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { proofItems } from "@/lib/data/data";

export default function SupportingProof() {
  const { lang } = useLanguage();
  const [lineQcImageIndex, setLineQcImageIndex] = useState(0);
  const [arImageIndex, setArImageIndex] = useState(0);

  const lineQcImages = [
    "https://www.skyaxes.jp/wp-content/uploads/2021/10/LineQC2.png",
    "https://www.skyaxes.jp/wp-content/uploads/2021/10/xchart-cp-cpk.png",
  ];

  const arImages = [
    "https://www.skyaxes.jp/wp-content/uploads/2020/06/image_recognition.jpg",
    "https://www.skyaxes.jp/wp-content/uploads/2020/06/product2-iot-ar-vr.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLineQcImageIndex((prev) => (prev === 0 ? 1 : 0));
      setArImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Premium smooth interval
    return () => clearInterval(timer);
  }, []);

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
                      lineQcImages.map((src, idx) => (
                        <img
                          key={src}
                          src={src}
                          alt={item.imgAlt}
                          className="absolute inset-0 w-full h-full object-cover block transition-opacity duration-1000 ease-in-out"
                          style={{ opacity: lineQcImageIndex === idx ? 1 : 0 }}
                        />
                      ))
                    ) : i === 1 ? (
                      arImages.map((src, idx) => (
                        <img
                          key={src}
                          src={src}
                          alt={item.imgAlt}
                          className="absolute inset-0 w-full h-full object-cover block transition-opacity duration-1000 ease-in-out"
                          style={{ opacity: arImageIndex === idx ? 1 : 0 }}
                        />
                      ))
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
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
