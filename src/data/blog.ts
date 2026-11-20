// 足を疑うはなし（/blog）。新しいものを上に追加する。
// slug は URL に使う（英数字とハイフン）。date は "YYYY-MM-DD"。

export type BlogBlock =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "shelves"; rows: { label: string; text: string }[] };

export type BlogSource = { title: string; url?: string };

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
    slug: "doubt-begins-at-the-heel",
    date: "2026-11-20",
    title: "疑いの始まりは、踵周りの反射区だった",
    description: "反射区表を見ると、生殖腺の反射区が踵の裏やくるぶしのまわりなど、いくつもの場所に描かれています。その違和感から、筋肉や骨の反射区と内臓の反射区の確かさの違い、そして反射の「向き」について考えました。",
    blocks: [
      { t: "p", text: "前回は、反射区の地図が誰の手で、どう描き直されてきたかを追いました。今回は、私自身がその地図に「あれ？」と思ったところから始めます。" },
      { t: "h2", text: "踵の裏に、生殖腺" },
      { t: "p", text: "手元にある、国際若石健康研究会の公認の反射区図表。踵の裏の真ん中には、36番「生殖腺」と書かれています。" },
      { t: "p", text: "この表だけではありません。多くの反射区表で、生殖に関わる反射区は、踵の裏、内くるぶしのまわり、外くるぶしのまわりと、いくつもの場所に描かれています。" },
      { t: "p", text: "胃は胃の場所に、肝臓は肝臓の場所に。そういう地図の中で、ここは何か所にも分かれている。私がずっと引っかかっていたのは、そこでした。" },
      { t: "h2", text: "表によって、置き場所が違う" },
      { t: "p", text: "いくつかの表を並べてみると、こうなります。" },
      {
        t: "ul",
        items: [
          "若石健康法の公認図表：生殖腺は踵の裏の真ん中",
          "中国でよく使われる62区の表：生殖腺は踵の裏の真ん中と、外くるぶしの後ろ下の2か所。子宮・前立腺は内くるぶしの後ろ下",
          "スイスのマサフレットの本（現行版の表）：生殖腺は踵の裏と、外側の踵の横の2か所。子宮・前立腺は内側の踵の横",
          "台湾で神父と一緒に地図を改めた鄭英吉の説明：踵は「骨盤」。生殖腺は足の外側、子宮などは内側",
        ],
      },
      { t: "p", text: "同じ「生殖」でも、表によって場所も数も違います。内くるぶし側は、生殖腺ではなく子宮・前立腺としている表が多いようです。" },
      { t: "h2", text: "神父は「踵の内側へ移した」と話していた" },
      { t: "p", text: "前回も触れましたが、オイグスター神父（呉若石）は台湾の雑誌の取材に、こう話しています。本では足の裏にあった生殖器官の反射区を、「繊細な臓器は、力のかかりにくい場所で守られているはずだ」と考えて、踵の内側へ移した、と。" },
      { t: "p", text: "理由としては納得できます。でも、そうだとすると、体重がいちばんかかる踵の裏に、今も生殖腺が残っている表が多いのはなぜなのか。" },
      { t: "p", text: "しかも、神父が手にしたとされるマサフレットの本の現行版を見ると、生殖腺はすでに2か所にあり、踵の内側には子宮・前立腺が置かれています。神父が読んだ初版の図が違っていたのか、話があとから整理されたのか。初版の図は確認できていないので、ここは分かりません。" },
      { t: "p", text: "分かるのは、地図の描き直しが一度きりではなく、いろいろな人の手で、いろいろな方向に重ねられてきたらしい、ということです。" },
      { t: "h2", text: "私には、踵は骨盤に見える" },
      { t: "p", text: "では、私自身はどう考えているか。踵は、生殖腺より「骨盤」のほうがしっくりきます。" },
      { t: "p", text: "足の内側の縁には、親指の付け根から踵へ向かって、頸椎・胸椎・腰椎・仙骨と、背骨の反射区が順に並んでいます。そして踵で、それを横に広がって受け止めるのが骨盤。骨格の並びとして、筋が通るからです。" },
      { t: "p", text: "ドイツのマルクァルトも、座った人の形と足の形が似ていることを、反射区を理解する鍵として図で示しています。人の形を足に重ねるのは、フラクタルのような発想だと思います。それが実際の体の並びと一致する場所がある、というのは面白いところです。" },
      { t: "h2", text: "筋肉や骨の反射区と、内臓の反射区" },
      { t: "p", text: "背骨や骨盤、僧帽筋のような、筋肉や骨の反射区には、反射区の地図、解剖、体の動き、どの見方からも説明できそうな場所がいくつかあります。たとえば土踏まずの縁には、背骨の反射区が並ぶのと同時に、母趾外転筋や、足裏の感覚や筋肉の動きに関わる神経（内側足底神経）が通っています。" },
      { t: "p", text: "一方、内臓の反射区も、大まかな並びは多くの表で共通しています。右足に肝臓、左足に心臓、土踏まずに胃や腸と、体の中とおおよそ同じ順に並んでいます。ただ、心臓や腎臓、すい臓の幅や位置は、流派によって違うことがあります。心臓の反射区の位置が施術者によってかなり違う、という調査もあります。その中で生殖腺は、場所の数まで表ごとに違う、目立つ例です。" },
      { t: "p", text: "内臓のほうに違いが出る理由として考えているのは、その感じ方です。" },
      { t: "p", text: "臨床医学の教科書には、内臓の痛みは場所がはっきりせず、いくつもの範囲にまたがってぼんやり感じられる、と書かれています。皮膚や筋肉の痛みが、はっきりした場所で感じられるのとは対照的です。さらに、内臓の不調が、離れた体の表面の痛みとして感じられることもあります（関連痛）。たとえば横隔膜への刺激は鎖骨の上のくぼみに、胆のうの不調は肩甲骨の先に、痛みとして出ることがあるそうです。" },
      { t: "p", text: "腰や背中なら「ここが張っている」と本人が言えます。でも内臓は、本人にもどこが悪いのか分かりにくい。そもそも、血の巡りの問題なのか、内臓そのものの問題なのかも、外からは分かりません。" },
      { t: "p", text: "もし反射区の地図が、体の感覚と照らし合わせながら作られてきたのだとしたら、答え合わせのしやすい筋肉や骨の区画は揺らぎにくく、答え合わせのしにくい内臓の区画には違いが出やすかったのではないか。前回書いたとおり、インガムがそうやって地図を作ったという裏付けは見つかっていないので、これはあくまで私の仮説です。もっとも、多くの表は同じ元の地図から描き写されてきたものなので、表どうしが一致していても、その場所が正しいという証明にはなりません。" },
      { t: "h2", text: "反射の向きを、逆にしてみる" },
      { t: "p", text: "リフレクソロジーの反射区は、「足のここを押すと、この臓器に届く」という向きで語られてきました。足から体へ。これは因果の主張で、今のところ科学的には確かめられていません。" },
      { t: "p", text: "私が反射区を使うときは、向きが逆です。体の使い方や、日々かかっている負担が、足に表れる。体から足へ。こちらは相関の話なので、足に触れ、本人の感覚と照らし合わせながら確かめていけます。" },
      { t: "p", text: "同じ「反射区」という言葉でも、何を反射していると考えるかが違う。だから私は、生殖腺の場所に違和感を持っても、反射区そのものを捨てる気にはなりません。筋の通った置き方を選んで、手がかりとして使えばいいと思っています。" },
      { t: "h2", text: "次は、足そのものを見る" },
      { t: "p", text: "体から足へ、という向きで考えるなら、まず知っておきたいのは足そのものです。" },
      { t: "p", text: "足には片足だけで26個の骨と、たくさんの筋肉や腱があります。次回は、反射区の地図をいったん脇に置いて、その骨と筋肉の話をする予定です。" },
      { t: "h2", text: "確かさで分けると" },
      {
        t: "shelves",
        rows: [
          { label: "確認された知識", text: "若石健康法の公認図表では、踵の裏の真ん中が生殖腺（36番）。神父と鄭英吉は、生殖器官の反射区を踵の内側へ改めた（光華雑誌、2002年）。マサフレットの本の現行版の表では、生殖腺が踵の裏と外側の2か所にある。内臓の痛みは場所がはっきりしにくく、離れた場所の痛みとして感じられることがある（臨床医学の教科書）。足の骨は片足26個" },
          { label: "伝統的な考え方", text: "踵には生殖腺の反射区がある。足の形に、座った人の形が重なる。足を押すと、対応する臓器に働きかける" },
          { label: "仮説・未確認", text: "踵は骨盤とするほうが筋が通る（私の見方）。内臓の区画に表ごとの違いが出やすいのは、答え合わせがしにくいからではないか。マサフレットの初版で、生殖器官がどこに描かれていたか" },
        ],
      },
    ],
    sources: [
      { title: "若石健康法 公認反射区図表（国際若石健康研究会）" },
      { title: "足部62个反射区介绍（新浪博客）", url: "https://blog.sina.com.cn/s/blog_6788a58b0102xqvb.html" },
      { title: "Reflexzonen-Tabelle（『Gesund in die Zukunft』からの抜粋、TREMA）", url: "https://www.trema-tt.ch/downloads/Reflexzonen-Tabelle.pdf" },
      { title: "「足部反應區」全圖解（大紀元、2020年、鄭英吉の取材）", url: "https://www.epochtimes.com/b5/20/11/4/n12525463.htm" },
      { title: "知「足」常樂──吳神父的新腳底按摩論（台灣光華雜誌、2002年12月）", url: "https://www.taiwan-panorama.com/Articles/Details?Guid=7c8d0641-7938-49e5-953e-7df20f93a341" },
      { title: "Reflexzonenarbeit am Fuß（マルクァルト、Thieme）", url: "https://thieme-connect.de/products/ebooks/lookinside/10.1055/b-0036-137381" },
      { title: "Sherman R. Abdominal Pain. In: Clinical Methods, 3rd ed.（Butterworths、1990年。NCBI Bookshelf）", url: "https://www.ncbi.nlm.nih.gov/books/NBK412/" },
      { title: "Jones J ほか. inconsistent reflexology maps（J Altern Complement Med、2013年）", url: "https://dspace.stir.ac.uk/handle/1893/16430" },
      { title: "Jones J, Thomson P, Leslie S. Reflexology, cardiac patients and inconsistencies in the location of the heart reflex point: an online survey（BMC Complement Altern Med、2012年）", url: "https://doi.org/10.1186/1472-6882-12-s1-p343" },
      { title: "Foot Reflexology Chart — Every Area and Its Source（reflexology.zone）", url: "https://reflexology.zone/foot/" },
    ],
  },
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
      { t: "p", text: "そしてマサフレットの本は1970年代、台湾のオイグスター神父（呉若石）の手に渡ります。現代の台湾式足つぼの源流にいる人物で、前回の記事で紹介した人です。ここで地図は、また描き直されます。" },
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
