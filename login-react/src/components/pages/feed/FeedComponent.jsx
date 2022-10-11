import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataContext } from '../../../context/dataContext'
import { getAllUsers } from '../../../services/UsersService'
import { UserCardComponent } from '../../pure/userCard/UserCardComponent'
import { getMe } from '../../../services/AuthenticationService'
import EditModalComponent from '../../pure/editModal/EditModalComponent'

import './FeedComponent.css'

export const FeedComponent = () => {

    const {
        user,
        setUser,
        logOutContext,
        usersList,
        setUsersList,
        token,
        modalShow,
        setModalShow,
        idModal,
    } = useDataContext()
    const navigateTo = useNavigate()


    const initialPetitions = async () => {
        const list = await getAllUsers(token)
        const me = await getMe(token)
        setUsersList(list)
        setUser(me)
    }


    useEffect(() => {
        (token)
            ? initialPetitions()
            : navigateTo('/home')
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
        <>
            {user &&
                <div className='headerFeed' >
                    <p>{`Bienvenido, ${user.name}`}</p>
                    <p className='mx-3'>
                        {usersList && `   Hay ${usersList.length} usuarios registrados`}
                    </p>
                    <button
                        onClick={handleHome}
                        className='btn btn-dark btnLogOut btn-sm m-2'
                    >
                        logout
                    </button>

                </div>}
            <div className='container-fluid' style={{ color: 'whitesmoke' }}>
                {/* <div className='align-items-center'> */}
                {/* </div> */}
                {/* {usersList &&
                    <div>
                        {`Hay ${usersList.length} usuarios registrados`}
                    </div>
                } */}
                {modalShow && <EditModalComponent
                    show={modalShow}
                    userToEdit={idModal}
                    onHide={() => setModalShow(false)}
                />}
                <div
                    className='row justify-content-center mt-5'
                    style={{ overflow: 'hidden' }}
                >
                    {usersList && usersList.map((item) =>
                        <UserCardComponent
                            user={item}
                            key={item.email}
                            userID={item.id}
                        />
                    )}
                </div>
            </div>
        </>
    )
}


