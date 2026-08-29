import fs from "fs";
import path from "path";
import { load } from "js-yaml";
import { PortfolioData } from "@/types";

let cachedData: PortfolioData | null = null;

export function loadData(): PortfolioData {
  if (process.env.NODE_ENV === "production" && cachedData) {
    return cachedData;
  }

  const fullPath = path.join(process.cwd(), "portfolio_data.yml");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  cachedData = (load(fileContents) as PortfolioData) || ({} as PortfolioData);

  return cachedData;
}
