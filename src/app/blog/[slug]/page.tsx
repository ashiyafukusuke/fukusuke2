import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";
import { posts, getPost, formatDate } from "@/data/blog";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const title = `${post.title}｜足つぼ専門店 イタキモ`;
  return {
    title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description: post.description,
      url: `https://www.itakimo.net/blog/${post.slug}`,
      siteName: "足つぼ専門店 イタキモ",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "https://www.itakimo.net/og-image.png", width: 1200, height: 630, alt: "足つぼ専門店 イタキモ" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: ["https://www.itakimo.net/og-image.png"],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

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

      <article style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px 64px" }}>
        <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", color: "#5c5c5c" }}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
        <h1 style={{ margin: "0 0 36px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(25px, 3.6vw, 34px)", letterSpacing: "0.08em", lineHeight: 1.6 }}>{post.title}</h1>

        {post.blocks.map((b, i) => {
          if (b.t === "h2") {
            return <h2 key={i} style={{ margin: "44px 0 14px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "20px", letterSpacing: "0.06em", lineHeight: 1.6 }}>{b.text}</h2>;
          }
          if (b.t === "ul") {
            return (
              <ul key={i} style={{ margin: "0 0 18px", paddingLeft: "1.4em", fontSize: "15px", lineHeight: 2.1 }}>
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            );
          }
          if (b.t === "shelves") {
            return (
              <dl key={i} style={{ margin: "0 0 24px", borderTop: "1px solid #1a1a1a" }}>
                {b.rows.map((r) => (
                  <div key={r.label} style={{ padding: "14px 0", borderBottom: "1px solid #ebe9e4" }}>
                    <dt style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>{r.label}</dt>
                    <dd style={{ margin: 0, fontSize: "14px", color: "#3d3a34", lineHeight: 2 }}>{r.text}</dd>
                  </div>
                ))}
              </dl>
            );
          }
          return <p key={i} style={{ margin: "0 0 18px", fontSize: "15px", lineHeight: 2.1 }}>{b.text}</p>;
        })}

        <section style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #ebe9e4" }}>
          <h2 style={{ margin: "0 0 10px", fontSize: "13px", fontWeight: 500, color: "#3d3a34" }}>出典</h2>
          <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9, overflowWrap: "anywhere" }}>
            {post.sources.map((s) => (
              <li key={s.url}><a href={s.url} rel="noopener noreferrer" target="_blank" style={{ color: "#5c5c5c" }}>{s.title}</a></li>
            ))}
          </ul>
        </section>

        <p style={{ margin: "32px 0 0", fontSize: "13px" }}>
          <Link href="/blog" className="lnk" style={{ color: "#9b321f" }}><span>記事の一覧へ</span></Link>
        </p>
      </article>

      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 40px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9 }}>
        <FooterNav />
        <p style={{ margin: 0 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
