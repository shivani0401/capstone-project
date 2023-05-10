import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Meditation from './components/Meditation/Meditation';
import Footer from './components/Footer/Footer';
import Navigator from './components/Navigator/Navigator';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' default element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/meditation' element={<Meditation/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
