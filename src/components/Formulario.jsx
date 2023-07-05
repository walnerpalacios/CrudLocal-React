import { useState, useEffect } from "react"
import Error from "./Error";

export const Formulario = ({setEstudiantes, estudiantes, estudiante}) => {

    const [documento, setDocumento] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [error, setError] = useState(false);

    const enviarFormulario = (e) => {
        e.preventDefault();

        // validar campos
        if ([documento, nombre, apellido, correo, telefono].includes('')) {
            setError(true)
            return
        } else {
            setError(false)
        }

        // guardando datos
        const obj = {
            documento,
            nombre, 
            apellido, 
            correo, 
            telefono
        }

        if(estudiante.id){
            obj.id = estudiante.id
            const otros = estudiantes.map(est => est.id === estudiante.id ? obj:est)
            setEstudiantes(otros)
        }else{
            obj.id = getId()
            setEstudiantes([...estudiantes, obj])
        }
        
        limpiarCampos()

    }

    const getId = () =>{
        let id = (Math.random().toString(36).substring(2)+Date.now().toString(36))
        return id;
    }

    const limpiarCampos = () =>{
        setDocumento('')
        setNombre('')
        setApellido('')
        setTelefono('')
        setCorreo('')
        setError(false)
    }

    

    useEffect(() => {
        if(estudiante.id && estudiante.id !== ''){
            setDocumento(estudiante.documento)
            setNombre(estudiante.nombre)
            setApellido(estudiante.apellido)
            setCorreo(estudiante.correo)
            setTelefono(estudiante.telefono)
        }
    }, [estudiante])



    
    return (
        <div className="col-md-5 mt-2">
            <div className="card">
                <div className="card-header">
                    Formulario
                </div>
                <div className="card-body">
                    <form onSubmit={enviarFormulario}>
                        {error && <Error msg="Los campos son obligatorios" />}
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Documento</span>
                            <input type="number" className="form-control" value={documento} onChange={(e) => setDocumento(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre</span>
                            <input type="text" className="form-control" placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Apellidos</span>
                            <input type="text" className="form-control" placeholder="apellidos" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Telefono</span>
                            <input type="number" className="form-control" placeholder="320574004" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Correo</span>
                            <input type="email" className="form-control" placeholder="correo@correo.com" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="d-grid">
                            <input type="submit" className="btn btn-success" value="Enviar" />
                        </div>
                        <div className="d-grid ">
                            <input type="reset" className="btn btn-secondary my-2" value="Restablecer" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


