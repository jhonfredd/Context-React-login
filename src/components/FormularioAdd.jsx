import React, { useState } from 'react'
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ dispatch }) => {
    const [data, setData] = useState({ nombre: "", numero: "" });

    const { nombre, numero } = data;

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }

    const actionAdd = {
        type: "add",
        payload: {
            id: uuid(),
            nombre,
            numero
        },
    }
    const handleAdd = () => {
        dispatch(actionAdd);
        setData({ nombre: "", numero: "" });
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3 d-flex flex-column align-items-center ">
                    <label className="form-label text-center mx-1 col-12">
                        Nombre :
                        <input value={nombre} onChange={handleChange} name="nombre" type="text" placeholder='Ingrese Nombre' className="form-control" autoComplete='off' />
                    </label>
                    <label className="form-label text-center mx-1 col-12">
                        Número :
                        <input value={numero} onChange={handleChange} name="numero" type="text" placeholder='Ingrese Número' className="form-control" autoComplete='off' />
                    </label>
                    <button onClick={handleAdd} className="btn btn-success mt-2">
                        Agregar
                    </button>
                </div>
            </div>

        </>

    )
}

export default FormularioAdd