import { Project } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/app/types/Pages";
import { MainPage } from "@/app/types/MainPage";
import { Experience } from "@/app/types/experience";


export async function getMainPageContent(): Promise<MainPage> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "main"][0]{
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        description ,
          resume {
          asset -> {
            _ref
          }
        },
        skillDescription,
        "frontend": frontend[]{
            skillName,
             "icon": icon.asset->url,
        },     
        "backend": backend[]{
            skillName,
            "icon": icon.asset->url,
        } ,  
        "cms": cms[]{
            skillName,
            "icon": icon.asset->url,
        }  ,
        "others": others[]{
            skillName,
            "icon": icon.asset->url,
        } ,
         nationality,
         emailId,
         mobile,
         gitLink,
         linkedIn
        }`
    )
}


export async function getProjects(): Promise<Project[]> {


    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image": image.asset->url,
    url,
    content    }`
    )
}

export async function getProject(slug: string): Promise<Project> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image": image.asset->url,
        url,
        content    }`,
        { slug }
    )
}


export async function getPages(): Promise<Page[]> {


    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug":slug.current,
            }`
    )
}

export async function getPage(slug: string): Promise<Page> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug":slug.current,
            content    }`,
        { slug }
    )
}

export async function getExperienceDetails(): Promise<Experience[]> {


    return createClient(clientConfig).fetch(
        groq`*[_type == "experience"]{
        _id,
        _createdAt,
        companyName,
        location,
        designation,
        period,
        description
            }`
    )
}
