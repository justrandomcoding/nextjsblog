import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import {getAllPostSlugs, getSortedPostsData} from "../../lib/posts";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from 'rehype-pretty-code';
import moonlightTheme from '../../styles/moonlight-ii.json' with { type: 'json' };
import CustomHeading1, {H1} from "../../components/mdx/base";


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

    const post = posts.find(post => post.id === params.slug);


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
            <img {...props} alt={'Image'} style={{ maxWidth: '100%' , justifySelf: 'center' }} />

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
    Image: H1, // Handle <Image>
    StaticTweet: MyStaticTweet,
    h2: (props) => (
        <h2 {...props} className="large-text text-red-600">
            {props.children}
        </h2>
    ),
    //table: Table,
};


// h1, he, normal size
export default function PostPage({ source, metadata }) {
    return (
        <div>
            <h1 className="text-white font-bold text-2xl text-center mb-10">{metadata.title}</h1>
            <article >
                <MDXRemote {...source} components={{...components}} />
            </article>
        </div>
    );
}