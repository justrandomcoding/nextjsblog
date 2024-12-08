import {getAllTags} from "../../../lib/posts";
import Head from "next/head";


export async function getStaticProps() {
    const tags = getAllTags();
    console.log(tags)
    return {
        props: { tags },
    };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getColor() {
    const colors = ["text-cyan-500","text-teal-500", "text-red-500", "text-green-500", "text-orange-500", "text-blue-500", "text-indigo-500", "text-gray-500"];
    return colors[ getRandomInt(colors.length)];
}

function getSize(count) {
    if (count < 2) return "text-sm";
    if (count < 5) return "text-md";
    if (count < 7) return "text-lg";
    if (count < 9) return "text-xl";
    if (count < 12) return "text-2xl";
    if (count < 15) return "text-3xl";
    return "text-4xl"
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
            <div className="flex justify-center">
                <ul className="flex justify-center flex-wrap max-w-xl align-center gap-2 leading-8">
                    {tags.map(tag => (
                        <li key={tag}>
                            <a href={`/blog/tags/${tag[0]}`} className={`${getSize(tag[1])} ${getColor(tag[1])}`}>{tag[0]}</a>
                        </li>
                    ))}


            </ul>
            </div>
        </div>
        </>
    );
}