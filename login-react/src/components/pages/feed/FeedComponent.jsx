import { async } from '@firebase/util'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataContext } from '../../../context/dataContext'
import { getAllUsers } from '../../../services/UsersService'
import { UserCardComponent } from '../../pure/userCard/UserCardComponent'
import { getMe } from '../../../services/AuthenticationService'

import './FeedComponent.css'

export const FeedComponent = () => {

    const {
        user,
        setUser,
        logOutContext,
        usersList,
        setUsersList,
        token,
        modalShow
    } = useDataContext()
    const navigateTo = useNavigate()


    useEffect(() => {
        if (token) {
            getAllUsers(token)
                .then(response => response)
                .then(data => {
                    setUsersList(data)
                })
            getMe(token)
                .then(response => response)
                .then(response => {
                    setUser(response)
                })
        } else navigateTo('/home')
    }, [])

    useEffect(() => {
        if (!user) { navigateTo('/home') }
    }, [user])

    useEffect(() => {
    }, [usersList])



    const handleHome = () => {
        logOutContext()
    }
    return (
        <div className='container-fluid' style={{ color: 'whitesmoke' }}>
            <div className='align-items-center'>
                {user && <div style={{ position: 'fixed' }} >{`Bienvenido, ${user.name}`}</div>}
                <button
                    onClick={handleHome}
                    className='btn btn-dark btnLogOut  btn-sm m-2'
                >
                    logout
                </button>
            </div>
            {usersList &&
                <div>
                    {`Hay ${usersList.length} usuarios registrados`}
                </div>
            }
            <div className='row justify-content-center'>
                {usersList && usersList.map((item) =>
                    <UserCardComponent user={item} key={item.id} />
                )}
            </div>
        </div>
    )
}


