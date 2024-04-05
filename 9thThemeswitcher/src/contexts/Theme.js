import { createContext, useContext } from "react";

export const ThemeContext = createContext({  //pichli baar hmne createcontext mei koi value nhi di thi n usko empty rkha tha... par hum isme koi value de skte hai taaki agar koi context ko call kare toh starting mei hi ye saari values honi chahiye. Isme hum variables and methods dono hi input kar skte hai
    themeMode: "light",   
    darkTheme: () => {},
    lightTheme: () => {},

})

// Hum Theme context or theme context provdider ek saath hi export kar skte hai ek hi file mei..

export const ThemeProvider = ThemeContext.Provider   // Theme Provider is used to wrap the HTML.

// Custom Hooks can also be exported from here which people generally do

export default function useTheme () {
    return useContext(ThemeContext)
}

// One more important thing to be noted that export can be multiple but export default is only used once per file. ek file mei do exportdefault nhi ho skte  

// Themeprovider will be used to wrap the things and useTheme will give the access of the thememode, darktheme, lighttheme written above