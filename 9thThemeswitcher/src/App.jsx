import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // code for actual change in theme

  useEffect (() => {
    let classList = document.querySelector('html').classList
    
    classList.remove("light", "dark")   //to remove if there is any default value

    classList.add(themeMode)  //hum thememode ki jagah dark or light bhi le skte the but wo ultimlately themeMode mei hi jaa rha hai toh usi ka access le liya
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App


// themeprovide ko hum yha bhi use kar skte hai and main.jsx mei app ke upar bhi use kar skte hai taaki saara kuch hi wrap ho jaaye