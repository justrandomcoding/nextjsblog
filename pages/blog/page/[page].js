import Layout from '../../../components/layout';
import { getSortedPostsData} from "../../../lib/posts";
import {BlogList} from "../../../components/bloglist";
import Pagination from "../../../components/pagination";

const POSTS_PER_PAGE = 10;

export async function getStaticPaths() {
    const posts = getSortedPostsData();
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: (i + 1).toString() },
    }));

    return { paths, fallback: false }; // fallback: false ensures static generation for all pages
}

export async function getStaticProps(context) {
    const page = parseInt(context.params?.page, 10) || 1;
    const posts = getSortedPostsData();

    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    return {
        props: {
            posts: paginatedPosts,
            currentPage: page,
            totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
        },
    };
}
/*
export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

*/
export default function Post({ posts, currentPage, totalPages }) {
    return (

        <div>
            <BlogList posts={posts}/>
            <Pagination page={currentPage} totalPages={totalPages} url="blog/page"/>
        </div>
    );
}

/* {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br/>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>*/