import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜足つぼ専門店 イタキモ",
  description: "足つぼ専門店イタキモの個人情報の取り扱いについて。お預かりする情報、使い道、外部サービスの利用、お問い合わせ先をまとめています。",
  alternates: {
    canonical: "/privacy",
  },
};

const sections: { title: string; body: ReactNode }[] = [
  {
    title: "お預かりする情報",
    body: (
      <>
        <p>ご予約やお問い合わせのときに、次の情報をお預かりします。</p>
        <ul>
          <li>ご予約名（本名でなくてもかまいません）</li>
          <li>電話番号（ご予約の際は必須）</li>
          <li>メールアドレス（ご予約の際は任意）</li>
          <li>ご予約の内容（日時・コース・ご来店の回数など）</li>
          <li>お問い合わせやメッセージでお伝えいただいた内容</li>
          <li>施術のために店主が残すメモ（足の状態や、お好みの強さなど）</li>
        </ul>
        <p>施術に必要のない情報は、お預かりしません。</p>
      </>
    ),
  },
  {
    title: "使い道",
    body: (
      <>
        <p>お預かりした情報は、次のことにだけ使います。</p>
        <ul>
          <li>ご予約の受付・確認・変更・キャンセルのご連絡</li>
          <li>料金のお支払いと返金の手続き</li>
          <li>ご来店後のご連絡</li>
          <li>お問い合わせへのお返事</li>
          <li>同じ方のご予約かどうかの確認と、ご予約のルールを守っていただけなかった場合の、以降のご予約の判断</li>
        </ul>
      </>
    ),
  },
  {
    title: "第三者への提供",
    body: (
      <p>法令にもとづく場合を除き、ご本人の同意なく、お預かりした情報を第三者に渡すことはありません。</p>
    ),
  },
  {
    title: "外部サービスの利用",
    body: (
      <>
        <p>ご予約やお支払い、サイトの改善のために、次の外部サービスを使っています。これらのサービスでの情報の扱いは、各社の方針に従います。</p>
        <ul>
          <li>サイトと予約システムの運用：Vercel（Vercel Inc.）</li>
          <li>ご予約情報の保存（データベース）：Neon（Neon, Inc.）</li>
          <li>オンライン決済：Stripe（Stripe, Inc.）</li>
          <li>予約確認メールの送信：Resend（Resend, Inc.）</li>
          <li>店主のスマートフォンへの予約通知：ntfy（ntfy.sh）。通知には予約の日時・コース・支払い方法だけを載せ、お名前や連絡先は載せません。</li>
          <li>以前の予約・決済：STORES（STORES 株式会社）</li>
          <li>アクセス解析：Google アナリティクス（Google LLC）</li>
        </ul>
        <p>オンライン決済のカード情報は、決済会社が直接お預かりします。当店がカード番号を見たり、保存したりすることはありません。</p>
        <p>ご予約の情報は、Vercel と Neon のシンガポールにあるサーバーで扱い、保存しています。予約確認メールは Resend の東京のサーバーから送っています。これらはアメリカの事業者のサービスで、通信は暗号化されています。各国の個人情報の保護に関する制度は、個人情報保護委員会のウェブサイトでご確認いただけます。</p>
      </>
    ),
  },
  {
    title: "アクセス解析について",
    body: (
      <p>このサイトでは、どのページがどのくらい読まれているかを知るために、Google アナリティクスを使っています。Cookie を使って情報を集めますが、お名前など個人を特定する情報は含まれません。Cookie は、お使いのブラウザの設定で無効にできます。</p>
    ),
  },
  {
    title: "情報の管理",
    body: (
      <p>お預かりした情報は、なくしたり外に漏れたりしないよう、大切に管理します。ご予約の日から2年がたった情報は、電話番号だけを残して、お名前・メールアドレス・ご記入いただいた内容を自動で消去します。2年以上ご来店がない方の店主のメモも、自動で消去します（電話番号は、2回目以降のご来店かどうかを確認するために残します）。</p>
    ),
  },
  {
    title: "開示・訂正・削除のご依頼",
    body: (
      <p>ご自身の情報の確認、訂正、削除をご希望の場合は、下のメールアドレスまでご連絡ください。ご本人であることを確認したうえで対応します。</p>
    ),
  },
  {
    title: "お問い合わせ先",
    body: (
      <p>
        足つぼ専門店 イタキモ（運営責任者：林 英登）
        <br />
        〒202-0001 東京都西東京市ひばりが丘3丁目2−51 HIBARIDO 2F R-09
        <br />
        メール：<a href="mailto:fukusuke@itakimo.net" style={{ color: "#9b321f" }}>fukusuke@itakimo.net</a>
      </p>
    ),
  },
  {
    title: "このページの変更",
    body: (
      <p>内容は、必要に応じて変更することがあります。変更したときは、このページでお知らせします。</p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      {/* ヘッダー（上部固定） */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "#fefdfa", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="top" />
        </div>
      </header>

      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px 64px" }}>
        <p className="lbl">Privacy</p>
        <h1 style={{ margin: "0 0 16px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3.6vw, 32px)", letterSpacing: "0.08em" }}>プライバシーポリシー</h1>
        <p style={{ margin: "0 0 32px", fontSize: "14px", color: "#3d3a34" }}>足つぼ専門店 イタキモ（以下「当店」）は、お客様からお預かりする個人情報を、次のとおり大切に扱います。</p>
        <div className="pp" style={{ borderTop: "1px solid #ebe9e4", fontSize: "14px", color: "#3d3a34" }}>
          {sections.map((s) => (
            <section key={s.title} style={{ padding: "20px 0", borderBottom: "1px solid #ebe9e4" }}>
              <h2 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.06em" }}>{s.title}</h2>
              {s.body}
            </section>
          ))}
        </div>
        <p style={{ margin: "20px 0 0", fontSize: "12px", color: "#5c5c5c" }}>制定：2026年11月20日　改定：2026年11月26日</p>
      </main>

      {/* フッター */}
      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 40px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9 }}>
        <FooterNav />
        <p style={{ margin: 0 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
