import { useState } from 'react'
import CartPanel from '../CartPanel'
import { CarritoContext } from './CarritoContext'

export function CarritoProvider({ children }) {
    const [productos, setProductos] = useState([])
    const [abierto, setAbierto] = useState(false)

    function agregarAlCarrito(producto) {
        setProductos((productosActuales) => {
            if (productosActuales.some((item) => item.id === producto.id)) {
                return productosActuales
            }

            return [...productosActuales, producto]
        })
    }

    function quitarDelCarrito(idProducto) {
        setProductos((productosActuales) =>
            productosActuales.filter((producto) => producto.id !== idProducto)
        )
    }

    const valor = {
        productos,
        agregarAlCarrito,
        quitarDelCarrito,
        abrirCarrito: () => setAbierto(true),
    }

    return <CarritoContext.Provider value={valor}>
        {children}
        {abierto && (
            <CartPanel
                productos={productos}
                onQuitar={quitarDelCarrito}
                onCerrar={() => setAbierto(false)}
            />
        )}
    </CarritoContext.Provider>
}
