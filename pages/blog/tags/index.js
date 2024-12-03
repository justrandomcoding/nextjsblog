import {getAllTags} from "../../../lib/posts";
import Head from "next/head";

export async function getStaticProps() {
    const tags = getAllTags();

    return {
        props: { tags },
    };
}

export default function TagsIndex({ tags }) {
    return (
        <>
            <Head>
                <title>Just Random Coding - Tags</title>
                <meta name="description" content="List of tags of all the posts." />
            </Head>
        <div>
            <h1 className="text-white font-bold text-2xl text-center mb-10">All Tags</h1>
            <ul>
                {tags.map((tag) => (
                    <li key={tag}>
                        <a href={`/blog/tags/${tag}`}>{tag}</a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}