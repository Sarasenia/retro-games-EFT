import { useContext } from 'react'
import { CarritoContext } from './CarritoContext'

export function useCarrito() {
    const contexto = useContext(CarritoContext)
    if (contexto === null) {
        throw new Error('useCarrito debe usarse dentro de un CarritoProvider')
    }

    return contexto
}
