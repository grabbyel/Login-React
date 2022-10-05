import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { editUser } from '../../../services/UsersService'
import { useDataContext } from '../../../context/dataContext'

const EditModalComponent = ({ show, onHide, user }) => {
    const [newName, setNewName] = useState('')
    const [newSurname, setNewSurname] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const { token } = useDataContext()

    const newUserDates = {
        name: newName,
        surname: newSurname,
        email: newEmail
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
        console.log(user.id)
        const response = await editUser(token, user.id, newUserDates)
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
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group id="EditForm">

                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        // placeholder={user.name}
                        value={newName}
                        onChange={handleNewName}
                    />

                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        type='text'
                        // placeholder={user.surname}
                        value={newSurname}
                        onChange={handleNewSurname}
                    />

                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        // placeholder={user.email}
                        value={newEmail}
                        onChange={handleNewEmail}

                    />


                    <Button
                        onClick={handleEditUser}>
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
