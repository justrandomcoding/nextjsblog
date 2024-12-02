export default function PagingTags () {
    return (<div>Testing page
        </div>)
}

/*


const POSTS_PER_PAGE = 10;

export async function getStaticPaths() {
    const posts = getSortedPostsData();
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: (i + 1).toString() },
    }));

    return { paths, fallback: false }; // fallback: false ensures static generation for all pages
}

* const page = parseInt(context.params?.page, 10) || 1;
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
* */