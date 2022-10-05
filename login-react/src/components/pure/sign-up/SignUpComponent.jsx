import React, { useState } from 'react'
import { signup } from '../../../services/AuthenticationService'
import { ERROR_MESSAGE } from '../../../services/ErrorMessage'
import './SignUpComponent.css'

export const SignUpComponent = () => {

    const [signUpName, setName] = useState('')
    const [signUpSurname, setSurname] = useState('')
    const [signUpEmail, setEmail] = useState('')
    const [signUpPassword, setPassword] = useState('')

    const handleName = (e) => setName(e.target.value)
    const handleSurname = (e) => setSurname(e.target.value)
    const handleSignUpEmail = (e) => setEmail(e.target.value)
    const handleSignUpPassword = (e) => setPassword(e.target.value)

    const handleSignUp = () => {
        signup(signUpEmail, signUpPassword, signUpName, signUpSurname)
            .then(response => {
                console.log(response)
                if (response.status !== 200) {
                    alert(ERROR_MESSAGE[response.status])
                } else alert('usuario creado con exito')
            })
    }


    // console.log('hola desde signup')
    return (
        <>
            <div className="center-wrap">
                <div className="section text-center">
                    <h4 className="mb-4 pb-3">Registro</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            name="signupname"
                            className="form-style"
                            placeholder="Nombre"
                            id="signupname"
                            autoComplete="off"
                            onChange={handleName}
                            value={signUpName}
                        />
                        <i className="input-icon uil uil-user"></i>
                        <input
                            type="text"
                            name="signupsurname"
                            className="form-style"
                            placeholder="Primer apellido"
                            id="signupsurname"
                            autoComplete="off"
                            onChange={handleSurname}
                            value={signUpSurname}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="email"
                            name="signupemail"
                            className="form-style"
                            placeholder="Email"
                            id="signupemail"
                            autoComplete="off"
                            onChange={handleSignUpEmail}
                            value={signUpEmail}
                        />
                        <i className="input-icon uil uil-at"></i>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="password"
                            name="signuppass"
                            className="form-style"
                            placeholder="Password"
                            id="signuppass"
                            autoComplete="off"
                            onChange={handleSignUpPassword}
                            value={signUpPassword}
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <button onClick={handleSignUp} className="btn btnLogin mt-4">submit</button>
                </div>
            </div>
        </>
    )
}
