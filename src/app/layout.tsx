import type { Metadata } from "next";
import { Noto_Sans_JP, Urbanist } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Re:boot — 足裏から脳をスイッチ。ひばりヶ丘のフットリフレクソロジー",
  description:
    "細胞が身構えない、絶妙な痛気持ちよさ。張り詰めていたスイッチをそっとオフにして、心と身体をまっさらに。Re:boot（リブート）は、ひばりヶ丘のフットリフレクソロジーサロンです。",
  keywords: ["足裏", "フットリフレクソロジー", "ひばりヶ丘", "Re:boot", "リブート", "自律神経", "まどろみ"],
  openGraph: {
    title: "Re:boot — 足裏から脳をスイッチ。",
    description: "足裏から脳をスイッチ。心地よいまどろみののち、本来のニュートラルな状態へ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} ${urbanist.variable}`}>
        {children}
      </body>
    </html>
  );
}
