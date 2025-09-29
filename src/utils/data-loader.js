import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function loadData() {
  const dataDirectory = path.join(process.cwd());
  const fullPath = path.join(dataDirectory, "portfolio_data.yml");

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return yaml.load(fileContents);
}
