import fs from "fs";
import path from "path";
import { load } from "js-yaml";
import { PortfolioData } from "@/types";

const cachedData: Record<string, PortfolioData> = {};

export function loadData(locale: string = "en"): PortfolioData {
  const currentLocale = locale === "ru" ? "ru" : "en";

  if (process.env.NODE_ENV === "production" && cachedData[currentLocale]) {
    return cachedData[currentLocale];
  }

  const localizedPath = path.join(
    process.cwd(),
    `portfolio_data.${currentLocale}.yml`,
  );
  const defaultPath = path.join(process.cwd(), "portfolio_data.yml");
  const fullPath = fs.existsSync(localizedPath) ? localizedPath : defaultPath;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const data = (load(fileContents) as PortfolioData) || ({} as PortfolioData);

  cachedData[currentLocale] = data;
  return data;
}
