import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const goalDirectory = path.join(process.cwd(), 'src/data/goals');

export function getGoalsContent() {
  try {
    const fullPath = path.join(goalDirectory, `goals.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return { frontmatter: data, content };
  } catch (error) {
    console.error('Error reading goals.mdx', error);
    return null;
  }
}

const goalsLib = { getGoalsContent };

export default goalsLib;
