/** Este es un servicio para obtener datos de la api (como el listado de usuarios),
 *  eliminar un usuario determinado, o modificar los datos existentes.
 *  Al no existir roles dentro de la base de datos, se ha planteado de tal forma que 
 *  cualquier usuario pueda modificar a cualquier otro usuario.
 */

import { ERROR_MESSAGE } from './ErrorMessage' // importamos nuestra biblioteca de errores.


const urlUsers = 'http://51.38.51.187:5050/api/v1/users'

let errorMessageDefault = 'Error inesperado al realizar acción'

/** Creamos la función que nos devolverá el listado de usuarios de nuestra base de datos, tomando
 *  como parámetro en la función el token de validación que anteriormente habremos de obtener al
 *  hacer login.  
 */
const getAllUsers = (token) => {
    const { tokenType, accessToken } = token // Destructuramos el token que nos viene como objeto.

    // Creamos la petición fetch a nuestro endpoint con la estructura necesaria.
    return fetch(
        urlUsers,
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

const deleteUser = async (token, id) => {
    const { tokenType, accessToken } = token
    const credentialsDelete =
    {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            Authorization: `${tokenType} ${accessToken}`,
        },
    }

    try {
        const resp = await fetch(`${urlUsers}/${id}`, credentialsDelete)
        console.log(resp)
    } catch (error) {
        throw new Error(error.message)
    }
}

const editUser = async (token, id, userModified) => {
    const { email, name, surname } = userModified
    const { tokenType, accessToken } = token
    const urlEdit = `${urlUsers}/${id}`

    const header = {
        "Content-type": "application/json",
        Authorization: `${tokenType} ${accessToken}`,
    }
    const credentialsEditUser = {
        method: 'PUT',
        headers: header,
        body: JSON.stringify({ email, name, surname, id })
    }


    try {
        const response = await fetch(urlEdit, credentialsEditUser)
        if (response.ok) { alert('Usuario editado con éxito') }
        return response
    } catch (error) {
        console.log(error.message)
    }

}

export { getAllUsers, deleteUser, editUser }

