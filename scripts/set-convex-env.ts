import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const vercelUrl = process.env.VERCEL_URL;
const currentUrl = vercelUrl ? `https://${vercelUrl}` : undefined;

const content = `// Auto-generated at build time
export const CURRENT_URL: string | undefined = ${currentUrl ? `"${currentUrl}"` : "undefined"};
`;

const outPath = resolve(__dirname, "../convex/_currentUrl.ts");
writeFileSync(outPath, content);
console.log(
  `Generated ${outPath} with CURRENT_URL=${currentUrl ?? "undefined"}`,
);
