import {getAllTags, getSortedPostsData} from "../../../lib/posts";
import {BlogList} from "../../../components/bloglist";
import Pagination from "../../../components/pagination";

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

// <Pagination page={currentPage} totalPages={totalPages} url="blog/page"/>

export default function TagPage({ posts, tag }) {
    return (
        <div>
            <h1>Posts tagged with "{tag}"</h1>
            <BlogList posts={posts}/>
        </div>
    );
}