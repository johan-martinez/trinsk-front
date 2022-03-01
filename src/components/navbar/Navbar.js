import {Link} from 'react-router-dom';

import {useResolution} from '../../resolution/useResolution';

function Navbar(props) {
    if (useResolution()==='MOBILE') {
        return (
            <header >
                <nav className='nav-header'>
                    <Link className='li-header' to="/">
                        <p className='li-title'>TRINSK</p>
                        <img className="li-icon"
                            src='https://i.ibb.co/PgqjGKk/maptiny.png'
                            alt='Icono de mapa'
                        />
                    </Link>
                    <Link className='li-header' to="/metrics">
                        <img className="li-icon"
                            src='https://i.ibb.co/sRnj7xH/pie-chart-1.png'
                            alt='Icono de métricas'
                        />
                    </Link>
                </nav>
            </header>
        )
    } else {
        return (
            <header>
                <nav className='nav-header'>
                    <Link className='li-header' to="/">
                        <p className='li-title'>TRINSK</p>
                    </Link>
                    <div className='desktop-nav'>
                        <Link className='li-header' to="/"><p>MAPA</p></Link>
                        <Link className='li-header' to="/metrics"><p>MÉTRICAS</p></Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export {Navbar};