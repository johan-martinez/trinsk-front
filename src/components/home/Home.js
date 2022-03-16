import { useState } from 'react';
import {TableRisk} from './TableRisk';
import { Spinner } from './Spinner';

function Home(props) {
    const [loading, setLoading] = useState(true)

    
    
    return(
        <>
            <p className="p-title">MEDELLÍN</p>
            {!!loading&&<Spinner speed={2} customText={"Obteniendo el mapa"}></Spinner>}
            <div className='home-container'>
                <iframe className={(loading)?"iframe-map-hidden":"iframe-map"}  src="https://mapwithreact.herokuapp.com"
                    onLoad={()=>setLoading(false)}
                    >
                    </iframe>
                
                {!loading&&<TableRisk/>}
            </div>
        </>
    )
}
export {Home}