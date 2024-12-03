/*import rehypeHighlight from 'rehype-highlight';

const config = withMDX({
    extension: /\.mdx?$/,
    options: {
        rehypePlugins: [rehypeHighlight],
    },
})({
    pageExtensions: ['js', 'jsx', 'mjs', 'mdx'], // Include MDX and other extensions
});*/

const config = {
    reactStrictMode: true,
};


export default config;

/*const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        rehypePlugins: [require('rehype-highlight')], // Add syntax highlighting
    },
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'], // Allow MDX in pages
});
 */