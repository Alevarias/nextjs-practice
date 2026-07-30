import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
        <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">© 2026 Alexander J Sierra. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
            {/* <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li> */}
        </ul>
        </div>
    </footer>

  );
}