function IndicadorCarga(){
    return <div>
        <span style={{ fontWeight: "bold" }}>Cargando productos... &nbsp;</span>
        <img style={{ width: "50px" }} src={`${import.meta.env.BASE_URL}img/loading.gif`} alt="" />
    </div>
}

export default IndicadorCarga