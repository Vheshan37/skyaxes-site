"use client";

import React from "react";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

export default function FeaturedCaseStudy() {
  const { lang } = useLanguage();
  const th = t.home;

  return (
    <section
      className="section-white"
      style={{ paddingBlock: 112 }}
      aria-labelledby="case-study-heading"
    >
      <FadeInSection>
        <div className="container-site">
          <div className="section-header">
            <p className="section-eyebrow">{th.caseStudiesSection.eyebrow[lang]}</p>
            <h2 id="case-study-heading" className="section-title">
              {th.caseStudiesSection.title[lang]}
            </h2>
            <p className="section-sub">
              {th.caseStudiesSection.sub[lang]}
            </p>
          </div>

          <div className="editorial-case-study">
            {/* Image panel */}
            <div className="editorial-case-img-wrap">
              <img
                src="/images/dental-screenshots.jpg"
                alt="Dental 3D Viewer application screenshot — SkyAxes flagship project"
                className="w-full h-full object-cover block"
              />
            </div>

            {/* Content panel */}
            <div className="editorial-case-content">
              <div className="case-accent-bar" style={{ background: "var(--color-clinical)" }} />

              <h3 className="case-title">
                {th.caseStudiesSection.dentalTitle[lang]}
              </h3>

              <p className="case-desc">
                {th.caseStudiesSection.dentalDesc[lang]}
              </p>

              <div className="editorial-metrics-row">
                <div className="editorial-metric-item">
                  <span
                    className="editorial-metric-num"
                    style={{ color: "var(--color-clinical)" }}
                  >
                    &lt;50ms
                  </span>
                  <span className="editorial-metric-lbl">Latency</span>
                </div>
                <div className="editorial-metric-item">
                  <span
                    className="editorial-metric-num"
                    style={{ color: "var(--color-clinical)" }}
                  >
                    Qt/OpenGL
                  </span>
                  <span className="editorial-metric-lbl">Stack</span>
                </div>
                <div className="editorial-metric-item">
                  <span
                    className="editorial-metric-num"
                    style={{ color: "var(--color-clinical)" }}
                  >
                    Windows
                  </span>
                  <span className="editorial-metric-lbl">OS</span>
                </div>
              </div>

              <div className="case-ctas flex gap-2 items-center">
                <Link
                  href="/case-studies/dental-3d-viewer"
                  className="btn-primary"
                  id="case-study-cta-dental"
                >
                  {th.caseStudiesSection.viewCase[lang]}
                </Link>
                <Link
                  href="/case-studies"
                  className="case-all-link"
                >
                  All case studies →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
