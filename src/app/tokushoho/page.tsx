import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜足つぼ専門店 イタキモ",
  description: "足つぼ専門店イタキモの特定商取引法に基づく表記です。事業者の情報、料金とお支払い、キャンセルと返金についてまとめています。",
  alternates: {
    canonical: "/tokushoho",
  },
};

const rows: { label: string; body: ReactNode }[] = [
  { label: "販売事業者", body: <>足つぼ専門店 イタキモ</> },
  { label: "運営責任者", body: <>林 英登</> },
  { label: "所在地", body: <>〒202-0001<br />東京都西東京市ひばりが丘3丁目2−51 HIBARIDO 2F R-09</> },
  {
    label: "電話番号",
    body: (
      <>
        070-7476-7602
        <br />
        <span style={{ fontSize: "12px", color: "#5c5c5c" }}>施術中はお電話に出られないことがあります。メールでのご連絡が確実です。</span>
      </>
    ),
  },
  { label: "メールアドレス", body: <>fukusuke@itakimo.net</> },
  {
    label: "販売価格",
    body: (
      <>
        各コースの料金は、
        <Link href="/#menu" style={{ color: "#9b321f" }}>メニュー・料金</Link>
        に記載しています（消費税込）。
      </>
    ),
  },
  { label: "料金以外にかかる費用", body: <>ありません。</> },
  {
    label: "お支払い方法",
    body: <>当日、店頭でのお支払い。または、ご予約時のオンライン決済（事前決済）。</>,
  },
  {
    label: "お支払いの時期",
    body: <>当日払いは、施術の当日。事前決済は、ご予約の時点でお支払いが確定します。</>,
  },
  { label: "サービスの提供時期", body: <>ご予約いただいた日時に施術を行います。</> },
  {
    label: "予約の変更・キャンセル",
    body: (
      <>
        キャンセル料はいただいていません。予約の変更・キャンセルは、ご予約後に直接ご連絡ください（メール・Instagram DM・お問い合わせフォーム）。
        <br />
        無断キャンセルの方からは、以降のご予約をお受けしていません。直前のキャンセルが続く場合も、お受けしないことがあります。体調やご事情でのキャンセルは、ご連絡があれば基本的にこの対象にはしません。
        <br />
        <Link href="/first" style={{ color: "#9b321f" }}>初めての方へ</Link>
        ・
        <Link href="/stance" style={{ color: "#9b321f" }}>イタキモの考え方</Link>
        もあわせてご覧ください。
      </>
    ),
  },
  {
    label: "返金",
    body: (
      <>
        事前決済のあとにキャンセルされた場合は、全額を返金します。
        <br />
        初めての方の60分・90分コース（左足トライアル）で、片足が終わった時点で終了された場合も、全額を返金します。
        <br />
        返金は、お支払いに使われた決済方法を通じて行います。返金が反映されるまでの日数は、決済方法によって異なります。
      </>
    ),
  },
];

export default function TokushohoPage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      {/* ヘッダー（上部固定） */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="top" />
        </div>
      </header>

      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px 64px" }}>
        <p className="lbl">Legal</p>
        <h1 style={{ margin: "0 0 32px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3.6vw, 32px)", letterSpacing: "0.08em" }}>特定商取引法に基づく表記</h1>
        <dl style={{ margin: 0, fontSize: "14px", borderTop: "1px solid #ebe9e4" }}>
          {rows.map((r) => (
            <div key={r.label} style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", padding: "16px 0", borderBottom: "1px solid #ebe9e4" }}>
              <dt style={{ flex: "0 0 190px", fontWeight: 700 }}>{r.label}</dt>
              <dd style={{ margin: 0, flex: "1 1 320px", minWidth: 0, color: "#3d3a34", overflowWrap: "anywhere" }}>{r.body}</dd>
            </div>
          ))}
        </dl>
        <p style={{ margin: "20px 0 0", fontSize: "12px", color: "#5c5c5c" }}>最終更新：2026年11月19日</p>
      </main>

      {/* フッター */}
      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 40px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9 }}>
        <FooterNav />
        <p style={{ margin: 0 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
