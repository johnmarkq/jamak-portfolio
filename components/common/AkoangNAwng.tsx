"use client"
import Image from "next/image"
import { useState } from "react"

export function AkoangNAwng() {
    const [profile, setProfile] = useState("/jamak.jpg");

    return (
        <div className={`relative w-100 aspect-square rounded-lg border-3 bg-gray-700/30 border-black hover:border-white transition-all`}>
            <Image
                src={profile}
                alt="my image"
                fill
                onMouseEnter={() => { setProfile("/opawyawa.jpg") }}
                onMouseLeave={() => { setProfile("/jamak.jpg") }}
                className="object-cover rounded-lg translate-5 hover:translate-0 transition-all duration-300 ease-in-out"
            />
        </div>
    );
}