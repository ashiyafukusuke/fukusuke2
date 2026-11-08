import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";
import { posts, formatDate } from "@/data/blog";

const desc = "足つぼ専門店イタキモの読みもの。足つぼの歴史や反射区の扱い方、足の骨や筋肉のことを、確かさを分けながら書いています。";

export const metadata: Metadata = {
  title: "読みもの｜足つぼ専門店 イタキモ",
  description: desc,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "読みもの｜足つぼ専門店 イタキモ",
    description: desc,
    url: "https://www.itakimo.net/blog",
    siteName: "足つぼ専門店 イタキモ",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "https://www.itakimo.net/og-image.png", width: 1200, height: 630, alt: "足つぼ専門店 イタキモ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "読みもの｜足つぼ専門店 イタキモ",
    description: desc,
    images: ["https://www.itakimo.net/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="blog" />
        </div>
      </header>

      <section style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "56px 24px 64px" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Reading</p>
          <h1 style={{ margin: "0 0 36px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "0.1em" }}>読みもの</h1>
          <div style={{ borderTop: "1px solid #1a1a1a" }}>
            {posts.map((p) => (
              <article key={p.slug} style={{ padding: "28px 0", borderBottom: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#5c5c5c" }}>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </p>
                <h2 style={{ margin: "0 0 12px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "20px", letterSpacing: "0.06em", lineHeight: 1.6 }}>
                  <Link href={`/blog/${p.slug}`} style={{ color: "#1a1a1a", textDecoration: "none" }}>{p.title}</Link>
                </h2>
                <p style={{ margin: "0 0 4px", fontSize: "14px", color: "#3d3a34", lineHeight: 2.05 }}>{p.description}</p>
                <Link href={`/blog/${p.slug}`} className="lnk" style={{ color: "#9b321f", fontSize: "13px" }}><span>読む</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 40px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9 }}>
        <FooterNav />
        <p style={{ margin: 0 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
