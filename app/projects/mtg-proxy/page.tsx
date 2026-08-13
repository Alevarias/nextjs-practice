'use client';

import {Button, Card} from "@material-tailwind/react";
import Image from "next/image";
import { useRef, useState } from 'react'
import MTGCardPreview, { MTGCardPreviewHandle } from "@/components/mtg-card-preview";

export default function MTGProxyPage() {
    const [cardPreview, setCardPreview] = useState({
        cardName: '',
        manaCost: '',
        superType: '',
        type: '',
        subType: '',
        description: '',
        alt: ''
    });

    const [imageFile, setImageFile] = useState<File | null>(null);
    const previewRef = useRef<MTGCardPreviewHandle>(null);

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-bold mt-5">MTG Proxy</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mx-10">
                A simple MTG proxy generator. Enter the card details below and click "Refresh" to generate a new proxy image.
            </p>

            <div className="flex flex-row sm:flex-row flex-wrap justify-center w-full gap-4 p-5">
                <div className="flex flex-col items-center w-full max-w-102 m-4 sm:m-10 lg:m-20">
                    <MTGCardPreview ref={previewRef} {...cardPreview} imageFile={imageFile} />
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center cursor-pointer"
                        onClick={() => previewRef.current?.download(`${cardPreview.cardName || "card"}.png`)}
                    >
                        Download Image
                    </button>
                </div>
                
                <div className="flex flex-col border-black border-2 rounded-lg flex-1 min-w-100 max-w-200 p-5">
                    <label>Card Name</label>
                    <div className="w-full max-w-sm min-w-50">
                        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Alexander, The Great and Cool" 
                            value={cardPreview.cardName} 
                            onChange={(e) => setCardPreview({...cardPreview, cardName: e.target.value})}
                        />
                    </div>

                    <label className=" mt-3">Mana Cost</label>
                    <div className="w-full max-w-sm min-w-50">
                        <div className="relative">
                            <input type="text" className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="WUBRG" 
                                value={cardPreview.manaCost}
                                onChange={(e) => setCardPreview({...cardPreview, manaCost: e.target.value})}
                            />
                            <p className="flex items-start mt-2 text-xs text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                            </svg>
                            White = W, Blue = U, Black = B, Red = R, Green = G.
                            Example: 1WWU
                            </p>    
                        </div>
                    </div>

                    
                    <label className=" mt-3">Types</label>
                    <div className="flex flex-row w-full max-w-sm min-w-50">
                        
                        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Legendary"
                            value={cardPreview.superType}
                            onChange={(e) => setCardPreview({...cardPreview, superType: e.target.value})}
                        />
                        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Creature"
                            value={cardPreview.type}
                            onChange={(e) => setCardPreview({...cardPreview, type: e.target.value})}
                        />
                        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Human Fool"
                            value={cardPreview.subType}
                            onChange={(e) => setCardPreview({...cardPreview, subType: e.target.value})}
                        />
                    </div>

                    <label className=" mt-3">Description: </label>
                    <textarea className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter your description here..." rows={4}
                        value={cardPreview.description}
                        onChange={(e) => setCardPreview({...cardPreview, description: e.target.value})}
                    ></textarea>
                    <label className=" mt-3">Alt text: </label>
                    <textarea className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter your alt text here..." rows={2}
                        value={cardPreview.alt}
                        onChange={(e) => setCardPreview({...cardPreview, alt: e.target.value})}
                    ></textarea>
                    <label className="my-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center cursor-pointer">
                        Upload Image
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}