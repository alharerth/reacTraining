import React,{createContext,useContext,useState} from "react";

const themeContext=createContext();

export const themeProvider=({Children})=>{

    const [theme,setTheme]=useState("light")

    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }

    return(
        <themeContext.Provider value={{theme,toggleTheme}}>
            {Children}
        </themeContext.Provider>
    )
}