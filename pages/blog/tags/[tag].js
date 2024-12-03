import {getAllTags, getSortedPostsData} from "../../../lib/posts";
import {BlogList} from "../../../components/bloglist";
import Pagination from "../../../components/pagination";
import Head from "next/head";

const POSTS_PER_PAGE = 10;

export async function getStaticPaths() {
    const allTags= getAllTags();



    const tags = [];
    allTags.forEach((value)  =>
        tags.push(value[0])
    );

    const paths = tags.map((tag,) => ({
        params: { tag ,  page: 1},
    }));


    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const { tag, id } = context.params;
    const posts = getSortedPostsData();

    const filteredPosts = posts.filter(
        (post) => post.tags && post.tags.includes(tag)
    );

    return {
        props: {
            posts: filteredPosts,
            tag,
        },
    };
}

export default function TagPage({ posts, tag }) {
    return (
        <>
            <Head>
                <title>Just Random Coding - {tag}</title>
                <meta name="description" content={`Posts tagged with ${tag}`}/>
            </Head>
            <div>
                <h1 className="text-white font-bold text-2xl text-center mb-10">Posts tagged with "{tag}"</h1>
                <BlogList posts={posts}/>
            </div>
        </>
    );
}