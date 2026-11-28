// イタキモ自前予約：料金・枠・データベースの共通処理（サーバー側）
// 料金と空き枠は必ずここで計算し直す。画面から届いた金額は信用しない。

export const GAP = 15; // 施術と施術の間の余白（分）
export const CUTOFF = 60; // 当日予約は開始の何分前まで
export const CUTOFF_ONSITE = 10; // 直前に別の予約があり、すでに店にいる時間帯は開始の何分前まで
// その時間の直前（終わってから60分以内）に別の予約があり、施術者がすでに店にいるか
export function alreadyOnsite(start: number, booked: { s: number; e: number; blk?: boolean }[]) {
  return booked.some((b) => !b.blk && b.e <= start && start - b.e <= 60);
}
export const HORIZON = 60; // 何日先まで予約できるか

export type Course = {
  id: "c60" | "c90";
  min: number;
  first: number;
  repeat: number;
  prepayOff: number;
  cap: number;
};

export const COURSES: Course[] = [
  { id: "c60", min: 60, first: 6500, repeat: 5500, prepayOff: 500, cap: 1000 },
  { id: "c90", min: 90, first: 9000, repeat: 8000, prepayOff: 500, cap: 1500 },
];

const EB = [
  { days: 7, off: 1000, label: "7日以上前" },
  { days: 1, off: 500, label: "前日まで" },
];

export function price(c: Course, visit: "first" | "repeat", pay: "onsite" | "card", ahead: number) {
  const base = visit === "first" ? c.first : c.repeat;
  const prepay = visit === "repeat" && pay === "card" ? c.prepayOff : 0;
  let eb = 0;
  let ebLabel = "";
  if (ahead > 0) {
    const h = EB.find((x) => ahead >= x.days);
    if (h) {
      eb = h.off;
      ebLabel = h.label;
    }
  }
  const off = Math.min(prepay + eb, c.cap);
  return { base, prepay, eb, ebLabel, off, total: base - off };
}

// ---- 日本時間の日付 ----
export function jstNow() {
  const d = new Date(Date.now() + 9 * 3600 * 1000);
  return { date: d.toISOString().slice(0, 10), min: d.getUTCHours() * 60 + d.getUTCMinutes() };
}
export function daysBetween(a: string, b: string) {
  return Math.round((Date.parse(b + "T00:00:00Z") - Date.parse(a + "T00:00:00Z")) / 864e5);
}
export function addDays(a: string, n: number) {
  return new Date(Date.parse(a + "T00:00:00Z") + n * 864e5).toISOString().slice(0, 10);
}
export function weekday(a: string) {
  return new Date(a + "T00:00:00Z").getUTCDay();
}

// 営業日の種類。登録がない日は、水・木を通し営業、それ以外を休みとする（試験運用の初期値）
export type DayKind = "full" | "night" | "closed";
export function defaultKind(date: string): DayKind {
  const w = weekday(date);
  return w === 3 || w === 4 ? "full" : "closed";
}

export function hoursOf(kind: DayKind) {
  if (kind === "full") return { s: 9 * 60, e: 22 * 60 + 40, step: 15, last: 22 * 60 + 40 };
  return { s: 21 * 60 + 10, e: 22 * 60 + 40, step: 10, last: 21 * 60 + 40 };
}

export type Booked = { s: number; e: number; blk?: boolean };

// 朝の枠：6:30〜9:00に終わる枠。受付は前日の22:00まで（当日は不可）。通しの日・夜の特別枠の日に出す
export const MORNING = { s: 6 * 60 + 30, e: 9 * 60, step: 10, last: 8 * 60 + 30 };
export const MORNING_CUTOFF = 22 * 60; // 前日のこの時刻まで
export function isMorning(c: Course, start: number) {
  return start >= MORNING.s && start <= MORNING.last && start + c.min <= MORNING.e && (start - MORNING.s) % MORNING.step === 0;
}
// 朝の枠の受付が締め切られているか（当日、または前日の22:00を過ぎた）
export function morningClosed(ahead: number, nowMin: number) {
  return ahead < 1 || (ahead === 1 && nowMin >= MORNING_CUTOFF);
}

// 指定の開始時刻が予約できるかどうか
export function slotOk(kind: DayKind, c: Course, start: number, booked: Booked[], ahead: number, nowMin: number) {
  if (kind === "closed") return false;
  if (ahead < 0 || ahead > HORIZON) return false;
  const fits = (w: { s: number; e: number; step: number; last: number }) =>
    start >= w.s && start <= w.last && start + c.min <= w.e && (start - w.s) % w.step === 0;
  if (fits(MORNING)) {
    // 朝の枠は前日の22:00まで。ただし、直前に別の朝の予約があり、すでに店にいる時間は当日も開始10分前まで
    if (morningClosed(ahead, nowMin)) {
      if (!alreadyOnsite(start, booked)) return false;
      if (ahead === 0 && start < nowMin + CUTOFF_ONSITE) return false;
    }
  } else {
    const h = hoursOf(kind);
    if (!fits(h)) return false;
    if (ahead === 0 && start < nowMin + (alreadyOnsite(start, booked) ? CUTOFF_ONSITE : CUTOFF)) return false;
    if (kind === "night" && booked.some((b) => !b.blk && b.s >= h.s)) return false; // 夜の特別枠は1日1組
  }
  const e = start + c.min + GAP;
  return !booked.some((b) => start < b.e + GAP && b.s < e);
}

// ---- データベース（Neon の HTTP 経由。追加のライブラリは使わない） ----
function dbUrl() {
  const u = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.STORAGE_URL;
  if (!u) throw new Error("DATABASE_URL is not set");
  return u;
}

export async function sql<T = Record<string, string | null>>(query: string, params: unknown[] = []): Promise<T[]> {
  const url = dbUrl();
  const host = new URL(url).hostname;
  const endpoints = [`https://${host}/sql`, `https://${host.replace(/^[^.]+\./, "api.")}/sql`];
  let lastErr = "";
  for (const ep of endpoints) {
    const res = await fetch(ep, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Neon-Connection-String": url,
        "Neon-Raw-Text-Output": "true",
        "Neon-Array-Mode": "false",
      },
      body: JSON.stringify({ query, params: params.map((p) => (p === null || p === undefined ? null : typeof p === "object" ? JSON.stringify(p) : String(p))) }),
      cache: "no-store",
    });
    const text = await res.text();
    if (res.ok) {
      const j = JSON.parse(text);
      return (j.rows || []) as T[];
    }
    lastErr = `${res.status} ${text.slice(0, 300)}`;
    if (res.status < 500 && !/not found|unknown|endpoint/i.test(text)) break;
  }
  throw new Error("DB error: " + lastErr);
}

let ready: Promise<void> | null = null;
export function ensureTables() {
  if (!ready) {
    ready = (async () => {
      await sql(`CREATE TABLE IF NOT EXISTS open_days (
        date text PRIMARY KEY,
        kind text NOT NULL
      )`);
      await sql(`CREATE TABLE IF NOT EXISTS bookings (
        id text PRIMARY KEY,
        created_at timestamptz NOT NULL DEFAULT now(),
        date text NOT NULL,
        start_min int NOT NULL,
        end_min int NOT NULL,
        course text NOT NULL,
        visit text NOT NULL,
        pay text NOT NULL,
        base int NOT NULL,
        discount int NOT NULL,
        total int NOT NULL,
        name text NOT NULL,
        tel text,
        mail text,
        memo text,
        answers text,
        status text NOT NULL,
        stripe_session text,
        paid_at timestamptz,
        hold_until timestamptz
      )`);
      await sql(`CREATE INDEX IF NOT EXISTS bookings_date ON bookings (date)`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS token text`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS change_count int NOT NULL DEFAULT 0`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS notified_at timestamptz`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS reminded_at timestamptz`);
      await sql(`CREATE UNIQUE INDEX IF NOT EXISTS bookings_token ON bookings (token)`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS cancelled_by text`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS source text`);
      // 売上の記録（来店して会計したときに店主が記録する）
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS settled_at timestamptz`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS paid_amount integer`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS paid_method text`);
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS cancelled_at timestamptz`);
      await sql(`CREATE TABLE IF NOT EXISTS time_blocks (
        id serial PRIMARY KEY,
        date text NOT NULL,
        start_min int NOT NULL,
        end_min int NOT NULL,
        note text
      )`);
      // 店主がお客様ごとに残すメモ（電話番号ごと）。お客様には見えない
      await sql(`CREATE TABLE IF NOT EXISTS customer_notes (tel text PRIMARY KEY, note text NOT NULL, updated_at timestamptz NOT NULL DEFAULT now())`);
      await sql(`CREATE TABLE IF NOT EXISTS blocked (
        id serial PRIMARY KEY,
        tel text,
        mail text,
        name text,
        created_at timestamptz NOT NULL DEFAULT now()
      )`);
    })().catch((e) => {
      ready = null;
      throw e;
    });
  }
  return ready;
}

// 有効な予約（確定済み、または決済待ちで保留時間内）
export const ACTIVE = `(status = 'confirmed' OR (status = 'pending' AND hold_until > now()))`;

export async function kindsFor(from: string, to: string) {
  const rows = await sql<{ date: string; kind: string }>(`SELECT date, kind FROM open_days WHERE date >= $1 AND date <= $2`, [from, to]);
  const m = new Map(rows.map((r) => [r.date, r.kind as DayKind]));
  return (d: string): DayKind => m.get(d) ?? defaultKind(d);
}

export async function bookedFor(from: string, to: string) {
  const rows = await sql<{ date: string; start_min: string; end_min: string }>(
    `SELECT date, start_min, end_min FROM bookings WHERE date >= $1 AND date <= $2 AND ${ACTIVE}`,
    [from, to],
  );
  const list: { date: string; s: number; e: number; blk?: boolean }[] = rows.map((r) => ({ date: r.date, s: Number(r.start_min), e: Number(r.end_min) }));
  return list.concat(await blocksFor(from, to));
}

// 予約ブロック（休憩・外出など）。施術の間の余白は要らないので、重なり判定で余白が打ち消されるように前後を詰めて返す
export async function blocksFor(from: string, to: string) {
  const rows = await sql<{ date: string; start_min: string; end_min: string }>(
    `SELECT date, start_min, end_min FROM time_blocks WHERE date >= $1 AND date <= $2`,
    [from, to],
  );
  return rows.map((r) => ({ date: r.date, s: Number(r.start_min) + GAP, e: Number(r.end_min) - GAP, blk: true }));
}

// ---- Stripe（REST API を直接呼ぶ） ----
export async function stripe(path: string, method: "GET" | "POST", form?: Record<string, string>) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  const res = await fetch("https://api.stripe.com/v1/" + path, {
    method,
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/x-www-form-urlencoded" },
    body: form ? new URLSearchParams(form).toString() : undefined,
    cache: "no-store",
  });
  const j = await res.json();
  if (!res.ok) throw new Error("Stripe error: " + (j?.error?.message || res.status));
  return j;
}

export function hm(m: number) {
  return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
}
export function fmtDate(d: string) {
  const W = ["日", "月", "火", "水", "木", "金", "土"];
  const [, mo, da] = d.split("-").map(Number);
  return `${mo}月${da}日（${W[weekday(d)]}）`;
}

export const MAX_CHANGES = 2;
export const MAX_SELF_CANCELS = 2; // 直近90日で、お客様が自分でキャンセルできる回数
export const CANCEL_WINDOW_DAYS = 90;

// キャンセルした日と同じ日（日本時間）に、同じ連絡先で予約を取り直していれば、コース変更のためのキャンセルとみなす
export const REBOOKED = (c: string, match: string) => `EXISTS (
  SELECT 1 FROM bookings x WHERE x.id <> ${c}.id AND (${match})
  AND x.created_at >= ${c}.cancelled_at
  AND (x.created_at AT TIME ZONE 'Asia/Tokyo')::date = (${c}.cancelled_at AT TIME ZONE 'Asia/Tokyo')::date
  AND (x.status = 'confirmed' OR x.cancelled_by IN ('customer','admin')))`;

// 同じお客様（電話番号かメールが一致）が、直近90日に自分でキャンセルした回数
// 同じ日に取り直した分と、そのあと来店した（日付が過ぎた確定済みの予約がある）分は数えない
export async function selfCancelCount(tel: string | null, mail: string | null) {
  if (!tel && !mail) return 0;
  const m = (t: string) => `((($1::text) IS NOT NULL AND ${t}.tel = $1) OR (($2::text) IS NOT NULL AND lower(${t}.mail) = lower($2)))`;
  const r = await sql<{ n: string }>(
    `SELECT count(*) AS n FROM bookings c WHERE c.cancelled_by = 'customer' AND c.cancelled_at > now() - interval '${CANCEL_WINDOW_DAYS} days'
     AND ${m("c")} AND NOT ${REBOOKED("c", m("x"))}
     AND NOT EXISTS (SELECT 1 FROM bookings v WHERE v.id <> c.id AND ${m("v")} AND v.status = 'confirmed'
       AND v.date >= to_char(c.cancelled_at AT TIME ZONE 'Asia/Tokyo', 'YYYY-MM-DD') AND v.date < $3)`,
    [tel || null, mail || null, jstNow().date],
  );
  return Number(r[0]?.n || 0);
}

// 店主が「以降お断り」にした電話番号・メールかどうか
export async function isBlocked(tel: string | null, mail: string | null) {
  if (!tel && !mail) return false;
  const r = await sql(
    `SELECT 1 FROM blocked WHERE (($1::text) IS NOT NULL AND tel = $1) OR (($2::text) IS NOT NULL AND lower(mail) = lower($2)) LIMIT 1`,
    [tel || null, mail || null],
  );
  return r.length > 0;
}
// 予約の変更・キャンセルの専用リンク
export function site(origin: string) {
  return process.env.VERCEL_ENV === "production" ? "https://www.itakimo.net" : origin;
}
export function manageUrl(origin: string, token: string | null) {
  return token ? `${site(origin)}/yoyaku?m=${token}` : "";
}
// 前日の23:59までなら、お客様が自分で変更・キャンセルできる
export function selfServiceOk(date: string) {
  return date > jstNow().date;
}
