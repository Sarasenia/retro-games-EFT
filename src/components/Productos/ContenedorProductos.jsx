import TarjetaProducto from "./TarjetaProducto.jsx"
import "./ContenedorProductos.css"
import IndicadorCarga from "../IndicadorCarga.jsx"
import React, { useEffect } from "react"


function ContenedorProductos() {
    const [cargando, setCargando] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [productos, setProductos] = React.useState([])

    useEffect(() => {
        const controller = new AbortController()

        const obtenerProductos = async () => {
            try {
                const response = await fetch("https://dummyjson.com/c/3029-d29f-4014-9fb4", {
                    signal: controller.signal
                })

                if (!response.ok)
                    throw new Error("Error en la respuesta del servidor")

                const data = await response.json()
                if (!Array.isArray(data)) {
                    throw new Error("La respuesta no contiene una lista de productos")
                }
                setProductos(data)
            }
            catch (err) {
                if (err.name !== 'AbortError') {
                    setError(true)
                }
            }
            finally {
                setCargando(false)
            }
        }

        obtenerProductos()

        return () => controller.abort()
    }, [])

    if (cargando) return <IndicadorCarga />
    if (error) return <p role="alert">No se pudieron cargar los productos.</p>

    return <div className="cont-tarjetas w-100">
        {productos.map(producto =>
            <TarjetaProducto
                key={producto.id}
                producto={producto}
            />
        )}
    </div>
}

export default ContenedorProductos