import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({ 
  subsets: ["latin"], 
  weight: ["300","400","500","700"], 
  variable: "--font-noto-sans", 
  display: "swap" 
});

const notoSerif = Noto_Serif_JP({ 
  subsets: ["latin"], 
  weight: ["400","700"], 
  variable: "--font-noto-serif", 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "足つぼ専門店 イタキモ",
  description: "痛いのに、意識が溶けていく。西東京市ひばりが丘の足つぼ専門店「イタキモ」。台湾式×神経生理学で届ける、根拠のある足つぼ。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans bg-bg text-ink font-medium antialiased`}>
        {children}
      </body>
    </html>
  );
}
