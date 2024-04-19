// Is file mei hum saare methods create kar rhe taaki kabhi bhi backend bne toh changes is file mei ho bs and frontend ko na pta chle ki under the hood kya kaam ho rha hai.

// Aur agar kabhi hmne appwrie hi as a backend service use karna hua toh hum same file ko hi copy paste kar skte hai.


import conf from "../conf/Conf";  //isse hme conf.js ka pura object mil jayega jisme saare env variables honge jaise ki appwriteUrl, appwriteProjectId, appwriteDatabaseId, appwriteCollectionId, appwriteBucketId
import {Client, Account, ID} from 'appwrite'; // ye appwrite sdk ka import hai jo ki humne appwrite sdk ko install karke aaya hai

// This is the main class for the Auth. This class is responsible for all the authentication related tasks. Refer to the appwrite sdk documentation for more information as we have written the similar code but in a different way.

export class AuthService {
    client = new Client(); 
    account;

    constructor() { // ye constructor hai jo ki class ke object bnate time run hota hai. Isme humne client object ko initialize kiya hai.
        this.client
            .setEndpoint(conf.appwriteUrl) // ye appwriteUrl ko set kar raha hai
            .setProject(conf.appwriteProjectId); // ye appwriteProjectId ko set kar raha hai

            this.account = new Account(this.client); // ye account object ko initialize kar raha hai jisme humne client object and uski value pass kiya hai
    }

    // yha hum ek method bnaenge taaki hum login kar sake. Isme humne email and password ko pass kiya hai. Aur ye ek promise deta hai toh hum async await use kar rahe hai.

    async createAccount({email, password, name}) { //humne yha destructuring kiya hai taaki jo bhi ye method use kare wo hume ek object de jisme email, password, name ho.

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name); // ye ek promise return karega jisme humne email, password, name pass kiya hai. aur isme first field unique ID hi hona chahiye. isilie hme apprwite sdk me ID() ka use kar skte hai jisme hme ek unique method mil jata hai jo unique id generate karta hai.

            if (userAccount) { // agar userAccount exists karta hai toh hum uska data return karenge
               // return userAccount // ye hum use kar skte agar hme user ko show karna chate ki aapka account successfully create ho gya hai na d ab aap jaise hi login kar sakte ho.
                // par hum chahte hai user ka agar account create ho gya hai toh directly login ho hi jaaye. Isilie humne niche wala code likha hai.

                return this.login({email, password}); // ye ek promise return karega jisme humne email and password pass kiya hai. Isme humne login method ka use kiya hai jo ki appwrite sdk me already available hai.
                
            } else { // agar userAccount nhi milta toh hum error return karenge
                return userAccount
            }
        }
        catch (error) {
            throw error;
        }

}

    async login({email, password}) { // yha humne login method bnaya hai jisme humne email and password pass kiya hai. Aur ye ek promise return karega toh hum async await use kar rahe hai.
        // tip: suggestion pe hamesha mat jao, refer documentation always
        try {

            return await this.account.createEmailPasswordSession(email, password); // ye ek promise return karega jisme humne email and password pass kiya hai. Isme humne createEmailSession ka use kiya hai jo ki appwrite sdk me already available hai.
            
            // ab hmne pta hai ki aise login hota hai and upar wala code jo likha hai usme bhi email and password le rhe toh hum directly hi login kar sakte hai. Isilie hum wha bhi same return karenge.

           
        }
        catch (error) {
            throw error;
        }
}

// ab hum jo method bna rhe usse hum check kar skte ki user login hai ya nhi. Isme humne kuch bhi pass nhi kiya hai kyunki hum sirf check kar rahe hai ki user login hai ya nhi jo ki hum account se puch skte hai. account ke paas ye sab methods hote hai. Isme humne async await use nhi kiya hai kyunki hum sirf check kar rahe hai ki user login hai ya nhi. Isme humne kuch bhi pass nhi kiya hai kyunki hum sirf check kar rahe hai ki user login hai ya nhi.

async getCurrentUser() { 

    try {
        return await this.account.get(); // Isme humne get method ka use kiya hai jo ki appwrite sdk me already available hai. And ye tab run karta hai jab user login hai. 
    }

    catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error); // ye error tab ke liye jab user pahuch hi nhi paaya yha tha... ye error tab nhi dega agar user logged hi nhi hai. uske liye alag method hai
    }
    return null; // agar user logged in nhi hai toh hum null return karenge
}

// appwrite session bnata hai login logout ke toh agar hum documentation mei logout ka dhund rhe hai toh hme delete session ka dhundna padega

async logout() { 
    try {
         await this.account.deleteSessions(); // appwrite ke methods mei do methods hote hai ek deleteSession aur ek deleteSessions. deleteSession ek session ko delete karta hai jabki deleteSessions saare sessions ko delete karta hai. Isme humne deleteSessions ka use kar rhe hai taaki user har jagah se logout ho jaaye.
    }

    catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    

}

}

// ab hum agar appwrite ki jagah koi aur service use karna chahte hai toh mai constructor ki jaagah value change karni hogi. Jaise ki agar hum firebase use karna chahte hai toh humne firebase sdk ko install karna hoga aur uska object initialize karna hoga. Iske baad humne constructor me firebase sdk ka object initialize karna hoga. Iske baad humne firebase sdk ke methods ka use karke code likhna hoga. Isse hume appwrite ki jagah firebase ka use karne me asani hogi. and hum useraccount method mei bhi changes kar skte hai par jo parameters hai wo same hi honge jiski wajah se frontend pe koi bhi changes nhi karne padegi.


const authService = new AuthService(); // ye ek object hai jisme humne AuthService class ka object bnaya hai. taaki hme kuch bhi use karna toh hum use kar skte hai jaise ki authService.logout, authService.getCurrentUser , etc   // ye object bnane ka kaam humne isliye kiya hai taki hum class ke methods ko direct access kar paye. Agar hum object nhi banate to class ke methods ko access karne ke liye hame object bnana padega. Isse hume direct class ke methods ko access karne me asani hogi. 

export default authService; // ye class ko export karne ke liye likha gaya hai
// agar hum directly hi ise export kar denge bina object bnaye to jab method ko run karenge tab use object bnana padega jisse ki hum class ke methods ko access kar paye. Wo na karne ke liye humne ek object bnaya hai jisme humne saare methods ko daal diya hai. Isse hume object bnane ki jarurat nhi padegi. Isse hume direct class ke methods ko access karne me asani hogi.
