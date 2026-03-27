"use client"
import { navbarPath } from "@/contant/navbarlink"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/common/DarkmodeToggle"

export function Header() {
    const currentPath = usePathname();
    return (
        <div className="border-b border-slate-200">
            <header className="container mx-auto flex sticky top-0 z-50  h-20 flex items-center justify-around">
                <div>
                    <h1 className="font-extrabold text-3xl">GULBE</h1>
                </div>
                <div className="flex-1 flex justify-center mr-20">
                    <ul className="flex gap-5 font-extrabold text-xl">
                        {
                            navbarPath.map((data, index) => (
                                currentPath === data.path ?
                                    <Link href={data.path} key={index}
                                    className={`scale-120 transition-all duration-500 ${data.path === "/" || data.path === "/blog" ? "px-5" : "px-5"}`}>
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