import { PortableTextBlock } from "next-sanity";
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
    resume: {
        asset: {
          _ref: string;
          // Other asset properties as needed
        };}
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
    mobile:number;
    emailId:string;
    nationality:string;
}