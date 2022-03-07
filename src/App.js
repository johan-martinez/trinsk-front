import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Home} from './components/home/Home';
import {Metrics} from './components/metrics/Metrics';
import { Navbar } from './components/navbar/Navbar';
import {Footer} from './components/footer/Footer';
import {MetricsProvider} from './context/MetricsContext'

function App() {
  return (
    <div className='app-container'>
      <MetricsProvider>
        <Router>
          <Navbar/>
          <div className='container'>
            <div className='main-container'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/metrics' element={<Metrics/>}/>
              </Routes>
            </div>
          </div>
        </Router>
      </MetricsProvider>
      <Footer/>
    </div>
  );
}

export  {App};
