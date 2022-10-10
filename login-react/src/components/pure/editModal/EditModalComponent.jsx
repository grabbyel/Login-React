import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { editUser } from '../../../services/UsersService'
import { useDataContext } from '../../../context/dataContext'

const EditModalComponent = ({ show, userToEdit, onHide }) => {
    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const { token } = useDataContext()

    console.log(`La id a EDITAR es : ${userToEdit.id}`)

    const newUserDates = {
        name: newName,
        surname: newSurname,
        email: newEmail,
        id: userToEdit.id
    }


    const handleNewEmail = (e) => {
        e.preventDefault()
        setNewEmail(e.target.value)
    }

    const handleNewName = (e) => {
        e.preventDefault()
        setNewName(e.target.value)
    }

    const handleNewSurname = (e) => {
        e.preventDefault()
        setNewSurname(e.target.value)
    }

    const handleEditUser = async () => {
        console.log(userToEdit)
        const response = await editUser(token, newUserDates)
        console.log(response)
        if (response) {
            setNewName('')
            setNewSurname('')
            setNewEmail('')
            onHide()
        }
    }


    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Editando usuario
                    <span
                        style={{ fontWeight: 'bold', color: 'black' }}
                    >
                        {userToEdit.name}
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group id="EditForm">

                    <Form.Label>Nuevo Nombre: </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder={userToEdit.name}
                        value={newName}
                        onChange={handleNewName}
                    />

                    <Form.Label>Nuevo Apellido: </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder={userToEdit.surname}
                        value={newSurname}
                        onChange={handleNewSurname}
                    />

                    <Form.Label>Nuevo Email: </Form.Label>
                    <Form.Control
                        type='email'
                        placeholder={userToEdit.email}
                        value={newEmail}
                        onChange={handleNewEmail}

                    />


                    <Button
                        onClick={handleEditUser}
                        className='mt-2'
                    >
                        Save
                    </Button>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModalComponent
