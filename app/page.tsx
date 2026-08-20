import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-start bg-zinc-50 font-sans dark:bg-black">
      <div className="m-5 font-bold text-4xl flex-col">
        Introduction: 
        <div className="text-xl ms-10">
          Hello, I'm Alex. 
        </div>
      </div>

      <div className="m-5 font-bold text-4xl flex-col">
        Interests: 
        <div className="text-xl ms-10">
          I really enjoy reading books (specifically fantasy fiction).
        </div>
      </div>



      <div className="m-5 font-bold text-4xl flex-col">
        Purpose: 
        <div className="text-xl ms-10">
          I'm making this portfolio website to demonstrate and practice my Nextjs, React, and Typescript capabilities. 
        </div>
      </div>
    </div>
  );
}
