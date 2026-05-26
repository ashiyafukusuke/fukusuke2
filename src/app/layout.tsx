import type { Metadata } from "next";
import { Noto_Sans_JP, Urbanist } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"], weight: ["300","400","500","700"], variable: "--font-noto", display: "swap" });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["300","400","500","600","700","800","900"], variable: "--font-urbanist", display: "swap" });

export const metadata: Metadata = {
  title: "Re:boot — Neural Reset & Foot Reflexology | ひばりヶ丘",
  description: "足裏から脳をスイッチ。自律神経系を一度シャットダウンし、本来のニュートラルな状態へ。ひばりヶ丘の足つぼ・足揉み専門店。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${noto.variable} ${urbanist.variable} font-sans`}>{children}</body>
    </html>
  );
}
