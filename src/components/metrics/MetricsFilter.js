import { useState } from 'react';
import {Days} from './days/Days';
import { Months } from './months/Months';
import { Risk } from './risk/Risk';
import {Streets} from './streets/Streets';
import { Types } from './types/Types';

function MetricsFilter() {
    const [filter, setFilter] = useState('')
    
    return(
        <>
            <p className="p-htext">
                Por favor seleccione el tipo de filtrado de datos.
            </p>
            <input className="input-filters" 
                list="filters" 
                placeholder="Ingrese un tipo de filtro"
                value={filter}
                onChange={e=>setFilter(e.target.value)}
            />
            <datalist id="filters">
                <option className="filters-option">DÍAS</option>
                <option className="filters-option">MESES</option>
                <option className="filters-option">BARRIOS</option>
                <option className="filters-option">GRAVEDAD</option>
                <option className="filters-option">TIPO DE ACCIDENTE</option>
            </datalist>

            {filter.toLocaleUpperCase()==='DÍAS'&&<Days/>}
            {filter.toLocaleUpperCase()==='MESES'&&<Months/>}
            {filter.toLocaleUpperCase()==='BARRIOS'&&<Streets/>}
            {filter.toLocaleUpperCase()==='GRAVEDAD'&&<Risk/>}
            {filter.toLocaleUpperCase()==='TIPO DE ACCIDENTE'&&<Types/>}
            
        </>
    )
}

export {MetricsFilter}