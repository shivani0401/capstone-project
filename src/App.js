import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Meditation from './components/Meditation/Meditation';
import HIIT from './components/HIIT/HIIT';
import Yoga from './components/Yoga/Yoga';
import Pilates from './components/Pilates/Pilates';
// import Footer from './components/Footer/Footer';
// import Navigator from './components/Navigator/Navigator';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' default element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/meditation' element={<Meditation/>}/>
        <Route path='/hiit' element={<HIIT/>}/>
        <Route path='/yoga' element={<Yoga/>}/>
        <Route path='/pilates' element={<Pilates/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
