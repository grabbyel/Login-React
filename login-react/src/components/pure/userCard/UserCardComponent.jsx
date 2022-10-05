import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './UserCardComponent.css'

export const UserCardComponent = ({ user }) => {

    return (
        <div
            className="card cardUser m-1"
            key={`id${user.id}`}
        >
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{`${user.email}`}</h5>
                <div className="card-text">
                    <p>{`Nombre: ${user.name}`} </p>
                    <p>{`Apellido: ${user.surname}`}</p>
                </div>
                <button className="btn btn-info m-1">Editar</button>
                <button className="btn btn-dark m-1">Eliminar</button>
            </div>
        </div>
    )
}
