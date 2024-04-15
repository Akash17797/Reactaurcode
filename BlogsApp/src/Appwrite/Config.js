import conf from "../conf/Conf";
import {Client, ID, Databses, Storage, Query} from 'appwrite'; 


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

            this.databases = new Databses(this.client);
            this.bucket = new Storage(this.client); // documentation mei bucket ki jagah storage likha hai
    
    }

    async createPost ({title, slug, content, featredImage, status, userId}){    
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featredImage,
                status,
                userId,
                
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    async updatePost (slug, {title, content, featredImage, status}){ //hmne slug pass kiya hai kyunki slug se hi post ko identify kiya jata hai and baad mei object pass kiya kyunki hme id pehle check karna padega ki post exist karta hai ya nhi

        try {
           return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { 
                title,
                content,
                featredImage,
                status,
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    async deletePost (slug) { // slug hme chahiye kyunki post ko identify karne ke liye slug ka use hota hai ki yhi post delete karni hai

        try {
             await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
             return true;
        }
        catch (error) {
            console.error(error);
            return false; 
        }

    }

    async getPost (slug) { // slug hme chahiye kyunki post ko identify karne ke liye slug ka use hota hai

        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
        }
        catch (error) {
            console.error(error);
            return false;
        }

    }


    //target ye hai ye ki hme wo value chahiye jo hme wo post de jo ki active hai. Indexesmei hmne ye parameter diya tha ki status active hona chahiye. Isilie humne yha query use kiya hai jisme humne status active pass kiya hai.

    async getPosts (queries = [Query.equal("status", "active")]) {  //queries yha pe ek variable hai. Queries hm array mei paas karte ahi taaki multiple queries paas kar sake ad jo bhi match karegi uski value return karega.
    // imp = queries lgane ke liye indexes bnana jaruri hai appwrite mei

        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);
        }
        catch (error) {
            console.error(error);
            return false;
        }
       
    }


    //File Upload ki service. Aage jaaake hme ye alag file mei dalna hai. ek hai upload file and ek hai delete file.

    // file ko upload karte time file ka name nhi file ka blob dena chahiye

    async uploadFile (file) { // file hme chahiye kyunki hume file upload karna hai

        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // ye hme file ki jagah dena chahiye
                file,
            );
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }

    // file delete krte time hme file ki id deni pdegi
    async deleteFile (fileId) { 
            
            try {
                 await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fileId
                );
                return true;
            }
            catch (error) {
                console.error(error);
                return false;
            }
        }

        // File preview

        getFilePreview (fileId) { 
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        
        }

        // aur bhi hum methods define kar skte hai jaise ki file download ya kuch aur bhi toh unke hme yhi aake define kar skte hai.
}

const service = new Service(); // hmne isme new variable bnaya hai to constructor use krenge isme

export default service