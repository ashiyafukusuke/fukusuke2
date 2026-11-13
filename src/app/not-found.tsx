import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";

export const metadata: Metadata = {
  title: "ページが見つかりません｜足つぼ専門店 イタキモ",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em", minHeight: "100vh" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="top" />
        </div>
      </header>

      <section style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto", padding: "56px 24px 64px" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Not Found</p>
          <h1 style={{ margin: "0 0 20px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3.6vw, 32px)", letterSpacing: "0.1em" }}>ページが見つかりません</h1>
          <p style={{ margin: "0 0 28px", fontSize: "14px", color: "#3d3a34", lineHeight: 2.05 }}>
            サイトを新しくしたため、以前のページの住所が変わっています。
            <br />
            メニュー・料金やご予約は、トップページからご覧ください。
          </p>
          <p style={{ margin: 0, fontSize: "14px" }}>
            <Link href="/" className="lnk" style={{ color: "#9b321f" }}><span>トップページへ</span></Link>
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
