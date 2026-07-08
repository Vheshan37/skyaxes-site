"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

import { useLanguage } from "@/lib/context/LanguageContext";

const navLinks = [
  { href: "/services", labelJP: "サービス", labelEN: "Services" },
  { href: "/case-studies", labelJP: "事例", labelEN: "Case Studies" },
  { href: "/lineqc", labelJP: "LineQC", labelEN: "LineQC" },
  { href: "/company", labelJP: "会社概要", labelEN: "Company" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const sentinel = document.getElementById("header-scroll-sentinel");
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Close menu on route change
  useEffect(() => { closeMenu(); }, [pathname, closeMenu]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeMenu]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const LangToggle = () => (
    <div
      role="group"
      aria-label="言語切替 / Language toggle"
      className="flex items-center rounded-full overflow-hidden border border-[#E5E9EF] h-7"
      style={{ width: 72, background: "var(--color-surface)" }}
    >
      {(["JP", "EN"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className="flex-1 h-full text-xs font-semibold transition-colors duration-150 cursor-pointer"
          style={{
            background: lang === l ? "var(--color-navy)" : "transparent",
            color: lang === l ? "#ffffff" : "var(--color-muted)",
            fontFamily: "var(--font-jakarta)",
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );



  return (
    <>
      {/* Scroll sentinel — sits at the very top of the page */}
      <div id="header-scroll-sentinel" className="absolute top-0 left-0 w-1 h-1" aria-hidden="true" />

      {/* ── DESKTOP & TABLET HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-200"
        style={{
          borderColor: "var(--color-border)",
          boxShadow: scrolled ? "var(--shadow-header)" : "none",
        }}
      >
        <div
          className="container-site flex items-center gap-6"
          style={{ height: 76 }}
        >
          {/* Logo container */}
          <div className="flex-shrink-0 flex items-center lg:w-[240px]">
            <Link
              href="/"
              className="flex items-center"
              aria-label="SkyAxes ホーム"
            >
              <img
                src="https://www.skyaxes.jp/wp-content/themes/skyaxes/images/logo.png"
                alt="SkyAxes Logo"
                width="160"
                height="40"
                className="object-contain"
                style={{ maxHeight: 40, width: "auto" }}
              />
            </Link>
          </div>

          {/* Desktop nav links — hidden on mobile/tablet */}
          <nav
            className="hidden lg:flex items-center justify-center flex-grow"
            style={{ gap: 32 }}
            aria-label="メインナビゲーション"
          >
            {navLinks.map(({ href, labelJP, labelEN }) => (
              <Link
                key={href}
                href={href}
                className="relative text-sm font-medium transition-colors duration-150"
                style={{
                  color: isActive(href) ? "var(--color-accent)" : "var(--color-text)",
                  fontFamily: "var(--font-noto)",
                  fontSize: 15,
                  letterSpacing: "0.02em",
                  paddingBottom: 4,
                }}
              >
                {lang === "JP" ? labelJP : labelEN}
                {isActive(href) && (
                  <span
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: 2,
                      background: "var(--color-accent)",
                      borderRadius: 1,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side: lang + CTA */}
          <div className="hidden lg:flex items-center justify-end gap-4 lg:w-[240px] flex-shrink-0">
            <LangToggle />
            <Link href="/contact" className="btn-primary text-sm" style={{ padding: "10px 16px" }}>
              {lang === "JP" ? "お問い合わせ" : "Contact Us"}
            </Link>
          </div>

          {/* Legacy Tablet container for Lang + CTA when screen is md but not lg */}
          <div className="hidden md:flex lg:hidden items-center gap-4 ml-auto flex-shrink-0">
            <LangToggle />
            <Link href="/contact" className="btn-primary text-sm" style={{ padding: "10px 16px" }}>
              {lang === "JP" ? "お問い合わせ" : "Contact Us"}
            </Link>
          </div>

          {/* Mobile: lang toggle always visible, then hamburger */}
          <div className="flex items-center gap-3 ml-auto lg:hidden">
            <LangToggle />
            {/* Hamburger — tablet shows this too */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-overlay"
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
              className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer bg-transparent border-0 p-0"
            >
              <span
                className="block w-6 h-0.5 transition-all duration-200 origin-center"
                style={{
                  background: "var(--color-navy)",
                  transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-6 h-0.5 mt-1.5 transition-all duration-200"
                style={{
                  background: "var(--color-navy)",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 mt-1.5 transition-all duration-200 origin-center"
                style={{
                  background: "var(--color-navy)",
                  transform: menuOpen ? "translateY(-9px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN OVERLAY ── */}
      <div
        id="mobile-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="ナビゲーションメニュー"
        className="lg:hidden fixed inset-0 bg-white flex flex-col transition-all duration-200 ease-out"
        style={{
          zIndex: 48,
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          paddingTop: 88,
        }}
      >
        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-6 pt-8" aria-label="モバイルナビゲーション">
          {navLinks.map(({ href, labelJP, labelEN }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="flex flex-col justify-center border-b py-4 transition-colors duration-150"
              style={{
                minHeight: 56,
                borderColor: "var(--color-border)",
                paddingLeft: 0,
                color: isActive(href) ? "var(--color-accent)" : "var(--color-text)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-noto)",
                  fontSize: 17,
                  fontWeight: 500,
                }}
              >
                {lang === "JP" ? labelJP : labelEN}
              </span>
            </Link>
          ))}
        </nav>

        {/* Bottom CTA — sticky to bottom */}
        <div className="px-6 pb-8 pt-6">
          <div
            className="w-full"
            style={{ height: 1, background: "var(--color-border)", marginBottom: 24 }}
          />
          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn-primary w-full text-base"
            style={{ height: 48, fontSize: 16 }}
          >
            {lang === "JP" ? "お問い合わせ" : "Contact Us"}
          </Link>
        </div>
      </div>

      {/* Spacer so content doesn't go under fixed header */}
      <div style={{ height: 76 }} />
    </>
  );
}
