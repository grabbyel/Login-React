/** Declaramos un servicio a modo de biblioteca con los tipos de mensaje en función del error, 
 * de cara a escalar proyecto 
*/

const ERROR_MESSAGE = {
    404: 'Usuario o contraseña incorrectos',
    601: 'Usuario desconocido o no válido',
    409: 'Correo electrónico en uso',
}

export { ERROR_MESSAGE };

