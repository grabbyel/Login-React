/** Declaramos un servicio a modo de biblioteca con los tipos de mensaje en función del error, 
 * de cara a escalar proyecto 
*/

const ERROR_MESSAGE = {
    401: 'No tiene autorización para esta acción',
    404: 'Usuario o contraseña incorrectos',
    409: 'Correo electrónico en uso',
    601: 'Usuario desconocido o no válido',
    sessionClosed: 'La sesión se ha cerrado inesperadamente, vuelva a hacer Login',
}

export { ERROR_MESSAGE };

