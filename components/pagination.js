

export default function Pagination({ page, totalPages, url }) {
    return (
        <>
            <ul className="flex items-center justify-center pt-8">
                {page - 1 > 0 && (
                    <li className="mx-1">
                        <a
                            href={page === 0 ? `/${url}/1` : `/${url}/${page - 1}/`}
                            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-[#1D2430]  px-4 text-sm text-white/70 transition hover:bg-[#4a6cf7]  hover:text-white"
                        >
                            Prev
                        </a>
                    </li>
                )}
                {Array.from({ length: totalPages }, (v, i) => {
                    return (
                        <li key={i} className="mx-1">
                            {page === i + 1 ? (
                                <span className="?d flex h-9 min-w-[36px] items-center justify-center rounded-md bg-[#4a6cf7] bg-opacity-100  px-4 text-sm text-white transition">
                  {i + 1}
                </span>
                            ) : (
                                <a
                                    href={`/${url}/${i + 1}/`}
                                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-[#1D2430] px-4 text-sm text-white/70 transition hover:bg-[#4a6cf7]  hover:text-white"
                                >
                                    {i + 1}
                                </a>
                            )}
                        </li>
                    );
                })}
                {page + 1 <= totalPages && (
                    <li className="mx-1">
                        <a
                            href={`/${url}/${page + 1}/`}
                            className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-[#1D2430] px-4 text-sm text-white/70 transition hover:bg-[#4a6cf7] hover:text-white"
                        >
                            Next
                        </a>
                    </li>
                )}
            </ul>
        </>
    );
}