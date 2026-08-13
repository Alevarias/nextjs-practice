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
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-75 hover:border">
            <div className="px-6 py-4">
                <Link href={`/projects/${slug}`} className="font-bold text-xl mb-2 hover:underline">{title}: <span>{String(completion)}</span></Link>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}