import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { ArticleMeta, ArticleData } from "@/types";

const articlesDirectory = path.join(process.cwd(), "articles");

if (!fs.existsSync(articlesDirectory)) {
  fs.mkdirSync(articlesDirectory, { recursive: true });
}

export function getAllArticles(locale: string = "en"): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const currentLocale = locale === "ru" ? "ru" : "en";
  const fileNames = fs.readdirSync(articlesDirectory);

  // Group files by base slug (e.g. "2026-08-29-homelab")
  const slugMap = new Map<
    string,
    { targetFile?: string; fallbackFile?: string }
  >();

  fileNames.forEach((fileName) => {
    const match = fileName.match(/^(.*)\.(en|ru)\.md$/);
    if (match) {
      const baseSlug = match[1];
      const fileLocale = match[2];
      const entry = slugMap.get(baseSlug) || {};

      if (fileLocale === currentLocale) {
        entry.targetFile = fileName;
      } else if (fileLocale === "en") {
        entry.fallbackFile = fileName;
      }

      slugMap.set(baseSlug, entry);
    }
  });

  const articles: ArticleMeta[] = [];

  slugMap.forEach((entry, slug) => {
    const fileNameToRead = entry.targetFile || entry.fallbackFile;
    if (!fileNameToRead) return;

    const fullPath = path.join(articlesDirectory, fileNameToRead);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})-(.*)$/);
    const fallbackDate = dateMatch ? dateMatch[1] : "";
    const displayTitle =
      data.title || (dateMatch ? dateMatch[2].replace(/-/g, " ") : slug);

    const wordCount = content.split(/\s+/g).length;
    const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

    articles.push({
      slug,
      title: displayTitle,
      date: data.date ? String(data.date) : fallbackDate,
      description: data.description || "",
      tags: data.tags || [],
      readingTime,
      cover: data.cover || null,
    });
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllArticleSlugs(): {
  params: { slug: string };
  locale: string;
}[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const slugSet = new Set<string>();

  fileNames.forEach((fileName) => {
    const match = fileName.match(/^(.*)\.(en|ru)\.md$/);
    if (match) {
      slugSet.add(match[1]);
    }
  });

  const paths: { params: { slug: string }; locale: string }[] = [];

  slugSet.forEach((slug) => {
    paths.push({ params: { slug }, locale: "en" });
    paths.push({ params: { slug }, locale: "ru" });
  });

  return paths;
}

export async function getArticleBySlug(
  slug: string,
  locale: string = "en",
): Promise<ArticleData | null> {
  const currentLocale = locale === "ru" ? "ru" : "en";
  const localizedPath = path.join(
    articlesDirectory,
    `${slug}.${currentLocale}.md`,
  );
  const fallbackPath = path.join(articlesDirectory, `${slug}.en.md`);

  const fullPath = fs.existsSync(localizedPath)
    ? localizedPath
    : fs.existsSync(fallbackPath)
      ? fallbackPath
      : null;

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})-(.*)$/);
  const fallbackDate = dateMatch ? dateMatch[1] : "";
  const displayTitle =
    data.title || (dateMatch ? dateMatch[2].replace(/-/g, " ") : slug);

  const wordCount = content.split(/\s+/g).length;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  const htmlContent = await marked.parse(content);

  return {
    slug,
    title: displayTitle,
    date: data.date ? String(data.date) : fallbackDate,
    description: data.description || "",
    tags: data.tags || [],
    readingTime,
    content: htmlContent,
  };
}
