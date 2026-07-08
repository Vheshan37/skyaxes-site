"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

export default function Footer() {
  const { lang } = useLanguage();
  const tf = t.footer;

  const footerNav = [
    {
      heading: tf.servicesHeading[lang],
      links: [
        { href: "/services/offshore", label: tf.offshore[lang] },
        { href: "/services/3dvrar", label: tf.vr[lang] },
        { href: "/services/iot", label: tf.iot[lang] },
      ],
    },
    {
      heading: tf.worksHeading[lang],
      links: [
        { href: "/case-studies", label: tf.caseStudies[lang] },
        { href: "/case-studies/dental-3d-viewer", label: tf.dental[lang] },
        { href: "/lineqc", label: tf.lineqc[lang] },
      ],
    },
    {
      heading: tf.companyHeading[lang],
      links: [
        { href: "/company", label: tf.about[lang] },
        { href: "/contact", label: tf.contact[lang] },
      ],
    },
  ];

  return (
    <footer
      style={{ background: "var(--color-navy)", color: "#ffffff" }}
      aria-label="サイトフッター"
    >
      <div className="footer-watermark">SKYAXES</div>
      <div className="container-site py-16" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight block mb-4"
              style={{ fontFamily: "var(--font-jakarta)", color: "#ffffff" }}
            >
              Sky<span style={{ color: "var(--color-clinical)" }}>Axes</span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-noto)", maxWidth: 260 }}
            >
              {tf.desc[lang]}
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-jakarta)" }}
            >
              Japan-side PM-led offshore development for technical software
            </p>
          </div>

          {/* Nav columns */}
          {footerNav.map(({ heading, links }) => (
            <div key={heading}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.1em" }}
              >
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="footer-link text-sm"
                      style={{ fontFamily: "var(--font-noto)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "var(--font-jakarta)",
          }}
        >
          <p>© {new Date().getFullYear()} SkyAxes Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-noto)" }}>
              {tf.contact[lang]}
            </Link>
            <Link href="/company" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-noto)" }}>
              {tf.about[lang]}
            </Link>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-noto)" }}>
              {tf.privacy[lang]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
