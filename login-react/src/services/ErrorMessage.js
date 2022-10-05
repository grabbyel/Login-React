/** Declaramos un servicio a modo de biblioteca con los tipos de mensaje en función del error, 
 * de cara a escalar proyecto 
*/

const ERROR_MESSAGE = {
    204: 'Respuesta vacía',
    401: 'No tiene autorización para esta acción',
    404: 'Usuario o contraseña incorrectos',
    409: 'Correo electrónico en uso',
    429: 'Se han realizado demasiadas peticiones, intentelo de nuevo más tarde',
    601: 'Usuario desconocido o no válido',
    sessionClosed: 'La sesión se ha cerrado inesperadamente, vuelva a hacer Login',
    contextDefault: 'No existe un Contex Provider definido',
    notDefined: 'Error no contemplado',
}

export { ERROR_MESSAGE };

