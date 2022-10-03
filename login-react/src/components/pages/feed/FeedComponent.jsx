import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../context/dataContext'
import './FeedComponent.css'

export const FeedComponent = () => {

    let { user } = useUser()
    const navigateTo = useNavigate()

    console.log(user)

    const handleHome = () => {
        navigateTo('/home')
    }
    return (
        <div>
            Aquí el FeedComponent donde aparecerá todo
            <button onClick={handleHome}>A home</button>
        </div>
    )
}


