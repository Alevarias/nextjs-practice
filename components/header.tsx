import Link from "next/link";
import React from "react";
import Image from "next/image"

export default function Header() { /** Remember to use PascalCase for functions. */
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4 text-2xl">
          <nav className="flex items-center bg-gray-800 text-white font-serif">
            <Link href="/" className=" hover:text-zinc-300 mr-7">
              <Image src="/beach-icon.png" width={70} height={70} alt="Picture of a beach sunset" />
            </Link>

            <Link href="/" className=" hover:text-zinc-300">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link href="/projects" className="hover:text-zinc-300" >
              Web Projects
            </Link>
            {/* <span className="mx-2">|</span>
            <Link href="/donations" className="hover:text-zinc-300">Donations</Link> */}
          </nav>
    </header>
  );
}