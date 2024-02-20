import React, { useEffect, useReducer, useState } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import TableContacts from './TableContacts'
import FormularioAdd from './FormularioAdd'

const init = () => {
    const contactos = localStorage.getItem("contactos");
    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {
    const [state, dispatch] = useReducer(ContactosReducer, [], init)
    
    useEffect(() => {
      return () => {
        localStorage.setItem('contactos', JSON.stringify(state))
      }
    }, [state]);

    const [fromView, setFromView] = useState(false);

    return (
        <div className='container mt-3'>
            <div className="d-flex justify-content-center">
                <button className='btn btn-info mb-3' onClick={() => setFromView(!fromView)}>Open Formulario</button>
            </div>
            { fromView && <FormularioAdd dispatch={dispatch}/> }
            <TableContacts contacto={state}  dispatch={dispatch} />
        </div>

    )
}

export default Contactos
