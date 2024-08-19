import { PortableTextBlock } from "next-sanity";

export type Experience={
    _id:string;
    _createdAt:Date;
    companyName:string;
    location:string;
    designation:string;
    period:string;
    description: PortableTextBlock[];
}