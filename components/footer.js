"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="mt-auto z-10 bg-[#1E232E] pt-12">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
                            <div className="mb-8 flex  justify-center">
                                <div className="items-center">
                                </div>
                                <div className="ml-4 flex items-center">
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                                    >
                                        <svg
                                            width="17"
                                            height="16"
                                            viewBox="0 0 17 16"
                                            className="fill-current"
                                        >
                                            <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/2">
                            <div className="mb-12  lg:mb-16 text-center">
                                <p className="mb-9 text-base leading-relaxed text-white">
                                    Just random coding 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;