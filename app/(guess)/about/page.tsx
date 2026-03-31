

import { AboutMe } from "@/components/features/about/AboutMe"
import { Skill } from "@/components/features/about/Skill"

export default function About(){
    return(
        <>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
                <AboutMe />
                <Skill />
            </div>
        </>
    );
}