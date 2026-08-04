import Link from "next/link";
import React from "react";

interface ProjectCardProps {
    title: string;
    description: string;
}

export default function ProjectCard({title, description}: ProjectCardProps) {
    
    return ( 
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <Link href={`/projects/${title}`} className="font-bold text-xl mb-2 hover:underline">{title}</Link>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
}