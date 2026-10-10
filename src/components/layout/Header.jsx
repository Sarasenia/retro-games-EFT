import "./Header.css"
import { useCarrito } from "../carrito/useCarrito"

function Header(){
    const { productos, abrirCarrito } = useCarrito()

    return <div className="container">
        <div className="row align-items-center py-3">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                <h1 className="h3 mb-0">Retro Games Store</h1>
            </div>
            <div className="col-6 col-md-2 text-center">
                <img src="./img/logo.png" alt="Logo de Retro Games Store" className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
            <div className="col-6 col-md-4 text-center text-md-end">
                <button className="btn btn-primary position-relative" type="button" onClick={abrirCarrito}>
                    Carrito
                    <span className="badge text-bg-light ms-2">{productos.length}</span>
                    <span className="visually-hidden"> productos en el carrito</span>
                </button>
            </div>
        </div>
    </div>
}

export default Header