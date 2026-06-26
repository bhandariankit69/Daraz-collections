 import {Children, createContext } from "react";
 import { useState } from "react";

 export const ThemeContext = createContext();

 export function ThemeProvider ({children}) {
    const [ theme , settheme]= useState("light");
    return(
        <ThemeContext.Provider value ={{theme,settheme }}>
            {children}
        </ThemeContext.Provider>
    );
 } 
  