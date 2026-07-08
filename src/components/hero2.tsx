"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

export default function Hero2() {
  const { lang, setLang } = useLanguage();
  const th = t.home;

  const navLinks = [
    { href: "/services", labelJP: "サービス", labelEN: "Services" },
    { href: "/case-studies", labelJP: "事例", labelEN: "Case Studies" },
    { href: "/lineqc", labelJP: "LineQC", labelEN: "LineQC" },
    { href: "/company", labelJP: "会社概要", labelEN: "Company" },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .hero2-container {
          background: radial-gradient(circle at 70% 30%, #1c3d70 0%, #0b1a30 100%);
          position: relative;
          overflow: hidden;
        }
        .glass-nav {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border-radius: 9999px;
          padding: 8px 24px;
        }
        .nav-link-item {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 500;
          transition: color 150ms ease;
          text-decoration: none;
        }
        .nav-link-item:hover {
          color: #ffffff;
        }
        .lang-btn {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          font-weight: 600;
          transition: color 150ms ease;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .lang-btn.active {
          color: #ffffff;
        }
      `}</style>

      <section className="hero2-container text-white py-12 md:py-20 flex flex-col justify-between min-h-[95vh] md:min-h-screen">
        {/* ── EMBEDDED PRECISE GLASS NAVIGATION HEADER ── */}
        <div className="container-site w-full mb-10 md:mb-16 z-20">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-jakarta)" }}>
                Sky<span className="text-[#4A90C4]">Axes</span>
              </span>
            </Link>

            {/* Navigation links inside curved glass capsule */}
            <nav className="hidden md:flex items-center gap-6 glass-nav" style={{ fontFamily: "var(--font-jakarta)" }}>
              {navLinks.map(({ href, labelJP, labelEN }) => (
                <Link key={href} href={href} className="nav-link-item">
                  {lang === "JP" ? labelJP : labelEN}
                </Link>
              ))}
            </nav>

            {/* Right CTAs & Language Selector */}
            <div className="flex items-center gap-4">
              {/* Language group selector */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 h-7">
                <button
                  onClick={() => setLang("JP")}
                  className={`lang-btn ${lang === "JP" ? "active" : ""}`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  JP
                </button>
                <span className="text-white/20 text-xs">|</span>
                <button
                  onClick={() => setLang("EN")}
                  className={`lang-btn ${lang === "EN" ? "active" : ""}`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  EN
                </button>
              </div>

              {/* Direct Quote CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-[#2E75B6] hover:bg-[#255e92] text-white text-sm font-semibold rounded-full py-2.5 px-5 transition-colors duration-150"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {lang === "JP" ? "ご相談フォーム" : "Contact Us"}
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── HERO CORE LAYOUT ── */}
        <div className="container-site w-full flex-1 flex items-center z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
            {/* Left side text copy */}
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-3 flex-wrap mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2E75B6] bg-white/5 border border-white/10 rounded-full px-3.5 py-1" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {th.hero.eyebrow[lang]}
                </span>
                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full py-1 px-3 text-[11px] font-semibold text-white uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  <span>5.0 Star Rated Partner</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6" style={{ fontFamily: "var(--font-jakarta)", color: "#ffffff" }}>
                {th.hero.headline.part1[lang]}
                <br />
                <span className="text-[#2E75B6]">
                  {th.hero.headline.part2[lang]}
                </span>
                <br />
                <span className="text-white/80 font-semibold text-2xl md:text-3xl lg:text-4xl mt-3 block">
                  {th.hero.headline.accent[lang]}
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                {th.hero.sub[lang]}
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E75B6] hover:bg-[#255e92] text-white text-base font-semibold rounded-lg py-3.5 px-6 transition-all duration-150" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {th.hero.ctaPrimary[lang]}
                </Link>
                <Link href="/case-studies" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white text-base font-semibold rounded-lg py-3.5 px-6 transition-all duration-150" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {th.hero.ctaSecondary[lang]}
                </Link>
              </div>
            </div>

            {/* Right side floating Dental Visual representation */}
            <div className="flex justify-center lg:justify-end w-full animate-float">
              <div className="relative max-w-[500px] w-full border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-[#0b1a30]/80">
                <Image
                  src="/images/hero-dental-3d.jpg"
                  alt="Dental 3D Viewer flagship project by SkyAxes"
                  width={600}
                  height={450}
                  className="w-full h-auto block opacity-90"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 border border-white/10 backdrop-blur rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest" style={{ fontFamily: "var(--font-jakarta)" }}>Featured Case Study</p>
                    <p className="text-sm font-bold text-white">Dental 3D Viewer</p>
                  </div>
                  <span className="bg-[#4A90C4]/20 text-[#4A90C4] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#4A90C4]/30" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Qt / OpenGL · Windows
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM STATS ROW ── */}
        <div className="container-site w-full mt-10 md:mt-16 z-10">
          <div className="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>10+</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Years of Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-[#0D8F6F]" style={{ fontFamily: "var(--font-jakarta)" }}>95%</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Success Rate</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: "var(--font-jakarta)" }}>250+</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>Cases Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-[#4A90C4]" style={{ fontFamily: "var(--font-jakarta)" }}>100%</p>
              <p className="text-xs text-white/50 uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-jakarta)" }}>QA Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
