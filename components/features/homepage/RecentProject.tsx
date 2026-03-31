import { Section } from "@/components/common/Section"
import { projectData } from "@/constant/project"
import Link from "next/link";
import Image from "next/image";

export function RecentProject(){
    return(
        <Section>
            <div className="container mx-auto ">
                <div className="flex justify-between items-center">
                    <div className="bg-black flex-1 flex justify-center items-center h-[10px] py-auto"></div>
                    <div className="font-extrabold text-2xl w-fit px-5">RECENT PROJECT</div>
                    <div className="bg-black flex-1 h-[10px]"></div>
                </div>
                <div className="container mx-auto flex py-20 justify-around">
                    {
                        projectData.slice(0,3).map((data,index) => (
                            <Link href={data.link} key={index} target="_blank">
                                <div>
                                    <div className="relative aspect-video w-90 border border-black rounded-lg">
                                        <Image
                                            src={data.imageLink} 
                                            alt="project image"
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                    <h1 className="font-extrabold text-lg text-center pt-5">{data.title}</h1>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Section>
    );
}