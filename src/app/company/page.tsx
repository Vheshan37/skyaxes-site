"use client";

import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import { useLanguage } from "@/lib/context/LanguageContext";
import { t } from "@/lib/data/language";

export default function CompanyPage() {
  const { lang } = useLanguage();

  // Updated bilingual company profile data from official source
  const companyInfo = [
    {
      label: "社名",
      labelEN: "Company Name",
      valJP: "スカイアクシーズ株式会社",
      valEN: "SkyAxes Company Limited",
    },
    {
      label: "英文表記",
      labelEN: "English Name",
      valJP: "SkyAxes Company Limited",
      valEN: "SkyAxes Company Limited",
    },
    {
      label: "所在地",
      labelEN: "Location",
      valJP: "［本　　　社］ 〒232-0023 横浜市南区白妙町3-36-206\n［横浜営業所］ 〒231-0015 横浜市中区尾上町5-80 神奈川中小企業センタービル7階",
      valEN: "[Headquarters] 3-36-206 Hiramyo-cho, Minami-ku, Yokohama, 232-0023 Japan\n[Yokohama Office] 7F Kanagawa Small and Medium Enterprises Center Building, 5-80 Onoe-cho, Naka-ku, Yokohama, 231-0015 Japan",
    },
    {
      label: "TEL",
      labelEN: "TEL",
      valJP: "090-5441-1033",
      valEN: "+81-90-5441-1033",
    },
    {
      label: "役員",
      labelEN: "Executive Officers",
      valJP: "代表取締役：関塚 亨\n取締役：木村 聡太",
      valEN: "Representative Director: Toru Sekizuka\nDirector: Sota Kimura",
    },
    {
      label: "法人番号",
      labelEN: "Corporate Number",
      valJP: "1020001125363",
      valEN: "1020001125363",
      link: "https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=1020001125363",
    },
    {
      label: "適格請求書発行登録番号",
      labelEN: "Invoice Registration No.",
      valJP: "T1020001125363",
      valEN: "T1020001125363",
      link: "https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1020001125363",
    },
    {
      label: "資本金",
      labelEN: "Capital",
      valJP: "4,500,000円",
      valEN: "4,500,000 JPY",
    },
    {
      label: "設立",
      labelEN: "Founded",
      valJP: "2018年3月1日",
      valEN: "March 1, 2018",
    },
    {
      label: "事業内容",
      labelEN: "Business Description",
      valJP: "モノづくり企業のIoT活用を促進するためのIoT・AR/VR関連コンサルティング、システム開発、パッケージソフトウエアの開発・販売\n\n(1) コンサルティング、システム開発\nオフィス・工場向けIoTプラットフォームとAR活用によるIoTソリューション提供\n工場作業トレーニングのAR(拡張現実)ソリューション提供\n\n(2) パッケージソフトウエアの開発・販売\n量産工場向け品質管理システム「LineQC」",
      valEN: "Consulting, system development, and package software sales to promote IoT utilization for manufacturing companies.\n\n(1) Consulting & System Development:\n- IoT platform solutions utilizing AR for offices and factories\n- AR (Augmented Reality) training solutions for factory operations\n\n(2) Package Software Development & Sales:\n- Production quality control system 'LineQC' for mass production factories",
    },
    {
      label: "取引金融機関",
      labelEN: "Main Banks",
      valJP: "横浜銀行 阪東橋支店、楽天銀行、川崎信用金庫 大倉山支店",
      valEN: "The Bank of Yokohama (Bandobashi Branch), Rakuten Bank, Kawasaki Shinkin Bank (Okurayama Branch)",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-surface" style={{ paddingBlock: 72 }}>
        <div className="container-site">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", letterSpacing: "0.08em" }}
          >
            {t.company.hero.eyebrow[lang]}
          </p>
          <h1
            className="font-bold mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 40px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
          >
            {t.company.hero.title[lang]}
          </h1>
          <p
            style={{ fontSize: 15, color: "var(--color-muted)", fontFamily: "var(--font-jakarta)", maxWidth: 520 }}
          >
            {t.company.hero.sub[lang]}
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site max-w-4xl">
            <h2
              className="font-bold mb-6 text-center"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
            >
              {lang === 'JP' ? '企業理念' : 'Corporate Philosophy'}
            </h2>
            <div
              className="p-8 rounded-2xl text-center"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <h3
                className="font-bold mb-4 text-xl"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-noto)" }}
              >
                {lang === 'JP' ? '未来に向けて踏み出す企業を支援します' : 'Supporting companies stepping into the future'}
              </h3>
              <p
                className="text-muted leading-relaxed"
                style={{ fontSize: 16, fontFamily: "var(--font-noto)", margin: 0 }}
              >
                {lang === 'JP'
                  ? 'スカイアクシーズは、IoT・AR/VRやAIなどの技術を活用し、予測を可視化することで、未来に向けて踏み出す企業を支援します。'
                  : 'SkyAxes supports forward-thinking companies by leveraging technologies such as IoT, AR/VR, and AI to visualize predictions.'}
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Company Profile Details */}
      <section className="section-surface" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site">
            <h2
              className="font-bold mb-10"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
            >
              {lang === 'JP' ? (
                <>会社概要&nbsp;<span style={{ fontFamily: "var(--font-jakarta)", fontSize: 18, fontWeight: 400, color: "var(--color-muted)" }}>Company Profile</span></>
              ) : (
                'Company Profile'
              )}
            </h2>

            <div
              className="rounded-xl overflow-hidden shadow-sm"
              style={{ border: "1px solid var(--color-border)" }}
            >
              {companyInfo.map((info, i) => (
                <div
                  key={info.label}
                  className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-0"
                  style={{ borderBottom: i < companyInfo.length - 1 ? "1px solid var(--color-border)" : "none" }}
                >
                  {/* Left Label */}
                  <div
                    className="px-6 py-5 flex flex-col justify-center"
                    style={{ background: "var(--color-surface)", borderRight: "1px solid var(--color-border)" }}
                  >
                    <span
                      className="font-bold text-[14px]"
                      style={{ color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
                    >
                      {lang === 'JP' ? info.label : info.labelEN}
                    </span>
                    {lang === 'JP' && (
                      <span
                        className="text-xs mt-0.5"
                        style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}
                      >
                        {info.labelEN}
                      </span>
                    )}
                  </div>

                  {/* Right Value */}
                  <div
                    className="px-8 py-5 flex items-center"
                    style={{ background: "#ffffff" }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline font-medium text-sm"
                        style={{ color: "var(--color-accent)", fontFamily: "var(--font-jakarta)" }}
                      >
                        {lang === 'JP' ? info.valJP : info.valEN}
                      </a>
                    ) : (
                      <span
                        className="text-[14px]"
                        style={{
                          color: "var(--color-text)",
                          fontFamily: lang === 'JP' ? "var(--font-noto)" : "var(--font-jakarta)",
                          lineHeight: 1.8,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {lang === 'JP' ? info.valJP : info.valEN}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Access Maps */}
      <section className="section-white" style={{ paddingBlock: 80 }}>
        <FadeInSection>
          <div className="container-site max-w-4xl">
            <h2
              className="font-bold mb-6 text-center"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)", color: "var(--color-navy)", fontFamily: "var(--font-noto)", lineHeight: 1.4 }}
            >
              {lang === 'JP' ? 'アクセス' : 'Office Access'}
            </h2>
            <div
              className="p-6 rounded-2xl border"
              style={{ borderColor: "var(--color-border)", background: "#ffffff" }}
            >
              <h3 className="text-lg font-bold text-navy mb-2" style={{ fontFamily: "var(--font-noto)" }}>
                {lang === 'JP' ? '横浜営業所' : 'Yokohama Office'}
              </h3>
              <p className="text-sm text-muted mb-6" style={{ fontFamily: "var(--font-noto)" }}>
                {lang === 'JP'
                  ? '〒231-0015 横浜市中区尾上町5-80 神奈川中小企業センタービル7階'
                  : '7F Kanagawa Small and Medium Enterprises Center Building, 5-80 Onoe-cho, Naka-ku, Yokohama, 231-0015 Japan'}
              </p>

              {/* Map Iframe */}
              <div className="rounded-xl overflow-hidden border w-full aspect-video min-h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.3142766633746!2d139.6310772757774!3d35.44701317266367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf5b5f28b0b%3A0xe4d5016fbd1623e8!2z44CSMjMxLTAwMTUg56We5aWI5bed55yM5qiq5rWc5biC5Lit5Yy65bC-5LiK55S677yV5LiB55uu77yY77yQIOelnuWliOW3neS4reWwj-S8gealreOCu-ODs-OCv-ODvOODk-ODqyA36ZqO!5e0!3m2!1sja!2sjp!4v1691565866316!5m2!1sja!2sjp"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={lang === 'JP' ? 'アクセスマップ' : 'Access Map'}
                />
              </div>
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
            {lang === 'JP' ? '開発のご相談・お問い合わせ' : 'Development Inquiry'}
          </h2>
          <Link href="/contact" className="btn-primary">
            {lang === 'JP' ? 'お問い合わせ\u00a0/\u00a0Contact' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </>
  );
}
