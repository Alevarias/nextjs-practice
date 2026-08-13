import Link from "next/link";
import React from "react";

interface ProjectCardProps {
    title: string;
    slug: string;
    description: string;
    completion: boolean;
}

export default function ProjectCard({title = "", slug = "", description = "", completion = false}: ProjectCardProps) {
    
    return ( 
        <Link href={`/projects/${slug}`} className="font-bold text-xl mb-2">
            <div className="relative max-w-sm rounded overflow-hidden shadow-lg h-75 hover:border px-5 py-5">
                <div
                    className={`absolute top-0 right-0 w-35 h-6 pl-5 text-[17px] flex items-center justify-center ${completion ? "bg-green-500" : "bg-yellow-500"}`}
                    style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)" }}>
                    {completion ? "Finished" : "In Progress"}
                </div>
                {title}: <span>{completion ? "Finished" : "In Progress"}</span>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </Link>
        
    );
}