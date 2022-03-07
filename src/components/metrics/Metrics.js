import { useContext } from 'react';
import {MetricsFilter} from './MetricsFilter'

import {MetricsContext} from '../../context/MetricsContext'

function Metrics(props) {
    const {loading} = useContext(MetricsContext)
    return(
        <>
            <p className="p-title">MÉTRICAS</p>

            <p className="p-text">
                En esta sección podra encontrar la información de
                accidentalidad de Medellin según varios filtros.
            </p>
            {!!loading&&<p>Estamos cargando</p>}
            {!loading&&
                <MetricsFilter/>
            }
        </>
    )
}
export {Metrics};