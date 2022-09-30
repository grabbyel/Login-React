import React from 'react'
import './LoginComponent.css'

export const LoginComponent = () => {
    const forgotPass = () => alert('Haz memoria, será el cumpleaños de tu novia 😜')

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
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <a href="#" className="btn mt-4">submit</a>
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
