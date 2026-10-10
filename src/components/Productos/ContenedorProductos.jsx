import "./ContenedorProductos.css"
import { useEffect, useMemo, useState } from 'react'
import IndicadorCarga from '../IndicadorCarga.jsx'
import { cargarProductos } from '../../services/productos.js'
import mostrarProductos from './ListaProductos.jsx'

function ContenedorProductos({ terminoBusqueda }) {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState('')
    const [intento, setIntento] = useState(0)

    useEffect(() => {
        const controller = new AbortController()

        async function obtenerProductos() {
            setCargando(true)
            setError('')

            try {
                const productosCargados = await cargarProductos({ signal: controller.signal })
                setProductos(productosCargados)
            } catch (errorCarga) {
                if (errorCarga.name !== 'AbortError') {
                    console.error('No se pudo cargar el catálogo local.', errorCarga)
                    setError('No se pudo cargar el catálogo. Comprueba la conexión e inténtalo de nuevo.')
                }
            } finally {
                if (!controller.signal.aborted) setCargando(false)
            }
        }

        obtenerProductos()
        return () => controller.abort()
    }, [intento])

    const productosFiltrados = useMemo(() => {
        const consulta = terminoBusqueda.trim().toLocaleLowerCase()
        if (!consulta) return productos

        return productos.filter((producto) =>
            [producto.titulo, producto.descripcion, producto.categoria]
                .some((campo) => campo?.toLocaleLowerCase().includes(consulta))
        )
    }, [productos, terminoBusqueda])

    if (cargando) return <IndicadorCarga />
    if (error) {
        return <div role="alert">
            <p>{error}</p>
            <button className="btn btn-primary" type="button" onClick={() => setIntento((valor) => valor + 1)}>
                Reintentar
            </button>
        </div>
    }

    return mostrarProductos(productosFiltrados)
}

export default ContenedorProductos