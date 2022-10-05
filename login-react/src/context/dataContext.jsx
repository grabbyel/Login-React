import { createContext, useContext, useEffect, useState } from "react"
import { ERROR_MESSAGE } from "../services/ErrorMessage"
import { getMe, logOut } from "../services/AuthenticationService"

export const userContext = createContext()

/** Creamos un custom hook que nos ayude en el uso del contexto, de tal forma
 *  que donde queramos usar estos datos, no sea necesaria la importación del 
 *  useContext, ni del dataContext propiamente dicho. De esta forma, tendremos 
 *  acceso a los datos aquí guardados, con la simple importación de este 
 *  custom hook.
 */
export const useDataContext = () => {
    const context = useContext(userContext)
    if (!context) throw new Error(ERROR_MESSAGE.contextDefault)
    return context
}


export function UserProvider({ children }) {

    // Creamos los datos que vamos a poner a disposición de nuestros componentes.
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')))
    const [usersList, setUsersList] = useState()
    const [modalShow, setModalShow] = useState(false)

    const logOutContext = () => {
        setToken(null)
        logOut()
    }

    // Al no ser posible hacer async el useEffect, creamos una funcion para obtener nuestro usuario
    useEffect(() => {
        const getUserWithToken = async (t) => {
            try {
                const me = await getMe(t)
                setUser(me)
            } catch (error) {
                setUser(null)
            }
        }

        if (token) {
            getUserWithToken(token)
        } else { setUser(null) }

    }, [token])


    return (
        <>
            <userContext.Provider
                value={{
                    user,
                    setUser,
                    token,
                    setToken,
                    logOutContext,
                    usersList,
                    setUsersList,
                    modalShow,
                    setModalShow
                }}>
                {children}
            </userContext.Provider>
        </>
    )
}