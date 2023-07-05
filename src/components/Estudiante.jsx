
const Estudiante = ({ estudiante, borrar, setEstudiante }) => {
    const {id, documento, nombre, apellido, correo, telefono} = estudiante;
    return (
        <tr>
            <th scope="row">{documento}</th>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{correo}</td>
            <td>{telefono}</td>
            <td colSpan={2}>
                <button className="btn btn-warning" onClick={() => setEstudiante(estudiante)}>U</button>
                <button className="btn btn-danger" onClick={() => borrar(id)}>E</button>
                
            </td>
        </tr>
    )
}

export default Estudiante