import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import Blind from './components/Blind';
import Light from './components/Light';
import Thermal from './components/Thermal';
import Occupancy from './components/Occupancy';

function App() {
  return (
    <div className="App">
      {/* <div className='Navbar'>
        <BrowserRouter><NavBar /></BrowserRouter>
      </div> */}
      <div className='pody'>
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blind_manage' element={<Blind />} />
            <Route path='/light_manage' element={<Light />} />
            <Route path='/temp_manage' element={<Thermal />} />
            <Route path='/occupancy_manage' element={<Occupancy />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
