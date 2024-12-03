import {getSortedPostsData} from "../../lib/posts";
import Pagination from "../../components/pagination";
import {BlogList} from "../../components/bloglist";
import Head from "next/head";

export async function getStaticProps() {
    const allPosts = getSortedPostsData();
    const posts = allPosts.slice(0, 10);

    return {
        props: {
            posts,
            totalPages: Math.ceil(allPosts.length / 10)
        }
    };
}

export default function Blog({ posts, totalPages }) {
    return (
        <>
            <Head>
                <title>Just Random Coding - Blog</title>
                <meta name="description" content="List of blog posts about software development." />
            </Head>
            <div>
                <BlogList posts={posts} />
                <Pagination page={1} totalPages={totalPages} url="blog/page" />
            </div>
        </>
    )
};