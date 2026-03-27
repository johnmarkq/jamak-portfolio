import { Section } from "@/components/common/Section"
import Image from "next/image"

export function HeroBanner(){
    return(
        <Section>
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex-1 items-center flex justify-center">
                    <div className={`relative w-100 aspect-square rounded-lg border-3 bg-gray-700/30 border-black hover:border-white transition-all`}>
                        <Image  
                            src="/opawyawa.jpg"
                            alt="my image"
                            fill
                            className="object-cover rounded-lg translate-5 hover:translate-0 transition-all duration-300 ease-in-out"
                        />
                    </div>
                </div>  
                <div className="flex-1 flex gap-10 flex-col">
                    <h1 className="font-bold text-3xl">Hey, I&apos;m JohnMark Gulbe Roger</h1>
                    <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi illo obcaecati voluptatibus, quam molestias ullam aut corrupti commodi accusamus vitae sit officiis expedita rem corporis nobis eius modi quas nihil!</p>
                </div>
            </div>
        </Section>
    );
}