// 足を疑うはなし（/blog）。新しいものを上に追加する。
// slug は URL に使う（英数字とハイフン）。date は "YYYY-MM-DD"。

export type BlogBlock =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "shelves"; rows: { label: string; text: string }[] };

export type BlogSource = { title: string; url: string };

export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  description: string;
  blocks: BlogBlock[];
  sources: BlogSource[];
};

export const posts: BlogPost[] = [
  {
    slug: "taiwan-style-origin",
    date: "2026-11-08",
    title: "台湾式の源流には、スイス人の神父がいた",
    description: "台湾式の足つぼの歴史をたどると、1970年代の一人のスイス人神父に行き着きます。反射区の地図がどう受け継がれ、描き直されてきたのかを、確かさで分けて整理しました。",
    blocks: [
      { t: "p", text: "足つぼと聞いて「台湾式」を思い浮かべる方は多いと思います。イタキモの施術も、台湾式がベースです。" },
      { t: "p", text: "その台湾式の歴史をたどると、少なくとも今の広がりの出発点には、1970年代の一人のスイス人神父がいます。" },
      { t: "h2", text: "膝の痛みと、一冊の本" },
      { t: "p", text: "その人は、ジョセフ・オイグスター神父。中国名を呉若石といいます。スイス出身のカトリックの宣教師で、1970年に台湾へ渡り、東海岸の台東で布教を続けてきました。医師の資格は持っていません。" },
      { t: "p", text: "赴任から数年後、神父は膝の痛みに悩まされます。そこで同僚から渡されたのが、スイス人看護師ヘディ・マサフレットの本『Gesund in die Zukunft』（英題：Good Health for the Future）でした。足の反射区についての本です。神父は本を読みながら自分の足を揉むようになり、膝の痛みが楽になったと語っています。" },
      { t: "p", text: "これは本人の体験談で、効果の証拠にはなりません。ただ、台湾の足つぼの話は、ここから動き出します。" },
      { t: "h2", text: "教会から、台湾じゅうへ" },
      { t: "p", text: "神父は、体の不調を抱える教会の人たちに足もみを教えるようになりました。台湾の衛生福利部（日本の厚生労働省にあたる）のページでは、神父が足部反射健康法を台湾に紹介したのは1979年とされています。1980年には、警察ラジオ局の番組司会者が神父の施術を受け、番組で紹介しました。その後、台湾各地から台東の教会へ人が訪れるようになったといいます。" },
      { t: "p", text: "広がれば、問題も出てきます。1982年、神父は当時の衛生当局から、医師の資格なしに医療行為をするのは違法だと指摘を受けました。その後、台北近郊・三重の病院に招かれたことをきっかけに、その病院の医師の監督のもとでなら施術を認められました。" },
      { t: "p", text: "神父の名前を看板に掲げる店も増えました。本人は2002年の会見で、自分の名前を商標として使う許可は誰にも出していないと述べています。" },
      { t: "h2", text: "神父の本の、さらに前" },
      { t: "p", text: "実は、マサフレットの本も、現代足つぼのスタート地点ではありません。" },
      { t: "p", text: "1917年、アメリカの耳鼻咽喉科医ウィリアム・フィッツジェラルドとエドウィン・バウアーズが『Zone Therapy』を出し、体を縦に10のゾーンに分ける考え方をまとめました。ジョー・シェルビー・ライリーがこれに横の区分を加え、その下で働いていた理学療法士ユーニス・インガムが足に的を絞ります。1938年の著書『Stories the Feet Can Tell』を通じて、足に全身を描いた地図が広まっていきました。" },
      { t: "p", text: "フィッツジェラルドの発見については、「患者が痛みに備えて椅子のひじ掛けや手術台を強く握るのを見て閃いた」という話がよく紹介されます。ところが1917年の『Zone Therapy』を読んでも、そうした発見の場面はどこにも出てきません。本にあるのは、痛みを和らげる方法として、椅子や手を握るよう患者に勧める場面だけです。" },
      { t: "p", text: "この例のように、伝えられてきたことが実は間違っていたり、当時とは状況が変わっていたりすることは少なくありません。だからこそ、まず疑問を持つことがとても大切だと思っています。自分の足はいまどんな状態なんだろう。反射区って、本当につながっているのだろうか。そんな問いが、足を知る入口になるのではないかと思います。" },
      { t: "p", text: "マサフレットの本は1970年代半ばのものとされ、時期としてはインガムの本より後です。ただ、この流れをどう受け継いだのかを示す資料は、まだ見つけられていません。" },
      { t: "h2", text: "地図は、書き換えられてきた" },
      { t: "p", text: "神父は、本の地図をそのまま使い続けたわけではありません。協力者とともに中国の陰陽五行の考え方を組み合わせ、受けた人の反応をもとに、本では足裏にあった生殖器の反射区をかかとの内側へ移し、範囲も膝下まで広げました。" },
      { t: "p", text: "反射区の地図は、不変のものではなく、人が観察と解釈で描き直してきたものだと思います。" },
      { t: "p", text: "もう一つ。2002年の台湾の雑誌記事で、神父は「痛いほど効く」という思い込みは誤解を招くと語り、ていねいで正しい手技のほうがよいと述べています。台湾式は痛いもの、という印象とは少し違う話です。このあたりはイタキモの考え方と通ずる部分です。" },
      { t: "h2", text: "確かさで分けると" },
      {
        t: "shelves",
        rows: [
          { label: "確認された知識", text: "神父が1970年に台湾へ渡り、マサフレットの本から足もみを始めたこと（複数の資料で一致）。1917年の『Zone Therapy』、1938年の『Stories the Feet Can Tell』の刊行。" },
          { label: "伝統的な考え方", text: "足の特定の場所が内臓など体の部位に対応する、という反射区の地図。足は全身の縮図、という捉え方。" },
          { label: "仮説・未確認", text: "紀元前2300年ごろの古代エジプトの壁画が起源という説（場面の解釈に議論がある）。古代中国が起源という説。マサフレットとインガムの関係。患者が椅子や手術台を握るのを見て閃いた、というフィッツジェラルドの逸話。" },
        ],
      },
      { t: "p", text: "効果については、2009年に医学誌で発表された18件の比較試験のレビューが、どの病気についても有効な治療だと納得できるだけの証拠は示されていない、と結論づけています。2011年の更新版も同様の結論です。" },
      { t: "h2", text: "イタキモでは" },
      { t: "p", text: "反射区の地図は「つながりの地図」として使っています。押して痛い場所と体の状態が重なるように感じることはあるかもしれません。ただ、原因と結果の証明には使いませんし、足裏を見て内臓の状態が分かるとも言いません。" },
      { t: "p", text: "人が作り、描き直してきた地図だと知っておくと、そのくらいの距離で付き合うのがちょうどいいのではないかと思います。" },
      { t: "p", text: "次回は、その地図を誰がどうやって作ったのかを書く予定です。" },
    ],
    sources: [
      { title: "Swiss missionary rubs Taiwanese the right way（Taipei Times、2002年9月15日）", url: "https://www.taipeitimes.com/News/feat/archives/2002/09/15/168187" },
      { title: "Reflexology finds a foothold（Taipei Times、2002年9月15日）", url: "https://www.taipeitimes.com/News/feat/archives/2002/09/15/0000168188" },
      { title: "The Foot Bone's Connected to the Leg Bone（Taiwan Panorama、2002年12月）", url: "https://www.taiwan-panorama.com/en/Articles/Details?Guid=f21f216d-c9b9-4448-98af-592275ce14e3&CatId=10&postname=The+Foot+Bone's+Connected+to+the+Leg+Bone--Father+Josef's+New+Theory+of+Reflexology" },
      { title: "Boosting the Body's Powers of Self-healing（CommonWealth Magazine、2008年）", url: "https://english.cw.com.tw/article/article.action?id=1250" },
      { title: "衛生福利部（台湾）のページ", url: "https://mohw.gov.tw/cp-16-59483-1.html" },
      { title: "吳若石神父足底按摩的學徒（文化部 國家文化記憶庫）", url: "https://tcmb.culture.tw/zh-tw/detail?id=551563&indexCode=Culture_Event" },
      { title: "世界著名足底按摩之父吴若石神父专访（信德网）", url: "https://xinde.org/show/29206" },
      { title: "Zone Therapy（Fitzgerald・Bowers、1917年。Project Gutenberg）", url: "https://gutenberg.org/files/54553/old/54553-h/54553-h.htm" },
      { title: "Reflexology Resources：History 1915–1950", url: "https://www.reflexologyresources.com/history-1915-1950" },
      { title: "Reflexology Resources：History 1950–1990", url: "https://www.reflexologyresources.com/history-1950-1990" },
      { title: "What Is the History of Reflexology?（University of Minnesota）", url: "https://www.takingcharge.csh.umn.edu/node/1303" },
      { title: "Ernst E. Is reflexology an effective intervention?（Medical Journal of Australia、2009年）", url: "https://www.mja.com.au/journal/2009/191/5/reflexology-effective-intervention-systematic-review-randomised-controlled" },
      { title: "Ernst E, Posadzki P, Lee MS. Reflexology: an update of a systematic review（Maturitas、2011年）", url: "https://pubmed.ncbi.nlm.nih.gov/21111551/" },
      { title: "The Shambulance: Reflexology and Other Stories（Discover Magazine。2011年のレビューの紹介）", url: "https://www.discovermagazine.com/the-shambulance-reflexology-and-other-stories-4575" },
      { title: "The Pursuit of Wellness（Archaeology、2021年。アンクマホルの墓の浮き彫りについて）", url: "https://www.archaeology.org/issues/september-october-2021/collection/wellness-egypt-foot-massage/the-pursuit-of-wellness/" },
      { title: "Origins and History of Reflexology（古代エジプトの壁画の解釈について）", url: "https://moverestbe.com/wp-content/uploads/2019/02/origins_history_reflexology.pdf" },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return `${y}.${String(m).padStart(2, "0")}.${String(day).padStart(2, "0")}`;
}
