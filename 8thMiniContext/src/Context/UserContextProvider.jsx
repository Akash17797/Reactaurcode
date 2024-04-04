import React, { useState } from "react";
import UserContext from "./ContextUser"


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user, setUser}}>     {/*value hai usme hume to bhi value milti hai user, setUser se ya agar aur bhi koi hame daalne toh hum wo sab yha paas kr skte hai  */}
        {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider;