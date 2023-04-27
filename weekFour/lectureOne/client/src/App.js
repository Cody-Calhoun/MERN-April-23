import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import PokeDash from './components/PokeDash';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Starwars from './components/Starwars';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* Put persistant navbar here */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pokemon" element={<PokeDash/>}/>
        <Route path="/Starwars" element={<Starwars/>}/>
        {/* <Route path="login.codingdojo.com/m/:stack/:section/:lesson" */}
      </Routes>
    </div>
  );
}

export default App;
