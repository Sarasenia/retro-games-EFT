import TarjetaProducto from './TarjetaProducto.jsx'

function mostrarProductos(productos) {
    if (productos.length === 0) {
        return <p role="status">No hay productos que coincidan con los filtros.</p>
    }

    return <div className="cont-tarjetas w-100">
        {productos.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
        ))}
    </div>
}

export default mostrarProductos
