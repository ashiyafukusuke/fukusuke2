import { calendar, dayTypeLabel, type DayType } from "@/data/calendar";

const WEEK = ["月", "火", "水", "木", "金", "土", "日"];

export function BusinessCalendar() {
  const { year, month, days, defaultType, holidays, notes } = calendar;
  const first = new Date(year, month - 1, 1);
  const last = new Date(year, month, 0).getDate();
  const offset = (first.getDay() + 6) % 7; // 月曜始まり
  const cells: (number | null)[] = [...Array(offset).fill(null), ...Array.from({ length: last }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const typeOf = (d: number): DayType => days[d] ?? defaultType;
  const wd = (d: number) => WEEK[(new Date(year, month - 1, d).getDay() + 6) % 7];
  const fullDays = Array.from({ length: last }, (_, i) => i + 1).filter((d) => typeOf(d) === "full");
  const closedDays = Array.from({ length: last }, (_, i) => i + 1).filter((d) => typeOf(d) === "closed");

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
                    <span className="bcal-t">{t === "closed" ? "休" : t === "full" ? "通し" : "夜"}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="bcal-legend">
        {(["full", "night", "closed"] as DayType[]).map((t) => (
          <li key={t}><span className={`bcal-key bcal-${t}`} />{dayTypeLabel[t].label}{dayTypeLabel[t].time ? `　${dayTypeLabel[t].time}` : ""}</li>
        ))}
      </ul>
      <p className="bcal-text">
        通し営業（9:00–22:40）：{fullDays.map((d) => `${d}日（${wd(d)}${holidays.includes(d) ? "・祝" : ""}）`).join("、")}。
        {closedDays.length ? `休業：${closedDays.map((d) => `${d}日（${wd(d)}）${notes[d] ? `　${notes[d]}` : ""}`).join("、")}。` : ""}
        それ以外の日は、夜の特別枠（21:10–22:40）です。
      </p>
    </div>
  );
}
