import Link from "next/link";
import React from "react";

export default function Header() { /** Remember to use PascalCase for functions. */
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
          <nav className="bg-gray-800 text-white p-4 font-serif">
            <Link href="/" className=" hover:text-zinc-300">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link href="/projects" className="hover:text-zinc-300" >
              Web Projects
            </Link>
            <span className="mx-2">|</span>
            <Link href="/donations" className="hover:text-zinc-300">Donations</Link>
          </nav>
    </header>
  );
}