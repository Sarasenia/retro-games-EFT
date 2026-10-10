 import "./Menu.css"
 import { useMemo, useState } from 'react'

const categorias = [
    'Consolas vintage',
    'Joysticks y mandos',
    'Tarjetas de memoria',
    'Conectores y cables',
]

function Menu({ terminoBusqueda, onCambiarBusqueda, productos, categoria, onCambiarCategoria }){
    const [mostrarSugerencias, setMostrarSugerencias] = useState(false)
    const [indiceActivo, setIndiceActivo] = useState(-1)
    const consultaNormalizada = terminoBusqueda.trim().toLocaleLowerCase()
    const sugerencias = useMemo(() => {
        if (!consultaNormalizada) return []

        return productos
            .filter((producto) => producto.titulo.toLocaleLowerCase().includes(consultaNormalizada))
            .slice(0, 6)
    }, [consultaNormalizada, productos])

    function seleccionarProducto(producto) {
        onCambiarBusqueda(producto.titulo)
        setMostrarSugerencias(false)
        setIndiceActivo(-1)
    }

    function manejarTeclas(evento) {
        if (evento.key === 'Escape') {
            setMostrarSugerencias(false)
            setIndiceActivo(-1)
        } else if (evento.key === 'ArrowDown' && sugerencias.length > 0) {
            evento.preventDefault()
            setMostrarSugerencias(true)
            setIndiceActivo((actual) => (actual + 1) % sugerencias.length)
        } else if (evento.key === 'ArrowUp' && sugerencias.length > 0) {
            evento.preventDefault()
            setMostrarSugerencias(true)
            setIndiceActivo((actual) => (actual <= 0 ? sugerencias.length - 1 : actual - 1))
        } else if (evento.key === 'Enter' && mostrarSugerencias && indiceActivo >= 0) {
            evento.preventDefault()
            seleccionarProducto(sugerencias[indiceActivo])
        }
    }

    return <nav className="navbar navbar-expand-lg bg-dark mt-3" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Menú</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Novedades</a></li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Lista de productos</a>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button" onClick={() => onCambiarCategoria('')}>Todas las categorías</button></li>
                            {categorias.map((nombreCategoria) => (
                                <li key={nombreCategoria}>
                                    <button
                                        className="dropdown-item"
                                        type="button"
                                        aria-pressed={categoria === nombreCategoria}
                                        onClick={() => onCambiarCategoria(nombreCategoria)}
                                    >
                                        {nombreCategoria}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>

                </ul>
                <span className="navbar-text me-3">
                    {categoria || 'Todas las categorías'}
                </span>
                <form className="d-flex buscador" role="search" onSubmit={(evento) => evento.preventDefault()}>
                    <div className="buscador-campo">
                        <input
                            id="buscador"
                            className="form-control"
                            type="search"
                            placeholder="Buscar productos"
                            aria-label="Buscar productos"
                            aria-autocomplete="list"
                            aria-expanded={mostrarSugerencias && Boolean(consultaNormalizada)}
                            aria-controls="sugerencias-productos"
                            aria-activedescendant={indiceActivo >= 0 ? `sugerencia-producto-${indiceActivo}` : undefined}
                            role="combobox"
                            value={terminoBusqueda}
                            onChange={(evento) => {
                                onCambiarBusqueda(evento.target.value)
                                setMostrarSugerencias(true)
                                setIndiceActivo(-1)
                            }}
                            onFocus={() => setMostrarSugerencias(true)}
                            onBlur={() => {
                                setMostrarSugerencias(false)
                                setIndiceActivo(-1)
                            }}
                            onKeyDown={manejarTeclas}
                        />
                        {mostrarSugerencias && consultaNormalizada && (
                            <ul id="sugerencias-productos" className="buscador-sugerencias" role="listbox" aria-label="Productos coincidentes">
                                {sugerencias.length > 0 ? sugerencias.map((producto, indice) => (
                                    <li key={producto.id} role="presentation">
                                        <button
                                            id={`sugerencia-producto-${indice}`}
                                            className="buscador-sugerencia"
                                            type="button"
                                            role="option"
                                            aria-selected={indiceActivo === indice}
                                            onMouseDown={(evento) => evento.preventDefault()}
                                            onClick={() => seleccionarProducto(producto)}
                                        >
                                            {producto.titulo}
                                        </button>
                                    </li>
                                )) : (
                                    <li className="buscador-sin-sugerencias" role="option" aria-selected="false">
                                        No hay productos con ese título
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                    {terminoBusqueda && <button className="btn btn-outline-light" type="button" onClick={() => {
                        onCambiarBusqueda('')
                        setMostrarSugerencias(false)
                        setIndiceActivo(-1)
                    }}>
                        Limpiar
                    </button>}
                </form>

            </div>

        </div>
    </nav>
}
export default Menu