const experience={
    name:'experience',
    title:'Experience',
    type:'document',
    fields:[
        {
            name:'companyName',
            title:'Company Name',
            type:'string', 
        },
        {
            name:'location',
            title:'location',
            type:'string',  
        },
        {
            name:'designation',
            title:'Designation',
            type:'string', 
        },
        {
            name:'period',
            title:'Period',
            type:'string', 
        },
        {
            name:'description',
            title:'Description',
            type:'array',
            of:[{type:"block"}]
        },
    ]
}
export default experience;