import React, {useState} from 'react'

const Form = () => {

    const [movie, setMovie] = useState({
        title: "",
        year: "",
        genre: ""
    })

    const [allMovies, setAllMovies] = useState([]);

    //movie = {title: "Shrek", year: 0, genre: ""}
    // movie["yer\er"]= 2021

    // {year: 2021}

    const changeHandler = (e) => {
        setMovie({...movie,[e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setAllMovies([...allMovies, movie])
        setMovie({
            title: "",
            year: "",
            genre: ""
        })
    }

    
  return (
    <div>
        <div className="row">
            <h1>Create a movie!</h1>
            <form action="" className="col-md-4 offset-1" onSubmit={submitHandler}>
                <div className="form-group">
                    {movie.title && movie.title.length < 3 ? <p>Title must be more than 3 characters</p>: null}
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={changeHandler} value={movie.title}/>
                </div>
                <div className="form-group">
                    {movie.year && movie.year < 1888 ? <p>Year must be after 1888</p>: null}
                    <label htmlFor="year">Release Year</label>
                    <input type="number" className="form-control" id="year" name="year" onChange={changeHandler} value={movie.year}/>
                </div>
                <div className="form-group">
                    {movie.genre && movie.genre.length < 3 ? <p>Genre must be more than 3 characters</p>: null}
                    <label htmlFor="genre">Genre</label>
                    <input type="text" className="form-control" id="genre" name="genre" onChange={changeHandler} value={movie.genre}/>
                </div>
                <button className="btn btn-primary mt-3">Create Movie</button>
            </form> 
        </div>


    </div>
  )
}

export default Form