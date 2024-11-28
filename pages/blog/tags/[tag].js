import {getAllTags, getSortedPostsData} from "../../../lib/posts";

export async function getStaticPaths() {
    const tags= getAllTags();
    console.log(tags);

    const paths = Array.from(tags).map((tag) => ({
        params: { tag },
    }));


    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const { tag } = context.params;
    const posts = getSortedPostsData();

    const filteredPosts = posts.filter(
        (post) => post.tags && post.tags.includes(tag)
    );

    console.log(filteredPosts);
    console.log(tag);
    return {
        props: {
            posts: filteredPosts,
            tag,
        },
    };
}

export default function TagPage({ posts, tag }) {
    return (
        <div>
            <h1>Posts tagged with "{tag}"</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
            <a href="/blog/tags">Back to all tags</a>
        </div>
    );
}