import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Note {
  slug: string;
  title: string;
  summary: string;
  tool: string;
  toolUrl: string;
  tweetUrl: string;
  repoUrl: string;
  tags: string[];
  date: string;
  author: string;
}

const notesDirectory = path.join(process.cwd(), "content/notes");

export function getAllNotes(): Note[] {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(notesDirectory);
  const allNotes = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        summary: data.summary || "",
        tool: data.tool || "",
        toolUrl: data.toolUrl || "",
        tweetUrl: data.tweetUrl || "",
        repoUrl: data.repoUrl || "",
        tags: data.tags || [],
        date: data.date || "",
        author: data.author || "",
      } as Note;
    });

  // Sort by date descending (newest first)
  return allNotes.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getAllTags(notes: Note[]): string[] {
  const tagsSet = new Set<string>();
  notes.forEach((note) => {
    note.tags.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}
