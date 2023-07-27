import { createContext, useState } from "react";

export const gContext = createContext({language:"spanish"})

const AppContextProvider = ({children})=>{
    const [ language, setLanguage ] = useState('eng')

    const toggleLanguage = function() {
        if (language === 'eng') {
            setLanguage('esp')
        } else {
            setLanguage('eng')
        }
    }

    return (
        <gContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </gContext.Provider>
    )
}
export default AppContextProvider