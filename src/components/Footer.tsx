"use client";
export default function Footer() {
  return (
    <footer className="py-32 md:py-48 px-8 md:px-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="prism-line w-20 mb-12 rv" />
        <h2 className="rv rv-d1 font-accent font-black text-5xl md:text-8xl tracking-tight mb-8">Return to<br />Neutral</h2>
        <p className="rv rv-d2 text-sm font-light leading-[2.2] text-neutral-400 max-w-lg mb-12">
          凪いだ海のような、心身の平安。それは、あなた自身が本来持っている力を引き出すための儀式。日常のノイズを遮断し、自分自身を再起動する場所。
        </p>
        {/* URL Box */}
        <div className="rv rv-d3 border border-white/30 rounded-lg p-5 inline-block mb-16 hover:border-white/60 transition-colors duration-300">
          <a href="https://fukusuke2.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="font-accent text-sm tracking-wider text-white/70 hover:text-white transition-colors">
            https://fukusuke2.vercel.app/
          </a>
        </div>
        {/* Info */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-accent font-bold text-xl mb-1">
              Re<span className="prism-text">:</span>boot
            </p>
            <p className="font-accent text-[0.6rem] tracking-[0.25em] uppercase text-neutral-500">
              Neural Reset &amp; Foot Reflexology
            </p>
          </div>
          <p className="text-sm text-neutral-500">足揉み職人 ： 福助 (Fukusuke) ｜ ひばりヶ丘</p>
        </div>
      </div>
    </footer>
  );
}
