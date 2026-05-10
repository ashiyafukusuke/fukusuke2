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
    <p>はじめまして、足屋の福助です。<br />
    毎日のように頭が重たくて、思考がぐちゃぐちゃになる人たちや、足の疲れを取ってスッキリしたい。<br />
    そんな人たちの足をほぐすのが大好きなのでこの場所を作りました。<br />
    施術後のスッキリ顔を見ることが生きがいです。</p>

    <p>現代の私たちは、まだ身体が最適化されていない社会で生きています。<br />
    スマホ、PC、通知、締め切り、人間関係……常にONのスイッチを押しっぱなしにしている。<br />
    その結果、無意識のうちに「見えない鎧」を着込んでしまっているのです。</p>

    <p>この鎧は、肩をすくめ、首を縮め、頭をフル回転させ続けることで、<br />
    知らず知らずに重くなっていきます。<br />
    そして、気づいたときには「疲れた」「集中できない」「何もしたくない」<br />
    という状態に陥っている。</p>

    <p>足屋「福助」では、そんな鎧を足からほどくことをしています。</p>

    <h3 className="text-xl text-primary font-bold mt-8 mb-4 border-b-2 border-dashed border-primary/50 inline-block pb-2">なぜ「枠単位制」なのか？</h3>
    <p>従来の「60分いくら」という料金形態では、</p>
    <ul className="list-disc pl-6 space-y-2">
        <li>遅刻したら施術を受けられなくなる</li>
        <li>前の人が遅刻したせいで時間が押してしまって、時間通りに来てくださったお客様の施術開始時間が遅くなる</li>
    </ul>
    <p>ということが起きがちでした。<br />
    私は時間やルールを守ってくださるお客様が、守らない方のせいで損をする状況が施術者として不満でした。</p>

    <p>「ゆったりと、心地よく、頭を空っぽに」してほしい。<br />
    だからこそ、<strong>「足揉み60分」をご予約いただくのではなく「60分という時間を固定」</strong>し、<br />
    ご予約頂けるようにしました。</p>

    <p>これで、ルールを守ってくださる方は損をしません。<br />
    また、普段ルールをお守りいただいている方でも、突発的に守れなくなる状況が生まれることもあるでしょう。<br />
    そういった際にも、遅刻しても後ろの方に影響も出ないし、遅刻して申し訳ないと思う必要もありません。</p>

    <p>例えば、15時～16時、の60分をご予約いただいた場合。15時にご来店されると15時55分前後まで施術できます。<br />
    15時半に来ていただいた場合でも同じように15時55分頃まで施術ができます。<br />
    極端な状況ですが、15時45分に来たとしても10分は施術できます。</p>

    <h3 className="text-xl text-primary font-bold mt-8 mb-4 border-b-2 border-dashed border-primary/50 inline-block pb-2">なぜ反射区にこだわらないのか？</h3>
    <p>昔ながらの足つぼの考え方は尊重していますが、私は特定の反射区をピンポイントで押すことにはこだわりません。<br />
    足つぼを始めた頃から、反射区理論に科学的な裏付けが少ないことは知っていました。</p>

    <p>一方で、足の刺激が内臓の働きに影響を及ぼす可能性を示す「体性内臓反射」という生理現象もあることを学びました。<br />
    特に足裏は、他の部位よりも消化器系への影響が期待しやすい場所だと感じています。</p>

    <p>実際に施術を重ね、お客様の反応を一つひとつ見てきた結果、<br />
    「特定のツボを強く押す」ことよりも、足全体を深く、丁寧に揉み解すことにこそ意味があると気づきました。</p>

    <p>足は身体の中で一番遠い場所です。<br />
    そこからしっかり、でも優しく刺激を入れることで、<br />
    肩や首、頭の奥底まで緊張が連鎖的に解けていきます。</p>

    <p>痛いと感じる瞬間もあるけれど、その先には「ふっと」全身が軽くなり、<br />
    頭の中が空っぽになるような、意識が溶けるような心地よい解放感が待っています。</p>

    <p>これが、私が足つぼを続けてきてたどり着いた、一番大切な答えです。<br />
    だからこそ、今は「足つぼ」ではなく「足揉み」と呼んでいます。</p>

    <p>足全体を深く丁寧に揉み解すことで、自然と体が整っていく——<br />
    それが、私が信じている本当の癒しのかたちです。</p>

    <h3 className="text-xl text-primary font-bold mt-8 mb-4 border-b-2 border-dashed border-primary/50 inline-block pb-2">そして、なぜ「奥底」なのか？</h3>
    <p>お客様の声で一番多いのは、</p>
    <div className="bg-primary/10 p-6 rounded-lg my-6">
        <p className="mb-2">「痛いんだけど…効いてる感じがする」</p>
        <p className="mb-2">「けっこう痛いですね。ギリギリです。でも気持ち良いです。」</p>
        <p>「終わって大きく息を吐いて、スッキリしました！」</p>
    </div>

    <p>この「痛いけど効いてる」「ギリギリで気持ち良い」という境界線で、<br />
    身体の奥底に溜まった緊張が一気に解放される瞬間がある。<br />
    この刺激が、まさに『意識をふっと溶かす』きっかけです。<br />
    それが、私の施術の核心です。</p>

    <p>足屋「福助」は、<br />
    「痛気持ちいい」から「ふっと抜ける」への本物のリセットをお届けします。</p>

    <p>このページを読んでくださっているあなたは、<br />
    きっと「ルールを理解して、気持ち良く過ごして下さる素敵な方」だと思います。<br />
    私も人間なので、誰の足でも揉みたいわけではありません。<br />
    私が最高のリセットをお届けしたいのはあなたのようなお客様です。</p>
    
    <p>生意気な店主が開いた足揉み専門店ではございますが、足屋「福助」を、どうぞよろしくお願いいたします。</p>

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
                福助の奥底リセットマップ
                <span className="w-8 h-px bg-primary/30 hidden sm:block"></span>
              </h2>
              <p className="text-[#7A736E]">あなたの気になる奥底はどこ？<br className="md:hidden"/>
              <span className="text-sm opacity-80 mt-2 block">昔からの足つぼの考え方を参考にしていますが、あくまで感覚的なリセットのヒントです。科学的に証明されたものではありません。</span></p>
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
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:show-scrollbar custom-scrollbar gap-8 pb-8 px-4 -mx-4 md:px-0 md:mx-0">
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
