import React from 'react'
import { useDataContext } from '../../../context/dataContext'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './UserCardComponent.css'
import { deleteUser, getAllUsers } from '../../../services/UsersService'
import EditModalComponent from '../editModal/EditModalComponent'

export const UserCardComponent = ({ user }) => {

    const { token, setUsersList, usersList, modalShow, setModalShow } = useDataContext()



    const handleDeleteUser = async () => {
        try {
            console.log(user.id)
            if (confirm(`Desea eliminar a ${user.name}??`)) {
                const respDelete = await deleteUser(token, user.id)
                alert(`usuario ${user.name} eliminado correctamente`)
                const newList = usersList.filter(item => item.id !== user.id)
                setUsersList(newList)
                console.log(respDelete.ok)
            }
        } catch (error) {

        }
    }

    return (
        <div className="card cardUser m-1">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{`${user.email}`}</h5>
                <div className="card-text" >
                    <p>{`Nombre: ${user.name}`} </p>
                    <p>{`Apellido: ${user.surname}`}</p>
                    <p>{`ID: ${user.id}`}</p>

                </div>
                <div className='d-flex actionBtn'>

                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Editar
                    </Button>

                    <EditModalComponent
                        show={modalShow}
                        user={user}
                        onHide={() => setModalShow(false)}
                    />

                    <button className="btn btn-dark m-1" onClick={handleDeleteUser}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}
