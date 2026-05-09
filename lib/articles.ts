import fs from "fs";
import path from "path";

export type Article = {
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  cta: string;
  content: string;
  readingTime: string;
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("Article is missing frontmatter block.");
  }

  const frontmatter = match[1];
  const content = match[2].trim();
  const data: Record<string, string | string[]> = {};
  const lines = frontmatter.split("\n");

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (!line) continue;

    const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyValueMatch) continue;

    const key = keyValueMatch[1];
    let value = keyValueMatch[2].trim();

    if (value === "") {
      const listItems: string[] = [];

      while (index + 1 < lines.length && lines[index + 1].trim().startsWith("- ")) {
        index += 1;
        listItems.push(cleanYamlValue(lines[index].trim().slice(2)));
      }

      data[key] = listItems;
    } else {
      data[key] = cleanYamlValue(value);
    }
  }

  return { data, content };
}

function cleanYamlValue(value: string) {
  return value.replace(/^['\"]|['\"]$/g, "");
}

function calculateReadingTime(content: string) {
  const words = content.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

export function getArticles(): Article[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data, content } = parseFrontmatter(fileContent);

      return {
        title: String(data.title || "Untitled Article"),
        slug: String(data.slug || fileName.replace(/\.md$/, "")),
        description: String(data.description || ""),
        date: String(data.date || ""),
        category: String(data.category || "Funding Guides"),
        tags: Array.isArray(data.tags) ? data.tags : [],
        cta: String(data.cta || "Check Funding Options"),
        content,
        readingTime: calculateReadingTime(content)
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string) {
  return getArticles().find((article) => article.slug === slug);
}
