import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/data/blog-posts";

const rootDirectory = path.join(process.cwd(), "content", "blog");

export const getPostBySlug = (
  slug: string,
): { meta: BlogPost; content: string } | null => {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return { meta: { ...data, slug: realSlug } as BlogPost, content };
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return null;
  }
};

export const getAllPostsMeta = (): BlogPost[] => {
  try {
    if (!fs.existsSync(rootDirectory)) {
      return [];
    }

    const files = fs.readdirSync(rootDirectory);
    const posts = files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => {
        const filePath = path.join(rootDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);
        const slug = filename.replace(/\.mdx$/, "");

        return { ...data, slug } as BlogPost;
      });

    return posts;
  } catch (error) {
    console.error("Error getting MDX posts:", error);
    return [];
  }
};
