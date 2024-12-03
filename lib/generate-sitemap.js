
const fs = require('fs');
const path = require('path');
const EXTERNAL_DATA_URL = 'https://yourdomain.com';

function getPosts() {
    // Get file names under /posts
    const postsDirectory = path.join(process.cwd(), 'data/blog');
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.mdx$/, '');

        // Combine the data with the id
        return {
            id,
        };
    });
    return allPostsData;
}

function generateSitemap() {
    const posts =  getPosts(); // Fetch all posts

    const postUrls = posts.map(
        (post) => `<url><loc>${EXTERNAL_DATA_URL}/blog/${post.id}</loc></url>`
    );
/*
    const tagUrls = tags.map(
        (tag) => `<url><loc>${EXTERNAL_DATA_URL}/tags/${tag}/page/1</loc></url>`
    );
*/
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${postUrls.join('')}

    </urlset>`;

    // Write sitemap to the public directory
    const sitemapPath = path.join(process.cwd(), './public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapContent);
}
generateSitemap();