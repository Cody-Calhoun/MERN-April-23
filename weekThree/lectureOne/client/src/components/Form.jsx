import React, {useState} from 'react'

const Form = () => {

    const [Movie, setMovie] = useState({
        title: "",
        year: "",
        genre: "",
        watched: false
    })

    const [allMovies, setAllMovies] = useState([])

    const changeHandler = (e) => {
        setMovie({
            ...Movie,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setAllMovies([...allMovies, Movie])
        setMovie({
            title: "",
            year: "",
            genre: ""
        })
    }


  return (
    <div>
        <div className="row">
            <form action="" className="col-md-4 offset-1" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" className="form-control" onChange={changeHandler} value={Movie.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Year</label>
                    <input type="text" name="year" className="form-control" onChange={changeHandler} value={Movie.year}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Genre</label>
                    <input type="text" name="genre" className="form-control" onChange={changeHandler} value={Movie.genre}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="col-md-3">
                <h3>Movies</h3>
                <ul>
                    {
                        allMovies.map((movie, idx) => 
                            <div key={idx}>
                                <p>Movie Title:{movie.title}</p>
                                <p>Movie year: {movie.year}</p>
                                <p>Movie genre: {movie.genre}</p>
                            </div>
                            // <li key={idx}>{movie.title} - {movie.year} - {movie.genre}</li>
                        )
                    }
                </ul>
        </div>

    </div>
    </div>
  )
}

export default Form