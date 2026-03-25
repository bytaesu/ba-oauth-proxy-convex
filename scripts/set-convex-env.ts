import { execFileSync } from "node:child_process";

const vercelUrl = process.env.VERCEL_URL;
if (!vercelUrl) {
  console.log("VERCEL_URL not set, skipping CURRENT_URL setting");
  process.exit(0);
}

const currentUrl = `https://${vercelUrl}`;
console.log(`Setting CURRENT_URL=${currentUrl} in Convex`);
execFileSync("npx", ["convex", "env", "set", "CURRENT_URL", currentUrl], {
  stdio: "inherit",
});
