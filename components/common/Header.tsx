"use client"
import { navbarPath } from "@/contant/navbarlink"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/common/DarkmodeToggle"
import { useState } from "react"

export function Header() {
    const currentPath = usePathname();

    return (
        <div className="border-b border-slate-200 mx-20">
            <header className="container mx-auto flex fixed top-0 z-50  h-20 flex items-center justify-around backdrop-blur-lg ">
                <div>
                    <h1 className="font-extrabold text-3xl">GULBE</h1>
                </div>
                <div className="flex-1 flex justify-center mr-20">
                    <ul className="flex gap-5 font-extrabold text-xl">
                        {
                            navbarPath.map((data, index) => (
                                currentPath === data.path ?
                                    <Link href={data.path} key={index}
                                    className={`scale-120 transition-all duration-500 px-8  `}>
                                        <li>
                                            {data.name}
                                        </li>
                                    </Link>
                                    :
                                    <Link href={data.path} key={index} className="hover:underline">
                                        <li>
                                            {data.name}
                                        </li>
                                    </Link>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </header>
        </div>
    );
}