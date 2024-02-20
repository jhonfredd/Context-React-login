import React, { useEffect } from 'react'

const TableContacts = ({contacto=[], dispatch}) => {

    const handleDelete = (id)=>{
        const deleteAction = {
            type:"remove",
            payload: id
        }
        dispatch(deleteAction)
    }

    useEffect(() => {
        localStorage.setItem('contactos', JSON.stringify(contacto));
    }, [contacto]);

  return (
    <table className='table table-striped'> 
        <thead> 
            <tr> 
                <th> Id</th>
                <th> Nombre</th>
                <th> Número</th>
                <th> Accion</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            {
                contacto.map((cont)=>{

                    const finalid = cont.id.split("-");

                    return <tr key={cont.id}>
                        <th>{finalid[0]}</th>
                        <td>{cont.nombre}</td>
                        <td>{cont.numero}</td>
                        <td>
                            <button onClick={() => handleDelete(cont.id)} className='btn btn-danger'>Eliminar</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}

export default TableContacts