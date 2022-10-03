import { createContext, useContext, useState } from "react"
import { getMe } from "../services/AuthenticationService"
import { ERROR_MESSAGE } from "../services/ErrorMessage"


export const userContext = createContext()


/** Creamos un custom hook que nos ayude en el uso del contexto, de tal forma
 *  que donde queramos usar estos datos, no sea necesaria la importación del 
 *  useContext, ni del dataContext propiamente dicho. De esta forma, tendremos 
 *  acceso a los datos aquí guardados, con la simple importación de este 
 *  custom hook.
 */
export const useUser = () => {
    const context = useContext(userContext)
    if (!context) throw new Error(ERROR_MESSAGE.contextDefault)
    return context
}

export function UserProvider({ children }) {

    // Creamos el dato que vamos a poner a disposición de nuestros componentes.
    const [user, setUser] = useState()
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))

    // const loginContext = async (email, password) => {
    //     // login(email, password)
    //     //     .then(setUser)
    //     //     .catch(err => {
    //     //         setUser(undefined)

    //     //  })

    //     try {
    //         const newUser = await login(email, password)
    //         setUser(newUser)
    //     } catch (error) {
    //         setUser(undefined)
    //     }
    // }



    return (
        <>
            <userContext.Provider
                value={{ user, setUser, token, setToken }}>
                {children}
            </userContext.Provider>
        </>
    )
}