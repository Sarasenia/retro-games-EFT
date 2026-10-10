import { useCarrito } from "../carrito/useCarrito"

function TarjetaProducto({ producto }) {
    const { productos, agregarAlCarrito, quitarUnaUnidad } = useCarrito()
    const cantidadEnCarrito = productos.find((item) => item.id === producto.id)?.cantidad ?? 0
    const precioFormateado = producto.precio.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    return <article className="card producto-card h-100">
        <div className="producto-imagen-contenedor">
            <img src={producto.imagen} className="producto-imagen" alt={producto.titulo} loading="lazy" />
        </div>
        <div className="producto-controles">
            {cantidadEnCarrito === 0 ? (
                <button
                    className="btn producto-agregar"
                    type="button"
                    onClick={() => agregarAlCarrito(producto)}
                >
                    <span aria-hidden="true">＋</span> Agregar
                </button>
            ) : (
                <div className="producto-cantidad" aria-label={`Cantidad de ${producto.titulo}: ${cantidadEnCarrito}`}>
                    <button
                        className="btn"
                        type="button"
                        onClick={() => quitarUnaUnidad(producto.id)}
                        aria-label={`Quitar una unidad de ${producto.titulo}`}
                    >
                        −
                    </button>
                    <span aria-live="polite">{cantidadEnCarrito}</span>
                    <button
                        className="btn"
                        type="button"
                        onClick={() => agregarAlCarrito(producto)}
                        aria-label={`Agregar una unidad de ${producto.titulo}`}
                    >
                        +
                    </button>
                </div>
            )}
        </div>
        <div className="card-body producto-detalle">
            <p className="producto-precio mb-1">
                <strong>{precioFormateado}</strong>
            </p>
            <h2 className="producto-titulo">{producto.titulo}</h2>
        </div>
    </article>
}

export default TarjetaProducto