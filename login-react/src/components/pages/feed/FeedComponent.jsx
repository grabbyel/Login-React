import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../context/dataContext'

import './FeedComponent.css'

export const FeedComponent = () => {

    const { user, logOutContext } = useUser()
    const navigateTo = useNavigate()

    // console.log(user)

    useEffect(() => {
        if (!user) { navigateTo('/home') }
    }, [user])


    const handleHome = () => {
        logOutContext()
    }
    return (
        <div>
            Aquí el FeedComponent donde aparecerá todo
            <button onClick={handleHome}>LogOut</button>
        </div>
    )
}


