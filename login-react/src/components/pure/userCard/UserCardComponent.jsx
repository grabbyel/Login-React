import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const UserCardComponent = ({ email, name, surname }) => {

    return (
        // <div className="card" style="width: 18rem;">
        //     <img src="..." className="card-img-top" alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{email}</h5>
        //         <p className="card-text">
        //             <p>Nombre: {name} </p>
        //             <p>Apellido: {surname} </p>
        //         </p>
        //         <button className="btn btn-primary">Editar</button>
        //         <button className="btn btn-primary">Eliminar</button>
        //     </div>
        // </div>

        <li style={{ color: 'whitesmoke' }}>
            <span>Nombre: {name} || apellido: {surname} || email: {email}<br /></span>
        </li>
    )
}
