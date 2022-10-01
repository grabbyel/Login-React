/** Este es un servicio para obtener datos de la api (como el listado de usuarios),
 *  eliminar un usuario determinado, o modificar los datos existentes.
 *  Al no existir roles dentro de la base de datos, se ha planteado de tal forma que 
 *  cualquier usuario pueda modificar a cualquier otro usuario.
 */

import { ERROR_MESSAGE } from './ErrorMessage' // importamos nuestra biblioteca de errores.
import { createContext, useState } from "react"


const urlGetAllUsers = 'http://51.38.51.187:5050/api/v1/users'
const urlUserFromId = 'http://51.38.51.187:5050/api/v1/users/'

let errorMessageDefault = 'Error inesperado al realizar acción'


const getAllUsers = (token) => {
    const { tokenType, accessToken } = token
    return fetch(
        urlGetAllUsers,
        {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: `${tokenType} ${accessToken}`,
            },
        }
    )
        .then(response => {
            if (response.status !== 200) {
                throw new Error(ERROR_MESSAGE[response.status] || errorMessageDefault)
            }
            return response.json()
        })
        .then(listado => listado.items)
}

