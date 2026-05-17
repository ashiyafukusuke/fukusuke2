"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const LINE_URL = "https://line.me/R/ti/p/@055thsak";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const MessageContent = () => (
  <div className="space-y-8 text-foreground leading-relaxed max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">

    {/* イントロ */}
    <div>
      <h3 className="text-lg font-bold text-primary mb-3 border-b border-primary/20 pb-2">足屋「福助」の哲学</h3>
      <p className="mb-4">はじめまして、足屋「福助」の店主です。</p>
      <p className="mb-4">
        毎日のように頭が重たく、思考がぐちゃぐちゃになってしまう方。溜まった疲れをリセットして、心身ともにスッキリしたい方。そんな方々の足を深く丁寧に解きほぐすことが、私の何よりの喜びです。
      </p>
      <p className="mb-4">
        現代の私たちは、まだ身体が最適化されていない過剰な情報社会の中で生きています。<br />
        スマホ、PC、絶え間ない通知、締め切り、複雑な人間関係……。常に「ON」のスイッチを押しっぱなしにしている私たちは、無意識のうちに「見えない鎧」を着込んでしまっています。
      </p>
      <p>足屋「福助」は、その鎧を「足」からそっとほどいていく場所です。</p>
    </div>

    {/* 反射区へのスタンス */}
    <div>
      <h3 className="text-lg font-bold text-primary mb-3 border-b border-primary/20 pb-2">反射区とメカニズムへのスタンス</h3>
      <p className="mb-4">私は、特定の反射区をピンポイントで押して「特定の不調を治す」ことにはこだわりません。</p>

      <div className="bg-[#FDFBF7] border border-[#EAE4D9] rounded-xl p-5 mb-4 space-y-4">
        <div>
          <p className="text-xs font-bold text-[#a63c44] mb-1 tracking-wider">慣習的な表現（伝統的視点）</p>
          <p>古くから、足裏は全身を映し出す鏡（反射区）であると伝えられてきました。この教えは、自分の身体のどこに負担がかかっているかを知るための、優れた「感性の地図」として機能しています。</p>
        </div>
        <div>
          <p className="text-xs font-bold text-[#a63c44] mb-1 tracking-wider">事実に基づく表現（科学的・解剖学的視点）</p>
          <p>現代科学において、特定の部位への刺激が直接的に内臓を治療するというエビデンスは十分ではありません。しかし、体性自律神経反射という観点では、足裏への物理的刺激が脊髄を通じて脳や自律神経系に伝わり、全身に影響を与えることは解剖学的にも説明が可能です。</p>
        </div>
      </div>

      <p>
        私は「ここを押せばこの内臓が良くなる」という直接的な因果関係を目的とはしません。それよりも、足全体を深く丁寧に刺激することで、自然と副交感神経を優位にし、意識が「ふっと」溶けていくような無意識のリセット状態へ導くことを大切にしています。
      </p>
    </div>

    {/* 体感できる価値 */}
    <div>
      <h3 className="text-lg font-bold text-primary mb-3 border-b border-primary/20 pb-2">体感できる「リセット」の価値</h3>
      <p className="mb-4">
        実際に施術を受けていただくと、足裏が気持ちよくほぐれるにつれて、身体がポカポカと温まるのを感じるはずです。
      </p>
      <p className="mb-4">
        それは、血流が促され、強張っていた筋肉が緩み始めた証拠です。気づいたときには頭の中のノイズが消え、足裏だけでなく、首や肩、腰までもが軽くなったような感覚——。
      </p>
      <p>
        この「意識が溶けるような深い休息」を呼び起こすことこそが、足屋「福助」の本質です。
      </p>
    </div>

    {/* 最後に */}
    <div>
      <h3 className="text-lg font-bold text-primary mb-3 border-b border-primary/20 pb-2">最後に</h3>
      <p className="mb-4">
        このページを最後まで読んでくださったあなたは、きっとルールを尊重し、互いに気持ちの良い時間を過ごせる素敵な方なのだと思います。
      </p>
      <p className="mb-4">
        私もひとりの人間です。誰の足でもいいわけではなく、あなたのように、自らの身体を整える価値を理解してくださる方にこそ、最高のリセットをお届けしたいと考えています。
      </p>
      <p>少し生意気な店主ではございますが、足屋「福助」にて、あなたにお会いできるのを楽しみにしております。</p>
    </div>

    <p className="text-primary font-bold text-xl text-right mt-4">足屋「福助」店主</p>
  </div>
);

const OLD_MAP_ITEMS = [
  { 
    title: "頭が重い", bad1: "ズーンと重い", bad2: "頭が回らない", good: "ズーンとした重さがふっと抜け、意識が溶けるようなスッキリ感が広がります。頭が空っぽになる感覚を。", 
    img: "card_ill_head.png", target: "head"
  },
  { 
    title: "目が疲れる", bad1: "ショボショボする", bad2: "視界がかすむ", good: "視界がパッと明るく拓け、目元の重みがふっと溶けていきます。", 
    img: "card_ill_eye.png", target: "eye"
  },
  { 
    title: "首が回らない", bad1: "首筋が張る", bad2: "スマホ首がつらい", good: "首から肩にまとわりつく緊張がふっと抜け、本来の軽やかさを取り戻します。", 
    img: "card_ill_neck.png", target: "neck"
  },
  { 
    title: "肩こり", bad1: "肩が重石のよう", bad2: "腕が上がりにくい", good: "背負い込んだ重荷がふっと溶け落ち、羽が生えたような軽やかさに。", 
    img: "card_ill_shoulder.png", target: "shoulder"
  },
  { 
    title: "背中が張る", bad1: "背中がガチガチ", bad2: "息苦しさを感じる", good: "ガチガチの背中がふっと緩み、胸の奥底から息が抜けるように。", 
    img: "card_ill_back.png", target: "back"
  },
  { 
    title: "ストレス・緊張", bad1: "イライラする", bad2: "気が休まらない", good: "張り詰めた緊張がふっと溶け、全身が空っぽになるような安らぎを。", 
    img: "card_ill_stress.png", target: "stress"
  },
  { 
    title: "だるさ・むくみ", bad1: "足がパンパン", bad2: "体が重だるい", good: "溜め込んだ余分な重みがふっと抜け、靴がゆるく感じるほどの軽やかな足元へ。", 
    img: "card_ill_swelling.png", target: "swelling"
  },
  { 
    title: "胃もたれ", bad1: "食欲がわかない", bad2: "お腹が重い", good: "胃のあたりの重苦しさがふっと溶け、じんわりと温まります。", 
    img: "card_ill_stomach.png", target: "stomach"
  },
  { 
    title: "お腹がスッキリしない", bad1: "便秘ぎみ・張る", bad2: "ガスがたまる", good: "お腹の張りがふっと抜け、内側から滞りが溶け出す感覚が。", 
    img: "card_ill_intestine.png", target: "intestine"
  },
  { 
    title: "お酒の抜けが悪い", bad1: "翌朝がつらい", bad2: "体がダル重い", good: "どんよりとしたダルさがふっと抜け、意識がシャキッと澄み渡ります。", 
    img: "card_ill_liver.png", target: "liver"
  },
  { 
    title: "心がざわつく", bad1: "不安・ソワソワ", bad2: "眠りが浅い", good: "胸のざわつきがふっと溶け、頭の奥から安らぎに包まれます。", 
    img: "card_ill_heart.png", target: "heart"
  },
  { 
    title: "呼吸が浅い", bad1: "ため息が多い", bad2: "胸が詰まる感じ", good: "詰まりがふっと抜け、肺の奥底まで空気が美味しく届きます。", 
    img: "card_ill_lung.png", target: "lung"
  }
];

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/fukusuke_icon.png" alt="福助ロゴ" className="w-12 h-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-[10px] text-primary font-bold tracking-widest -mb-1">足揉み専門店</span>
              <div className="font-bold text-xl tracking-wider text-foreground">
                足屋「福助」
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#concept" className="hover:text-primary transition-colors">コンセプト</a>
            <a href="#pricing" className="hover:text-primary transition-colors">料金</a>
            <a href="#flow" className="hover:text-primary transition-colors">施術の流れ</a>
            <a href="#map" className="hover:text-primary transition-colors">改善ヒント</a>
            <a href="#access" className="hover:text-primary transition-colors">アクセス</a>
            <Button asChild size="sm" className="ml-2 bg-primary hover:bg-primary/90 text-white rounded-full">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">LINE予約</a>
            </Button>
          </nav>

          <Button variant="outline" size="sm" className="md:hidden border-primary/20 text-foreground" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? '閉じる' : 'メニュー'}
          </Button>
        </div>
        {/* Mobile Nav */}
        {isNavOpen && (
          <nav className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 text-sm font-medium shadow-md">
            <a href="#concept" onClick={() => setIsNavOpen(false)}>コンセプト</a>
            <a href="#pricing" onClick={() => setIsNavOpen(false)}>料金</a>
            <a href="#flow" onClick={() => setIsNavOpen(false)}>施術の流れ</a>
            <a href="#map" onClick={() => setIsNavOpen(false)}>改善ヒント</a>
            <a href="#access" onClick={() => setIsNavOpen(false)}>アクセス</a>
            <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90 text-white rounded-full">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">LINE予約</a>
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-20 relative">
        {/* Global scattered logo pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('/images/fukusuke_icon.png')", backgroundSize: "150px" }} />
        
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
          {/* Warm background texture/gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFFFFF,_#FDFBF7)] opacity-80" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30" />
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="container relative z-10 px-4 text-center md:text-left max-w-4xl pt-10"
          >
            <div className="flex justify-center md:justify-start mb-6">
              <img src="/images/fukusuke_icon.png" alt="福助" className="w-32 h-32 md:w-40 md:h-40 object-contain animate-[bounce_3s_ease-in-out_infinite]" style={{ animationDuration: '4s' }} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-snug tracking-tight mb-8 text-[#3A3532] break-keep">
              足から意識をふっと溶かす、痛気持ちいい刺激。<br />
              それが、足屋「福助」です。
            </h1>
            <p className="text-lg md:text-xl text-[#7A736E] mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed break-keep">
              足屋「福助」で過ごす時間は、現代社会で知らず知らずのうちに着込んでしまった見えない鎧を剥がして本来の身軽さを取り戻す時間です。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base bg-primary hover:bg-primary/90 text-white rounded-full shadow-md hover:shadow-lg transition-all h-14 px-8">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">今すぐ予約する</a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* 2. Concept Section */}
        <section id="concept" className="py-24 bg-card relative">
          <div className="absolute inset-0 bg-[url('/assets/img/motifs_nature.png')] bg-repeat opacity-[0.03]" />
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container relative z-10 px-4 max-w-3xl text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-8 text-primary flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
              福助の想い
              <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
            </h2>
            <p className="text-lg leading-relaxed text-[#5C5550] mb-10 text-left inline-block max-w-2xl mx-auto md:mx-0">
              現代の私たちは、常にONのスイッチを押し続け、無意識に「見えない鎧」を着込んでしまっています。<br className="hidden md:block" />
              福助では、身体の中で一番遠い場所である「足」から優しく、時に深く刺激を入れることで、
              その見えない鎧をほどいていきます。<br className="hidden md:block" />奥底から緊張が連鎖的に解け、
              「ふっと」意識が溶けるような解放感を味わってください。
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="lg" className="bg-[#E5D3B3] hover:bg-[#D8C3A5] text-[#3A3532] rounded-full h-14 px-10 shadow-sm transition-all">
                  福助の哲学
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] bg-[#FDFBF7] text-[#3A3532] border-[#EAE4D9]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4 text-primary">足屋「福助」の哲学</DialogTitle>
                </DialogHeader>
                <MessageContent />
              </DialogContent>
            </Dialog>
          </motion.div>
        </section>

        {/* 3. Pricing Section */}
        <section id="pricing" className="py-24 bg-[#FDFBF7]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 max-w-5xl"
          >
            <div className="text-center md:text-left mb-16">
              <h2 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center md:justify-start gap-3">
                <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
                料金のご案内
                <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
              </h2>
              <p className="text-[#7A736E]">
                当店は「枠単位」の予約制です。<br className="hidden md:block"/>
                ご予約いただいた時間は、お客様のためだけに確保された専有時間です。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto md:mx-0">
              {[
                { title: "30分枠　試しほどき", time: "30分枠", price: "3,500円", desc: "「福助」の技術と空気感に触れていただくための入り口。まずは重い鎧のボタンを外すところから。" },
                { title: "60分枠　福助の足揉み", time: "60分枠", price: "6,500円", desc: "全身をリセットし、意識を溶かすための黄金比。迷ったら、こちらをお選びください。", popular: true }
              ].map((plan, idx) => (
                <div key={idx} className={`bg-white p-8 rounded-[2rem] flex flex-col ${plan.popular ? 'border-2 border-primary relative shadow-lg transform md:-translate-y-2' : 'border border-[#EAE4D9] shadow-sm'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md tracking-wider">
                      おすすめ・メイン
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-center md:text-left text-[#3A3532] mt-2">{plan.title.split('　')[1]}</h3>
                  <div className="text-center md:text-left mb-6 pb-6 border-b border-[#EAE4D9] border-dashed">
                    <span className="text-lg text-[#7A736E] mr-2">{plan.time}</span>
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-[#5C5550] leading-relaxed flex-grow text-center md:text-left">{plan.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA below pricing */}
            <div className="mt-12 text-center md:text-left">
              <p className="text-[#7A736E] mb-6 text-base">
                ご不明な点はLINEでお気軽にご相談ください。<br className="hidden md:block" />
                ご予約も24時間LINEにて受け付けております。
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-full shadow-[0_4px_15px_rgba(166,60,68,0.25)] hover:shadow-[0_6px_25px_rgba(166,60,68,0.35)] transition-all">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">LINEで予約・お問い合わせ</a>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* 4. Rules Section */}
        <section className="py-24 bg-card border-t border-[#EAE4D9]">
          <div className="container px-4 max-w-4xl">
            <div className="space-y-8">
              {/* 初回の方へ */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border-2 border-[#E5D3B3] shadow-sm relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 opacity-10">
                  <img src="/images/fukusuke_icon.png" alt="" className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-primary">初回全額返金保証（全コース対象）</h3>
                <p className="text-lg leading-relaxed text-[#5C5550] relative z-10 md:text-left text-center">
                  施術を受けて「自分には合わない」と感じられた場合は、初回の料金を全額お返しいたします。
                </p>
              </div>

              {/* 継続特典 */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#EAE4D9] shadow-sm relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-[#3A3532]">継続特典（60分枠限定）</h3>
                <div className="bg-[#FDFBF7] p-6 md:p-8 rounded-xl border border-[#EAE4D9] text-center md:text-left mb-8">
                  <div className="space-y-4 max-w-md mx-auto md:mx-0 text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAE4D9] border-dashed pb-4">
                      <span className="font-bold text-[#5C5550] text-lg mb-1 sm:mb-0">2回目〜5回目</span>
                      <div className="text-right md:text-left flex-grow sm:text-right md:ml-4">
                        <span className="text-2xl font-bold text-primary mr-1">5,500<span className="text-lg">円</span></span>
                        <span className="text-xs text-[#7A736E] block sm:inline-block sm:ml-2">（通常6,500円 → <strong className="text-primary/80">1,000円OFF</strong>）</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1">
                      <span className="font-bold text-[#5C5550] text-lg mb-1 sm:mb-0">6回目以降</span>
                      <div className="text-right md:text-left flex-grow sm:text-right md:ml-4">
                        <span className="text-2xl font-bold text-primary mr-1">5,000<span className="text-lg">円</span></span>
                        <span className="text-xs text-[#7A736E] block sm:inline-block sm:ml-2">（さらに<strong className="text-primary/80">500円OFF</strong>）</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 text-[#5C5550] leading-relaxed relative z-10 text-center md:text-left">
                  <p>将来的には、30分枠のご利用状況を見ながら、継続特典を広げていく予定です。</p>
                  <p className="text-sm text-[#7A736E] opacity-80">（現在は60分枠のみが継続特典の対象となります）</p>
                </div>
              </div>

              {/* ご予約の変更・キャンセル */}
              <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2rem] border border-[#EAE4D9]">
                <h3 className="text-xl font-bold mb-6 text-center md:text-left text-[#3A3532]">ご予約の変更・キャンセル</h3>
                <p className="text-[#7A736E] mb-6 leading-relaxed text-center md:text-left">
                  ご予定の変更はできる限り柔軟に対応させていただきますが、他のお客様のご案内枠確保のため、以下のルールをご了承くださいませ。
                </p>
                <ul className="space-y-3 text-[#5C5550]">
                  <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#EAE4D9]">
                    <span className="text-primary font-bold">・</span>
                    <span>当日キャンセル：料金の50％<br/><span className="text-xs text-[#7A736E]">（※当日の時間変更は空きがあれば無料で可能です）</span></span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-3 rounded-lg border border-[#EAE4D9]">
                    <span className="text-primary font-bold">・</span>
                    <span>ご連絡のない無断キャンセル：料金の100％</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Flow Section */}
        <section id="flow" className="py-24 bg-background">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-12 text-center md:text-left text-primary flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
              施術の流れ
              <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
            </h2>
            <div className="bg-card p-8 md:p-12 rounded-[2rem] border border-[#EAE4D9] shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-5">
                <img src="/images/fukusuke_icon.png" alt="" className="w-40 h-40" />
              </div>
              <p className="text-[#7A736E] mb-10 text-center md:text-left relative z-10">
                当店の施術は「枠単位制」。入室から退室までを余裕を持ってお過ごしいただけるお時間です。<br className="hidden md:block"/>
                見えない鎧を脱ぎ捨てて、ゆったりと頭を空っぽにしてください。
              </p>
              <ul className="space-y-6 relative z-10">
                {[
                  "LINEで枠を予約",
                  "時間に合わせて来店（着替え・準備）",
                  "足全体を優しくほぐし開始（強さ調整します）",
                  "途中から体がふっと緩んで頭が空っぽに…",
                  "枠内でスッキリ終了"
                ].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-5 bg-background p-4 rounded-2xl border border-[#EAE4D9]">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                      {idx + 1}
                    </span>
                    <span className="text-lg text-[#3A3532] font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* 4. Map Section */}
        <section id="map" className="py-24 bg-[#FDFBF7] relative">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container relative z-10 px-4"
          >
            <div className="text-center md:text-left mb-16">
              <h2 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center md:justify-start gap-3">
                <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
                福助の改善ヒント
                <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
              </h2>
              <div className="text-[#7A736E] text-left max-w-2xl mx-auto md:mx-0 space-y-4">
                <p>足を丁寧にほぐしたときに、多くの方が「ここが緩んだ」と感じやすいポイントを、感覚ベースでまとめたものです。</p>
                <p>私たちは反射区理論を盲信しているわけではありません。<br />
                星座や占いを楽しむように、「自分を知るためのひとつの物差し」として参考にするのは、とても有意義で面白いことだと考えています。</p>
                <p>たとえば、僧帽筋の反射区（指の付け根付近）が硬い方は、デスクワークによる前傾姿勢などで足の重心バランスが崩れ、結果としてその部位にコリや張りが現れやすい傾向があります。</p>
                <p>このマップは、特定の反射区をピンポイントで狙うものではなく、足全体を深くほぐすことで身体の奥底から「ふっと」リセットされる感覚を味わうためのヒントです。</p>
                <p className="text-sm opacity-80">あくまで「こんな体感があるかも」という目安としてお読みください。<br />
                科学的に証明されたものではありません。</p>
              </div>
            </div>

            <div className="card-grid">
              {OLD_MAP_ITEMS.map((item, idx) => (
                <div key={idx} className="flip-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
                  <div className="flip-card-inner">
                    <div className="card-front">
                      <div className="card-illustration"><img src={`/assets/img/${item.img}`} alt={item.title} /></div>
                      <h3>{item.title}</h3>
                      <div className="card-desc">
                        <ul>
                          <li>{item.bad1}</li>
                          <li>{item.bad2}</li>
                        </ul>
                      </div>
                      <div style={{ marginTop: 'auto', paddingTop: '1rem', width: '100%', textAlign: 'center' }}>
                        <span className="inline-block text-[10px] text-[#a63c44] border border-[#a63c44] rounded-full px-3 py-1 font-bold">
                          タップで裏返す ↺
                        </span>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="css-footprint-container" data-target={item.target}>
                        <div className="css-foot-body"></div>
                        <div className="css-toe css-toe-1"></div><div className="css-toe css-toe-2"></div><div className="css-toe css-toe-3"></div><div className="css-toe css-toe-4"></div><div className="css-toe css-toe-5"></div>
                        <div className={`reflex-spot spot-${item.target}`}></div>
                      </div>
                      <h4>改善後の体感</h4>
                      <p>{item.good}</p>
                      <div style={{ marginTop: 'auto', paddingTop: '1rem', width: '100%', textAlign: 'center' }}>
                        <span className="inline-block text-[10px] text-[#111111] opacity-60 px-3 py-1 font-bold">
                          戻る ↺
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll hint indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex gap-2 text-primary/50 text-sm animate-pulse items-center">
                <span className="text-lg">←</span> 横にスクロールできます <span className="text-lg">→</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 7. Access Section */}
        <section id="access" className="py-24 bg-card relative">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container relative z-10 px-4 max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-12 text-center md:text-left text-primary flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
              アクセス・営業時間
              <span className="w-8 h-px bg-primary/30 hidden sm:block md:hidden"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Access info */}
              <div className="bg-white p-8 rounded-[2rem] border border-[#EAE4D9] shadow-sm space-y-6">
                <div>
                  <p className="text-xs font-bold text-primary tracking-widest mb-2">所在地</p>
                  <p className="text-lg font-bold text-[#3A3532]">西東京市ひばりが丘</p>
                  <p className="text-sm text-[#7A736E] mt-1">（詳細住所は近日公開予定）</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary tracking-widest mb-2">営業時間</p>
                  <p className="text-[#5C5550]">近日公開予定</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary tracking-widest mb-2">ご予約方法</p>
                  <p className="text-[#5C5550]">LINEにて24時間受付</p>
                </div>
              </div>
              {/* Google review */}
              <div className="bg-white p-8 rounded-[2rem] border border-[#EAE4D9] shadow-sm flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl">⭐</div>
                <div>
                  <p className="font-bold text-[#3A3532] mb-2">お客様の声</p>
                  <p className="text-sm text-[#7A736E] leading-relaxed">
                    実際にご来店されたお客様の生のご感想は、<br />Googleレビューでご確認いただけます。
                  </p>
                </div>
                <Button asChild variant="secondary" size="lg" className="bg-[#E5D3B3] hover:bg-[#D8C3A5] text-[#3A3532] rounded-full h-12 px-8 shadow-sm transition-all">
                  <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer">Googleで口コミを見る</a>
                </Button>
                <p className="text-xs text-[#7A736E] opacity-60">※ Googleビジネスプロフィール登録後にリンクを更新します</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 8. Final CTA Section */}
        <section className="py-24 bg-[#FDFBF7] border-t border-[#EAE4D9]">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 text-center md:text-left max-w-2xl"
          >
            <div className="flex justify-center md:justify-start mb-8">
              <img src="/images/fukusuke_icon.png" alt="福助" className="w-24 h-24 object-contain opacity-90" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-[#3A3532]">さあ、見えない鎧を脱ぎ捨てましょう</h2>
            <p className="text-[#5C5550] mb-10 leading-relaxed text-lg">
              ご予約はLINEより24時間受け付けております。<br />
              あなたの足をお揉みできる日を、楽しみにお待ちしております。
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto text-lg h-16 px-10 bg-primary hover:bg-primary/90 text-white rounded-full shadow-[0_4px_15px_rgba(166,60,68,0.3)] hover:shadow-[0_6px_25px_rgba(166,60,68,0.4)] transition-all">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">今すぐLINEで予約する</a>
            </Button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-[#EAE4D9]">
        <div className="container px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/images/fukusuke_icon.png" alt="福助ロゴ" className="w-12 h-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
          </div>
          <div className="font-bold text-lg mb-4 text-[#7A736E] tracking-widest">足屋「福助」</div>
          <p className="text-xs text-[#7A736E] opacity-60">&copy; 2026 足屋 福助. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
