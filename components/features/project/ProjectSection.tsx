"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/common/Section"
import { Input } from "@/components/ui/input"
import { projectData } from "@/constant/project"
import { MdFavoriteBorder, MdVisibility } from "react-icons/md"

export type project_type = {
  link: string
  imageLink: string
  title: string
}

export function ProjectSection() {
  const [search, setSearch] = useState("")


  const filteredProjects = projectData.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Section className="">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Projects</h1>


        <div className="mb-12">
          <Input
            type="text"
            placeholder="SEARCH"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 px-4 rounded-lg border-foreground/20 text-base"
          />
        </div>


        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((data, index) => (
              <Link 
                href={data.link} 
                key={index} 
                target="_blank"
                className="group"
              >
                <div className="h-64 md:h-80 relative overflow-hidden rounded-lg border border-foreground/10 hover:border-foreground/30 transition-all duration-300">
                  <Image
                    src={data.imageLink}
                    alt={data.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="font-extrabold text-white text-center px-4 text-lg md:text-xl">
                      {data.title}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="font-extrabold text-lg md:text-xl truncate">
                    {data.title}
                  </h3>
                  <div className="flex gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <MdFavoriteBorder size={18} />
                      <span>0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdVisibility size={18} />
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found
            </p>
          </div>
        )}
      </div>
    </Section>
  )
}