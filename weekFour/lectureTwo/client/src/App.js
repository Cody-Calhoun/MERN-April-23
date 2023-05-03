import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Unicorn from './components/Unicorn';
import Pizza from './components/Pizza';
import ShavingCream from './components/ShavingCream';
import Form from './components/Form';
import Hello from './components/Hello';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/unicorn" element={<Unicorn/>}/>
        <Route path="/pizza" element={<Pizza/>}/>
        <Route path="/shavingcream" element={<ShavingCream/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path='/hello/itsme' element={<Hello/>}/>
        <Route path="/hello/:number" element={<Hello/>}/>
        <Route path="/hello/:name/" element={<Hello/>}/>
      </Routes>

      </BrowserRouter>
  
    </div>
  );
}

export default App;
