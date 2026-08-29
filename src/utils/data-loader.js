import fs from "fs";
import path from "path";
import yaml from "js-yaml";

let cachedData = null;

export function loadData() {
  if (process.env.NODE_ENV === "production" && cachedData) {
    return cachedData;
  }

  const fullPath = path.join(process.cwd(), "portfolio_data.yml");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  cachedData = yaml.load(fileContents);

  return cachedData;
}
