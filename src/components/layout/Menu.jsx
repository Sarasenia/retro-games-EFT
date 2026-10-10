 import "./Menu.css"


function Menu(){
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
                            <li><a className="dropdown-item" href="#">Consolas vintage</a></li>
                            <li><a className="dropdown-item" href="#">Joysticks y mandos</a></li>
                            <li><a className="dropdown-item" href="#">Tarjetas de memoria</a></li>
                            <li><a className="dropdown-item" href="#">Conectores y cables</a></li>
                        </ul>
                    </li>

                </ul>
                <form className="d-flex buscador" role="search">
                    <input id="buscador" className="form-control me-2" type="search" placeholder="Iniciar la búsqueda"
                        aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>

            </div>

        </div>
    </nav>
}
export default Menu