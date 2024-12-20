
import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';

const postsDirectory = path.join(process.cwd(), 'data/blog');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const { content, data } = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            content,
            ...data,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { content, data } = matter(fileContents);

    // Combine the data with the id
    return {
        id,
        content,
        ...data,
    };
}

export const getAllTags = () => {
    const posts = getSortedPostsData();
    const tagSet = new Map();

    posts.forEach((post) => {
        if (post.tags && Array.isArray(post.tags)) {
            post.tags.forEach((tag) =>
            {
                if (tagSet.has(tag)) {
                    tagSet.set(tag ,tagSet.get(tag) + 1)
                }
                else {
                    tagSet.set(tag, 1)
                }
            });
        }
    });

    return Array.from(tagSet);
};