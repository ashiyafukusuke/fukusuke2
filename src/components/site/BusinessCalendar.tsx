import { upcomingMonths, holidaysOf, notesOf, type DayType, type MonthCalendar } from "@/data/calendar";
import { jstNow, kindsFor } from "@/lib/yoyaku";
import { getSetting } from "@/lib/notify";

// 営業カレンダー。予約システムに登録した営業日（管理画面の設定）をそのまま表示する。
// 予約を公開していない日は「未定」。データベースに届かないときだけ、src/data/calendar.ts の手書きの予定を使う。

const WEEK = ["月", "火", "水", "木", "金", "土", "日"];
type CellType = DayType | "tbd";
type Month = { year: number; month: number; typeOf: (d: number) => CellType; holidays: number[]; notes: Record<number, string> };

const CELL_LABEL: Record<CellType, string> = { full: "通し", night: "朝・夜", closed: "休", tbd: "未定" };

function MonthTable({ cal }: { cal: Month }) {
  const { year, month, typeOf, holidays, notes } = cal;
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0).getDate();
  const offset = (first.getDay() + 6) % 7; // 月曜始まり
  const cells: (number | null)[] = [...Array(offset).fill(null), ...Array.from({ length: last }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const wd = (d: number) => WEEK[(new Date(year, month - 1, d).getDay() + 6) % 7];
  const all = Array.from({ length: last }, (_, i) => i + 1);
  const fullDays = all.filter((d) => typeOf(d) === "full");
  const closedDays = all.filter((d) => typeOf(d) === "closed");
  const tbdFrom = all.find((d) => typeOf(d) === "tbd");
  const label = (d: number) => `${d}日（${wd(d)}${holidays.includes(d) ? "・祝" : ""}）`;

  return (
    <div className="bcal">
      <p className="bcal-title">{year}年{month}月の営業日</p>
      <table>
        <thead>
          <tr>{WEEK.map((w) => <th key={w} scope="col">{w}</th>)}</tr>
        </thead>
        <tbody>
          {Array.from({ length: cells.length / 7 }, (_, r) => (
            <tr key={r}>
              {cells.slice(r * 7, r * 7 + 7).map((d, i) => {
                if (!d) return <td key={i} className="bcal-empty" />;
                const t = typeOf(d);
                return (
                  <td key={i} className={`bcal-${t}`}>
                    <span className="bcal-d">{d}{holidays.includes(d) ? <small>祝</small> : null}</span>
                    <span className="bcal-t">{CELL_LABEL[t]}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bcal-text">
        {fullDays.length ? `通しの日：${fullDays.map(label).join("、")}。` : ""}
        {closedDays.length ? `休業：${closedDays.map((d) => `${label(d)}${notes[d] ? `　${notes[d]}` : ""}`).join("、")}。` : ""}
        {tbdFrom ? `${tbdFrom}日以降は、決まりしだいお知らせします。` : ""}
        それ以外の日は、朝の枠と夜の特別枠です。
      </p>
    </div>
  );
}

function Legend() {
  return (
    <ul className="bcal-legend">
      <li><span className="bcal-key bcal-full" />通しの日　6:30–22:40</li>
      <li><span className="bcal-key bcal-night" />朝の枠 6:30–9:00・夜の特別枠 21:10–22:40</li>
      <li><span className="bcal-key bcal-closed" />休業</li>
    </ul>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

async function fromBooking(): Promise<Month[]> {
  const today = jstNow().date;
  const published = await getSetting("published_until");
  const [y0, m0] = today.split("-").map(Number);
  const [y1, m1] = (published || today).split("-").map(Number);
  const months: Month[] = [];
  let y = y0, m = m0;
  while (y < y1 || (y === y1 && m <= m1)) {
    const yy = y, mm = m;
    const last = new Date(yy, mm, 0).getDate();
    const from = `${yy}-${pad(mm)}-01`, to = `${yy}-${pad(mm)}-${pad(last)}`;
    const kind = await kindsFor(from, to);
    months.push({
      year: yy, month: mm,
      typeOf: (d) => {
        const ds = `${yy}-${pad(mm)}-${pad(d)}`;
        return published && ds > published ? "tbd" : kind(ds);
      },
      holidays: holidaysOf(yy, mm), notes: notesOf(yy, mm),
    });
    if (m === 12) { y++; m = 1; } else m++;
  }
  return months;
}

function fromStatic(list: MonthCalendar[]): Month[] {
  return list.map((c) => ({ year: c.year, month: c.month, typeOf: (d) => c.days[d] ?? c.defaultType, holidays: c.holidays, notes: c.notes }));
}

export async function BusinessCalendar() {
  let list: Month[];
  try {
    list = await fromBooking();
    if (!list.length) list = fromStatic(upcomingMonths());
  } catch {
    list = fromStatic(upcomingMonths());
  }
  return (
    <div style={{ display: "grid", gap: "32px" }}>
      {list.map((c) => <MonthTable key={`${c.year}-${c.month}`} cal={c} />)}
      <Legend />
    </div>
  );
}
