'use client';
import { getExperienceDetails, getMainPageContent, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import createClient from '@sanity/client';

export default async function Home() {
  const mainPage= await getMainPageContent();
  const projetcs = await getProjects()
  const experience= await getExperienceDetails();
console.log(mainPage)

  return (
    
    <div className="text-white">
      
      <h1 className="text-6xl font-extrabold">Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> {mainPage.name}!</span></h1>
        <div className="text-lg text-gray-400 mt-5"><PortableText value={mainPage.description} /></div>
      <button  className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 p-3 mt-6 rounded font-bold">Check Resume</button>
        <br/><br/>

        <div className="mt-20">
        <h1 className="mb-2 text-4xl text-center font-semibold text-gray-100">SKILLS</h1>
        <div className="text-lg text-center text-gray-400 mb-12"><PortableText value={mainPage.skillDescription} /></div>
<div>
  <div className="w-full max-w-screen-md bg-gray-800 border border-purple-400 shadow-md rounded-lg p-4 mb-8">
    <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Frontend</div>
    <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
  {mainPage.frontend.map((item)=>{
    console.log('---------')
    console.log(item)
    return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

  })}
  </div>
  </div>

  <div className="w-full max-w-screen-md bg-gray-800 border border-purple-400 shadow-md rounded-lg p-4 mb-8">
    <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Backend</div>
    <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
  {mainPage.backend.map((item)=>{
    return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

  })}
  </div>
  </div>

  <div className="w-full max-w-screen-md bg-gray-800 border border-purple-400 shadow-md rounded-lg p-4 mb-8">
    <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Content Management System</div>
    <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
  {mainPage.cms.map((item)=>{
    return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

  })}
  </div>
  </div>

  <div className="w-full max-w-screen-md bg-gray-800 border border-purple-400 shadow-md rounded-lg p-4 mb-8">
    <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Others</div>
    <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
  {mainPage.others.map((item)=>{
    return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

  })}
  </div>
  </div>
</div>
        </div>

      {/* Experience */}
      <div>
        <div className="text-4xl text-center font-semibold mt-10 mb-4 text-gray-100">EXPERIENCE</div>
        <div className="flex flex-col p-2 flex-1">
        {experience.map((item)=>{return <div key={item._id} className="mb-4 w-full rounded-md p-3 justify-between relative overflow-hidden flex flex-col gap-3 transition-all duration-300 border border-blue-500 shadow-md">
          <div className="text-lg font-bold text-gray-300">{item.companyName}</div>
          <div>{item.location}</div>
          <div>{item.designation}</div>
          <div className="text-lg text-gray-400 mt-5"><PortableText value={item.description} /></div>
          </div>})}
          </div>
      </div>
<div style={{
  // background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',   
  // width: '100%',
  // clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 30% 98%, 0px 100%)',
  // padding:'20px'
}}>
      <p className="text-4xl text-center font-semibold mt-10 text-gray-100">Check out my projects!</p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      {projetcs.map((project) => (
        <Link href= {`project/${project.slug}`} key={project._id} className="border-2 vorder-gray-500 rounded-lg p-1   hover:scale-105 hover:border-blue-105 transition">
          {project.image && (<Image
            src={project.image}
            alt={project.alt}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500
           "
          />)}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
            {project.name}</div>
        </Link>
      ))}
      </div>
      </div>
      <p className="text-4xl text-center font-semibold text-gray-100">CONTACT</p>
      <div  className="flex justify-center items-center flex-wrap gap-3 mb-4">
        <div>{mainPage.emailId}</div>
        <div>{mainPage.mobile}</div>
        <div>{mainPage.gitLink}</div>
        <div>{mainPage.linkedIn}</div>
      </div>
    </div>
  );
}


