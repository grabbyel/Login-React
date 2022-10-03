import React, { useState } from 'react'
import { useUser } from '../../../context/dataContext'
import { useNavigate } from "react-router-dom"
import './LoginComponent.css'
import { login, getMe } from '../../../services/AuthenticationService'

export const LoginComponent = () => {
    const { user, setUser, token, setToken } = useUser() // Nos traemos de dataContex el usuario.
    const navigateTo = useNavigate()


    const [email, setEmail] = useState('GABRIEL_GALDE@HOTMAIL.COM')
    const [password, setPassword] = useState('DARKANGEL')

    const forgotPass = () => alert('Haz memoria, será el cumpleaños de tu novia 😜')

    /**
     * hacer login para obtener el token
     * guardar token en localStorage
     * 
     */
    const handleLogin = async () => {
        try {
            const tokenResult = token || await login(email, password)
            // console.log(tokenResult)
            const me = await getMe(tokenResult)
            // console.log(me)
            setToken(tokenResult)
            setUser(me)
            navigateTo('/feed')
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
                    <button onClick={handleLogin} className="btn mt-4">submit</button>
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
