import {
    type Rule,
  } from "sanity";
const main={
    
    name:'main',
    title:'Main Page',
    type:'document',
    __experimental_actions: ['update', 'publish'], 
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string', 
            validation: (Rule: Rule) => Rule.required().min(3).max(15),
            description: "Min 3 and Max 15 characters allowed",
        },
        {
            name:'description',
            title:'Description',
            type:'array',
            of:[{type:"block"}]
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{hotspot:true},
            fields:[
                {
                    name:'alt',
                    title:'Alt',
                    type:'string',  
                }
            ]
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'file',
            description: 'Upload your resume here.Only PDF files are allowed.', 
            options: {
                storeOriginalFilename: true,
                accept: 'application/pdf',
              },
          },

          {
            name:'skillDescription',
            title:'Skill Description',
            type:'array',
            of:[{type:"block"}]
          },
          {
            name: 'frontend',
            title: 'Frontend',
            description:'Add all the frontend skills',
            type: 'array',
            of: [   {
                type: 'object',
                fields: [
                  {
                    name: 'skillName',
                    title: 'Skill Name',
                    type: 'string',
                  },
                  {
                    name: 'icon',
                    title: 'Icon',
                    type: 'image', // You can use a more complex type if needed
                  },
                ],
              }],
          },
          {
            name: 'backend',
            title: 'Backend',
            description:'Add all the backend skills',
            type: 'array',
            of: [   {
                type: 'object',
                fields: [
                  {
                    name: 'skillName',
                    title: 'Skill Name',
                    type: 'string',
                  },
                  {
                    name: 'icon',
                    title: 'Icon',
                    type: 'image', // You can use a more complex type if needed
                  },
                ],
              }],
          },
          {
            name: 'cms',
            title: 'CMS',
            description:'Add all the cms you are familiar with',
            type: 'array',
            of: [   {
                type: 'object',
                fields: [
                  {
                    name: 'skillName',
                    title: 'Skill Name',
                    type: 'string',
                  },
                  {
                    name: 'icon',
                    title: 'Icon',
                    type: 'image', // You can use a more complex type if needed
                  },
                ],
              }],
          },
          {
            name: 'others',
            title: 'Other',
            description:'Add all other skills',
            type: 'array',
            of: [   {
                type: 'object',
                fields: [
                  {
                    name: 'skillName',
                    title: 'Skill Name',
                    type: 'string',
                  },
                  {
                    name: 'icon',
                    title: 'Icon',
                    type: 'image',
                  },
                ],
              }],
          },
          {
            name:'nationality',
            title:'Nationality',
            type:'string',
          },
          {
            name:'emailId',
            title:'Email Id',
            type:'string',
          },
          {
            name:'gitLink',
            title:'Git Link',
            type:'string',
          },
          {
            name:'linkedIn',
            title:'LinkedIn Id',
            type:'string',
          },
          {
            name:'mobile',
            title:'Mobile',
            type:'number',
          },
    ]
}
export default main;