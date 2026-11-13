import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";

let calendarHash = "1";
try {
  const filePath = path.join(process.cwd(), "public", "calendar.png");
  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    calendarHash = crypto.createHash("md5").update(fileBuffer).digest("hex").slice(0, 8);
  }
} catch (e) {
  console.warn("Could not calculate calendar.png hash:", e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CALENDAR_HASH: calendarHash,
  },
  // 旧サイト（WordPress時代）のURLに来た人を、今のページへ案内する
  async redirects() {
    return [
      { source: "/archives/:path*", destination: "/news", permanent: true },
      { source: "/blhttps-itakimo-net-archives-:slug", destination: "/news", permanent: true },
      { source: "/contact", destination: "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/contact", permanent: true },
      { source: "/checkout/:path*", destination: "/", permanent: true },
      { source: "/checkout", destination: "/", permanent: true },

      // 流入元の目印つき短縮URL（どこから来たかをGA4で見分けるため）
      { source: "/ig", destination: "/?utm_source=instagram&utm_medium=social&utm_campaign=profile", permanent: false },
      { source: "/th", destination: "/?utm_source=threads&utm_medium=social&utm_campaign=profile", permanent: false },
      { source: "/g", destination: "/?utm_source=google&utm_medium=organic&utm_campaign=gbp", permanent: false },
      { source: "/ek", destination: "/?utm_source=ekiten&utm_medium=referral&utm_campaign=profile", permanent: false },
      { source: "/st", destination: "/?utm_source=stores&utm_medium=referral&utm_campaign=profile", permanent: false },
      { source: "/hb", destination: "/?utm_source=hibarido&utm_medium=referral&utm_campaign=profile", permanent: false },
      { source: "/qr", destination: "/?utm_source=card&utm_medium=offline&utm_campaign=shopcard", permanent: false },
    ];
  },
};

export default nextConfig;
