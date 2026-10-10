const URL_PRODUCTOS = `${import.meta.env.BASE_URL}data/productos.json`

export async function cargarProductos({ signal } = {}) {
    const response = await fetch(URL_PRODUCTOS, { signal })
    if (!response.ok) {
        throw new Error(`Error al cargar el catálogo local: HTTP ${response.status}`)
    }

    const productos = await response.json()
    if (!Array.isArray(productos)) {
        throw new Error('El archivo del catálogo debe contener una lista de productos')
    }

    if (productos.length === 0 || productos.some((producto) =>
        producto.id == null ||
        typeof producto.titulo !== 'string' ||
        !Number.isFinite(producto.precio) ||
        typeof producto.imagen !== 'string'
    )) {
        throw new Error('El catálogo local contiene productos incompletos o está vacío')
    }

    return productos.map((producto) => ({
        ...producto,
        imagen: `${import.meta.env.BASE_URL}${producto.imagen.replace(/^\/+/, '')}`,
    }))
}
