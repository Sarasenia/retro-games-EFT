import './CartPanel.css'

function CartPanel({ productos, onQuitar, onCerrar }) {
    const total = productos.reduce((suma, producto) => suma + producto.precio, 0)
    const totalFormateado = total.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP',
    })

    return <div className="carrito-fondo" onClick={onCerrar}>
        <section
            className="carrito-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-carrito"
            onClick={(evento) => evento.stopPropagation()}
        >
            <div className="carrito-encabezado">
                <h2 id="titulo-carrito">Tu carrito ({productos.length})</h2>
                <button className="btn btn-outline-secondary" type="button" onClick={onCerrar}>
                    Cerrar
                </button>
            </div>

            {productos.length === 0 ? (
                <p>El carrito está vacío. Agrega algún producto para empezar.</p>
            ) : (
                <>
                    <ul className="carrito-lista">
                        {productos.map((producto) => (
                            <li className="carrito-producto" key={producto.id}>
                                <img src={producto.imagen} alt="" />
                                <div>
                                    <h3>{producto.titulo}</h3>
                                    <p>{producto.precio.toLocaleString('es-CL', {
                                        style: 'currency',
                                        currency: 'CLP',
                                    })}</p>
                                </div>
                                <button
                                    className="btn btn-outline-danger"
                                    type="button"
                                    onClick={() => onQuitar(producto.id)}
                                    aria-label={`Quitar ${producto.titulo} del carrito`}
                                >
                                    Quitar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="carrito-total"><strong>Total: {totalFormateado}</strong></p>
                </>
            )}
        </section>
    </div>
}

export default CartPanel
