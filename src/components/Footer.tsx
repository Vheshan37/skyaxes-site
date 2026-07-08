import Link from "next/link";

const footerNav = [
  {
    heading: "サービス / Services",
    links: [
      { href: "/services/offshore", label: "オフショア開発" },
      { href: "/services/3dvrar", label: "3D・VR・AR開発" },
      { href: "/services/iot", label: "IoT・製造システム" },
    ],
  },
  {
    heading: "実績 / Works",
    links: [
      { href: "/case-studies", label: "導入事例" },
      { href: "/case-studies/dental-3d-viewer", label: "歯科用3Dビューア" },
      { href: "/lineqc", label: "LineQC" },
    ],
  },
  {
    heading: "会社 / Company",
    links: [
      { href: "/company", label: "会社概要" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
];

export default function Footer() {
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
              日本人PMが導く、3D/VR・IoT・業務システムのオフショア開発パートナー
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
            <Link href="/contact" style={{ color: "rgba(255,255,255,0.4)" }}>お問い合わせ</Link>
            <Link href="/company" style={{ color: "rgba(255,255,255,0.4)" }}>会社概要</Link>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.4)" }}>プライバシーポリシー</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
