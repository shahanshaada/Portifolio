import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export const config=defineConfig({
    projectId:"nta5w95l",
    dataset:"production",
    title:"My Personal Website",
    apiVersion:"2024-08-16",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemas}
})