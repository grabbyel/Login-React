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

    const { id, name, surname, email } = user

    const { token, setUsersList, usersList, setModalShow, setIdModal } = useDataContext()

    const handleDeleteUser = async () => {
        try {
            console.log(id)
            if (confirm(`Desea eliminar a ${name}??`)) {
                const respDelete = await deleteUser(token, id)
                alert(`usuario ${name} eliminado correctamente`)
                let newList = usersList.filter(item => item.id !== id)
                setUsersList(newList)
                newList = await getAllUsers(token)
                setUsersList(newList)
                console.log(respDelete.ok)
            } else alert(`Ha cancelado la eliminación del usuario ${user.name}`)
        } catch (error) {

        }
    }

    const handleEdit = ({ target: { id } }) => {
        // console.log(id)
        setModalShow(true)
        setIdModal(id)

    }

    return (
        <div className="card cardUser m-1">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{`${email}`}</h5>
                <div className="card-text" >
                    <p>{`Nombre: ${name}`} </p>
                    <p>{`Apellido: ${surname}`}</p>
                    <p>{`ID: ${id}`}</p>

                </div>
                <div className='d-flex actionBtn'>

                    <Button variant="primary" onClick={handleEdit} id={user.id}>
                        Editar {user.name}
                    </Button>

                    {/* {modalShow &&
                        <EditModalComponent
                            show={modalShow}
                            userID={user}
                            onHide={() => setModalShow(false)}
                        />} */}

                    <button className="btn btn-dark m-1" onClick={handleDeleteUser}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}
