import React from 'react'

export const SignUpComponent = () => {

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
                            placeholder="Tu nombre"
                            id="signupname"
                            autoComplete="off"
                        />
                        <i className="input-icon uil uil-user"></i>
                        <input
                            type="text"
                            name="signupsurname"
                            className="form-style"
                            placeholder="Tu primer apellido"
                            id="signupsurname"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="email"
                            name="signupemail"
                            className="form-style"
                            placeholder="Tu Email"
                            id="signupemail"
                            autoComplete="off"
                        />
                        <i className="input-icon uil uil-at"></i>
                    </div>
                    <div className="form-group mt-2">
                        <input
                            type="password"
                            name="signuppass"
                            className="form-style"
                            placeholder="Tu Password"
                            id="signuppass"
                            autoComplete="off"
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                    </div>
                    <button href="#" className="btn mt-4">submit</button>
                </div>
            </div>
        </>
    )
}
