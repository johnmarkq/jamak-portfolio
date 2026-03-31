"use client"
import { Menu, X } from "lucide-react"
import { navbarPath } from "@/constant/navbarlink"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/common/DarkmodeToggle"
import { useState } from "react"

export function Header() {
    const currentPath = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 w-full">
            <header className="left-0 w-full flex fixed top-0 z-50 h-20 items-center justify-between backdrop-blur-lg px-4 md:px-20 bg-background/80">
                <div className="flex items-center gap-4">
                    <h1 className="font-extrabold text-3xl">GULBE</h1>
                </div>

                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex gap-5 font-extrabold text-xl transition-all duration-300 ease-in-out">
                        {
                            navbarPath.map((data, index) => (
                                currentPath === data.path ?
                                    <Link href={data.path} key={index}
                                    className="scale-105 transition-all duration-300 px-4 py-2 rounded-lg bg-primary/10 text-primary">
                                        <li>{data.name}</li>
                                    </Link>
                                    :
                                    <Link href={data.path} key={index} className="hover:underline px-4 py-2 rounded-lg hover:bg-black/10 transition-colors duration-300">
                                        <li>{data.name}</li>
                                    </Link>
                            ))
                        }
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <button type="button" onClick={() => setOpen((state) => !state)} className="md:hidden p-2 rounded-lg border border-slate-300">
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {open && (
                <>
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
                    <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-slate-200 shadow-md z-50">
                        <ul className="flex flex-col p-4 gap-2">
                            {navbarPath.map((data, index) => (
                                <Link href={data.path} key={index} onClick={() => setOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-slate-100">
                                    {data.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}