import React from 'react'

const DisplayShrek = ({allMovies}) => {
  return (
    <div>
        <h1>Display Shrek Component</h1>
        {
            allMovies.filter(movie => movie.title === "Shrek").map((movie, i) => {
                return (
                    <div key={i}>
                        <h2>{movie.title}</h2>
                        <p>{movie.genre}</p>
                        <p>{movie.year}</p>
                    </div>
                )
            }
            )
        }

    </div>
  )
}

export default DisplayShrek