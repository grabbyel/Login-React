import { useState } from 'react'
import { useDataContext } from '../../../context/dataContext'
import { getMe, login } from '../../../services/AuthenticationService'
import { getAllUsers } from '../../../services/UsersService'

import './LoginComponent.css'


export const LoginComponent = () => {

    const { token, setToken, setUsersList, setUser } = useDataContext() // Nos traemos de dataContex lo necesario.


    const [email, setEmail] = useState('GABRIEL_GALDE@HOTMAIL.COM')
    const [password, setPassword] = useState('DARKANGEL')

    const forgotPass = () => alert('Haz memoria, será el cumpleaños de tu novia 😜')

    /**
     * Hacemos login para obtener el token y lo guardamos en localStorage.
     * Hacemos petición de los datos de usuario logeado.
     */
    const handleLogin = async () => {
        try {
            if (!token) {
                const tokenResult = await login(email, password)
                setToken(tokenResult)
                const list = await getAllUsers(tokenResult)
                setUsersList(list)
                const me = await getMe(tokenResult)
                setUser(me)
            }
        } catch (error) {
            console.error(error)
        }
    }





    return (
        <>
            <div className="center-wrap">
                <div className="section text-center">
                    <h4 className="mb-4 pb-3">Iniciar Sesión</h4>
                    <div className="form-group">
                        <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Tu Email"
                            id="logemail"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="input-icon uil uil-at"></i>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Tu contraseña"
                            id="logpass"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <button onClick={handleLogin} className="btn btnLogin mt-4">Login</button>
                    <p className="mb-0 mt-4 text-center">
                        <a onClick={forgotPass} className="link">
                            Has olvidado tu contraseña?
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
