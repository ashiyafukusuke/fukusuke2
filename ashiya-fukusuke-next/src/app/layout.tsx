import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-sans-jp" });

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
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
