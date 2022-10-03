import { SignUpComponent } from '../../pure/sign-up/SignUpComponent'
import { LoginComponent } from '../../pure/login/LoginComponent'
import { useEffect } from 'react'
import { useUser } from '../../../context/dataContext'
import { useNavigate } from 'react-router-dom'

import './HomeComponent.css'

export const HomeComponent = () => {
    const forgotPass = () => alert('Haz memoria, será el cumpleaños de tu novia')
    const { user } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) { navigate('/feed') }
    }, [user])


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
