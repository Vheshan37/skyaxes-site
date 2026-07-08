"use client";

import React, { useRef } from "react";
import { useLanguage } from "@/lib/context/LanguageContext";
import FadeInSection from "@/components/ui/FadeInSection";

const partners = [
  {
    name: "Travancore Analytics",
    logo: "https://www.skyaxes.jp/wp-content/uploads/2020/06/travancore-analytics_logo.png",
    location: { JP: "インド・ケララ州", EN: "Kerala, India" },
    tag: { JP: "3Dグラフィックス & AR/VR", EN: "AR/VR & 3D Engineering" },
    desc: {
      JP: "NeSTやTata出身の技術者により2007年設立。3Dグラフィックス、モバイル、クラウド開発に強みがあり、平昌五輪のVRシステムなどの実績があります。",
      EN: "Founded in 2007 by former engineers from NeST and Tata. Experts in 3D graphics (AR/VR), cloud, mobile, and factory SCADA systems.",
    },
    highlight: false,
  },
  {
    name: "Curvelogics",
    logo: "https://www.skyaxes.jp/wp-content/uploads/2020/06/curvelogics-a_logo.png",
    location: { JP: "インド・ケララ州", EN: "Kerala, India" },
    tag: { JP: "AI & データ解析", EN: "AI Engine & Data Analysis" },
    desc: {
      JP: "ゲノム研究者により2019年に設立されたAIベンチャー。高度なAIエンジンソリューションやデータ分析プラットフォームを提供します。",
      EN: "An AI venture founded in 2019 by genome researchers. Specializes in advanced AI engines, algorithmic engineering, and predictive analysis.",
    },
    highlight: false, // Styled with a soft brand blue backdrop instead of dark
  },
  {
    name: "ThoutKatalyst",
    logo: "https://www.skyaxes.jp/wp-content/uploads/2020/06/thout-katalyst_logo.png",
    location: { JP: "インド・バンガロール", EN: "Bangalore, India" },
    tag: { JP: "RPA, AI & MDM", EN: "RPA, AI & MDM" },
    desc: {
      JP: "2019年設立。マスターデータ管理（MDM）をコア技術とし、RPAやAIを活用した業務効率化ソリューションに特化しています。",
      EN: "IT venture established in 2019. Specializes in Master Data Management (MDM), RPA integration, and automated business data analysis.",
    },
    highlight: false,
  },
  {
    name: "LIVEROOM",
    logo: "https://www.skyaxes.jp/wp-content/uploads/2020/06/liveroom_logo.png",
    location: { JP: "スリランカ・コロンボ", EN: "Colombo, Sri Lanka" },
    tag: { JP: "モバイルAR & 画像認識", EN: "Mobile AR/VR & Vision" },
    desc: {
      JP: "モラトゥワ大学計算機科学科と連携する先進企業。モバイルAR/VRプラットフォームや画像認識、ブロックチェーン技術に強みがあります。",
      EN: "Partnered with Moratuwa University Computer Science Dept. Experts in mobile AR/VR platforms, image recognition, and cloud ecosystems.",
    },
    highlight: false,
  },
  {
    name: "EIMSKY / Omobio",
    logo: "https://www.skyaxes.jp/wp-content/uploads/2020/06/eimsky_logo.png",
    location: { JP: "スリランカ・コロンボ", EN: "Colombo, Sri Lanka" },
    tag: { JP: "IoTプラットフォーム & 通信", EN: "IoT Platform & Telecom" },
    desc: {
      JP: "Omobio子会社。通信キャリア向けソフトやIoTシステムを提供。スリランカ、東南アジア、オーストラリアなどで稼働実績があります。",
      EN: "Subsidiary of Omobio. Supplying carrier-grade telecom software and industrial IoT platforms operating across SE Asia, Australia, and Canada.",
    },
    highlight: false,
  },
  {
    name: "Olivlab",
    logo: "https://www.skyaxes.jp/wp-content/uploads/2020/06/omobio_logo.png", // Fallback standard partner logomark
    location: { JP: "スリランカ・コロンボ", EN: "Colombo, Sri Lanka" },
    tag: { JP: "ITコンサルティング & 調整", EN: "IT Consulting & Bridge" },
    desc: {
      JP: "スリランカ現地のIT企業。日本企業向けブリッジ開発、ITコンサルティング、および現地エンジニア組織との高度な連携調整を担います。",
      EN: "IT consultancy in Sri Lanka providing bridging services, localized tech consulting, and cross-border project coordination.",
    },
    highlight: false,
  },
];

export default function Brands2() {
  const { lang } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <style jsx global>{`
        .brands2-container {
          background: var(--color-surface); /* Pure corporate light surface background */
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--color-border);
        }
        .partner-card-scroll {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
          padding-bottom: 12px;
        }
        .partner-card-scroll::-webkit-scrollbar {
          display: none;
        }
        .partner-card {
          flex-shrink: 0;
          width: 330px;
          border-radius: 16px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 390px;
          transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1), border-color 400ms cubic-bezier(0.16, 1, 0.3, 1);
          scroll-snap-align: start;
        }
        .partner-card.light {
          background: #ffffff;
          color: var(--color-text);
          border: 1px solid var(--color-border);
        }
        .partner-card.highlighted {
          background: var(--color-clinical-light);
          color: var(--color-text);
          border: 1.5px solid var(--color-clinical);
          box-shadow: var(--shadow-card);
        }
        .partner-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-card);
          border-color: var(--color-accent);
        }
        .partner-circle-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-border);
          color: var(--color-muted);
          transition: opacity 150ms ease, background 150ms ease, color 150ms ease, border-color 150ms ease;
        }
        .partner-card:hover .partner-circle-btn {
          background: var(--color-accent);
          color: #ffffff;
          border-color: var(--color-accent);
        }
        .partner-arrow-nav {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--color-border-dark);
          background: #ffffff;
          color: var(--color-navy);
          transition: background 150ms ease, border-color 150ms ease, color 150ms ease;
          cursor: pointer;
        }
        .partner-arrow-nav:hover {
          background: var(--color-accent);
          color: #ffffff;
          border-color: var(--color-accent);
        }
      `}</style>

      <section className="brands2-container py-24">
        <div className="container-site">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-navy" style={{ fontFamily: "var(--font-jakarta)" }}>
                {lang === "JP" ? (
                  <>信頼の<br /><span className="text-[#2E75B6]">開発パートナー</span></>
                ) : (
                  <>Trusted<br /><span className="text-[#2E75B6]">Expertise</span></>
                )}
              </h2>
            </div>

            <div className="flex items-start md:items-end flex-col gap-4 max-w-sm">
              <p className="text-sm text-muted leading-relaxed">
                {lang === "JP"
                  ? "IoT、AR/VR、画像処理、AIデータ分析など、実績豊富で日本品質に対応可能なインド・スリランカの精鋭企業と強固なアライアンスを構築しています。"
                  : "We deliver offshore software services through strategic collaborations with certified technical partners in India and Sri Lanka."}
              </p>
              <div className="flex gap-3">
                <button onClick={() => scroll("left")} className="partner-arrow-nav" aria-label="Scroll left">
                  ←
                </button>
                <button onClick={() => scroll("right")} className="partner-arrow-nav" aria-label="Scroll right">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Cards Carousel Row */}
          <div ref={scrollRef} className="partner-card-scroll pt-4">
            {partners.map((p, i) => (
              <FadeInSection key={p.name} delay={i * 80} translateY={16}>
                <div
                  className={`partner-card ${p.highlight ? "highlighted" : "light"}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border inline-block"
                        style={{
                          background: p.highlight ? "rgba(74, 144, 196, 0.1)" : "rgba(26, 60, 110, 0.05)",
                          borderColor: p.highlight ? "rgba(74, 144, 196, 0.2)" : "rgba(26, 60, 110, 0.1)",
                          color: p.highlight ? "var(--color-clinical)" : "var(--color-navy)",
                          fontFamily: "var(--font-jakarta)",
                        }}
                      >
                        {p.tag[lang]}
                      </span>
                      <span className="text-[11px] text-muted" style={{ fontFamily: "var(--font-jakarta)" }}>
                        {p.location[lang]}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug mb-3 text-navy">
                      {p.name}
                    </h3>

                    <p
                      className="text-sm leading-relaxed text-muted"
                    >
                      {p.desc[lang]}
                    </p>
                  </div>

                  <div className="flex items-center justify-start mt-6">
                    {/* Partner Brand Logo inside card */}
                    <div
                      className="h-14 w-40 relative flex items-center justify-center rounded px-3"
                      style={{
                        background: "#ffffff",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        className="max-h-11 max-w-full object-contain block opacity-90"
                      />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
