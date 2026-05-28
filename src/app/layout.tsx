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
  title: "【足つぼ専門店 イタキモ】",
  description: "痛いのに、なぜか眠くなる。西東京市ひばりヶ丘の足つぼ・足揉み専門店「イタキモ」。ガチガチの疲れを底から引き剥がします。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans bg-paper text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
