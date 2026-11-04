// 今月の営業カレンダー
// 毎月ここを書き換える。days に書いていない日は「夜の特別枠」として扱う。
// full: 通し営業 9:00–22:40 / night: 夜の特別枠 21:10–22:40 / closed: 休業

export type DayType = "full" | "night" | "closed";

export const calendar = {
  year: 2026,
  month: 11,
  defaultType: "night" as DayType,
  holidays: [3, 23], // 祝日（表示用）
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
  } as Record<number, DayType>,
  notes: {
    29: "足ツボグランプリ2026 決勝大会 出場のため休業",
  } as Record<number, string>,
};

export const dayTypeLabel: Record<DayType, { label: string; time: string }> = {
  full: { label: "通し営業", time: "9:00–22:40" },
  night: { label: "夜の特別枠", time: "21:10–22:40" },
  closed: { label: "休業", time: "" },
};
