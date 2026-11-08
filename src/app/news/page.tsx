import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";
import { news, formatDate } from "@/data/news";

const desc = "足つぼ専門店イタキモからのお知らせ。営業日の変更や、大会への出場など、お店のことをお伝えしています。";

export const metadata: Metadata = {
  title: "お知らせ｜足つぼ専門店 イタキモ",
  description: desc,
  alternates: { canonical: "/news" },
  openGraph: {
    title: "お知らせ｜足つぼ専門店 イタキモ",
    description: desc,
    url: "https://www.itakimo.net/news",
    siteName: "足つぼ専門店 イタキモ",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "https://www.itakimo.net/og-image.png", width: 1200, height: 630, alt: "足つぼ専門店 イタキモ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "お知らせ｜足つぼ専門店 イタキモ",
    description: desc,
    images: ["https://www.itakimo.net/og-image.png"],
  },
};

export default function NewsPage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="news" />
        </div>
      </header>

      <section style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "56px 24px 64px" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>News</p>
          <h1 style={{ margin: "0 0 36px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "0.1em" }}>お知らせ</h1>
          <div style={{ borderTop: "1px solid #1a1a1a" }}>
            {news.map((n) => (
              <article key={n.id} id={n.id} style={{ padding: "28px 0", borderBottom: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#5c5c5c" }}>
                  <time dateTime={n.date}>{formatDate(n.date)}</time>
                </p>
                <h2 style={{ margin: "0 0 12px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "20px", letterSpacing: "0.06em", lineHeight: 1.6 }}>{n.title}</h2>
                <p style={{ margin: 0, fontSize: "14px", color: "#3d3a34", lineHeight: 2.05, whiteSpace: "pre-line" }}>{n.body}</p>
              </article>
            ))}
          </div>
          <p style={{ margin: "24px 0 0", fontSize: "13px" }}>
            <Link href="/blog" className="lnk" style={{ color: "#9b321f" }}><span>「足を疑うはなし」を読む</span></Link>
          </p>
        </div>
      </section>

      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 40px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9 }}>
        <FooterNav />
        <p style={{ margin: 0 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
