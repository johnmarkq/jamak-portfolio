import { Section } from "@/components/common/Section"
import { AkoangNAwng } from "@/components/common/AkoangNAwng"
import { Button } from "@/components/ui/button"

export function AboutMe(){
    return(
        <Section>
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center md:text-left">About Me</h2>
                

                <div className="flex gap-6 md:gap-8 py-8 flex-col md:flex-row items-center md:items-start">
                    <div className="flex justify-center items-center flex-shrink-0 w-full md:w-auto">
                        <AkoangNAwng />
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-6">
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            I am a 3rd-year Bachelor of Science in Information Technology (BSIT) student with a strong interest in web development and software design. I am passionate about building user-friendly and efficient digital solutions, and I continuously improve my skills in programming, UI/UX design, and system development. I am eager to learn new technologies and gain real-world experience to grow as an IT professional.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Button className="h-10 px-6 rounded-lg font-semibold flex-1 sm:flex-none">
                                Skill List
                            </Button>
                            <Button variant="outline" className="h-10 px-6 rounded-lg font-semibold flex-1 sm:flex-none">
                                Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}