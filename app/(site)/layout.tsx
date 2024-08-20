'use client';
import { metadata } from './metadata';
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import { useState } from "react";



metadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const pages= await getPages()
  return (
    <html lang="en">
      <body className="bg-custom-dark mx-auto  ">
        <header className=" px-24 bg-gray-900 h-20 flex items-center justify-between text-sm sticky top-0 z-10">
          <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
          Portfollio          </Link>
          <div className="flex items-center gap-5 text-sm text-gray-300 hidden md:block">
            {pages.map((page)=>(
              <Link className="p-3 hover:underline" key={page._id} href={`#${page.id}`}>
                {page.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center block md:hidden">
      <button
        className="text-gray-300 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-2"
        onClick={toggleMenu}
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
          {pages.map((page)=>(
              <Link key={page._id} href={`#${page.id}`}>
              <div className="text-sm text-gray-300 hover:underline block py-2 px-4">{page.title}</div>
            </Link>
            ))}
      </nav>
    </div>
        </header>
        <main className="pt-20 px-24 pb-5">{children}</main>
        <div className="mt-1 mb-1 text-sm text-center text-white">© 2024 Shahan Shaada. All rights reserved.</div>
        </body>
    </html>
  );
}
