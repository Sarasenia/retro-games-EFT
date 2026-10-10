import { useState } from 'react'
import './Footer.css'

const formularioVacio = {
    asunto: '',
    correo: '',
    nombre: '',
    mensaje: '',
}

function Footer() {
    const [datos, setDatos] = useState(formularioVacio)
    const [errores, setErrores] = useState({})
    const [enviado, setEnviado] = useState(false)

    function manejarCambio(evento) {
        const { name, value } = evento.target
        setDatos((datosActuales) => ({
            ...datosActuales,
            [name]: value,
        }))
        setEnviado(false)
    }

    function manejarEnvio(evento) {
        evento.preventDefault()

        const nuevosErrores = {}
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo.trim())

        if (!datos.asunto.trim()) nuevosErrores.asunto = 'Debe ingresar un asunto'
        if (!correoValido) nuevosErrores.correo = 'Debe ingresar un correo electrónico válido'
        if (!datos.nombre.trim()) nuevosErrores.nombre = 'Debe ingresar un nombre'
        if (!datos.mensaje.trim()) nuevosErrores.mensaje = 'Debe ingresar un mensaje'

        setErrores(nuevosErrores)

        if (Object.keys(nuevosErrores).length === 0) {
            setEnviado(true)
            setDatos({ ...formularioVacio })
        }
    }

    return <footer className="footer">
        <section className="contacto-footer" aria-labelledby="titulo-contacto">
            <h2 id="titulo-contacto">Contacto</h2>

            <form className="contacto-form" onSubmit={manejarEnvio} noValidate>
                <div className="mb-3">
                    <label htmlFor="asunto-contacto" className="form-label">Asunto</label>
                    <input
                        id="asunto-contacto"
                        name="asunto"
                        className="form-control"
                        value={datos.asunto}
                        onChange={manejarCambio}
                        aria-invalid={Boolean(errores.asunto)}
                        aria-describedby={errores.asunto ? 'error-asunto' : undefined}
                    />
                    {errores.asunto && <div id="error-asunto" className="contacto-error" role="alert">
                        {errores.asunto}
                    </div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email-contacto" className="form-label">
                        Dirección de correo electrónico
                    </label>
                    <input
                        id="email-contacto"
                        name="correo"
                        type="email"
                        className="form-control"
                        placeholder="nombre@ejemplo.com"
                        value={datos.correo}
                        onChange={manejarCambio}
                        aria-invalid={Boolean(errores.correo)}
                        aria-describedby={errores.correo ? 'error-correo' : undefined}
                    />
                    {errores.correo && <div id="error-correo" className="contacto-error" role="alert">
                        {errores.correo}
                    </div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="nombre-contacto" className="form-label">Nombre</label>
                    <input
                        id="nombre-contacto"
                        name="nombre"
                        className="form-control"
                        value={datos.nombre}
                        onChange={manejarCambio}
                        aria-invalid={Boolean(errores.nombre)}
                        aria-describedby={errores.nombre ? 'error-nombre' : undefined}
                    />
                    {errores.nombre && <div id="error-nombre" className="contacto-error" role="alert">
                        {errores.nombre}
                    </div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="mensaje-contacto" className="form-label">Mensaje</label>
                    <textarea
                        id="mensaje-contacto"
                        name="mensaje"
                        className="form-control"
                        rows="3"
                        value={datos.mensaje}
                        onChange={manejarCambio}
                        aria-invalid={Boolean(errores.mensaje)}
                        aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
                    />
                    {errores.mensaje && <div id="error-mensaje" className="contacto-error" role="alert">
                        {errores.mensaje}
                    </div>}
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

            {enviado && <p className="contacto-exito" role="status">
                Formulario validado. El envío de mensajes todavía no está conectado.
            </p>}
        </section>
    </footer>
}

export default Footer
