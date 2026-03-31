import { Section } from "@/components/common/Section"
import { Button } from "@/components/ui/button"
import { skillData } from "@/constant/Skill"

export function Skill()
{
    return(
        <Section>
            <div className="w-full flex flex-col gap-8">
                {/* Section Header */}
                <div className="flex justify-center items-center w-full gap-4">
                    <div className="flex-1 h-[2px] bg-foreground/20"></div>
                    <h2 className="text-2xl md:text-3xl font-extrabold whitespace-nowrap">SKILL</h2>
                    <div className="flex-1 h-[2px] bg-foreground/20"></div>
                </div>

                {/* Skills and Experience Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Skills List */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-center md:text-left">Skills List</h3>
                        <ul className="flex flex-col gap-3 text-center md:text-left">
                            {
                                skillData.map((data, index) => (
                                    <li key={index} className="text-base md:text-lg font-medium hover:text-primary transition-colors">
                                        • {data.skill}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Experience Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-center md:text-left">Experience</h3>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center md:text-left">
                            I have gained valuable experience through various projects and coursework. My expertise spans web development, mobile applications, and software design patterns. I'm continuously building my portfolio with real-world projects and contributing to collaborative team environments.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-foreground/20"></div>

                {/* Download Resume Button */}
                <div className="flex justify-center md:justify-start w-full">
                    <Button className="h-12 px-8 rounded-lg font-semibold text-base">
                        Download Resume
                    </Button>
                </div>
            </div>
        </Section>
    );
}