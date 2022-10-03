/** Este es un servicio creado para las acciones de autenticación de nuestro login. 
 *  En caso de querer reutilizarlo, necesitaríamos cambiar los parámetros de URL (endpoint) 
 *  y de cabecera, además de pequeñas adaptaciones en caso de que fuese necesario.
*/
import { ERROR_MESSAGE } from './ErrorMessage' // importamos nuestra biblioteca de errores.

const url = 'http://51.38.51.187:5050/api/v1'
const urlLogin = `${url}/auth/log-in` // URL de la api donde atacamos para login(endpoint)
const urlSignUp = `${url}/auth/sign-up` // URL de la api donde atacamos para registro(endpoint)
const header = {
    "Content-type": "application/json"
}

// Creamos un mensaje por defecto, en caso de no estar en nuestra biblioteca de errores
let errorMessageDefault = 'Error desconocido en la autenticación de usuario'


/** Creamos la función de registro de un nuevo usuario, que recoge los datos del formulario, 
 *  hacemos petición fetch a la api con la estructura y el método necesario (en este caso, POST).
 */
const signup = (email, password, name, surname) => {
    return fetch(
        urlSignUp,
        {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ email, password, name, surname })
        }
    )
        .then(response => {
            if (response.status === 200) return { message: "Registro de usuario con éxito" }
            throw new Error(ERROR_MESSAGE[response.status] || errorMessageDefault)
        }
        )
}

/** Creamos la función login, muy similar a la anterior, pero en este caso es para usuarios ya
 *  registrados, lo cual nos devolverá una promesa que deberemos tratar para extraer
 *  los datos que necesitemos.
 */
const login = async (email, password) => {
    console.log('llamando al servicio...')

    const loginHeaders = {
        method: "POST",
        headers: header,
        body: JSON.stringify({ email, password }),
    }



    try {
        const response = await fetch(urlLogin, loginHeaders)
        if (response.status >= 300) throw new Error(ERROR_MESSAGE[response.status] || errorMessageDefault)
        const token = await response.json()
        localStorage.setItem('token', JSON.stringify(token))
        return token
    } catch (error) {
        throw error
    }



    // return fetch(
    //     urlLogin,
    //     {
    //         method: "POST",
    //         headers: header,
    //         body: JSON.stringify({ email, password }),
    //     }
    // )
    //     .then(response => {
    //         if (response.status != 200) {
    //             throw new Error(ERROR_MESSAGE[response.status] || errorMessageDefault)
    //         }
    //         return response.json()
    //     }
    //     )




    //     fetch()
    //         .then(response => {
    //             if (response.status >= 300) throw new Error(ERROR_MESSAGE[response.status] || errorMessageDefault)
    //             return response
    //         })
    //         .then(response => response.json())
    //         .catch(() => {throw new Error(ERROR_MESSAGE[response.status] || errorMessageDefault)})
    //     }
}

const getMe = ({ tokenType, accessToken }) => {
    const meHeaders = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `${tokenType} ${accessToken}`,
        },
    }
    return fetch(`${url}/users/me`, meHeaders).then((response) => response.json())
}

const logOut = () => {
    localStorage.removeItem('token')
}

// Exportamos nuestras funciones, para poder usarlas allá donde necesitemos.
export { signup, login, getMe, logOut }