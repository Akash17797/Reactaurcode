import React from "react";

const UserContext = React.createContext()   // yha pe humne context create kiya hai and context ke saath provider bhi bnana padta hai jo hmne data provide karega.

export default UserContext;

{/* <UserContext>   {/*yha pe Usercontext ke wrappper ki tarah kaam kar rha hai jo login card data ko wrap kar rha hai. isi ko hi Provider olte hai 
<Login />
<Card >
<Data />
</Card>

</UserContext> */}
