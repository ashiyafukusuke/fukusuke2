import os

css_path = r"C:\Users\mobile note\.gemini\antigravity\scratch\ashiya-fukusuke-next\src\app\globals.css"

css_to_append = ""
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #FAF7F0;
}
::-webkit-scrollbar-thumb {
  background: #8B4513;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #A0522D;
}

html {
  scroll-behavior: smooth;
}

/* --- OLD RESET MAP REPLICA --- */

.card-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1.5rem;
    padding-bottom: 2rem;
    padding-top: 1rem;
}
.card-grid::-webkit-scrollbar {
    height: 8px;
}
.card-grid::-webkit-scrollbar-track {
    background: #EAE4D9; 
    border-radius: 8px;
}
.card-grid::-webkit-scrollbar-thumb {
    background: #8B4513; 
    border-radius: 8px;
}

.flip-card {
    flex: 0 0 280px;
    height: 440px;
    perspective: 1000px;
    cursor: pointer;
    scroll-snap-align: center;
}
@media (min-width: 768px) {
    .flip-card { flex: 0 0 260px; }
}

.flip-card-inner {
    position: relative; width: 100%; height: 100%;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
}
.flip-card.is-flipped .flip-card-inner { 
    transform: rotateY(180deg); 
    -webkit-transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 30px;
    display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;
    padding: 2.5rem 1.5rem;
    border: 1.5px solid #8B4513;
    box-shadow: 0 8px 15px rgba(0,0,0,0.03);
}
.card-front { background-color: #FDFBF7; }
.card-back {
    background-color: #FAF7F0;
    color: #2C2C2C !important;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
}
.flip-card:hover .card-illustration img {
    transform: scale(1.05);
}
.card-illustration { width: 100px; height: 100px; margin: 0 auto 1.5rem auto; transition: transform 0.3s; }
.card-illustration img { width: 100%; height: 100%; object-fit: contain; }

.card-front h3 { font-size: 1.25rem; margin-bottom: 0.5rem; color: #8B4513; text-align: left !important; font-weight: bold; }
.card-desc { font-size: 0.85rem; margin-top: 0.5rem; width: 100%; text-align: left !important; }
.card-desc ul { list-style: none; padding: 0; margin: 0; text-align: left !important; display: block; }
.card-desc li { position: relative; padding-left: 1.2rem; margin-bottom: 0.3rem; line-height: 1.4; font-weight: bold; color: #2C2C2C; opacity: 0.8; text-align: left !important; }
.card-desc li::before { content: "ÅE"; position: absolute; left: 0; color: #8B4513; font-weight: bold; }

.card-back h4 { margin-bottom: 1rem; border-bottom: 2px solid rgba(44,44,44,0.1); padding-bottom: 0.5rem; width: 100%; text-align: left !important; color: #2C2C2C !important; font-weight: bold; font-size: 1.1rem; }
.card-back p { font-size: 0.85rem; line-height: 1.8; text-align: left !important; color: #2C2C2C !important; }

/* Watermark */
.card-front::after, .card-back::after {
    content: "";
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 80px;
    height: 80px;
    background-image: url('/images/fukusuke_icon.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.05;
    z-index: 0;
    pointer-events: none;
}
.card-front *, .card-back * { z-index: 1; position: relative; }

/* PURE CSS FOOTPRINT */
.css-footprint-container {
    position: relative;
    width: 60px;
    height: 100px;
    margin: 0 auto 1.5rem auto;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}
.css-foot-body {
    position: absolute;
    bottom: 0;
    left: 10px;
    width: 40px;
    height: 80px;
    background-color: #fff;
    border: 1.5px solid #4a4a4a;
    border-radius: 40% 40% 30% 30% / 60% 60% 40% 40%;
}
.css-toe {
    position: absolute;
    background-color: #fff;
    border: 1px solid #4a4a4a;
    border-radius: 50%;
}
.css-toe-1 { width: 16px; height: 18px; top: -5px; right: 5px; } /* Big Toe */
.css-toe-2 { width: 12px; height: 14px; top: -2px; right: 23px; }
.css-toe-3 { width: 10px; height: 12px; top: 2px; right: 36px; }
.css-toe-4 { width: 9px; height: 11px; top: 8px; right: 46px; }
.css-toe-5 { width: 8px; height: 10px; top: 18px; right: 54px; } /* Pinky */

.reflex-spot {
    position: absolute;
    background: rgba(139, 69, 19, 0.7);
    border-radius: 50%;
    animation: pulse 2s infinite;
    display: none;
    z-index: 5;
}
@keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139, 69, 19, 0.6); }
    70% { transform: scale(1.1); box-shadow: 0 0 0 5px rgba(139, 69, 19, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(139, 69, 19, 0); }
}

.css-footprint-container[data-target="head"] .spot-head { display: block; width: 10px; height: 10px; top: -1px; right: 8px; }
.css-footprint-container[data-target="eye"] .spot-eye { display: block; width: 14px; height: 8px; top: 10px; right: 24px; border-radius: 40%; }
.css-footprint-container[data-target="neck"] .spot-neck { display: block; width: 12px; height: 8px; top: 12px; right: 7px; border-radius: 40%; }
.css-footprint-container[data-target="shoulder"] .spot-shoulder { display: block; width: 16px; height: 6px; top: 20px; right: 35px; border-radius: 40%; transform: rotate(15deg); }
.css-footprint-container[data-target="back"] .spot-back { display: block; width: 6px; height: 35px; top: 30px; right: 5px; border-radius: 50%; }
.css-footprint-container[data-target="stress"] .spot-stress { display: block; width: 10px; height: 10px; top: 35px; left: 25px; }
.css-footprint-container[data-target="swelling"] .spot-swelling { display: block; width: 12px; height: 12px; top: 60px; left: 24px; }
.css-footprint-container[data-target="stomach"] .spot-stomach { display: block; width: 14px; height: 14px; top: 40px; right: 12px; }
.css-footprint-container[data-target="intestine"] .spot-intestine { display: block; width: 22px; height: 18px; bottom: 15px; left: 18px; border-radius: 40%; }
.css-footprint-container[data-target="liver"] .spot-liver { display: block; width: 12px; height: 12px; top: 45px; left: 10px; }
.css-footprint-container[data-target="heart"] .spot-heart { display: block; width: 12px; height: 12px; top: 30px; left: 18px; }
.css-footprint-container[data-target="lung"] .spot-lung { display: block; width: 25px; height: 12px; top: 20px; left: 15px; border-radius: 40%; }

.custom-scrollbar::-webkit-scrollbar { height: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #EAE4D9; border-radius: 8px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #8B4513; border-radius: 8px; }
""

with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

if "OLD RESET MAP REPLICA" not in content:
    with open(css_path, "a", encoding="utf-8") as f:
        f.write("\n" + css_to_append)
    print("Appended CSS successfully.")
else:
    print("CSS already appended.")
