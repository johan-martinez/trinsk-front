import {TableRisk} from './TableRisk';

function Home(props) {
    return(
        <>
            <p className="p-title">MEDELLÍN</p>
            <div className='home-container'>
                <iframe className="iframe-map"  src="https://mapwithreact.herokuapp.com"></iframe>
                <TableRisk/>
            </div>
        </>
    )
}
export {Home}