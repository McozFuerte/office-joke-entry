import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I don't fear AI taking my job; I fear the coworker who replies 'Noted, thanks!' in 30 seconds becoming my manager.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, `${JOKE}\n`, "utf8");
