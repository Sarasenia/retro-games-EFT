import "./Principal.css"
import ContenedorProductos from "../Productos/ContenedorProductos.jsx"

function Principal({ terminoBusqueda }){
    return <div className="principal">
        <ContenedorProductos terminoBusqueda={terminoBusqueda} />
    </div>
}

export default Principal;