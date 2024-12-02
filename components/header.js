"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";

const menuData = [
    {
        id: 1,
        title: "Home",
        path: "/",
        newTab: false,
    },
    {
        id: 2,
        title: "Blog",
        path: "/blog",
        newTab: false,
    },
    {
        id: 5,
        title: "About",
        path: "/about",
        newTab: false,
    },
];


export default function Header({children, home}) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };

    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });

    const usePathName = usePathname();

    return (
        <>
            <header
                className={`header left-0 top-0 z-40  min-h-16 flex w-full items-center ${
                    sticky
                        ? "border-b border-gray-700 bg-[#1E222E]  fixed z-[9999]  !bg-opacity-80  backdrop-blur-sm transition"
                        : "absolute bg-[#1D2430]"
                }`}
            >
                <div className="container w-full mx-auto">
                    <div className="relative mx-4 flex items-center justify-between">
                        <div className="ml-8 mr-16">
                            <Link
                                href="/"
                                className="header-logo block w-full"

                            >
                            <img width={60} src="/images/logo.png"/>
                                </Link>
                        </div>
                        <div className="flex w-full items-center justify-between px-4">
                            <div>
                                <button
                                    onClick={navbarToggleHandler}
                                    id="navbarToggler"
                                    aria-label="Mobile Menu"
                                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 md:hidden"
                                >
                              <span
                                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-white ${
                                      navbarOpen ? " top-[9px] rotate-45" : " "
                                  }`}
                              />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-white ${
                                            navbarOpen ? "opacity-0 " : " "
                                        }`}
                                    />
                                    <span
                                        className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-white ${
                                            navbarOpen ? " top-[-8px] -rotate-45" : " "
                                        }`}
                                    />
                                </button>
                                <nav
                                    id="navbarCollapse"
                                    className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] px-6 py-4 duration-300 border-gray-700  bg-[#1d2430] md:visible md:static md:w-auto md:border-none md:!bg-transparent md:p-0 md:opacity-100 ${
                                        navbarOpen
                                            ? "visibility top-full opacity-100"
                                            : "invisible top-[120%] opacity-0"
                                    }`}
                                >
                                    <ul className="block md:flex md:space-x-12">
                                        {menuData.map((menuItem, index) => (
                                            <li key={index} className="group relative">

                                                    <Link
                                                        href={menuItem.path}
                                                        className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6  hover:no-underline ${
                                                            usePathName.includes( menuItem.path) 
                                                                ? "text-white font-bold"
                                                                : "hover:text-primary text-white/70 hover:text-white"
                                                        }`}
                                                    >
                                                        {menuItem.title}
                                                    </Link>

                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                         </div>
                    </div>
                </div>
            </header>
        </>
    );
}