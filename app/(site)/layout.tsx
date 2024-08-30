'use client';
import { metadata } from './metadata';
import "../globals.css";
import Link from "next/link";
import { getMainPageContent, getPages } from "@/sanity/sanity-utils";
metadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const mainPage = await getMainPageContent();
 
  const pages= await getPages()
  return (
    <html lang="en">
      <body className="bg-custom-dark mx-auto  ">
        <header className=" md:px-24 px-6 bg-gray-900 h-20 flex items-center justify-between text-sm sticky top-0 z-10">
          <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
          Portfollio          </Link>
          <div className={`flex items-center gap-5 text-sm text-gray-300  hidden md:block`}>
            {pages.map((page)=>(
              <Link className="p-3 hover:underline" key={page._id} href={`/#${page.id}`}>
                {page.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center block md:hidden">
            {/* <Toggle page={pages}/> */}
    
    </div>
        </header>
      <main className="md:pt-20 md:px-24 pb-10 md:pb-5 px-6 pt-10">{children}</main>
     
        </body>
        <footer>
        <div className=' md:px-24 px-6'>
      <p className="text-4xl mb-8 mt-8 text-center font-semibold text-gray-100">Feel free to contact !</p>
      <div id="contact" className="flex justify-center items-center flex-wrap gap-3 mb-4">
        <a className="mr-2" href={`mailto:${mainPage.emailId}`} target="_blank"><img height={20} width={20} src="email.png" /></a>
        <a className="mr-2"  href={mainPage.linkedIn} target="_blank" rel="noopener noreferrer"><img height={20} width={20} src="linkedin.png" /></a>
        <Link href={mainPage.gitLink} className="mr-2"  target="_blank" rel="noopener noreferrer"><img height={20} width={20} src="github.png" /></Link>
      </div>
      </div>
        <div className="mt-1 mb-1 text-sm text-center text-white">© 2024 Shahan Shaada. All rights reserved.</div>
        </footer>
    </html>
  );
}
