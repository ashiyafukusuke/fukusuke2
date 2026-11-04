// お知らせ。新しいものを上に追加する。
// date は "YYYY-MM-DD"。id は URL の #id に使う（英数字とハイフン）。

export type NewsItem = { id: string; date: string; title: string; body: string };

export const news: NewsItem[] = [
  {
    id: "2026-11-closed-29",
    date: "2026-11-04",
    title: "11月29日（日）は休業します",
    body: "足ツボグランプリ2026 決勝大会に出場するため、11月29日（日）はお休みをいただきます。\nご不便をおかけしますが、よろしくお願いいたします。",
  },
  {
    id: "2026-11-grandprix",
    date: "2026-11-04",
    title: "足ツボグランプリ2026 決勝大会に出場します",
    body: "日本足ツボ協会主催の「足ツボグランプリ2026」で書類審査を通過し、決勝大会に出場することになりました。\n11月29日（日）、西新宿の会場で、一般の審査員の方に20分ずつ施術をします。\nいつもどおり、目の前の足に向き合ってきます。",
  },
];

export function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}.${String(m).padStart(2, "0")}.${String(day).padStart(2, "0")}`;
}
