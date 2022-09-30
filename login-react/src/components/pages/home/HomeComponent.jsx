import React from 'react'
import reactLogo from '../../../assets/react.svg'
import './HomeComponent.css'
import '../../../index.css'

export const HomeComponent = () => {
    return (
        <>
            <div className="App bounce-in-top">
                <div>
                    <a href="https://reactjs.org" target="_blank">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                    </a>
                    <a href="https://vitejs.dev" target="_blank">
                        <img
                            src="/vite.svg"
                            className="logo"
                            alt="Vite logo"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}
