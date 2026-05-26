"use client";
export default function Footer() {
  return (
    <footer className="py-32 md:py-48 px-8 md:px-20 bg-[#FAFAFA] text-[#1A1A1A] border-t border-[#1A1A1A]">
      <div className="w-full max-w-5xl text-left">
        <div className="wa-line w-20 mb-12 rv" />
        <h2 className="rv rv-d1 font-accent font-black text-5xl md:text-8xl tracking-tight mb-8 text-[#1A1A1A]">Re<span className="wa-text">:</span>boot</h2>
        <p className="rv rv-d2 text-base md:text-lg font-light leading-[2.2] text-neutral-800 max-w-2xl mb-12 text-left">
          日常のノイズを遮断し、自分自身を再起動する場所。
        </p>
        
        <div className="rv rv-d3 border border-[#1A1A1A] p-4 inline-block mb-24 hover:bg-neutral-200 transition-colors duration-300 w-full md:w-auto text-left">
          <a href="https://fukusuke2.vercel.app/" target="_blank" rel="noopener noreferrer"
             className="font-accent text-sm md:text-base tracking-wider text-[#1A1A1A] hover:opacity-70 transition-opacity block">
            https://fukusuke2.vercel.app/
          </a>
        </div>
        
        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="text-left">
            <p className="font-accent font-black text-2xl md:text-3xl mb-1 text-[#1A1A1A]">
              Re:boot
            </p>
            <p className="font-accent text-[0.6rem] md:text-xs tracking-[0.25em] uppercase text-neutral-500">
              Neural Reset &amp; Foot Reflexology
            </p>
          </div>
          <p className="text-sm md:text-base text-neutral-800 font-light">足揉み職人 ： 福助 (Fukusuke) ｜ ひばりヶ丘</p>
        </div>
      </div>
    </footer>
  );
}
