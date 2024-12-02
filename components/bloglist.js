

export function BlogList( {posts}) {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">

            {posts.map((post) => (
                <div key={post.slug} className="card bg-[#1D2430]">
                    <a className="text-white font-bold" href={`/blog/${post.id}`}>{post.title}</a>
                    <p className="text-white/70 text-sm">{post.summary}</p>
                    <div className="card-tags flex">
                        {post.tags?.map(tag => (
                            <span
                                key={tag}
                                className=" mr-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-1 text-sm font-semibold capitalize text-[#1D2430]"
                            >
                                    <a href={`/blog/tags/${tag}`}>{tag}</a>

                                </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}