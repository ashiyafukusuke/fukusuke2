"use client";
export default function Trust() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-[#FAFAFA] text-[#1A1A1A] border-t border-neutral-200">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 text-left">
        <div className="rv rv-d1">
          <h3 className="font-bold text-xl md:text-2xl mb-6 text-[#1A1A1A] border-l-[3px] border-[#3C4A3E] pl-4">
            初回の方へ（安心の体験）
          </h3>
          <p className="text-sm md:text-base font-light leading-loose text-neutral-800">
            初回限定のお試し割引は設けておりません。代わりに、片足の施術が終わるまでに「合わない」と感じられた場合は、全額返金にて対応させていただきます。まずは片足をしっかりご体験くださいね。
          </p>
        </div>
        <div className="rv rv-d2">
          <h3 className="font-bold text-xl md:text-2xl mb-6 text-[#1A1A1A] border-l-[3px] border-[#3C4A3E] pl-4">
            ご予約の変更・キャンセルについて
          </h3>
          <p className="text-sm md:text-base font-light leading-loose text-neutral-800">
            ご予定の変更はできる限り柔軟に対応させていただきます。他のお客様のご案内枠確保のため、ルールへのご理解とご協力をお願い申し上げます。どうぞ焦らずゆったりとお越しくださいませ。
          </p>
        </div>
      </div>
    </section>
  );
}
