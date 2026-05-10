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

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-40 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-wider">
            足屋「福助」
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#concept" className="hover:text-primary transition-colors">コンセプト</a>
            <a href="#flow" className="hover:text-primary transition-colors">施術の流れ</a>
            <a href="#map" className="hover:text-primary transition-colors">リセットマップ</a>
            <a href="#voice" className="hover:text-primary transition-colors">お客様の声</a>
            <a href="#pricing" className="hover:text-primary transition-colors">料金</a>
            <Button asChild size="sm" className="ml-2">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">LINE予約</a>
            </Button>
          </nav>

          <Button variant="outline" size="sm" className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? '閉じる' : 'メニュー'}
          </Button>
        </div>
        {/* Mobile Nav */}
        {isNavOpen && (
          <nav className="md:hidden border-t border-border bg-background p-4 flex flex-col gap-4 text-sm font-medium">
            <a href="#concept" onClick={() => setIsNavOpen(false)}>コンセプト</a>
            <a href="#flow" onClick={() => setIsNavOpen(false)}>施術の流れ</a>
            <a href="#map" onClick={() => setIsNavOpen(false)}>リセットマップ</a>
            <a href="#voice" onClick={() => setIsNavOpen(false)}>お客様の声</a>
            <a href="#pricing" onClick={() => setIsNavOpen(false)}>料金</a>
            <Button asChild className="w-full mt-2">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">LINE予約</a>
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-16">
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-card via-background to-background opacity-80" />
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp}
            className="container relative z-10 px-4 text-center max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight md:leading-snug tracking-tight mb-8">
              足から意識をふっと溶かす、痛気持ちいい刺激。<br />
              それが、足屋「福助」です。
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              足屋「福助」で過ごす時間は、現代社会で知らず知らずのうちに着込んでしまった見えない鎧を剥がして本来の身軽さを取り戻す時間です。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base">
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">今すぐ予約する</a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base">
                    福助の想いをもっと知る
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] bg-card text-card-foreground border-border">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold mb-4">福助からのメッセージ</DialogTitle>
                  </DialogHeader>
                  <MessageContent />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </section>

        {/* 2. Concept Section */}
        <section id="concept" className="py-24 bg-card">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-primary">福助の想い</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-10 text-left md:text-center">
              現代の私たちは、常にONのスイッチを押し続け、無意識に「見えない鎧」を着込んでしまっています。
              福助では、身体の中で一番遠い場所である「足」から優しく、時に深く刺激を入れることで、
              その見えない鎧をほどいていきます。奥底から緊張が連鎖的に解け、
              「ふっと」意識が溶けるような解放感を味わってください。
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="lg">
                  福助の想いをもっと知る
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] bg-card text-card-foreground border-border">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">福助からのメッセージ</DialogTitle>
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
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">施術の流れ</h2>
            <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
              <p className="text-muted-foreground mb-8 text-center">
                当店の施術は「枠単位制」。入室から退室までを余裕を持ってお過ごしいただけるお時間です。<br className="hidden md:block"/>
                見えない鎧を脱ぎ捨てて、ゆったりと頭を空っぽにしてください。
              </p>
              <ul className="space-y-6">
                {[
                  "LINEで枠を予約",
                  "時間に合わせて来店（着替え・準備）",
                  "足全体を優しくほぐし開始（強さ調整します）",
                  "途中から体がふっと緩んで頭が空っぽに…",
                  "枠内でスッキリ終了"
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-lg pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* 4. Map Section */}
        <section id="map" className="py-24 bg-card">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-primary">福助の奥底リセットマップ</h2>
              <p className="text-muted-foreground">あなたの気になる奥底はどこ？<br className="md:hidden"/>
              <span className="text-sm opacity-80 mt-2 block">昔からの足つぼの考え方を参考にしていますが、あくまで感覚的なリセットのヒントです。科学的に証明されたものではありません。</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: "頭が重い", bad: "ズーンと重い、頭が回らない", good: "ズーンとした重さがふっと抜け、意識が溶けるようなスッキリ感が広がります。頭が空っぽになる感覚を。" },
                { title: "目が疲れる", bad: "ショボショボする、視界がかすむ", good: "視界がパッと明るく拓け、目元の重みがふっと溶けていきます。" },
                { title: "首が回らない", bad: "首筋が張る、スマホ首がつらい", good: "首から肩にまとわりつく緊張がふっと抜け、本来の軽やかさを取り戻します。" },
                { title: "肩こり", bad: "肩が重石のよう、腕が上がりにくい", good: "背負い込んだ重荷がふっと溶け落ち、羽が生えたような軽やかさに。" },
                { title: "背中が張る", bad: "背中がガチガチ、息苦しさを感じる", good: "ガチガチの背中がふっと緩み、胸の奥底から息が抜けるように。" },
                { title: "ストレス・緊張", bad: "イライラする、気が休まらない", good: "張り詰めた緊張がふっと溶け、全身が空っぽになるような安らぎを。" },
                { title: "だるさ・むくみ", bad: "足がパンパン、体が重だるい", good: "溜め込んだ余分な重みがふっと抜け、靴がゆるく感じるほどの軽やかな足元へ。" },
                { title: "胃もたれ", bad: "食欲がわかない、お腹が重い", good: "胃のあたりの重苦しさがふっと溶け、じんわりと温まります。" },
                { title: "お腹がスッキリしない", bad: "便秘ぎみ・張る、ガスがたまる", good: "お腹の張りがふっと抜け、内側から滞りが溶け出す感覚が。" },
                { title: "お酒の抜けが悪い", bad: "翌朝がつらい、体がダル重い", good: "どんよりとしたダルさがふっと抜け、意識がシャキッと澄み渡ります。" },
                { title: "心がざわつく", bad: "不安・ソワソワ、眠りが浅い", good: "胸のざわつきがふっと溶け、頭の奥から安らぎに包まれます。" },
                { title: "呼吸が浅い", bad: "ため息が多い、胸が詰まる感じ", good: "詰まりがふっと抜け、肺の奥底まで空気が美味しく届きます。" }
              ].map((item, idx) => (
                <div key={idx} className="group bg-background border border-border p-6 rounded-xl hover:border-primary/50 transition-all hover:shadow-[0_0_15px_rgba(139,0,0,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    <p className="line-through opacity-70">{item.bad}</p>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">{item.good}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 5. Voice Section */}
        <section id="voice" className="py-24 bg-background">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 max-w-5xl"
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">お客様の声</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "「頭がスッキリして、いつの間にか寝落ちしちゃいました（笑）」", author: "30代 IT企業勤務", reply: "ありがとうございます！頭が空っぽになった瞬間、最高に幸せですよね。また深い眠りをお届けします♪" },
                { quote: "「足だけじゃなくて、目や肩までパッと明るくなった気がします。」", author: "40代 デザイナー", reply: "目がお疲れでしたね。足指から繋がる感覚を実感いただけて嬉しいです。視界のリセット、お任せください。" },
                { quote: "「枠単位制が分かりやすくて、遅刻の不安なく通えるのがありがたいです。」", author: "30代 事務職", reply: "誠実な方にこそ、ゆったり通っていただきたい…その想いが伝わって嬉しいです。お待ちしております！" }
              ].map((voice, idx) => (
                <div key={idx} className="bg-card p-8 rounded-2xl border border-border flex flex-col h-full">
                  <div className="flex-grow">
                    <p className="text-lg italic mb-4 leading-relaxed font-serif">"{voice.quote}"</p>
                    <p className="text-sm text-muted-foreground mb-8 text-right">— {voice.author}</p>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg border-l-2 border-primary mt-auto">
                    <p className="text-xs text-primary font-bold mb-1">福助より</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{voice.reply}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 6. Pricing Section */}
        <section id="pricing" className="py-24 bg-card">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 max-w-5xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-primary">料金のご案内</h2>
              <p className="text-muted-foreground">
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
                <div key={idx} className={`bg-background p-8 rounded-2xl border ${plan.popular ? 'border-primary ring-1 ring-primary relative shadow-lg' : 'border-border'} flex flex-col`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                      おすすめ
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2 text-center">{plan.title}</h3>
                  <div className="text-center mb-6">
                    <span className="text-lg text-muted-foreground mr-2">{plan.time}</span>
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{plan.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 7. Rules Section */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container px-4 max-w-4xl">
            <div className="space-y-8">
              {/* 初回の方へ */}
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-primary/30">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">初回の方へ（初回全額返金保証付き）</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  初回限定のお試し割引は設けておりません。<br className="hidden md:block" />
                  代わりに、<strong className="text-primary border-b border-primary">片足の施術が終わるまでに</strong>「合わない」と感じられた場合は、全額返金にて対応させていただきます。<br className="hidden md:block" />
                  まずは片足をしっかりご体験いただき、ご自身に合うかどうかをご判断くださいね。
                </p>
              </div>

              {/* ご予約の変更・キャンセル */}
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                <h3 className="text-xl font-bold mb-6 text-center">ご予約の変更・キャンセル</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  ご予定の変更はできる限り柔軟に対応させていただきますが、他のお客様のご案内枠確保のため、以下のルールをご了承くださいませ。
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">・</span>
                    <span>当日キャンセル：料金の50％（※当日の時間変更は空きがあれば無料で可能です）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">・</span>
                    <span>ご連絡のない無断キャンセル：料金の100％</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final CTA Section */}
        <section className="py-24 bg-card border-t border-border">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="container px-4 text-center max-w-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">さあ、見えない鎧を脱ぎ捨てましょう</h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              ご予約はLINEより24時間受け付けております。<br />
              あなたの足をお揉みできる日を、楽しみにお待ちしております。
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-8 shadow-[0_0_20px_rgba(139,0,0,0.4)] hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] transition-all">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer">今すぐLINEで予約する</a>
            </Button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-8 border-t border-border">
        <div className="container px-4 text-center">
          <div className="font-bold text-lg mb-4 text-muted-foreground">足屋「福助」</div>
          <p className="text-xs text-muted-foreground opacity-50">&copy; 2026 足屋 福助. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
