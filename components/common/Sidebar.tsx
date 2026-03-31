"use client"
import { navbarPath } from "@/contant/navbarlink"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar(){
    const currentPath = usePathname();

    return (
        <aside className="hidden lg:flex flex-col w-32 p-6 bg-background border-r border-foreground/10 min-h-screen">
            <div className="flex flex-col gap-8">
                <h2 className="font-extrabold text-xl text-center">MENU</h2>
                
                <nav className="flex flex-col gap-4">
                    {navbarPath.map((data, index) => (
                        <Link 
                            href={data.path} 
                            key={index}
                            className={`text-sm font-semibold transition-all duration-300 ${
                                currentPath === data.path 
                                    ? 'text-primary border-l-2 border-primary pl-2'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {data.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
