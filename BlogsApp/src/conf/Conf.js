// This is made so that we can access the environment variables from the .env file and can use anywhere. kyunki ha har jaake pura pura naam likhni se kabhi kabhi app load hi nhi hoti and error dhundne me time lagta hai.

const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    

}


export default conf 