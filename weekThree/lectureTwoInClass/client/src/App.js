import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MovieForm from './components/MovieForm';
import DisplayAll from './components/DisplayAll';
import DisplayShrek from './components/DisplayShrek';
import UseEffect from './components/UseEffect';

function App() {

  const [allMovies, setAllMovies] = useState([]);

  return (
    <div className="App">
      <MovieForm allMovies={allMovies} setAllMovies={setAllMovies}/>
      <DisplayAll allMovies={allMovies}/>
      <DisplayShrek allMovies={allMovies}/>
      <UseEffect/>
    </div>
  );
}

export default App;
