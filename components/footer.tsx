import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-200 rounded-base shadow-xs border border-b-cyan-950 border-black flex flex-col space-x-4 p-4">
        <div className="flex flex-row space-x-4 p-4">
            <div className="flex flex-col space-y-2 align-start">
                <span className="font-bold">Contact</span>
                <Link href="mailto:alexjusticesierra@gmail.com" className="hover:underline">alexjusticesierra@gmail.com</Link>
                <Link href="https://www.linkedin.com/in/alex-j-sierra/" className="hover:underline">
                  <Image src="/LI-Logo.png" alt="LinkedIn Link" width={100} height={100} className="object-cover"/>
                </Link>
                <Link href="https://github.com/Alevarias?tab=repositories" className="hover:underline">
                  <Image src="/GitHub_Lockup_Black.svg" alt="LinkedIn Link" width={100} height={100} className="object-cover"/>
                </Link>
            </div>
        </div>
        <span className="text-sm text-body sm:text-center">© 2026 Alexander J Sierra. All Rights Reserved.</span>
    </footer>

  );
}