import { createContext, useState } from "react";
export const AppContext = createContext();
export const AppProvider = ({children}) => {
    const [user,setUser] = useState({
        name:'Ali',age:23,email:'ali@mail.com',number:'0314324323'
    })
    const [test,setTest] = useState()
    return <AppContext.Provider value={{
        user,setUser,test,setTest
    }} >
        {children}
    </AppContext.Provider>
}