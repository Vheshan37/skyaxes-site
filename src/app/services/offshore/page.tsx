import type { Metadata } from "next";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";

export const metadata: Metadata = {
  title: "オフショア開発サービス / Offshore Development",
  description:
    "日本人PMによるオフショア開発。要件定義・設計・品質管理を日本側で一括対応。製造・歯科医療・業務システム領域に強み。",
};

const strengths = [
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
    jp: "要件定義・仕様書作成", en: "Requirements & Specification",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
    jp: "UI/UXデザイン", en: "UI/UX Design",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
    jp: "オフショアチーム管理", en: "Offshore Team Management",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>,
    jp: "テスト・品質保証", en: "Testing & QA",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>,
    jp: "検収サポート", en: "Acceptance Support",
  },
  {
    svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" /></svg>,
    jp: "運用・保守", en: "Operation & Maintenance",
  },
];

const faq = [
  {
    q: "オフショア開発の最小プロジェクト規模はどれくらいですか？",
    a: "おおよそ300万円以上のプロジェクトを対象としています。規模や要件によりご相談ください。",
  },
  {
    q: "コミュニケーションはどのように行いますか？",
    a: "クライアント様とのやり取りは日本語で行います。オフショアチームへの英語・現地語対応は弊社が担います。",
  },
  {
    q: "どのような技術スタックに対応していますか？",
    a: "Webアプリケーション、Windowsデスクトップ（Qt/C++等）、IoT、3D/VR/ARなど幅広く対応可能です。",
  },
  {
    q: "「安いオフショア」とは何が違いますか？",
    a: "価格競争ではなく、日本側PMによる要件管理とコミュニケーション品質を強みとしています。開発費はリーズナブルですが、最安値ではありません。",
  },
];

export default function OffshorePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <span className="tag-navy mb-5 inline-block">オフショア開発</span>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            日本人PMが導く<br />オフショア開発サービス
          </h1>
          <p
            className="mb-8"
            style={{ fontSize: 16, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 560, lineHeight: 1.75 }}
          >
            Japan-side PM-led offshore development partner — Japan-side PM manages requirements,
            design, and quality while offshore teams focus on execution.
          </p>
          <Link href="/contact" className="btn-primary">開発についてご相談する</Link>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
              >
                こんな企業様へ
              </h2>
              <ul className="space-y-4">
                {[
                  "製造業・医療機器メーカーで独自ソフトウェアが必要",
                  "開発コストを抑えたいが品質は妥協できない",
                  "社内にエンジニアがいないが、要件はある",
                  "過去にオフショア開発で失敗した経験がある",
                  "日本語でPMとコミュニケーションしたい",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white"
                      style={{ background: "var(--color-accent)" }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: 15, fontFamily: "var(--font-noto)", color: "var(--color-text)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery model */}
            <div
              className="p-8 rounded-xl"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <h3
                className="font-bold mb-6"
                style={{ fontSize: 20, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
              >
                デリバリーモデル
              </h3>
              <div className="space-y-4">
                {[
                  { label: "クライアント", sub: "You", arrow: false, highlight: false },
                  { label: "↕ 日本語コミュニケーション", sub: "", arrow: true, highlight: false },
                  { label: "SkyAxes Japan PM", sub: "Requirements · Design · QA", arrow: false, highlight: true },
                  { label: "↕ 英語・現地語管理", sub: "", arrow: true, highlight: false },
                  { label: "オフショア開発チーム", sub: "Offshore Dev Team", arrow: false, highlight: false },
                ].map(({ label, sub, arrow, highlight }) => (
                  <div
                    key={label}
                    className={`${arrow ? "text-center text-lg" : "p-4 rounded-lg"}`}
                    style={
                      arrow
                        ? { color: "var(--color-muted)" }
                        : highlight
                        ? { background: "var(--color-navy)", color: "#ffffff", borderRadius: 8 }
                        : { background: "#ffffff", border: "1px solid var(--color-border)", borderRadius: 8 }
                    }
                  >
                    {!arrow && (
                      <>
                        <p
                          className="font-semibold"
                          style={{
                            fontFamily: "var(--font-noto)",
                            color: highlight ? "#ffffff" : "var(--color-navy)",
                          }}
                        >
                          {label}
                        </p>
                        {sub && (
                          <p
                            className="text-xs mt-1"
                            style={{
                              fontFamily: "var(--font-jakarta)",
                              color: highlight ? "rgba(255,255,255,0.7)" : "var(--color-muted)",
                            }}
                          >
                            {sub}
                          </p>
                        )}
                      </>
                    )}
                    {arrow && label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Strengths */}
      <section className="section-surface" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <h2
              className="font-bold mb-12 text-center"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              対応サービス範囲
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {strengths.map(({ svg, jp, en }) => (
                <div
                  key={jp}
                  className="p-6 rounded-xl text-center"
                  style={{ background: "#ffffff", border: "1px solid var(--color-border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(46,117,182,0.10)", color: "var(--color-accent)" }}
                  >
                    {svg}
                  </div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}>
                    {jp}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
                    {en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* FAQ */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site max-w-3xl mx-auto">
            <h2
              className="font-bold mb-10"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              よくある質問&nbsp;<span style={{ fontFamily: "var(--font-jakarta)", fontSize: 18, fontWeight: 400, color: "var(--color-muted)" }}>FAQ</span>
            </h2>
            <div className="space-y-0">
              {faq.map(({ q, a }, i) => (
                <div
                  key={i}
                  className="py-6"
                  style={{ borderTop: i === 0 ? "1px solid var(--color-border)" : undefined, borderBottom: "1px solid var(--color-border)" }}
                >
                  <p
                    className="font-semibold mb-3"
                    style={{ fontSize: 15, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                  >
                    Q. {q}
                  </p>
                  <p style={{ fontSize: 14, color: "var(--color-text)", lineHeight: 1.8, fontFamily: "var(--font-noto)" }}>
                    A. {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site text-center">
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
          >
            開発のご相談はこちら
          </h2>
          <Link href="/contact" className="btn-primary">お問い合わせ</Link>
        </div>
      </section>
    </>
  );
}
