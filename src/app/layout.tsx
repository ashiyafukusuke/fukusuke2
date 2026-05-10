import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"], 
  variable: "--font-zen-maru-gothic" 
});

export const metadata: Metadata = {
  title: "足から意識をふっと溶かす、痛気持ちいい刺激。それが、足屋「福助」です。",
  description: "足屋「福助」で過ごす時間は、現代社会で知らず知らずのうちに着込んでしまった見えない鎧を剥がして本来の身軽さを取り戻す時間です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${zenMaruGothic.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
