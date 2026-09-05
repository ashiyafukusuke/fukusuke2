import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSans = Noto_Sans_JP({ 
  subsets: ["latin"], 
  weight: ["300","400","500","700","900"], 
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
  title: "足つぼ専門店 イタキモ｜ひばりが丘",
  description: "西東京市ひばりが丘の足つぼ専門店「イタキモ」。最初から最後までイタ気持ちいいが続き、帰り道は足が軽い。初めての方も安心の「初回お試し制度」あり。完全予約制・一人営業の専門店です。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
      </head>
      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans bg-bg text-ink font-medium antialiased`}>
        {children}

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HHQGT4N5TQ"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HHQGT4N5TQ');
            `,
          }}
        />
      </body>
    </html>
  );
}
