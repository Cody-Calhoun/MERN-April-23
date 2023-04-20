import React from 'react'

const DisplayAll = ({allMovies}) => {

  return (
    <div>
        <h1>All Movies</h1>
        {
            allMovies.map((movie, i) => {
                return (
                    <div key={i}>
                        <p>Title: {movie.title}</p>
                        <p>Year: {movie.year}</p>
                        <p>Genre: {movie.genre}</p>
                    </div>
                )
            }
            )
        }
    </div>
  )
}


export default DisplayAll