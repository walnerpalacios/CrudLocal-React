import React from 'react'
import Estudiante from './Estudiante'

const ListaEstudiantes = ({ estudiante, estudiantes, borrar, setEstudiante }) => {
    return (
        <div className="col-md-7 mt-2">
            <div className="card">
                <div className="card-header">
                    Lista de estudiantes
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">correo</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {estudiantes && estudiantes.length ?
                                (
                                    estudiantes.map(estudiante => (
                                        <Estudiante borrar={borrar} setEstudiante={setEstudiante} estudiante={estudiante} key={estudiante.id} />
                                    ))
                                ) :
                                (<tr>
                                    <th colSpan={5} scope='row'>No hay estudiantes</th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListaEstudiantes