import { useCarrito } from "../carrito/useCarrito"

function TarjetaProducto({ producto }) {
    const { productos, agregarAlCarrito } = useCarrito()
    const estaEnCarrito = productos.some((item) => item.id === producto.id)
    const precioFormateado = producto.precio.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    return <div className="card m-3" style={{ width: '18rem' }}>
        <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
        <div className="card-body">
            <h5 className="card-title">{producto.titulo}</h5>
            <p className="card-text">Precio: {precioFormateado}</p>
            <button
                className="btn btn-primary"
                type="button"
                disabled={estaEnCarrito}
                onClick={() => agregarAlCarrito(producto)}
            >
                {estaEnCarrito ? 'Agregado' : 'Agregar al carrito'}
            </button>
        </div>
    </div>
}

export default TarjetaProducto