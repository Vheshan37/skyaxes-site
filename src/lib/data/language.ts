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
      warningTitle: {
        JP: "このフォームは、自社サービス・製品のご案内、広告掲載、業務提携以外の営業目的でのご連絡はご遠慮いただいております。該当するご連絡には返信いたしかねますので、あらかじめご了承ください。",
        EN: "This form is intended for genuine business inquiries only. We are unable to respond to unsolicited sales, advertising, or vendor-partnership pitches submitted through this channel."
      },
      companyLabel: { JP: "会社名", EN: "Company Name" },
      companyPlaceholder: { JP: "株式会社〇〇", EN: "e.g. Acme Corp" },
      deptLabel: { JP: "部署名", EN: "Department" },
      deptPlaceholder: { JP: "システム部、経営企画室など", EN: "e.g. IT Department" },
      nameLabel: { JP: "ご担当者名", EN: "Contact Name" },
      namePlaceholder: { JP: "山田 太郎", EN: "e.g. John Doe" },
      emailLabel: { JP: "メールアドレス", EN: "Email Address" },
      emailPlaceholder: { JP: "taro.yamada@example.co.jp", EN: "e.g. john.doe@example.com" },
      phoneLabel: { JP: "電話番号", EN: "Phone Number" },
      phonePlaceholder: { JP: "03-XXXX-XXXX", EN: "e.g. +81-3-XXXX-XXXX" },
      budgetLabel: { JP: "ご予算感", EN: "Project Budget" },
      budgetSelect: { JP: "選択してください", EN: "Please select" },
      budgetOptions: {
        under300: { JP: "〜300万円", EN: "Under ¥3M" },
        "300to1000": { JP: "300万〜1,000万円", EN: "¥3M - ¥10M" },
        "1000to3000": { JP: "1,000万〜3,000万円", EN: "¥10M - ¥30M" },
        over3000: { JP: "3,000万円〜", EN: "Over ¥30M" },
        consult: { JP: "ご相談 / 未定", EN: "Undecided / Discussion" }
      },
      timelineLabel: { JP: "希望時期", EN: "Desired Timeline" },
      timelineSelect: { JP: "選択してください", EN: "Please select" },
      timelineOptions: {
        "1month": { JP: "1ヶ月以内", EN: "Within 1 Month" },
        "1to3": { JP: "1〜3ヶ月", EN: "1 - 3 Months" },
        "3to6": { JP: "3〜6ヶ月", EN: "3 - 6 Months" },
        over6: { JP: "6ヶ月以上", EN: "More than 6 Months" },
        undecided: { JP: "未定", EN: "Undecided" }
      },
      messageLabel: { JP: "お問い合わせ内容", EN: "Message / Project Overview" },
      messagePlaceholder: {
        JP: "ご相談内容・プロジェクトの概要をご記入ください。",
        EN: "Please describe your project outline, tech stack requirements, or questions in detail."
      },
      confirmCheckbox: {
        JP: "本お問い合わせが、自社製品・サービスの営業やご提案を目的としたものではないことを確認します。",
        EN: "I confirm this inquiry is not intended as a sales or marketing pitch."
      },
      submitBtn: { JP: "送信する", EN: "Submit" },
      submittingBtn: { JP: "送信中…", EN: "Submitting..." },
      submitHint: {
        JP: "※ 上の確認チェックボックスにチェックを入れると送信できます。",
        EN: "Check the confirmation box above to enable submission."
      },
      successTitle: { JP: "お問い合わせを受け付けました", EN: "Inquiry Received Successfully" },
      successSub: { JP: "2営業日以内にご返信いたします", EN: "We respond within 2 business days." },
      required: { JP: "必須", EN: "required" },
      optional: { JP: "任意", EN: "optional" },
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

  /* ─── Privacy Policy Page ────────────────────────── */
  privacyPolicy: {
    hero: {
      title: { JP: "プライバシーポリシー", EN: "Privacy Policy" },
      sub: {
        JP: "当社の提供するサービスにおける、個人情報の取扱いについての基本方針をご説明します。",
        EN: "Our fundamental guidelines regarding the collection, management, and use of personal information.",
      },
    },
    intro: {
      JP: "スカイアクシーズ株式会社（以下「当社」といいます）は、当社の提供するサービス（以下「本サービス」といいます）における、ユーザーについての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。",
      EN: "SkyAxes Co., Ltd. (hereinafter referred to as the 'Company') has established this Privacy Policy (hereinafter referred to as the 'Policy') regarding the handling of user information, including personal information, in the services provided by the Company (hereinafter referred to as the 'Service').",
    },
    sec1Title: { JP: "1. 収集する利用者情報及び収集方法", EN: "1. Collected Information and Methods" },
    sec1Desc: {
      JP: "本ポリシーにおいて、「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーのスマートフォン、PC等の端末においてユーザー又はユーザーの端末に関連して生成又は蓄積された情報であって、本ポリシーに基づき当社が収集するものを意味するものとします。",
      EN: "In this Policy, 'User Information' means information relating to user identification, communication service activity logs, and other information generated or stored in connection with the user or their terminal on smartphones, PCs, etc., which the Company collects based on this Policy.",
    },
    sec1Sub1: { JP: "（1）ユーザーからご提供いただく情報", EN: "(1) Information Provided by Users" },
    sec1Sub1Desc: { JP: "ユーザーが本サービスを利用するために、ご提供いただく情報は以下のとおりです。", EN: "The information provided by users for utilizing the Service includes:" },
    sec1Sub1Items: {
      JP: ["氏名", "メールアドレス", "社名", "電話番号", "お問い合わせ種別", "入力フォームにユーザーが入力する情報"],
      EN: ["Name", "Email Address", "Company Name", "Phone Number", "Inquiry Type", "Information entered by the user in the input forms"],
    },
    sec1Sub2: { JP: "（2）ユーザーが本サービスを利用するにあたって、当社が収集する情報", EN: "(2) Information Collected Automatically" },
    sec1Sub2Desc: { JP: "当社は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあります。これには以下の情報が含まれます。", EN: "We may collect information regarding the access status and usage methods of the Service. This includes:" },
    sec1Sub2Items: {
      JP: ["端末情報", "ログ情報", "Cookie及び匿名ID", "位置情報"],
      EN: ["Terminal Information", "Log Information", "Cookies and Anonymous IDs", "Location Information"],
    },
    sec1CookieNote: {
      JP: "※当ウェブサイトでは、クッキー（Cookie）を使用することがあります。ホームページで使用するクッキーには、お客さまの個人情報（氏名やメールアドレス等）は一切含まれておりません。ブラウザの設定により無効にすることも可能です。",
      EN: "*Our website may use cookies. Cookies used on this site do not contain any personal identification details (like name or email). You can disable cookies in your browser settings.",
    },
    sec2Title: { JP: "2. 利用者（個人）情報の利用", EN: "2. Use of Collected Information" },
    sec2Desc: { JP: "本サービスにおける個人情報の利用目的は以下の通りです。", EN: "The purposes for which we use the collected personal information are as follows:" },
    sec2Items: {
      JP: ["お問い合わせの返信時"],
      EN: ["Responding to client inquiries"],
    },
    sec2ThirdParty: {
      JP: "当社は、以下の場合を除いてはお客様の断りなく第三者に個人情報を開示・提供することはいたしません。",
      EN: "We will not disclose or provide personal information to third parties without the client's consent, except in the following cases:",
    },
    sec2ThirdPartyItems: {
      JP: [
        "a) 法令に基づく場合、及び国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合。",
        "b) 人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合。"
      ],
      EN: [
        "a) When required by laws and regulations, or when cooperation is necessary for national/local authorities to perform tasks defined by law.",
        "b) When necessary to protect human life, physical safety, or property, and obtaining consent is difficult."
      ],
    },
    sec3Title: { JP: "3. SSLの使用", EN: "3. SSL Encryption" },
    sec3Desc: {
      JP: "個人情報の入力時には、セキュリティ確保のため、これらの情報が傍受、妨害または改ざんされることを防ぐ目的でSSL（Secure Sockets Layer）技術を使用しております。SSLを利用する事でより安全に情報を送信する事が可能となります。",
      EN: "To secure your personal information from interception or tampering during submission, we utilize SSL (Secure Sockets Layer) encryption technology. This ensures data is securely transmitted.",
    },
    sec4Title: { JP: "4. プライバシーポリシーの変更", EN: "4. Policy Changes" },
    sec4Desc: {
      JP: "収集する個人情報の変更、利用目的の変更、またはその他プライバシーポリシーの変更を行う際は、当ページへの変更をもって公表とさせていただきます。",
      EN: "Any changes to the collected data categories, purposes of use, or other updates to this Policy will be announced by posting the updated version directly on this page.",
    },
    sec5Title: { JP: "5. その他", EN: "5. Intellectual Property & Contact" },
    sec5Desc: {
      JP: "本サイトに掲載されている商品の画像に関しては当社及び各メーカーに権利がございます。無断で使用されることの無いよう御願いいたします。",
      EN: "All product images displayed on this site are the property of the Company and their respective manufacturers. Unauthorized use or reproduction is strictly prohibited.",
    },
    contactTitle: { JP: "お問い合わせ先", EN: "Contact Desk" },
    contactItems: {
      JP: ["スカイアクシーズ株式会社", "TEL: 090-5441-1033", "営業時間: 9:00～18:00"],
      EN: ["SkyAxes Co., Ltd.", "TEL: 090-5441-1033", "Hours: 9:00 - 18:00 (JST)"],
    },
    date: { JP: "2020年6月1日制定", EN: "Established on June 1, 2020" }
  },

  footer: {
    desc: {
      JP: "日本人PMが導く、3D/VR・IoT・業務システムのオフショア開発パートナー",
      EN: "Japan-side PM-led offshore development partner for 3D/VR, IoT & business systems.",
    },
    servicesHeading: { JP: "サービス / Services", EN: "Services" },
    worksHeading: { JP: "実績 / Works", EN: "Works" },
    companyHeading: { JP: "会社 / Company", EN: "Company" },
    offshore: { JP: "オフショア開発", EN: "Offshore Development" },
    vr: { JP: "3D・VR・AR開発", EN: "3D / VR / AR Development" },
    iot: { JP: "IoT・製造システム", EN: "IoT & Manufacturing Systems" },
    caseStudies: { JP: "導入事例", EN: "Case Studies" },
    dental: { JP: "歯科用3Dビューア", EN: "Dental 3D Viewer" },
    lineqc: { JP: "LineQC", EN: "LineQC" },
    about: { JP: "会社概要", EN: "Company Profile" },
    contact: { JP: "お問い合わせ", EN: "Contact Us" },
    privacy: { JP: "プライバシーポリシー", EN: "Privacy Policy" },
  },
} as const;

export type TranslationType = typeof t;
