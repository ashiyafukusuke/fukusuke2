"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 480);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="sticky top-0 z-[100] bg-[rgba(255,251,245,0.95)] backdrop-blur-[8px] border-b border-divider shadow-sm"
        >
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
            {/* ブランド名 */}
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAABQCAYAAAAuolgGAAARLElEQVR4nO2debQcVZnAf9nIQigiMcMSlkkwVMgCCRhsZAoMmz0MWIrK0ZoRGJQeYRhhYBTBI6MgiMwcCOgB7YhhwJQCg1rqxB4Iy1g6aSKQBQgUSzIxQBDJVpC87Jk/vnpJ5/Heq727+r37O6dOv3Ru3fvlpb66937bBYVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVC8B880hnmmMaDVcij6F+qBywnPNL4D/D3w38BvgId1x327tVIp+jpKoXPAM41hwGvA6IavdwJPI8pdAxbqjrujBeIp+jB9RqE90zgFuBywdMfd3GJZLgTmhDRbB1ymO66dv0T54tvWYGAccDQwseHzYM2y/7KFovU7+oRCe6YxCfg9MAp4HPiY7rjvtlCep4HjQpptA47UHXdVE0TKHN+2PgN8ElHeCcA+PTQdpVn2hqYJ1s8Z2GoB0uKZxgeA+YgyA8wEHvZMY1RP9+QszzmEKzPAj9tVmQNGAZ8CJtOzMoPM3IomMbjVAqTBM40jgUeBg7v81YnAY55pnNlMQ1Rg1f5WhKa7gFtyFidv/itiuwnA4hzliI1vW0ci/wfrAF+z7JbZMnzbGgBowF8AazXLXpOmv7ZVaM80jkEsyAf10GQ68FvPNE7XHfeNJon1WeCYCO1+rjvui3kLkyeaZa/ybesl4KiQpnoz5InJ94By5x9829oObAa2N1GGQcBQ9l7dXAj8R5pO21KhPdP4MDJDjAppejSi1KfpjrsyZ5mGAddHbH5znrI0kccJV+gpzRAkJYOBka0WIgvaTqE90ygDDwEjIt5yJOAGM/VL+UnG14OxwpivO+4fkgzgmcZo4CRgge64f07SR8YsAP4hpE2UFct78G1LQ7ZOM4G5mmU/m6Sf/kZbKbRnGl8A7gSGxLx1B7JnygXPNKYCX47Y/HTPNNLKssUzjbnA7brjLk3ZVxqeidDmKN+2hmmW3aMr0bet/YGpyDbpeGAG4vbqNNr+H6AUOgJtodCeaQwBZgGXJrh9GXCm7rivZypUgGcaA4HZxH/JpGEocBFwkWcajyK/m3m64+5sogwALyB7z2G9tBkETAKe8W1rJLINmoRYx6cEn4eHjHNselH7B4VXaM80xgD/CZyc4PYngbN0x12brVR78XXgQzn2H8ZpwbWIaO6yzNAse7tvW0uBE0Ka3hssoQ9LOJRS6IgUWqE90zge+Bnhb/Du+AXwd7rjbsxUqAY80zgDuC6v/mOyvJmD+bY1GnFJbYrQfHLK4ab6tjVAs+zctk19hUIqtGcag4CrgW+QbCn7HeAa3XHz3DePBeZSnOCcX2XdYbC3/QBiyZ7QcB0FvC/r8XphJGJwfKWJY7YlhVNozzQmAPeRbBm7FajojpvKlxeGZxojkG3AmDzHicFOJOkjNr5tTQXOQgIbxjRchwXfFYVpZKfQX0TCnn2gA/E/b+9uBeDb1hzEP9wb8zXLPiOOAL5tDWSPH3oE8tJKHQRVGIUOjEuXIrNrVJdUIyuBz+qOuyBTwbrgmcZg4AGglOc4MVmoO+5bCe89gvbwix+LvERTo1l2rjEJEWXYibxMOoDMYt0LsVz0TONMxKjzXZIp80PAtLyVOWA28DdNGCcOaZbbUVxPRUAZxiLQ0hk68N/eQkMYXkw6gCt1x/1+dlJ1TxCnPYvw5VcnG4BTkLzopFwDXBWh3a+TDqBZ9hu+bb1FcZbX64GXgVeDazmy+lrRQpnahpYotGca44FrkYoeSVcJzwOf0R33ucwE64FgmX03cH7EW3YB5+uOuyTFmMMjjrcqg+CSRcBHU/YRl9WIH3uvS7Ps1U2Wo0/RVIX2TONDwL8A55JuuT8buFx33I5MBOuFIEb7fuBjMW67WXfcX6Yc+kKiGd3SjgOy7M5boX3gCvYorsqRzoHcFTpYqp6NhEYaKbvbAFysO+6DqQWLgGcahwIPEs8A9igSbJJm3IHAlRGbZ7HdWJTy/o3AviFtRgIPaJadW1yAIkeF9kzjcOBvkWX1hIy6fbCJynwGYAPvj3Hby8g2YIdnGuOADQmj1M5F/L9hPJLRliOqQr+DzLDLkC1P5+cfkXjr3gKABiLx2vXEUipCyVShPdPYD3kYz0eyZNquxFEQN/41ZJaNsy1YDXxUd9y3PdOYjMzUgzzTuBqYEzPIJWqix6wYffbGq8iSWAv+vAt4CQmdXUqgvJpl/7GnDnzbWkx4RN90WqDQvm19GDG8rkWMbuuRl9NmwhN3omx79vdtK0347wAkgGpfYD9gfyQ1+AnNsp+K01FqhfZMYyRwOlJf6lySuZ0KgWcaJwJV4ufwbgDKuuOu8ExjGvAIe2b2u5EkiouipG96pnE24bHRIAqXKJikK5pl7/Jty0aWzk8Av9Mse33MbhYRbmeYFlu4LgQFCcfG9CVPJeU2KIQZ5POiugTIX6E909CR6KKzkKSJ3mpKtQWeaXwbCTeNu6rYDJyjO+5SzzROQEr0dg2LPAlY4pnGdcCtPZXv9UxDA+6KOO6sLENbNcu+JGUXiyO0mR63U9+29kVSKk9EnrWTka1NUxNRWkRsw3FkhfZM4wDgm0hQRV8s/HYPMsNMinHPu8DHdcd1PdM4CZjHnmVrV4YhPnfTMw1Ld9zulq//DhwaYdz1wL0x5GwGUfbhU33bGtRTDS/ftt6PzKbHBtd0ZLU0qEvTKWE51n2E2FvWODP0eiRNLw9lXg6Mz6HfyOiO6wVutZ8SLRLsbSQ18w+eacxEorXCLL2wZ7a+WHfc3aGMnmmcBlwcUdxqnllkSdAse6VvW+vpvSzUMGCib1srkRdnZz701ODqqT5cV4YglVAWJpW3TYit0JGn9CB5PkpFyzgsQFxazQ5q6JaglreJFJHrjVWA0VBKaBrxssJGAQ96pnGLZxoDPdPYF/GtR2EdMpMXkcUR2vwWMcA9idgXrgTOILoyd3J8zPbtSH5L7oD7gX8lvDBcGPOBm3THfRx2l+MtBMH+9p8803iT7l9gTwOfaKyprTvubZ5pzEcqNsbZJ34ZmZleJ/rK56sFqScGgG9bgxDZJxLteTogo6E/mFE/RSbXJTeBf/UmZL8Zlw7gx8AdzQjXTIvuuDd6prEBSRjp5E4kdnxLN+2fDZbsNxM9KATixbE/SfSZPFMC45SOKG7jcTdH0RqjaH+YofNV6IC5SJWOqHvelYjldnbOpYAyR3fc73mmsQ9SaOFi3XHvD2m/DbjKM43HkZfe6N7ax2QH8MU8izYESnsEMuOOQ4JbOhX3MIoVVzDZt63hmmXnHv7bQnJfcqM77vZglv5hL806kNJB9wCP5vkQ5o3uuLd6pnFvnBM4dMf9dVA+ySG7tL/v6o67OKO+duPb1hSkXNMYerbQF5HByO82iv93HuLu2oDs399FSidt1Sy71+L6eRU46GW8zsIH+wPvWQmGkTSw5F5klm6MDNoJ/A6ZwX+qO66fsO/CkeQ4Hd1xVwaurHuQM6DS8Ab51S57FZmVC1PsIoRtyKpvJRGDmDTLXoUYMgtPl8IHsUn0n6g77rYgEGMWEuL4c8ApkrGmCOiOu9EzjfOQKixRwzm74x91x30nI7H2QrPsDt+2niODKK6M8YEX2Tu98kVgedis2p9J81a+G5ib14PWVwi2G1/xTGMNyUr9XK877i+yleo9PEnrFPpPdJ8XnUsd9b5OYoUODEDbMpSlr7OAvRMgovAQYpDLm4WEH2mTJZsQ3/MLmmWva+K4fZ5C1BTr63imcSWyNYmjzIuQqifNMChmFXG1k2j1wUcAK5QyZ0+7GELakiAT7UfAp2Pe+iZg6o4bpYh9FixDLL9xTmBcBTzXcD2PzLibfNt6g/ee2d2V44h+xrQiIkqhc8IzjSlItZOJMW/dQpdItLzRLHunb1tPI0UNu9KBHBS3GFgS/PxsSHrlUvqXQo9qtQCdKIXOmGBWvg6pnxX31I8O4DzdcVtR1WMhEob6FFJjbElwvdRTdlQvLCE8Pr8vpT9O8m1rYOByailKoTMkcFHdCoxNcPs64Gzdcf83W6ki8w3g6ozOj4pS7TR2bnSBGQFcAMxptSBKoTMgWF7fDpyasIvXkPJFy7KTKh6aZWe5X49SVvgI37ZGa5a9JsNx8yBqzvUPfNsaC9iaZUc6ODAItR3TzXWAZtnXJhFWKXQKPNM4GSlLfDbJ45xfQJS5LSKZIvIiYgsYGtJuOpJ5V2SixlkMAW4AbvBtaw2y4tqAPBfDgmtow8/D6dnLtBapWx+boih0VDm6Vq5oOsHJmOcikV8zUna3AFlmt1XSShjBudHLCF9WH0fxFTrJi3Y06RJzErvziqLQwyK2a1ntMs80JiHupwtIX7VlJ3Ab8LXuUjH7CEsJV+h2SIF8sgVjKoXOg2Bv/OngOjqjblcAF+iO62bUX1GJYhg7KXcp0vMMYuOIUustKxIrdFEixcL2Wp00TaE90/gW4nO9juyUeTZwTD9QZpBgkzDG+rZVmGo13REkgtza5GHbfoYeHrFd1Jk8C25EfKlZlLpZDXxBd9x5GfTVLrwcsd1MJIWzyNyBxJ7/dZPGa/sZelTEdllWAOmV4CC885Di80nZhKROTu5nygxyPM7WCO2SuvqaRhBYcx7wkyYNuT7pjUVR6KiF4w7MVYou6I67Aim+H5ctSC2y8brjflV33H6XhBBETfV4dE4DhVdoAM2y39Us20JKPD+ClITKi7ZfcofF/XZyqGca+zUjB7teq54CHMRd990JfA7o8eyi7WMPYtthB4NYr5/ddvihQ3eMHrURuKJ+yecAFpfKlV7rkXUz/mOAWSpXYv1bO+XuOl69Vj0B+FSpXPlKmn5C2t9WKlcaQzpfIzh0763h49g1YCAHbtq9ut6IJIU859uWpll2txVu6rXqJ5HyQbsQn64PfLtUrjQrcWUvNMueB8zzbetA4Ez21BYfjyS3jETqs+8TyLwz+NwBbEdSjjs/tyIv/y1IAMtm5PeyOKl8RVHou5ASwVFoqptHd9xdnmlcgfiMu2Xw6292DH79zfuBG3XHfaVeq84plSvXJB2zXqt+EDlj6xzkBMxU1GvVI4BLgc+n7SuE5+q16oxSudJZr/w1YBsMeGnXgIGDgDXAvyEGs+VhYab1WvVq4M+lcuXyhu/GAbPrteqXSuVKy6LMNMv+E3Bfq8bviUIotO64qxHDUSHRHbfumcYDyD6qkaeQyi0/0R03ywPMT0WK6acpWwRAvVbVkH18pVSu5LlMBCnG9wmgU6H/Gfj8sgNOORGxk3xkwsdvcKJ0VK9VJwL7lMqVHzV+XypXVtRr1WuBq0gYTdWXKcoeuh24Hlk6rUWsnsfqjjtDd9zvZ6nM9Vp1ADCkVK7sBN6p16qJDYH1WnUQcgrINaVypRlFGzcBWvBvQLPstzXL3orUHn8sZl+X0cMJJqVyZSXwvuBlpWhAKXREdMd9HnGxHKI77uW640ZJQEjCX7GnNO2vkDDTpNyO7N9XpJYqGgOA3wOlzi/qterg4PsoFu9GhpbKld6MQ4uQwv+KBpRCx0B33P9pQqjmTOSMZkrlyirCD1Hvlnqt+iVkVjTqtWozI+x+iSSrdHIaYhWOS1jc/nJgQoJ++zRKoQtEMJvt6LLXXV2vVQ+J2dU5AKVy5WeIwfHSjEQMpVSubAT2qdeqnc/WRwheUBkzALEgKxpQCl0sTgUOqdeqN3ReSAxx3EL9HaVy5Q6AUrnyMDCjXqt2PYQ+T55gz8pga0JjXNg944FXEvTbpymElVuxm5OBy0rlyl7unHqtGvf42K4piTcB1wCRfNAZ8DBiRNwP+E3CPjrqteroXlxT08nApdfX+H8nxS40QHijhAAAAABJRU5ErkJggg=="
                alt="イタキモ"
                style={{ height: '36px', width: 'auto' }}
              />
            </a>

            <div className="flex items-center gap-1 sm:gap-3 overflow-x-auto scrollbar-none">
              <a
                href="#features"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                特徴
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#menu"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                メニュー
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#trial"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                お試し制度
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#tips"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                来店前に
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#access"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                アクセス
              </a>
            </div>

            <a
              href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-main text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-[4px] shadow hover:bg-mainhover transition-colors duration-200 whitespace-nowrap tracking-wide"
            >
              予約枠を確保する
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}