import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import ListaEstudiantes from './components/ListaEstudiantes';


const App = () => {
  const [estudiante, setEstudiante] = useState({});
  const [estudiantes, setEstudiantes] = useState(JSON.parse(localStorage.getItem('estudiantes')) ?? []);

  useEffect(() => {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
  }, [estudiantes])

  const borrar = (id) => {
    if(confirm('Desea eliminar el registro')){
      const nuevo = estudiantes.filter(est => est.id !== id)
      setEstudiantes(nuevo)
    }
  }

  return (
    <>
      <div className="container">
        <header className="d-flex justify-content-center py-3">

          <div className="container">
            <div className="container text-center">
              <div className="row mt-4">
                <Formulario estudiante={estudiante} estudiantes={estudiantes} setEstudiantes={setEstudiantes} />
                <ListaEstudiantes estudiantes={estudiantes} setEstudiante={setEstudiante} estudiante={estudiante} borrar={borrar} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default App;