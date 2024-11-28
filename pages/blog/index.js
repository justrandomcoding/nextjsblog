import {getSortedPostsData} from "../../lib/posts";
import Layout from "../../components/layout";
import Pagination from "../../components/pagination";
import {BlogList} from "../../components/bloglist";

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
        <div>


            <BlogList posts={posts} />
            <Pagination page={1} totalPages={totalPages} url="blog/page" />
        </div>

    )
};


/*
*  <div key={post.slug}>
                            <div style={{position: "relative", width: "100%", maxWidth:512, height: 288, overflow: "hidden", aspectRatio: "16/9"}}>
                                <img src="/images/blogcard.jpg" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                <label className="font-bold text-white" style={{position: "absolute", top: 20, left: 20}} >{post.title}</label>
                            </div>
                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </div>*/