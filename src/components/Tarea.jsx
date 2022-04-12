import "../css/tarea.css"
import { IoIosCloseCircle } from "react-icons/io"

const Tarea = ( {id, texto, completada, completarTarea, eliminarTarea} ) => {
    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto"
                onClick={() => completarTarea(id)}
            >
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
                onClick={() => eliminarTarea(id)}
            >
                <IoIosCloseCircle className="tarea-icono"/>
            </div>
        </div>
    )
}

export default Tarea