/**
 * Type-Safe Translation Data (Bilingual JP/EN)
 *
 * Usage:
 *   import { useLanguage } from "@/components/Header"; // Or read dynamic locale state
 *   import { t } from "@/lib/data/language";
 */

export const t = {
  header: {
    services: { JP: "サービス", EN: "Services" },
    caseStudies: { JP: "事例", EN: "Case Studies" },
    lineqc: { JP: "LineQC", EN: "LineQC" },
    company: { JP: "会社概要", EN: "Company" },
    contactBtn: { JP: "お問い合わせ", EN: "Contact Us" },
  },

  home: {
    hero: {
      eyebrow: { JP: "オフショア開発パートナー", EN: "Offshore Development Partner" },
      headline: {
        part1: { JP: "日本品質のPMがリードする", EN: "Japan-side PM-led" },
        part2: { JP: "オフショア開発", EN: "Offshore Development" },
        accent: { JP: "3D/VR・IoT・業務システム構築", EN: "for 3D/VR, IoT & Business Systems" },
      },
      sub: {
        JP: "製造業、歯科医療・隣接領域、および高度な技術システムを必要とする企業様に向けて、実用的なソフトウェアを最適なコストパフォーマンスで開発します。",
        EN: "We help manufacturing, dental/medical-adjacent and technical businesses turn specialized software ideas into practical systems at a realistic development cost.",
      },
      ctaPrimary: { JP: "オフショア開発について相談する", EN: "Discuss an Offshore Development Project" },
      ctaSecondary: { JP: "3D/VRの事例を見る", EN: "View 3D/VR Case Studies" },
      badgePm: { JP: "日本人PM管理", EN: "Japan-side PM" },
      badgeCost: { JP: "現実的な開発コスト", EN: "Realistic cost" },
      badgeQa: { JP: "充実の品質保証", EN: "Technical QA" },
    },
    trustedBy: { JP: "信頼いただいている企業", EN: "TRUSTED BY" },
    servicesSection: {
      eyebrow: { JP: "サービス領域", EN: "What we build" },
      title: { JP: "提供サービス", EN: "Our Services" },
      sub: {
        JP: "日本側で要件定義とPMを一括対応し、オフショアの強みを最大限に活かした開発を行います。",
        EN: "Three focused disciplines — all managed Japan-side, delivered offshore.",
      },
      learnMore: { JP: "詳細を見る →", EN: "Learn more →" },
    },
    caseStudiesSection: {
      eyebrow: { JP: "事例紹介", EN: "Flagship Project" },
      title: { JP: "3D技術の実績", EN: "Featured Case Study" },
      sub: {
        JP: "最先端の技術スタックとコストマネジメントの両立を実現した代表的な導入事例です。",
        EN: "Advanced 3D visualization achieved with realistic development cost control.",
      },
      dentalTitle: { JP: "歯科用3Dビューア開発", EN: "Dental 3D Viewer Development" },
      dentalDesc: {
        JP: "歯科診療現場における高精度な3Dスキャンデータのリアルタイム可視化システム。Qt/OpenGLによるデスクトップアプリケーション開発実績。",
        EN: "High-precision real-time 3D rendering for dental workflows. Desktop Windows application built on Qt/OpenGL.",
      },
      viewCase: { JP: "事例の詳細を見る →", EN: "View Case Study →" },
    },
    proofSection: {
      eyebrow: { JP: "システム開発実績", EN: "Proven Track Record" },
      title: { JP: "確かな技術と実績", EN: "Supporting Proof" },
      sub: {
        JP: "製造現場で安定稼働している自社製品と高度なARトレーニング基盤をご紹介します。",
        EN: "Discover our in-production industrial products and advanced training frameworks.",
      },
    },
    flowSection: {
      eyebrow: { JP: "開発の流れ", EN: "Our Process" },
      title: { JP: "システム開発プロセス", EN: "Development Flow" },
      sub: {
        JP: "最初の打ち合わせから納品後の保守運用まで、安心のステップで進めます。",
        EN: "From initial alignment through quality assurance to post-release maintenance.",
      },
      steps: [
        { num: "01", JP: "ご相談・ヒアリング", EN: "Consultation" },
        { num: "02", JP: "要件定義・仕様作成", EN: "Requirements" },
        { num: "03", JP: "開発お見積もり", EN: "Estimate" },
        { num: "04", JP: "オフショア開発", EN: "Development" },
        { num: "05", JP: "テスト・品質保証", EN: "QA" },
        { num: "06", JP: "運用・保守サポート", EN: "Maintenance" },
      ],
    },
  },

  /* ─── Services Index Page ─────────────────────── */
  services: {
    hero: {
      eyebrow: { JP: "SERVICES", EN: "SERVICES" },
      title: { JP: "サービス一覧", EN: "Our Services" },
      sub: {
        JP: "日本側PMが技術的なソフトウェア開発を3つの主要領域でリードします。",
        EN: "Japan-side PM-led technical software development across three core capability areas.",
      },
    },
    cards: [
      {
        tag: { JP: "オフショア", EN: "Offshore" },
        titleJP: "オフショア開発",
        titleEN: "Offshore Development",
        desc: {
          JP: "日本人PMが要件定義・設計・品質管理を一括担当し、オフショアチームを管理します。コスト効率とクオリティを両立した開発体制を提供します。",
          EN: "Japan-side PM manages requirements, design, and QA end-to-end while coordinating the offshore team. Cost-efficient development with no compromise on quality.",
        },
      },
      {
        tag: { JP: "3D / VR / AR", EN: "3D / VR / AR" },
        titleJP: "3D・VR・AR開発",
        titleEN: "3D / VR / AR Development",
        desc: {
          JP: "歯科用3Dビューアをフラッグシップとして、Qt/OpenGLをはじめとした高度な3D可視化・VR/ARアプリケーションの受託開発を行います。",
          EN: "Advanced 3D visualization, VR/AR applications, and image processing — from dental/medical-adjacent software to industrial training systems.",
        },
      },
      {
        tag: { JP: "IoT / 製造", EN: "IoT / Manufacturing" },
        titleJP: "IoT・製造システム",
        titleEN: "IoT & Manufacturing Systems",
        desc: {
          JP: "品質管理・センサーデータ収集・工場管理システム。LineQCを通じて培った製造業向けシステム開発のノウハウを提供します。",
          EN: "QC systems, sensor data pipelines, and factory management software. Real-world LineQC deployment running in production.",
        },
      },
    ],
    viewDetails: { JP: "詳しく見る →", EN: "View Details →" },
    cta: {
      title: { JP: "まずはご相談ください", EN: "Let's Discuss Your Project" },
      sub: {
        JP: "開発に関するご相談のみ承っております。2営業日以内にご連絡いたします。",
        EN: "Development consultations only — we respond within 2 business days.",
      },
      btn: { JP: "お問い合わせ / Contact", EN: "Contact Us" },
    },
  },

  /* ─── Offshore Page ─────────────────────────────── */
  offshore: {
    hero: {
      eyebrow: { JP: "メインサービス", EN: "Primary Service" },
      title: { JP: "日本人PMによる高品質オフショア開発", EN: "Offshore Development with Japan-side PM" },
      sub: {
        JP: "言語の壁や品質の不安をゼロに。要件定義、仕様設計、品質管理を一括で日本側PMが担い、開発はパートナー企業で行うことで、納得のいく費用対効果を実現します。",
        EN: "High-quality, cost-effective technical software development managed entirely in Japanese. No language barriers, strict QA, and post-launch support.",
      },
    },
  },

  /* ─── 3D/VR/AR Page ─────────────────────────────── */
  threeDVR: {
    hero: {
      eyebrow: { JP: "最先端技術", EN: "Core Capability" },
      title: { JP: "3D・VR・ARアプリケーション開発", EN: "3D / VR / AR Development" },
      sub: {
        JP: "エンタメではない、ビジネスのための実用的な3D可視化。歯科医療機器連携、製造業向けトレーニングなど、現場の効率化に貢献するソフトウェアを開発します。",
        EN: "Practical 3D visualization and AR/VR systems built for real-world operations — including medical diagnostics and industrial simulations.",
      },
    },
  },

  /* ─── IoT Page ──────────────────────────────────── */
  iot: {
    hero: {
      eyebrow: { JP: "製造現場のIT化", EN: "IoT Solutions" },
      title: { JP: "IoT・製造システム開発サービス", EN: "IoT / Manufacturing Systems" },
      sub: {
        JP: "工場内のセンサーデータ収集から、品質管理監視、工程可視化システムの構築まで。自社製品「LineQC」の開発・運用で培った製造現場特有のノウハウを提供します。",
        EN: "Factory-floor IoT systems, quality control automation, and sensor data pipelines built with manufacturing-sector discipline.",
      },
    },
  },

  /* ─── LineQC Page ───────────────────────────────── */
  lineqc: {
    proofBanner: {
      label: { JP: "製造システムの開発証明", EN: "Manufacturing system development proof" },
      text: {
        JP: "LineQCは自社開発した製造向けシステムであり、データ収集・可視化・品質管理におけるSkyAxesの実績を裏付けるものです。",
        EN: "LineQC is our own proprietary system, proving SkyAxes' hands-on expertise in factory IoT, data pipelines, and process control.",
      },
    },
  },

  /* ─── Company Page ──────────────────────────────── */
  company: {
    hero: {
      eyebrow: { JP: "COMPANY", EN: "COMPANY" },
      title: { JP: "会社概要", EN: "About SkyAxes" },
      sub: {
        JP: "日本の品質とオフショアの効率を両立するソフトウェア開発パートナーです。",
        EN: "A software development partner combining Japan-quality management with offshore efficiency.",
      },
    },
    overview: {
      title: { JP: "会社情報", EN: "Company Information" },
      name: { JP: "会社名", EN: "Company Name" },
      nameVal: { JP: "SkyAxes株式会社", EN: "SkyAxes Inc." },
      established: { JP: "設立", EN: "Established" },
      location: { JP: "所在地", EN: "Location" },
      business: { JP: "事業内容", EN: "Business" },
      businessVal: {
        JP: "オフショア開発、3D/VR/AR開発、IoT・製造システム開発",
        EN: "Offshore Development, 3D/VR/AR Development, IoT & Manufacturing Systems",
      },
    },
  },

  /* ─── Contact Page ──────────────────────────────── */
  contact: {
    hero: {
      title: { JP: "開発相談・お問い合わせ", EN: "Development Inquiry" },
      sub: {
        JP: "オフショア開発、3D/VR/AR、IoTシステムの構築に関するご相談はお気軽にどうぞ。2営業日以内に担当者がご連絡いたします。",
        EN: "Ready to discuss a project? Get in touch for cost-effective technical systems. We respond within 2 business days.",
      },
    },
    form: {
      company: { JP: "会社名", EN: "Company Name" },
      name: { JP: "お名前", EN: "Your Name" },
      email: { JP: "メールアドレス", EN: "Email Address" },
      phone: { JP: "電話番号", EN: "Phone Number" },
      subject: { JP: "件名", EN: "Subject" },
      message: { JP: "お問い合わせ内容", EN: "Message" },
      submit: { JP: "送信する", EN: "Submit" },
      required: { JP: "必須", EN: "Required" },
    },
  },

  /* ─── Case Studies Page ─────────────────────────── */
  caseStudies: {
    hero: {
      eyebrow: { JP: "CASE STUDIES", EN: "CASE STUDIES" },
      title: { JP: "導入事例", EN: "Case Studies" },
      sub: {
        JP: "SkyAxesが手がけたプロジェクトの代表的な事例をご紹介します。",
        EN: "Featured projects demonstrating SkyAxes' technical capabilities.",
      },
    },
    dental: {
      tag: { JP: "3D / VR / AR", EN: "3D / VR / AR" },
      title: { JP: "歯科用3Dビューア開発", EN: "Dental 3D Viewer Development" },
      desc: {
        JP: "歯科診療現場における高精度な3Dスキャンデータのリアルタイム可視化システム。Qt/OpenGLによるデスクトップアプリケーション開発実績。",
        EN: "High-precision real-time 3D scan data visualization for dental workflows. Desktop application built with Qt/OpenGL.",
      },
      viewCase: { JP: "事例の詳細を見る →", EN: "View Case Study →" },
    },
  },
} as const;

export type TranslationType = typeof t;
