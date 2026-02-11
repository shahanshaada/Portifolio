const clientConfig={
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion:"2024-08-16",
}
export default clientConfig;