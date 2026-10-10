import { useState } from 'react'
import CartPanel from '../CartPanel'
import { CarritoContext } from './CarritoContext'

export function CarritoProvider({ children }) {
    const [productos, setProductos] = useState([])
    const [abierto, setAbierto] = useState(false)

    function agregarAlCarrito(producto) {
        setProductos((productosActuales) => {
            const existente = productosActuales.find((item) => item.id === producto.id)
            if (existente) {
                return productosActuales.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                )
            }

            return [...productosActuales, { ...producto, cantidad: 1 }]
        })
    }

    function quitarUnaUnidad(idProducto) {
        setProductos((productosActuales) =>
            productosActuales.flatMap((producto) => {
                if (producto.id !== idProducto) return [producto]
                if (producto.cantidad <= 1) return [producto]
                return [{ ...producto, cantidad: producto.cantidad - 1 }]
            })
        )
    }

    function quitarDelCarrito(idProducto) {
        setProductos((productosActuales) =>
            productosActuales.filter((producto) => producto.id !== idProducto)
        )
    }

    const valor = {
        productos,
        agregarAlCarrito,
        quitarUnaUnidad,
        quitarDelCarrito,
        abrirCarrito: () => setAbierto(true),
    }

    return <CarritoContext.Provider value={valor}>
        {children}
        {abierto && (
            <CartPanel
                productos={productos}
                onQuitar={quitarUnaUnidad}
                onEliminar={quitarDelCarrito}
                onAgregar={agregarAlCarrito}
                onCerrar={() => setAbierto(false)}
            />
        )}
    </CarritoContext.Provider>
}
