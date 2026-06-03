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
  description: "痛いのに、意識が溶けていく。西東京市ひばりが丘の足つぼ専門店「イタキモ」。台湾式×神経の働きで届ける、根拠のある足つぼ。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="data:image/png;base64,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" />
      </head>
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans bg-bg text-ink font-medium antialiased`}>
        {children}
      </body>
    </html>
  );
}
