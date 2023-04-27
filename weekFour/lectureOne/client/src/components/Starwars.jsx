import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Starwars = () => {

    const [starwars, setStarwars] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people")
        .then(res => {
          setStarwars(res.data.results);
        })
        .catch(err => console.log(err))
      }, [])
  return (
    <div>
        <h1>Starwars</h1>
        {starwars.map((person, i) => {
            return (
                <div key={i}>
                <p>{person.name}</p>
                </div>
            )
        })
    }
    </div>
  )
}

export default Starwars