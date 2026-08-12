import Link from "next/link";
import React from "react";

  interface CardProps {
        id: number;
        userId: number;
        title: string;
        body: string;
    }

export default function Card({id, userId, title, body}: CardProps) {
  return ( 
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <Link href={`/projects/posts/${id}`} className="font-bold text-xl mb-2 hover:underline">{title}</Link>
            <p className="text-gray-700 text-base">{body}</p>
        </div>
    </div>
  );
}