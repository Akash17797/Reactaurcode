import config from "../config/Config";  //isse hme config.js ka pura object mil jayega jisme saare env variables honge jaise ki appwriteUrl, appwriteProjectId, appwriteDatabaseId, appwriteCollectionId, appwriteBucketId
import {Client, Account, ID} from 'appwrite'; // ye appwrite sdk ka import hai jo ki humne appwrite sdk ko install karke aaya hai

// This is the main class for the Auth. This class is responsible for all the authentication related tasks. Refer to the appwrite sdk documentation for more information as we have written the similar code but in a different way.

export class AuthService {
    client = new Client(); 
    account;

    constructor() { // ye constructor hai jo ki class ke object bnate time run hota hai. Isme humne client object ko initialize kiya hai.
        this.client
            .setEndpoint(config.appwriteUrl) // ye appwriteUrl ko set kar raha hai
            .setProject(config.appwriteProjectId); // ye appwriteProjectId ko set kar raha hai

            this.account = new Account(this.client); // ye account object ko initialize kar raha hai jisme humne client object and uski value pass kiya hai
    }

    // yha hum ek method bnaenge taaki hum login kar sake. Isme humne email and password ko pass kiya hai. Aur ye ek promise deta hai toh hum async await use kar rahe hai.

    async createAccount({email, password, name}) { //humne yha destructuring kiya hai taaki jo bhi ye method use kare wo hume ek object de jisme email, password, name ho.

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name); // ye ek promise return karega jisme humne email, password, name pass kiya hai. aur isme first field unique ID hi hona chahiye. isilie hme apprwite sdk me ID() ka use kar skte hai jisme hme ek unique method mil jata hai jo unique id generate karta hai.

            if (userAccount) { // agar userAccount exists karta hai toh hum uska data return karenge
               // return userAccount // ye hum use kar skte agar hme user ko show karna chate ki aapka account successfully create ho gya hai na d ab aap jaise hi login kar sakte ho.
                // par hum chahte hai user ka agar account create ho gya hai toh directly login ho hi jaaye. Isilie humne niche wala code likha hai.

                
                
            } else { // agar userAccount nhi milta toh hum error return karenge
                return userAccount
            }
        }
        catch (error) {
            console.error(error);
        }

}

}




const authService = new AuthService(); // ye ek object hai jisme humne AuthService class ka object bnaya hai.   // ye object bnane ka kaam humne isliye kiya hai taki hum class ke methods ko direct access kar paye. Agar hum object nhi banate to class ke methods ko access karne ke liye hame object bnana padega. Isse hume direct class ke methods ko access karne me asani hogi. 

export default AuthService; // ye class ko export karne ke liye likha gaya hai
// agar hum directly hi ise export kar denge bina object bnaye to jab method ko run karenge tab use object bnana padega jisse ki hum class ke methods ko access kar paye. Wo na karne ke liye humne ek object bnaya hai jisme humne saare methods ko daal diya hai. Isse hume object bnane ki jarurat nhi padegi. Isse hume direct class ke methods ko access karne me asani hogi.
