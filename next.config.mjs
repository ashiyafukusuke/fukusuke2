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
};

export default nextConfig;
