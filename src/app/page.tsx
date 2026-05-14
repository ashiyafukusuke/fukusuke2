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
  <div className="space-y-6 text-foreground leading-relaxed max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
    <p>はじめまして、足屋の福助です。</p>

    <p>毎日のように頭が重たくて、思考がぐちゃぐちゃになる人たちや、足の疲れを取ってスッキリしたい。<br />
    そんな人たちの足をほぐすのが大好きなので、この場所を作りました。</p>

    <p>現代の私たちは、まだ身体が最適化されていない社会で生きています。<br />
    スマホ、PC、通知、締め切り、人間関係……常にONのスイッチを押しっぱなしにしている。<br />
    その結果、無意識のうちに「見えない鎧」を着込んでしまっているのです。</p>

    <p>足屋「福助」では、そんな鎧を足からそっとほどくことをしています。</p>

    <p>昔からの足つぼの考え方を参考にはしていますが、私は特定の反射区をピンポイントで押すことにはこだわりません。</p>

    <p>反射区理論は、現代科学において明確なエビデンスがまだ十分ではないとされていますし、私自身もそう感じます。一方で、体性自律神経反射という観点では、足裏が全身に影響を与えやすい特別な部位であることは、多くの足揉みの経験からも強く実感しています。</p>

    <p>私は「ここを押せばこの内臓が良くなる」という直接的な因果関係を目的とした施術は行いません。<br />
    足全体を深く丁寧に刺激することで、自然と副交感神経が優位になり、意識が「ふっと」緩んでいく無意識状態へと導かれる感覚を大切にしています。</p>

    <p>実際に施術を受けていただくと、足裏が気持ちよくほぐれるにつれて身体がポカポカと温まり、血が巡るような心地よさを感じ、気づいたときには頭の中が空っぽになり、足裏だけではなく、首や肩や腰、つまり全身が軽くなったようなスッキリ感を感じて頂ける方も多くいらっしゃいます。そして心まで明るくなる——それが、私が足揉みを通して最も価値があると感じている体験です。</p>

    <p>この「意識が溶けるような深い休息」を、足から丁寧に呼び起こすことが、足屋「福助」の本質だと考えています。</p>

    <p>このページを読んでくださっているあなたは、<br />
    きっとルールを理解して、気持ち良く過ごしてくださる素敵な方だと思います。</p>

    <p>私も人間なので、誰の足でも揉みたいわけではありません。<br />
    私が最高のリセットをお届けしたいのは、あなたのようなお客様です。</p>

    <p>生意気な店主が開いた足揉み専門店ではございますが、<br />
    足屋「福助」を、どうぞよろしくお願いいたします。</p>

    <p className="text-primary font-bold text-xl text-right mt-8">福助</p>
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
            <a href="#flow" className="hover:text-primary transition-colors">施術の流れ</a>
            <a href="#map" className="hover:text-primary transition-colors">リセットマップ</a>
            <a href="#voice" className="hover:text-primary transition-colors">お客様の声</a>
            <a href="#pricing" className="hover:text-primary transition-colors">料金</a>
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
            <a href="#flow" onClick={() => setIsNavOpen(false)}>施術の流れ</a>
            <a href="#map" onClick={() => setIsNavOpen(false)}>リセットマップ</a>
            <a href="#voice" onClick={() => setIsNavOpen(false)}>お客様の声</a>
            <a href="#pricing" onClick={() => setIsNavOpen(false)}>料金</a>
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
            className="container relative z-10 px-4 text-center max-w-4xl pt-10"
          >
            <div className="flex justify-center mb-6">
              <img src="/images/fukusuke_icon.png" alt="福助" className="w-32 h-32 md:w-40 md:h-40 object-contain animate-[bounce_3s_ease-in-out_infinite]" style={{ animationDuration: '4s' }} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-snug tracking-tight mb-8 text-[#3A3532] break-keep">
              足から意識をふっと溶かす、痛気持ちいい刺激。<br />
              それが、足屋「福助」です。
            </h1>
            <p className="text-lg md:text-xl text-[#7A736E] mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
              足屋「福助」で過ごす時間は、現代社会で知らず知らずのうちに着込んでしまった見えない鎧を剥がして本来の身軽さを取り戻す時間です。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="container relative z-10 px-4 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-primary flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
              福助の想い
              <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
            </h2>
            <p className="text-lg leading-relaxed text-[#5C5550] mb-10 text-left inline-block max-w-2xl mx-auto">
              現代の私たちは、常にONのスイッチを押し続け、無意識に「見えない鎧」を着込んでしまっています。<br className="hidden md:block" />
              福助では、身体の中で一番遠い場所である「足」から優しく、時に深く刺激を入れることで、
              その見えない鎧をほどいていきます。<br className="hidden md:block" />奥底から緊張が連鎖的に解け、
              「ふっと」意識が溶けるような解放感を味わってください。
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="lg" className="bg-[#E5D3B3] hover:bg-[#D8C3A5] text-[#3A3532] rounded-full h-14 px-10 shadow-sm transition-all">
                  福助の想いをもっと知る
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] bg-[#FDFBF7] text-[#3A3532] border-[#EAE4D9]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4 text-primary">福助からのメッセージ</DialogTitle>
                </DialogHeader>
                <MessageContent />
              </DialogContent>
            </Dialog>
          </motion.div>
        </section>

        {/* 3. Flow Section */}
        <section id="flow" className="py-24 bg-background">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-primary flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
              施術の流れ
              <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
            </h2>
            <div className="bg-card p-8 md:p-12 rounded-[2rem] border border-[#EAE4D9] shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-5">
                <img src="/images/fukusuke_icon.png" alt="" className="w-40 h-40" />
              </div>
              <p className="text-[#7A736E] mb-10 text-center relative z-10">
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
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
                福助の改善ヒント
                <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
              </h2>
              <div className="text-[#7A736E] text-left max-w-2xl mx-auto space-y-4">
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

        {/* 5. Voice Section */}
        <section id="voice" className="py-24 bg-card relative">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container relative z-10 px-4 max-w-5xl"
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-primary flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
              お客様の声
              <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
            </h2>
            <div className="flex overflow-x-auto snap-x snap-mandatory custom-scrollbar gap-8 pb-8 px-4 -mx-4 md:px-0 md:mx-0">
              {[
                { quote: "「頭がスッキリして、いつの間にか寝落ちしちゃいました（笑）」", author: "30代 IT企業勤務", reply: "ありがとうございます！頭が空っぽになった瞬間、最高に幸せですよね。また深い眠りをお届けします♪" },
                { quote: "「足だけじゃなくて、目や肩までパッと明るくなった気がします。」", author: "40代 デザイナー", reply: "目がお疲れでしたね。足指から繋がる感覚を実感いただけて嬉しいです。視界のリセット、お任せください。" },
                { quote: "「枠単位制が分かりやすくて、遅刻の不安なく通えるのがありがたいです。」", author: "30代 事務職", reply: "誠実な方にこそ、ゆったり通っていただきたい…その想いが伝わって嬉しいです。お待ちしております！" }
              ].map((voice, idx) => (
                <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[350px] snap-center bg-[#FDFBF7] p-8 rounded-[2rem] border border-[#EAE4D9] flex flex-col h-full shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="absolute top-4 left-4 text-4xl text-[#E5D3B3] opacity-50 font-serif">"</div>
                  <div className="flex-grow relative z-10 mt-4 whitespace-normal">
                    <p className="text-lg mb-4 leading-relaxed font-medium text-[#3A3532]">"{voice.quote}"</p>
                    <p className="text-sm text-[#7A736E] mb-8 text-right">— {voice.author}</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-[#EAE4D9] mt-auto relative">
                    <div className="absolute -top-3 left-4 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">福助より</div>
                    <p className="text-sm text-[#5C5550] leading-relaxed pt-2 whitespace-normal">{voice.reply}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll hint indicator */}
            <div className="flex justify-center mt-2 md:hidden">
              <div className="flex gap-2 text-primary/50 text-sm animate-pulse items-center">
                <span className="text-lg">←</span> 横にスクロールできます <span className="text-lg">→</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 6. Pricing Section */}
        <section id="pricing" className="py-24 bg-[#FDFBF7]">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 max-w-5xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
                料金のご案内
                <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
              </h2>
              <p className="text-[#7A736E]">
                当店のメニューは「枠単位制」です。表示時間にはお着替えや準備の時間も含まれます。<br className="hidden md:block"/>
                万が一遅刻された場合でも、その枠内での施術となりますのでご安心ください。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "お試し福助", time: "30分枠", price: "3,500円", desc: "足首より下を中心に。初めての方でも気軽に当店の足揉みを体感できるクイックコース" },
                { title: "福助の足揉み", time: "60分枠", price: "6,500円", desc: "当店一番人気・至高のリセット。足首から膝上・膝裏まで丁寧に。全身の緊張をほどき、意識が溶けるような心地よさを十分に味わえる標準コース", popular: true },
                { title: "福助ロング", time: "90分枠", price: "9,000円", desc: "60分でも十分に満足いただけますが、もっと深く、長く味わいたい方へ。足全体をじっくり巡らせ、深いリラックスとリセットを堪能できるコース" }
              ].map((plan, idx) => (
                <div key={idx} className={`bg-white p-8 rounded-[2rem] flex flex-col ${plan.popular ? 'border-2 border-primary relative shadow-lg transform md:-translate-y-2' : 'border border-[#EAE4D9] shadow-sm'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md tracking-wider">
                      おすすめ
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-3 text-center text-[#3A3532] mt-2">{plan.title}</h3>
                  <div className="text-center mb-6 pb-6 border-b border-[#EAE4D9] border-dashed">
                    <span className="text-lg text-[#7A736E] mr-2">{plan.time}</span>
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-[#5C5550] leading-relaxed flex-grow text-center">{plan.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 7. Rules Section */}
        <section className="py-24 bg-card border-t border-[#EAE4D9]">
          <div className="container px-4 max-w-4xl">
            <div className="space-y-8">
              {/* 初回の方へ */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border-2 border-[#E5D3B3] shadow-sm relative overflow-hidden">
                <div className="absolute -bottom-6 -right-6 opacity-10">
                  <img src="/images/fukusuke_icon.png" alt="" className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">初回の方へ（初回全額返金保証付き）</h3>
                <p className="text-lg leading-relaxed text-[#5C5550] relative z-10">
                  初回限定のお試し割引は設けておりません。<br className="hidden md:block" />
                  代わりに、<strong className="text-primary border-b border-primary pb-0.5">片足の施術が終わるまでに</strong>「合わない」と感じられた場合は、全額返金にて対応させていただきます。<br className="hidden md:block" />
                  まずは片足をしっかりご体験いただき、ご自身に合うかどうかをご判断くださいね。
                </p>
              </div>

              {/* 継続特典 */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#EAE4D9] shadow-sm relative overflow-hidden">
                <h3 className="text-2xl font-bold mb-6 text-center text-[#3A3532]">継続特典</h3>
                <div className="space-y-4 text-[#5C5550] leading-relaxed relative z-10 mb-8">
                  <p>当店は、リラクゼーション業界でよく見られる「ご新規様だけが極端に安い」仕組みに疑問を感じています。</p>
                  <p>日々足を運んでくださる皆さまを、一番大切にしたいと考えています。</p>
                  <p>そのため、新規価格は設けていません。<br />
                  「初めてだと自分に合うかどうか試すのが不安」というお気持ちはよくわかりますので、その解決策として「合わなければ初回全額返金制度」を設けています。</p>
                </div>

                <div className="bg-[#FDFBF7] p-6 md:p-8 rounded-xl border border-[#EAE4D9] text-center mb-8">
                  <span className="inline-block bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full mb-5 shadow-sm tracking-wider">60分枠限定・継続特典</span>
                  
                  <div className="space-y-4 max-w-md mx-auto text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAE4D9] border-dashed pb-4">
                      <span className="font-bold text-[#5C5550] text-lg mb-1 sm:mb-0">2回目〜5回目</span>
                      <div className="text-right flex-grow sm:text-right">
                        <span className="text-2xl font-bold text-primary mr-1">5,500<span className="text-lg">円</span></span>
                        <span className="text-xs text-[#7A736E] block sm:inline-block sm:ml-2">（通常6,500円 → <strong className="text-primary/80">1,000円OFF</strong>）</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1">
                      <span className="font-bold text-[#5C5550] text-lg mb-1 sm:mb-0">6回目以降</span>
                      <div className="text-right flex-grow sm:text-right">
                        <span className="text-2xl font-bold text-primary mr-1">5,000<span className="text-lg">円</span></span>
                        <span className="text-xs text-[#7A736E] block sm:inline-block sm:ml-2">（さらに<strong className="text-primary/80">500円OFF</strong>）</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-[#5C5550] leading-relaxed relative z-10">
                  <p>将来的には、30分枠や90分枠のご利用状況を見ながら、それぞれの枠にも継続特典を広げていく予定です。</p>
                  <p className="text-sm text-[#7A736E] opacity-80">（現在は60分枠のみが継続特典の対象となります）</p>
                </div>
              </div>

              {/* ご予約の変更・キャンセル */}
              <div className="bg-[#FDFBF7] p-8 md:p-10 rounded-[2rem] border border-[#EAE4D9]">
                <h3 className="text-xl font-bold mb-6 text-center text-[#3A3532]">ご予約の変更・キャンセル</h3>
                <p className="text-[#7A736E] mb-6 leading-relaxed">
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

        {/* 8. Final CTA Section */}
        <section className="py-24 bg-[#FDFBF7] border-t border-[#EAE4D9]">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 text-center max-w-2xl"
          >
            <div className="flex justify-center mb-8">
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
