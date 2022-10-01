import { createContext, useState } from "react"

const userContext = createContext({})

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        login: true,
    }
    )
    const [token, setToken] = useState({})

    return (
        <>
            <userContext.Provider
                value={{ user, setUser, token, setToken }}>
                {children}
            </userContext.Provider>
        </>
    )
}