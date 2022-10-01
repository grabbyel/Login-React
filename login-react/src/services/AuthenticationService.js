/** Este es un servicio creado para las acciones de autenticación de nuestro login. 
 *  En caso de querer reutilizarlo, necesitaríamos cambiar los parámetros de URL (endpoint) 
 *  y de cabecera, además de pequeñas adaptaciones en caso de que fuese necesario.
*/
import { ERROR_MESSAGE } from './ErrorMessage' // importamos nuestra biblioteca de errores.


const urlLogin = 'http://51.38.51.187:5050/api/v1/auth/log-in' // URL de la api donde atacamos para login(endpoint)
const urlSignUp = 'http://51.38.51.187:5050/api/v1/auth/sign-up' // URL de la api donde atacamos para registro(endpoint)
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
const login = (email, password) => {
    return fetch(
        urlLogin,
        {
            method: "POST",
            headers: header,
            body: JSON.stringify({ email, password }),
        }
    )
        .then(response => {
            if (response.status != 200) {
                throw new Error(ERROR_MESSAGE[response.status] || errorMessageDefault)
            }
            return response.json()
        }
        )
}

// Exportamos nuestras funciones, para poder usarlas allá donde necesitemos.
export { signup, login }