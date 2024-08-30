'use client';
import { getExperienceDetails, getMainPageContent, getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const mainPage = await getMainPageContent();
  const projetcs = await getProjects()
  const experience = await getExperienceDetails();
  return (

    <div className="text-white">

      <h1 className="text-6xl font-extrabold">Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> {mainPage.name}!</span></h1>
        <h1 className="my-2 text-3xl font-semibold text-gray-300">I am a Frontend Developer</h1>
      <div className="text-lg text-gray-400 mt-5"><PortableText value={mainPage.description} /></div>
      <button className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 p-3 mt-6 rounded font-bold"><a href={mainPage.resume} target="_blank" rel="noopener noreferrer">Check Resume</a></button>
      <br /><br />

      <div className="mt-20" id="Skills">
        <h1 className="mb-2 text-4xl text-center font-semibold text-gray-100">SKILLS</h1>
        <div className="text-lg text-center text-gray-400 mb-12"><PortableText value={mainPage.skillDescription} /></div>
        <div>
          <div className="w-full mx-auto max-w-screen-md bg-custom-black border border-purple-400 shadow-customSkill rounded-lg p-4 mb-8">
            <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Frontend</div>
            <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
              {mainPage.frontend.map((item) => {
                return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

              })}
            </div>
          </div>

          <div className="w-full mx-auto max-w-screen-md  bg-custom-black border border-purple-400 shadow-customSkill rounded-lg p-4 mb-8">
            <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Backend</div>
            <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
              {mainPage.backend.map((item) => {
                return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

              })}
            </div>
          </div>

          <div className="w-full mx-auto max-w-screen-md  bg-custom-black border border-purple-400 shadow-customSkill rounded-lg p-4 mb-8">
            <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Content Management System</div>
            <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
              {mainPage.cms.map((item) => {
                return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

              })}
            </div>
          </div>

          <div className="w-full mx-auto max-w-screen-md  bg-custom-black border border-purple-400 shadow-customSkill rounded-lg p-4 mb-8">
            <div className="text-3xl font-bold text-gray-500 mb-4 text-center">Others</div>
            <div className="flex justify-center items-center flex-wrap gap-3 mb-4">
              {mainPage.others.map((item) => {
                return <div key={item._key} className="text-sm font-normal text-gray-200 border border-gray-200 rounded-md p-3 flex items-center justify-center gap-2"> {item.skillName}</div>

              })}
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div id="Experience">
        <div className="text-4xl text-center font-semibold mt-20 mb-4 text-gray-100">EXPERIENCE</div>
        <div className="flex flex-col p-4 flex-1">
          {experience.map((item) => {
            return <div  key={item._id} className="flex justify-between">
              <div className="flex flex-col items-center mr-2">
                <span className="flex align-baseline border-2 border-custom-violet rounded-full p-1 m-y-3 mb-2 bg-transparent"></span>
                <span className="bg-custom-blue w-1 flex-grow mb-4 "></span>
              </div>
              <div  className="mb-4 w-full rounded-md p-3 justify-between relative overflow-hidden block md:flex flex-col gap-3 transition-all duration-300 border border-blue-500 shadow-customblue">

                <div className="block md:flex justify-between">
                  <div><div className="text-lg font-bold text-gray-300">{item.companyName}</div>
                    <div>{item.designation}</div>
                  </div>
                  <div className="text-sm font-normal text-gray-400 text-left md:text-right">
                    <div>{item.location}</div>
                    <div>{item.period}</div>
                  </div></div>

                <div className="text-lg text-gray-400 mt-5"><PortableText value={item.description} /></div>
              </div>  </div>
          })}
        </div>
      </div>
      <div id="projects" className="mb-10 md:mb-20">
        <p className="text-4xl text-center font-semibold mt-20 mb-10 text-gray-100">Check out my projects!</p>
        <div className="mt-5 grid grid-cols-1  lg:grid-cols-3 gap-4 mb-10">
          {projetcs.map((project) => (
            <Link href={`project/${project.slug}`} key={project._id} className="bg-gray-900 cursor-pointer rounded-md shadow-customblack overflow-hidden p-6 flex flex-col gap-3 transition-all duration-300   hover:scale-105 hover:border-blue-105 transition">
              {project.image && (<Image
                src={project.image}
                alt={project.alt}
                width={750}
                height={300}
                style={{ height: '300px', width: '600px' }}
                className="object-cover rounded-lg border border-gray-500"
              />)}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
                {project.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


