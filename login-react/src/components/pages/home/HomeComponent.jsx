import React from 'react'
import './HomeComponent.css'
// import '../../../index.css'
import { SignUpComponent } from '../../pure/sign-up/SignUpComponent'
import { LoginComponent } from '../../pure/login/LoginComponent'

export const HomeComponent = () => {
    const forgotPass = () => alert('Haz memoria, será el cumpleaños de tu novia')

    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3">
                                    <span>login</span>
                                    <span>Registro</span>
                                </h6>
                                <input
                                    className="checkbox"
                                    type="checkbox" id="reg-log"
                                    name="reg-log"
                                />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <LoginComponent />
                                        </div>
                                        <div className="card-back">
                                            <SignUpComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
