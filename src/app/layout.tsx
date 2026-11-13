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
  verification: { google: "1SoLbcK8fyjkemeqImgNI5lY7K1jQrcM9a2zGZ0NXEw" },
  title: "足つぼ専門店 イタキモ｜ひばりが丘",
  description: "西東京市ひばりが丘の足つぼ専門店「イタキモ」。痛いのに、気持ちいい。帰り道は、足が軽い。台湾式をベースに、足裏から膝裏まで深く、ゆっくり揉む完全予約制の一人店です。強さはいつでも調整できます。初めての方は「左足トライアル」（60分・90分）で、合わなければお代は頂きません。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "足つぼ専門店 イタキモ｜ひばりが丘",
    description: "西東京市ひばりが丘の足つぼ専門店「イタキモ」。痛いのに、気持ちいい。帰り道は、足が軽い。台湾式をベースに、足裏から膝裏まで深く、ゆっくり揉む完全予約制の一人店です。強さはいつでも調整できます。初めての方は「左足トライアル」（60分・90分）で、合わなければお代は頂きません。",
    url: "https://www.itakimo.net/",
    siteName: "足つぼ専門店 イタキモ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://www.itakimo.net/og-image.png?v=4",
        width: 1200,
        height: 630,
        alt: "足つぼ専門店 イタキモ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "足つぼ専門店 イタキモ｜ひばりが丘",
    description: "西東京市ひばりが丘の足つぼ専門店「イタキモ」。痛いのに、気持ちいい。帰り道は、足が軽い。台湾式をベースに、足裏から膝裏まで深く、ゆっくり揉む完全予約制の一人店です。強さはいつでも調整できます。初めての方は「左足トライアル」（60分・90分）で、合わなければお代は頂きません。",
    images: ["https://www.itakimo.net/og-image.png?v=4"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Noto+Sans+JP:wght@400;500;700&family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSans.variable} font-sans bg-[#fefdfa] text-[#1a1a1a] antialiased`}>
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
        {/* 予約・問い合わせリンクのクリックを計測 */}
        <Script
          id="gtag-click-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function (e) {
                var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
                if (!a || typeof window.gtag !== 'function') return;
                var href = a.getAttribute('href') || '';
                var name = null;
                if (href.indexOf('stores.jp/reserve') !== -1 && href.indexOf('/contact') === -1 && href.indexOf('/reviews') === -1) name = 'reserve_click';
                else if (href.indexOf('mailto:') === 0 || href.indexOf('/contact') !== -1 || href.indexOf('instagram.com') !== -1) name = 'contact_click';
                if (!name) return;
                var area = a.closest('header') ? 'header' : a.closest('footer') ? 'footer' : (a.closest('section[id]') ? a.closest('section[id]').id : (a.closest('section') ? 'section' : 'other'));
                window.gtag('event', name, {
                  link_text: (a.innerText || '').trim().slice(0, 40),
                  link_area: area,
                  link_url: href,
                  transport_type: 'beacon'
                });
              }, true);
            `,
          }}
        />
      </body>
    </html>
  );
}
