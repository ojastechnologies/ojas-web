import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    readingTime: string;
    content: string;
}

const postsDirectory = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        .filter((fn) => fn.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                description: data.description,
                date: data.date,
                author: data.author || "Ojas Technologies",
                tags: data.tags || [],
                readingTime: data.readingTime || `${Math.ceil(content.split(/\s+/).length / 200)} min read`,
                content,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            description: data.description,
            date: data.date,
            author: data.author || "Ojas Technologies",
            tags: data.tags || [],
            readingTime: data.readingTime || `${Math.ceil(content.split(/\s+/).length / 200)} min read`,
            content,
        };
    } catch {
        return null;
    }
}

export function getAllSlugs(): string[] {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.filter((fn) => fn.endsWith(".md")).map((fn) => fn.replace(/\.md$/, ""));
}
