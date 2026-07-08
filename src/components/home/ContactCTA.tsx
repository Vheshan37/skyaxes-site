"use client";

import React from "react";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";

export default function ContactCTA() {
  const { lang } = useLanguage();

  return (
    <section
      className="section-navy"
      style={{ paddingBlock: 96 }}
      aria-labelledby="cta-heading"
    >
      <FadeInSection>
        <div className="container-site cta-inner">
          <p className="cta-eyebrow">{lang === "JP" ? "お問い合わせ" : "Get in touch"}</p>
          <h2 id="cta-heading" className="cta-heading">
            {lang === "JP" ? (
              <>オフショア開発の<br />ご相談はこちら</>
            ) : (
              <>Discuss an Offshore<br />Development Project</>
            )}
          </h2>
          <p className="cta-sub">
            {lang === "JP"
              ? "開発要件がお決まりのプロジェクトについて、2営業日以内にご返信いたします。"
              : "We respond to qualified project inquiries within 2 business days."}
          </p>

          {/* Anti-sales notice */}
          <div className="cta-notice" role="note">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
              <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span>
              {lang === "JP" ? (
                <>
                  <strong>開発案件の相談専用窓口です。</strong> 本フォームはシステム開発、オフショア開発、3D/VR/AR、IoT開発の相談のみを受け付けています。営業、紹介、勧誘、広告掲載、Web制作アライアンス等の提案には返信いたしません。
                </>
              ) : (
                <>
                  <strong>Development consultations only.</strong> This form is for system, offshore,
                  3D/VR/AR and IoT development inquiries. Sales pitches, recruiting, advertising,
                  SEO offers and web-production proposals will not receive a reply.
                </>
              )}
            </span>
          </div>

          <div className="cta-buttons">
            <Link
              href="/contact"
              className="cta-btn-primary"
              id="final-cta-contact"
            >
              {lang === "JP" ? "ご相談フォームへ →" : "Start a Consultation →"}
            </Link>
            <Link
              href="/services/offshore"
              className="cta-btn-ghost"
              id="final-cta-services"
            >
              {lang === "JP" ? "オフショア開発サービスについて" : "Learn about Offshore Development"}
            </Link>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
