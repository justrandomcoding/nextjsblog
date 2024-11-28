import {getAllTags} from "../../../lib/posts";

export async function getStaticProps() {
    const tags = getAllTags();

    return {
        props: { tags },
    };
}

export default function TagsIndex({ tags }) {
    return (
        <div>
            <h1>All Tags</h1>
            <ul>
                {tags.map((tag) => (
                    <li key={tag}>
                        <a href={`/blog/tags/${tag}`}>{tag}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}