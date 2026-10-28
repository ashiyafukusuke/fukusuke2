import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSans = Noto_Sans_JP({ 
  subsets: ["latin"], 
  weight: ["300","400","500","700","900"], 
  variable: "--font-noto-sans", 
  display: "swap" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itakimo.net"),
  title: "足つぼ専門店 イタキモ｜ひばりが丘",
  description: "西東京市ひばりが丘の足つぼ専門店「イタキモ」。じっくり、ゆっくり、奥深く。痛いけど気持ち良くて、帰り道は足が軽い足つぼ。初めての方も安心の「初回お試し制度」（60分・90分）あり。完全予約制・一人営業の専門店です。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "足つぼ専門店 イタキモ｜ひばりが丘",
    description: "西東京市ひばりが丘の足つぼ専門店「イタキモ」。じっくり、ゆっくり、奥深く。痛いけど気持ち良くて、帰り道は足が軽い足つぼ。初めての方も安心の「初回お試し制度」（60分・90分）あり。完全予約制・一人営業の専門店です。",
    url: "https://www.itakimo.net/",
    siteName: "足つぼ専門店 イタキモ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://www.itakimo.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "足つぼ専門店 イタキモ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "足つぼ専門店 イタキモ｜ひばりが丘",
    description: "西東京市ひばりが丘の足つぼ専門店「イタキモ」。じっくり、ゆっくり、奥深く。痛いけど気持ち良くて、帰り道は足が軽い足つぼ。初めての方も安心の「初回お試し制度」（60分・90分）あり。完全予約制・一人営業の専門店です。",
    images: ["https://www.itakimo.net/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSans.variable} font-sans bg-paper text-ink font-medium antialiased`}>
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
