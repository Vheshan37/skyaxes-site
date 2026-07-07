import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "導入事例 / Case Studies",
  description: "SkyAxesの開発実績。歯科用3Dビューア・LineQC・AR研修など、3D/VR・IoT・業務システム領域の事例一覧。",
};

const cases = [
  {
    tag: "医療 / Healthcare",
    tagClass: "tag-clinical",
    metric: "< 50ms レイテンシ",
    metricColor: "var(--color-clinical)",
    titleJP: "歯科用3Dビューア導入事例",
    titleEN: "Dental 3D Viewer Implementation",
    desc: "歯科診療現場でのリアルタイム3Dスキャンデータ可視化。Qt/OpenGLによるWindowsデスクトップアプリ。",
    href: "/case-studies/dental-3d-viewer",
    featured: true,
  },
  {
    tag: "製造 / Manufacturing",
    tagClass: "tag-iot",
    metric: "ライン品質自動化",
    metricColor: "var(--color-green-iot)",
    titleJP: "製造ライン品質管理：LineQC",
    titleEN: "Manufacturing Line QC System",
    desc: "センサーデータをリアルタイム収集・可視化し、不良品検出を自動化。製造現場で稼働中。",
    href: "/lineqc",
    featured: false,
  },
  {
    tag: "産業 / Industrial",
    tagClass: "tag-navy",
    metric: "AR研修システム",
    metricColor: "var(--color-accent)",
    titleJP: "AR製造研修システム",
    titleEN: "AR Manufacturing Training",
    desc: "製造現場向けAR技術を活用した作業手順の可視化・研修支援システム。",
    href: "/case-studies",
    featured: false,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            Case Studies
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            導入事例
          </h1>
          <p style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520 }}>
            Real implementations across dental/medical, manufacturing IoT, and AR training sectors.
          </p>
        </div>
      </section>

      <section className="section-white" style={{ paddingBlock: 80 }}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map(({ tag, tagClass, metric, metricColor, titleJP, titleEN, desc, href, featured }) => (
              <FadeInSection key={titleJP}>
                <Link
                  href={href}
                  className="case-card-hover block rounded-xl border overflow-hidden h-full"
                  style={{
                    borderColor: featured ? "var(--color-clinical)" : "var(--color-border)",
                    background: "#ffffff",
                    textDecoration: "none",
                    borderWidth: featured ? 2 : 1,
                  }}
                >
                  {featured && (
                    <div style={{ height: 4, background: "var(--color-clinical)" }} />
                  )}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className={tagClass}>{tag}</span>
                      {featured && (
                        <span
                          className="text-xs font-semibold px-2 py-1 rounded"
                          style={{ background: "var(--color-clinical-light)", color: "var(--color-clinical)", fontFamily: "var(--font-jakarta)" }}
                        >
                          Featured
                        </span>
                      )}
                    </div>

                    <div
                      className="text-lg font-bold mb-4"
                      style={{ color: metricColor, fontFamily: "var(--font-jakarta)" }}
                    >
                      {metric}
                    </div>

                    <h2
                      className="font-bold mb-1"
                      style={{ fontSize: 17, color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
                    >
                      {titleJP}
                    </h2>
                    <p className="text-xs mb-3" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                      {titleEN}
                    </p>
                    <p style={{ fontSize: 13, color: "var(--color-text)", lineHeight: 1.75, fontFamily: "var(--font-noto)" }}>
                      {desc}
                    </p>

                    <p
                      className="mt-5 text-sm font-semibold"
                      style={{ color: metricColor, fontFamily: "var(--font-jakarta)" }}
                    >
                      事例を見る&nbsp;→
                    </p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
