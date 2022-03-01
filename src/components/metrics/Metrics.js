function Metrics(props) {
    return(
        <>
            <p className="p-title">MÉTRICAS</p>

            <p className="p-text">
                En esta sección podra encontrar la información de
                accidentalidad de Medellin según varios filtros.
            </p>

            <p className="p-htext">
                Por favor seleccione el tipo de filtrado de datos.
            </p>
            
            <input className="input-filters" 
                list="filters" 
                placeholder="Ingrese un tipo de filtro"
            />

            <datalist id="filters">
                <option className="filters-option">DÍAS</option>
                <option className="filters-option">MESES</option>
                <option className="filters-option">BARRIOS</option>
                <option className="filters-option">GRAVEDAD</option>
                <option className="filters-option">TIPO DE ACCIDENTE</option>
            </datalist>

        </>
    )
}
export {Metrics};