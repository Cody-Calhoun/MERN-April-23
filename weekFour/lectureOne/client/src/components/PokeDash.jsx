import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Home from './Home';



const PokeDash = () => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res => {
      setPokemon(res.data.results);
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Home/>
        <h1>PokeDash</h1>
        {pokemon.map((poke, i) => {
          return (
            <div key={i}>
              <p>{poke.url}</p>
              <p>{poke.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PokeDash