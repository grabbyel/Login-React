import { async } from '@firebase/util'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataContext } from '../../../context/dataContext'
import { getAllUsers } from '../../../services/UsersService'
import { UserCardComponent } from '../../pure/userCard/UserCardComponent'

import './FeedComponent.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { getMe } from '../../../services/AuthenticationService'

export const FeedComponent = () => {

    const { user, setUser, logOutContext, usersList, setUsersList, token } = useDataContext()
    const navigateTo = useNavigate()

    // console.log(user)


    useEffect(() => {
        getAllUsers(token)
            .then(response => response)
            .then(data => {
                setUsersList(data)
            })
        getMe(token)
            .then(response => response)
            .then(response => {
                console.log(response)
                setUser(response)
            })
    }, [])

    useEffect(() => {
        if (!user) { navigateTo('/home') }
    }, [user])


    const handleHome = () => {
        logOutContext()
    }
    return (
        <div className='container-fluid' style={{ color: 'whitesmoke' }}>
            {user && <div>{`Bienvenido, ${user.name}`}</div>}
            <button onClick={handleHome}>LogOut</button>
            <div className='row justify-content-center'>
                {usersList && usersList.map((item) => <UserCardComponent user={item} key={item.id} />)}
            </div>
        </div>
    )
}


