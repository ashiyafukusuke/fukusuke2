"use client";
import React from "react";

export default function CalendarSection() {
  const reserveUrl = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent";

  return (
    <section id="calendar" className="w-full py-8 md:py-12 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-sans font-black text-2xl md:text-3xl text-ink inline-block relative tracking-widest mb-8">
          営業カレンダー
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
        </h2>
        
        <div className="flex flex-col items-center">
          <img 
            src={`/calendar.png?t=${new Date().getTime()}`} 
            alt="イタキモ 今月の営業カレンダー" 
            className="w-full max-w-[600px] h-auto object-contain mx-auto shadow-sm border border-divider rounded-lg mb-6"
            loading="lazy"
          />
          
          <p className="text-[14px] md:text-base text-ink font-bold mb-6">
            空き枠は予約ページでご確認ください。
          </p>
          
          <a
            href={reserveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-main text-white font-bold py-[14px] px-[36px] rounded-[6px] hover:bg-mainhover transition duration-200 text-sm tracking-[0.08em] shadow-md w-full sm:w-auto"
          >
            予約枠を確保する
          </a>
        </div>
      </div>
    </section>
  );
}
