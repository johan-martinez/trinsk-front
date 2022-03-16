import { useContext } from 'react';
import {MetricsFilter} from './MetricsFilter'
import {Spinner} from '../home/Spinner'

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
            {!!loading&&<Spinner speed={2} customText={"Obteniendo las métricas"}></Spinner>}
            {!loading&&
                <MetricsFilter/>
            }
        </>
    )
}
export {Metrics};