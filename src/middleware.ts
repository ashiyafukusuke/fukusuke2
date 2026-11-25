import { NextRequest, NextResponse } from "next/server";

// 予約ページの「店主だけ公開」モード。
// Vercel の環境変数 YOYAKU_OPEN が "1" になるまで、予約ページと予約の受付は
// 管理画面にログインしたブラウザからしか使えない（ほかの人はトップページへ移動）。
// 管理画面（/yoyaku/admin）、決済の戻り・Webhook・専用リンクなどは常に動く。
const COOKIE = "yk_staff";
const STORES_URL = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011";

async function staffToken(pass: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("yoyaku-staff"));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function middleware(req: NextRequest) {
  const pass = (process.env.YOYAKU_ADMIN_PASSWORD || "").trim();
  const { pathname } = req.nextUrl;

  // 管理画面でパスワードが合ったら、そのブラウザに目印を付ける
  if (pathname === "/api/yoyaku/admin") {
    const got = (req.headers.get("x-admin-pass") || "").trim();
    const res = NextResponse.next();
    if (pass.length >= 8 && got === pass) {
      res.cookies.set(COOKIE, await staffToken(pass), { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 90 });
    }
    return res;
  }

  // 予備の切り替え：Vercel の環境変数 YOYAKU_FALLBACK を "stores" にすると、予約ページを STORES 予約へ移す
  // （自前の予約で不具合が出たとき用。管理画面・決済の戻り・Webhook・専用リンクはそのまま動く）
  if (process.env.YOYAKU_FALLBACK === "stores" && (pathname === "/yoyaku" || pathname === "/yoyaku/index.html") && !req.nextUrl.searchParams.has("m") && !req.nextUrl.searchParams.has("paid")) {
    return NextResponse.redirect(STORES_URL);
  }

  if (process.env.YOYAKU_OPEN === "1") return NextResponse.next();

  const ok = pass.length >= 8 && req.cookies.get(COOKIE)?.value === (await staffToken(pass));
  if (ok) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "ただいま準備中です。ご予約はトップページの「予約する」からお願いします。" }, { status: 403 });
  }
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: ["/yoyaku", "/yoyaku/index.html", "/api/yoyaku/book", "/api/yoyaku/availability", "/api/yoyaku/admin"],
};
