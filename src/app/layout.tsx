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
  title: "【守破離 -SHUHARI- 】足つぼ・足揉み専門店",
  description: "現代社会で着込んでしまった「見えない鎧」を優しく剥がし、自覚すらなかった緊張や疲れをまるごと鎮める。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans bg-offwhite text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
