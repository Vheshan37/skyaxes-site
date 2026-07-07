import React from "react";

export interface ServiceItem {
  icon: React.ReactNode;
  titleEN: string;
  titleJP: string;
  descEN: string;
  descJP: string;
  href: string;
  accentColor: string;
  accentBg: string;
  hoverClass: string;
  tag: string;
}

export interface ProofItem {
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  titleJP: string;
  desc: string;
  metric: string;
  metricLabel: string;
  metricColor: string;
  href: string;
  cta: string;
  imgSrc: string;
  imgAlt: string;
}

export const services: ServiceItem[] = [
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
    descEN: "Japan-side PM manages requirements, design, offshore team communication, and QA end-to-end — at a realistic development cost.",
    descJP: "要件定義・設計・オフショアチームとの調整、品質確認まで日本側のPMが一括管理。コスト効率と信頼性を両立します。",
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
    descEN: "Advanced 3D visualization, VR/AR applications, and image processing — from dental/medical-adjacent software to industrial training.",
    descJP: "歯科・医療機器・産業システム向けの3Dレンダリング、点検・組み立てシミュレーションなど、実用的な3D/VRシステム構築。",
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
    descEN: "QC systems, sensor data pipelines, factory management software. Real-world LineQC deployment running in production.",
    descJP: "工場向けデータ収集システム、品質管理（QC）監視、基幹システム連携など、自社LineQC等の強みを活かした受託システム開発。",
    href: "/services/iot",
    accentColor: "var(--color-green-iot)",
    accentBg: "rgba(13,143,111,0.10)",
    hoverClass: "service-card-iot",
    tag: "In production",
  },
];

export const proofItems: ProofItem[] = [
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
