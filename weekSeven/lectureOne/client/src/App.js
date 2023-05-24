import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegLogForm from './components/RegLogForm';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegLogForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
