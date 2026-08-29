import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { ArticleMeta, ArticleData } from "@/types";

const articlesDirectory = path.join(process.cwd(), "articles");

if (!fs.existsSync(articlesDirectory)) {
  fs.mkdirSync(articlesDirectory, { recursive: true });
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticles = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName): ArticleMeta => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.*)$/);
      const fallbackDate = dateMatch ? dateMatch[1] : "";
      const displayTitle =
        data.title || (dateMatch ? dateMatch[2].replace(/-/g, " ") : slug);

      const wordCount = content.split(/\s+/g).length;
      const readingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

      return {
        slug,
        title: displayTitle,
        date: data.date ? String(data.date) : fallbackDate,
        description: data.description || "",
        tags: data.tags || [],
        readingTime,
        cover: data.cover || null,
      };
    });

  return allArticles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllArticleSlugs(): { params: { slug: string } }[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    }));
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleData | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
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
