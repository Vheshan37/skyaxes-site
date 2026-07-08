import type { Metadata } from "next";
import {
  Noto_Sans_JP,
  Plus_Jakarta_Sans,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-code",
  display: "swap",
});

import { LanguageProvider } from "@/lib/context/LanguageContext";

export const metadata: Metadata = {
  title: {
    template: "%s | SkyAxes — オフショア開発パートナー",
    default: "SkyAxes — 日本人PMが導く3D/VR・IoT・業務システムのオフショア開発",
  },
  description:
    "Japan-side PM-led offshore development for 3D/VR, IoT, and business systems. Realistic development costs, disciplined delivery. Manufacturing and dental/medical sectors.",
  keywords: [
    "オフショア開発",
    "3D開発",
    "VR開発",
    "IoT",
    "業務システム",
    "SkyAxes",
    "skyaxes.jp",
  ],
  openGraph: {
    siteName: "SkyAxes",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${plusJakarta.variable} ${sourceCode.variable}`}
    >
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
