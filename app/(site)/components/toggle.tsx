import { Page } from "@/app/types/Pages";
import Link from "next/link";
import { useState } from "react";

export default async function Toggle(page:Page[]|any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

return(
    <>
     <button
        className="text-yellow-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-2"
        onClick={()=>{console.log(isOpen);setIsOpen(!isOpen);console.log('----',isOpen)}}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <nav
        id="mobile-menu"
        className={`absolute top-full left-0 w-full bg-white text-white p-4 transition duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
        aria-label="Mobile navigation"
      >
          {page.map((pg:Page)=>(
              <Link key={pg._id} href={`#${pg.id}`}>
              <div className="text-sm text-gray-300 hover:underline block py-2 px-4">{pg.title}</div>
            </Link>
            ))}
      </nav>
    </>
)
  }