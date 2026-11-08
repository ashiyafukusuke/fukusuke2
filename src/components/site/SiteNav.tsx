import Link from "next/link";
import type { CSSProperties } from "react";

const STORES = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011";

type Current = "top" | "first" | "stance" | "news" | "blog";

const items: { label: string; href: string; key?: Current }[] = [
  { label: "メニュー・料金", href: "/#menu" },
  { label: "初めての方へ", href: "/first", key: "first" },
  { label: "イタキモの考え方", href: "/stance", key: "stance" },
  { label: "営業日・アクセス", href: "/first#access" },
];

export function SiteNav({ current }: { current: Current }) {
  return (
    <nav className="gnav" aria-label="メイン">
      <span className="gnav-links">
        {items.map((it) => (
          <Link key={it.label} href={it.href} aria-current={it.key === current ? "page" : undefined}>
            {it.label}
          </Link>
        ))}
      </span>
      <details className="spnav">
        <summary>
          メニュー
          <svg width="12" height="12" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="#1a1a1a" strokeWidth="1.4"></path></svg>
        </summary>
        <div className="spnav-panel">
          <Link href="/">トップ</Link>
          {items.map((it) => (
            <Link key={it.label} href={it.href} aria-current={it.key === current ? "page" : undefined}>
              {it.label}
            </Link>
          ))}
          <Link href="/news" aria-current={current === "news" ? "page" : undefined}>お知らせ</Link>
          <Link href="/blog" aria-current={current === "blog" ? "page" : undefined}>足を疑うはなし</Link>
        </div>
      </details>
      <a
        href={STORES}
        style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "10px 20px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.1em", fontSize: "13px", whiteSpace: "nowrap", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}
      >
        予約する
      </a>
    </nav>
  );
}

export function FooterNav({ style }: { style?: CSSProperties }) {
  return (
    <nav className="fnav" aria-label="サイト内" style={style}>
      <Link href="/">トップ</Link>
      {items.map((it) => (
        <Link key={it.label} href={it.href}>{it.label}</Link>
      ))}
      <Link href="/news">お知らせ</Link>
      <Link href="/blog">足を疑うはなし</Link>
      <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/contact">お問い合わせ</a>
    </nav>
  );
}
