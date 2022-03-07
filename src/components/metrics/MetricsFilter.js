import {Days} from './days/Days';
import { Months } from './months/Months';
import { Risk } from './risk/Risk';

function MetricsFilter() {
    
    return(
        <>
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
            <Days/>
            
            <Months/>
            
            <Risk/>
        </>
    )
}

export {MetricsFilter}