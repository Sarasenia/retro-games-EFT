import "./Principal.css"
import ContenedorProductos from "../Productos/ContenedorProductos.jsx"

function Principal({ terminoBusqueda, categoria, onProductosCargados }){
    return <div className="principal">
        <ContenedorProductos
            terminoBusqueda={terminoBusqueda}
            categoria={categoria}
            onProductosCargados={onProductosCargados}
        />
    </div>
}

export default Principal;