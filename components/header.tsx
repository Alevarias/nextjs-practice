import Link from "next/link";
import React from "react";

export default function Header() { /** Remember to use PascalCase for functions. */
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
          <nav className="bg-gray-800 text-white p-4">
            <Link href="/" className="hover:text-zinc-50">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link href="/dunno" className="hover:text-zinc-50" >
              Dunno
            </Link>
          </nav>
    </header>
  );
}