import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Hello = () => {

    const {name, num} = useParams();


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${num}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h1>This is the Hello Page! 🌎</h1>
        {name == "Gray" ? <h2 style={{color : "red"}}>Hey, you're cool!</h2> : <h2>You're not Gray, so not as cool!</h2>}
        {/* <h2>Hello {name}!</h2> */}

    </div>
  )
}

export default Hello