import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import {getAllPostSlugs, getSortedPostsData} from "../../lib/posts";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from 'rehype-pretty-code';
import moonlightTheme from '../../styles/moonlight-ii.json' with { type: 'json' };


const options = {
    theme: moonlightTheme, // Theme for code highlighting
    keepBackground: false,
    onVisitLine(node) {
        // Ensures lines without tokens don't collapse
        if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
        }
    },

};


export async function getStaticPaths() {
    const paths = getAllPostSlugs()
    return { paths, fallback: false }; // No fallback for non-existent posts
}

export async function getStaticProps({ params }) {

    const posts = getSortedPostsData();

    const post = posts.find(post => post.id === `${params.slug}.mdx`);
    console.log(post)

    const mdxSource = await serialize(post.content, {
        mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, options]],
            remarkPlugins: [remarkGfm]}, // Highlight code blocks
    });

    return {
        props: {
            source: mdxSource,
            metadata: post,
        },
    };
}

export function CustomImage(props) {
    return (
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
            <img {...props} alt={'Image'} style={{ maxWidth: '100%' }} />

        </div>
    );
}

export function MyStaticTweet(props) {
    return (
        <div style={{ textAlign: 'center', margin: '1em 0' }}>
            tweet
        </div>
    );
}

export function Table({ children }) {
    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1em 0' }}>
                {children}
            </table>
        </div>
    );
}

const components = {
    img: CustomImage, // Replace <img>
    Image: CustomImage, // Handle <Image>
    StaticTweet: MyStaticTweet,
    //table: Table,
};

export default function PostPage({ source, metadata }) {
    return (
        <div>
            <h1>{metadata.title}</h1>
            <p>{metadata.date}</p>
            <article>
                <MDXRemote {...source} components={components} />
            </article>
        </div>
    );
}