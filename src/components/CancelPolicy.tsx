"use client";
import { motion } from "framer-motion";

type PolicyRow = {
  situation: string;
  rule: string;
  note?: string;
  severity: "ok" | "warn" | "end";
};

const policies: PolicyRow[] = [
  {
    situation: "前日までの予約変更",
    rule: "3回まで承ります",
    note: "4回目以降は、以降のご予約をお断りいたします",
    severity: "ok",
  },
  {
    situation: "当日の予約変更",
    rule: "1回まで承ります",
    note: "2回目以降は「当日連絡ありキャンセル」として扱います（ただし事情による）",
    severity: "warn",
  },
  {
    situation: "当日キャンセル（連絡あり）",
    rule: "キャンセル料は頂きません",
    note: "ただし3回目以降は、以降のご予約をお断りいたします",
    severity: "warn",
  },
  {
    situation: "当日無断キャンセル",
    rule: "即時、以降のご予約をお断りいたします",
    severity: "end",
  },
];

const severityStyle: Record<PolicyRow["severity"], string> = {
  ok:   "border-l-4 border-olive bg-olive/5",
  warn: "border-l-4 border-terracotta bg-terracotta/5",
  end:  "border-l-4 border-vitality bg-vitality/5",
};

const severityDot: Record<PolicyRow["severity"], string> = {
  ok:   "bg-olive",
  warn: "bg-terracotta",
  end:  "bg-vitality",
};

export default function CancelPolicy() {
  return (
    <section id="cancel-policy" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4 border-l-4 border-terracotta pl-6"
        >
          キャンセルポリシー
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mb-12 text-sm leading-loose pl-6 max-w-xl"
        >
          限られた枠を大切にしたいと思っています。<br/>
          お互いの時間を誠実に扱うためのお約束として、お読みください。
        </motion.p>

        <div className="space-y-4">
          {policies.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-xl p-6 ${severityStyle[p.severity]}`}
            >
              <div className="flex items-start gap-3">
                <span className={`mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full ${severityDot[p.severity]}`}></span>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 tracking-wider mb-1 uppercase font-medium">
                    {p.situation}
                  </p>
                  <p className={`font-bold text-base ${p.severity === "end" ? "text-vitality" : "text-ink"}`}>
                    {p.rule}
                  </p>
                  {p.note && (
                    <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
                      {p.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 補足 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 p-6 bg-offwhite rounded-xl border border-gray-100"
        >
          <p className="text-xs text-gray-400 leading-loose">
            ※「以降のご予約をお断りいたします」とは、当店との施術のご縁を終了することを意味します。<br/>
            ルールを設けているのは、罰のためではありません。枠を押さえたまま来られない方がいると、その時間を本当に必要としている別の誰かが機会を失うからです。<br/>
            この限られた時間を大切にしていただければ幸いです。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
