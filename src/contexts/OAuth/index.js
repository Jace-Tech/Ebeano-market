import {createContext, useState} from "react"


export const OAuthContext = createContext()

const OAuth = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <OAuthContext.Provider value={{user, setUser}}>
            {children && children}
        </OAuthContext.Provider>
    )
}

export default OAuth
