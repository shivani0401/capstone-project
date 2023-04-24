import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Meditation from './components/Meditation/Meditation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
      <Route path='/' default element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/meditation' element={<Meditation/>}/>
       
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  
  );
}

export default App;
