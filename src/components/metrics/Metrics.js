import axios from 'axios';
import { useState,useEffect } from 'react';

function Metrics(props) {
    
    const [metrics, setMetrics] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/metrics')
        .then((data)=>{
            setMetrics(data.data)
        })
    }, [])
    
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
            <p>
                {JSON.stringify(metrics)}

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