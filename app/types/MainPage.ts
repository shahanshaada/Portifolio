import { PortableTextBlock } from "next-sanity";
import { LinkHTMLAttributes } from "react";
type Skill={
    skillName:string;
    _key:string;
    icon: {
        asset: {
          url: string;
        };
      };
}
export type MainPage={
    _id:string;
    _createdAt:Date;
    name:string;
    resume: string;
    image:string;
    alt:string;
    description: PortableTextBlock[];
    skillDescription:PortableTextBlock[];
    frontend: Skill[];
    backend:Skill[];
    cms:Skill[];
    others:Skill[];
    gitLink:string;
    linkedIn:string;
    emailId:string;
    nationality:string;
}