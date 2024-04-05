import React from 'react'
import useTheme from '../contexts/Theme';

export default function ThemeBtn() {
    
    const{themeMode, lightTheme, darkTheme} = useTheme()   //useTheme se hme jo jo values chahiye thi wo hmne nikal li

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"  //checkboxes mei bydefault state hoti hai ki ya toh wo checked hai ya unchecked hai
                value=""
                className="sr-only peer"
                onChange={(e) => {
                    const darkModeStatus = e.currentTarget.checked
                    if (darkModeStatus) {
                        darkTheme()
                    } else {
                        lightTheme()
                    }
                } }  //Humne ko onchange mei hi yhi function likh diya hai wo hum kisi variable mei store krwa ke n uska refernece (call nhi) reference yha de skte the.

                checked = {themeMode === "dark"}   // theme mode agar checked rhe toh thememode rhega dark
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
