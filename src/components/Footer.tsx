"use client";
export default function Footer() {
  return (
    <footer className="py-32 md:py-48 px-8 md:px-20 bg-white text-black border-t border-black">
      <div className="w-full max-w-5xl text-left">
        <div className="prism-line w-20 mb-12 rv" />
        <h2 className="rv rv-d1 font-accent font-black text-5xl md:text-8xl tracking-tight mb-8 text-black">Re<span className="prism-text">:</span>boot</h2>
        <p className="rv rv-d2 text-base md:text-lg font-light leading-[2.2] text-neutral-800 max-w-2xl mb-12">
          日常のノイズを遮断し、自分自身を再起動する場所。
        </p>
        
        <div className="rv rv-d3 border border-black p-4 inline-block mb-24 hover:bg-neutral-50 transition-colors duration-300">
          <a href="https://fukusuke2.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="font-accent text-sm md:text-base tracking-wider text-black hover:opacity-70 transition-opacity block text-left">
            https://fukusuke2.vercel.app/
          </a>
        </div>
        
        <div className="border-t border-black pt-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-accent font-black text-2xl md:text-3xl mb-1 text-black">
              Re:boot
            </p>
            <p className="font-accent text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-neutral-500">
              Neural Reset &amp; Foot Reflexology
            </p>
          </div>
          <p className="text-sm md:text-base text-neutral-800 font-light">ひばりヶ丘 ｜ 足揉み職人 福助 (Fukusuke)</p>
        </div>
      </div>
    </footer>
  );
}
