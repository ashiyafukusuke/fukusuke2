// 営業カレンダー
// 月ごとに months に追加する。終わった月は表示されなくなる（ページは1時間ごとに作り直される）。
// days に書いていない日は defaultType として扱う。
// full: 通し営業 9:00–22:40 / night: 夜の特別枠 21:10–22:40 / closed: 休業

export type DayType = "full" | "night" | "closed";

export type MonthCalendar = {
  year: number;
  month: number;
  defaultType: DayType;
  holidays: number[]; // 祝日（表示用）
  days: Record<number, DayType>;
  notes: Record<number, string>;
  footnote?: string; // カレンダーの下に添える一文
};

export const months: MonthCalendar[] = [
  {
    year: 2026,
    month: 11,
    defaultType: "night",
    holidays: [3, 23],
    days: {
      3: "full",
      5: "full",
      10: "full",
      11: "full",
      12: "full",
      17: "full",
      18: "full",
      19: "full",
      24: "full",
      25: "full",
      26: "full",
      29: "closed",
    },
    notes: {
      29: "足ツボグランプリ2026 決勝大会 出場のため休業",
    },
  },
  {
    year: 2026,
    month: 12,
    defaultType: "night",
    holidays: [],
    days: {
      2: "full",
      3: "full",
      8: "full",
      9: "full",
      10: "full",
      11: "full",
      14: "full",
      17: "full",
      19: "closed",
      21: "full",
      23: "full",
      24: "full",
      30: "full",
      31: "full",
    },
    notes: {},
    footnote: "年末年始も営業します。1月1日（金・祝）〜3日（日）は通し営業（9:00–22:40）です。",
  },
];

// 今日より後に最終日がある月だけ（日本時間）
export function upcomingMonths(now: Date = new Date()): MonthCalendar[] {
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const y = jst.getUTCFullYear();
  const m = jst.getUTCMonth() + 1;
  return months.filter((c) => c.year > y || (c.year === y && c.month >= m));
}

export const dayTypeLabel: Record<DayType, { label: string; time: string }> = {
  full: { label: "通し営業", time: "9:00–22:40" },
  night: { label: "夜の特別枠", time: "21:10–22:40" },
  closed: { label: "休業", time: "" },
};
