// 足を疑うはなし（/blog）。新しいものを上に追加する。
// slug は URL に使う（英数字とハイフン）。date は "YYYY-MM-DD"。

export type BlogBlock =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
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
    slug: "who-made-the-reflex-map",
    date: "2026-11-14",
    title: "反射区の地図は、誰がどうやって作ったのか",
    description: "足の裏に内臓や背骨が描かれた反射区の地図は、最初からあの形だったわけではありません。縦の線から横の線、区画、そして描き直しへ。地図が足されてきた流れを、確かさで分けて整理しました。",
    blocks: [
      { t: "p", text: "前回は、台湾式の源流にいた人たちの話でした。今回は、その人たちが使ってきた「反射区の地図」そのものの話です。" },
      { t: "p", text: "足の裏に内臓や背骨が描かれた、あの色とりどりの図。店の壁やサイトでよく見かけますが、最初からあの形だったわけではありません。" },
      { t: "h2", text: "最初は、地図ではなく「線」だった" },
      { t: "p", text: "1917年、アメリカの医師ウィリアム・フィッツジェラルドらが出した『Zone Therapy』。そこにあったのは、体を頭からつま先まで縦に10本の帯（ゾーン）に分ける考え方でした。" },
      { t: "p", text: "たとえるなら、体に縦のストライプ模様を描くイメージです。体の真ん中を境に左右それぞれ5本ずつ。頭のてっぺんから下へ帯が通っていて、手と足の指の1本1本が、それぞれの帯の終点にあたります。" },
      { t: "p", text: "フィッツジェラルドの考えは、「同じ帯の上にあるものは、離れていてもつながっている」というものでした。だから、ある帯の上で痛む場所があれば、同じ帯の終点にある指先を押さえることで、その痛みを和らげられるのではないか。実際に本の中では、アルミのくしで指先を押したり、洗濯ばさみや輪ゴムで指を挟んだりする方法が紹介されています。" },
      { t: "p", text: "この段階では、まだ「足のここが胃」といった地図はありません。あるのは、体を縦に区切る10本の線だけでした。" },
      { t: "h2", text: "経絡との関係は？" },
      { t: "p", text: "体を縦に走る線と聞くと、鍼灸の経絡（ツボを結ぶ道筋）を思い浮かべる方もいると思います。実際、ドイツのハンネ・マルクァルトは自著の中で、フィッツジェラルドはヨーロッパで暮らしていたころに鍼の考え方に触れ、12本の経絡を10本のゾーンに単純化したのかもしれない、と推測しています。" },
      { t: "p", text: "ただ、同じ本の中でマルクァルト自身が書いているとおり、フィッツジェラルドの本にも、元同僚たちの話にも、ゾーンの元になったものは書かれていません。何から着想したのかは、分からないというのが今のところの答えです。" },
      { t: "p", text: "形もそっくりではありません。経絡は12本で、それぞれに決まった道筋と、結びつく臓器があります。ゾーンは、指の本数に合わせて体を縦に10本に分けた、もっと単純な線です。似ているようで、体の分け方の発想はかなり違います。" },
      { t: "h2", text: "横の線が引かれる" },
      { t: "p", text: "1919年、ジョー・シェルビー・ライリーが『Zone Therapy Simplified』を出し、手と足のゾーンに、横の線を8本加えました。縦と横の線で、手や足は格子状に区切られたことになります。ライリーは足と手のゾーンの図も発表しています。" },
      { t: "h2", text: "帯の中に「区画」ができる" },
      { t: "p", text: "1930年代、そのライリーのもとで働いていたのが、理学療法士のユーニス・インガムです。" },
      { t: "p", text: "インガムは、足に的を絞りました。そして、ゾーンという長い帯よりも細かく、臓器や体の部位ごとの「区画」として、足の上に描き込んでいきます。1938年の著書『Stories the Feet Can Tell』には、その足の反射区の地図が載せられました。この本は7か国語に訳されています。" },
      { t: "p", text: "英語の資料では、これを reflex points（反射点）と書くことが多いのですが、経穴（ツボ）のような一点ではなく、ある広さを持った場所と考えたほうがよさそうです。インガムの技法も、親指を少しずつ進めながら、区画の上を押していくものでした。" },
      { t: "p", text: "では、どの区画を、なぜそこに置いたのか。" },
      { t: "p", text: "ここがいちばん知りたいところですが、百科事典などの資料に書かれているのは、インガムが足に反射の決まった並びを「見つけた」ということまでです。" },
      { t: "p", text: "「患者の足を押して、痛みや硬さの反応を確かめながら経験的にまとめた」という話もよく聞きます。理学療法士として多くの足に触れていた人なので、話としては自然です。" },
      { t: "p", text: "ただ、どうやって見つけたのか、なぜその場所なのか。これらはいずれも、裏付ける当時の記録や資料が見つかっていません。" },
      { t: "h2", text: "海を渡り、描き直される" },
      { t: "p", text: "インガムの方法は、やがてヨーロッパへ渡ります。1960年代のはじめにはイギリスへ。ドイツではハンネ・マルクァルトが、1958年にアメリカ人の患者からインガムの本を教えられたのが始まりだと、本人が書いています。1967年にはインガム本人にも会い、1975年に本を出して、医療資格を持つ人に向けて教えました。なお、インガムに直接学んだ時期は、資料によって1958年、1967年、1970年と分かれていて、どれが正しいかは確かめられませんでした。" },
      { t: "p", text: "スイス人看護師ヘディ・マサフレットも、その流れの中で1975年ごろに本を出しました。中国で働いたあとに書いたとされ、インガムの教え子だったとする資料もあります。ただ、どちらも資料は限られていて、インガムの地図をどう受け継いだのかは分かっていません。" },
      { t: "p", text: "その本が1970年代に台湾のオイグスター神父の手に渡り、地図はまた描き直されます。" },
      {
        t: "ul",
        items: [
          "本では足の裏にあった生殖器官の反射区を、「繊細な臓器は力のかかりにくい場所で守られているはずだ」と、踵の内側へ移した（神父の話）",
          "中国の陰陽五行の考え方を組み合わせた",
          "範囲を、足の裏から膝下まで広げた",
        ],
      },
      { t: "p", text: "ただ、いま出ているマサフレットの本の反射区表を見ると、踵の内側にはすでに子宮・前立腺が、踵の裏と外側には生殖腺が描かれています。神父の話と、表が食い違っているのです。初版のあとの改訂で図が変わったのか、20年以上前のことを振り返るなかで神父の話が整理されたのか。初版の図を確かめられていないので、どちらなのかはまだ分かりません。" },
      { t: "p", text: "台湾の修士論文によると、神父の方法の反射区は、はじめは足の裏だけの59か所でした。それが83か所に増え、のちの本では89か所になっています。" },
      { t: "h2", text: "地図は、足されてきた" },
      { t: "p", text: "こうして並べると、反射区の地図は、一度に発見されたものではないことが分かります。" },
      { t: "p", text: "縦の線が引かれ、横の線が加わり、区画が描き込まれ、海を渡って移され、数が増えていく。そのたびに、誰かの観察と解釈が重ねられてきました。" },
      { t: "p", text: "だからいまも、流派によって地図は同じではありません。リフレクソロジーの研究者自身が、地図が一致しないことを課題として挙げているほどです。" },
      { t: "p", text: "そして、そのズレに、私自身がつまずいた場所があります。次回は、そこから疑いを始めます。" },
      { t: "h2", text: "確かさで分けると" },
      {
        t: "shelves",
        rows: [
          { label: "確認された知識", text: "1917年『Zone Therapy』の縦の10ゾーン。ゾーンが左右各5本で、指に対応すること（原著）。1919年、ライリーが手と足に横の線を8本追加。1938年、インガム『Stories the Feet Can Tell』。インガムの方法がイギリス・ドイツへ広がったこと。神父が、生殖器官の反射区を踵の内側へ移したと語っていること（2002年の台湾の雑誌記事の原文）。現在のマサフレットの本の表で、生殖腺が踵の裏と外側、子宮・前立腺が踵の内側にあること。反射区が59か所から83か所へ増えたこと（修士論文）、のちの本では89か所であること（本の副題）。" },
          { label: "伝統的な考え方", text: "足は全身の縮図で、足の区画が臓器や体の部位に対応する、という反射区の地図。" },
          { label: "仮説・未確認", text: "インガムが患者の足で確かめながら区画の位置を決めた、という説（裏付けが見つからない）。マサフレットが中国で働いていたこと、インガムの教え子だったこと（資料が少ない）。マサフレットの本の初版で、生殖器官の反射区がどこにあったか。フィッツジェラルドが経絡をもとにゾーンを作ったという説（マルクァルトの推測。本人の資料に記述なし）。" },
        ],
      },
    ],
    sources: [
      { title: "Zone Therapy（Fitzgerald・Bowers、1917年。Project Gutenberg）", url: "https://gutenberg.org/cache/epub/54553/pg54553-images.html" },
      { title: "Reflexology Resources：History 1915–1950", url: "https://www.reflexologyresources.com/history-1915-1950" },
      { title: "Reflexology Resources：History 1950–1990", url: "https://www.reflexologyresources.com/history-1950-1990" },
      { title: "Reflexology Resources：reflexology history - europe", url: "https://www.reflexologyresources.com/history-europe" },
      { title: "Reflexology Resources：Publications 1917–1969", url: "https://www.reflexologyresources.com/publications1917-1969" },
      { title: "Reflexology（EBSCO Research Starters）", url: "https://www.ebsco.com/research-starters/complementary-and-alternative-medicine/reflexology/" },
      { title: "Reflexology（Gale Encyclopedia of Alternative Medicine、Encyclopedia.com）", url: "https://www.encyclopedia.com/medicine/divisions-diagnostics-and-procedures/medicine/reflexology" },
      { title: "A Brief History of Reflexology（Integrative Massage Concepts、ABMP）", url: "https://imc.abmp.com/a-brief-history-of-reflexology" },
      { title: "Historical Development of Foot Treatments（マルクァルト『Reflexotherapy of the Feet』の章、Musculoskeletal Key）", url: "https://musculoskeletalkey.com/historical-development-of-foot-treatments/" },
      { title: "Ingham Plantar Reflexology: Map and Techniques（Praticonnect）", url: "https://praticonnect.com/en/encyclopedia/tome-therapies-manuelles/reflexologie/reflexologie-plantaire-ingham" },
      { title: "Foot Reflexology Chart Points & Depictions（CE Institute）", url: "https://ceinstitute.com/blogs/news/foot-reflexology-chart-points-depictions-reviewed-by-massage-therapy-instructor-selena-belisle" },
      { title: "The Twelve Primary Qi Channels（Chiro.org）", url: "https://chiro.org/acupuncture/FULL/Twelve_Primary_Qi_Channels.html" },
      { title: "Lyth Reflexology：History", url: "https://www.lythreflexology.co.uk/history.php" },
      { title: "Hanne Marquardt（本人の教室 fussreflex.de）", url: "https://www.fussreflex.de/hanne-marquardt/" },
      { title: "Hanne Marquardt zum 90. Geburtstag（HBB、ドイツのハイルプラクティカー団体）", url: "https://www.hbb-heilpraktiker.de/aktuelles/hanne-marquardt-zum-90-geburtstag.html" },
      { title: "ICR 2011 Conference Speakers（International Council of Reflexologists）", url: "https://www.icr-reflexology.org/conferences/docs/ICR%202011%20Conference%20Speakers.pdf" },
      { title: "Fußreflexzonentherapie nach Hanne Marquardt（ars medica Köln）", url: "https://www.arsmedica-koeln.de/heilpraktik/fu%C3%9Freflexzonentherapie-nach-hanne-marquardt/" },
      { title: "Geschichte der Fußreflexzonenmassage（fullbalance）", url: "https://fullbalance.com/fussreflexzonenmassage/geschichte/" },
      { title: "Reflexzonen-Tabelle（『Gesund in die Zukunft』からの抜粋、TREMA）", url: "https://www.trema-tt.ch/downloads/Reflexzonen-Tabelle.pdf" },
      { title: "知「足」常樂──吳神父的新腳底按摩論（台灣光華雜誌、2002年12月）", url: "https://www.taiwan-panorama.com/Articles/Details?Guid=7c8d0641-7938-49e5-953e-7df20f93a341" },
      { title: "吳若石神父足部健康法在台灣發展之研究（林進登、國立臺東大學、2005年）", url: "https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dnclcdr&s=id=%22093NTTTC567002%22.&searchmode=basic" },
      { title: "最新圖解FJM吳若石神父足部反射健康法（三民網路書店）", url: "https://www.sanmin.com.tw/product/index/008028602" },
      { title: "Jones J ほか. inconsistent reflexology maps（J Altern Complement Med、2013年）", url: "https://dspace.stir.ac.uk/handle/1893/16430" },
    ],
  },
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
