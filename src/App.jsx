import './App.css'
import Header from './components/layout/Header'
import Menu from './components/layout/Menu'
import Header2 from './components/layout/Header2'
import Principal from './components/layout/Principal'
import { CarritoProvider } from './components/carrito/CarritoProvider'
import Footer from './components/layout/Footer'
import { useState } from 'react'

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [categoria, setCategoria] = useState('')
  const [productosCatalogo, setProductosCatalogo] = useState([])

  return <CarritoProvider>
    <div className="contenedor">
      <div className="header">
         <Header />
      </div>

       <div className="header2">
         <Header2 />
      </div>

      <div className="menu">
        <Menu
          terminoBusqueda={terminoBusqueda}
          onCambiarBusqueda={setTerminoBusqueda}
          productos={productosCatalogo}
          categoria={categoria}
          onCambiarCategoria={setCategoria}
        />
      </div>

      <div className="principal">
        <Principal
          terminoBusqueda={terminoBusqueda}
          categoria={categoria}
          onProductosCargados={setProductosCatalogo}
        />
      </div>

      <Footer />
    </div>
  </CarritoProvider>
}

export default App
