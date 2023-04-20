import React, {useState} from 'react'

const MovieForm = ({allMovies, setAllMovies}) => {

    const [movie, setMovie] = useState({
        title: '',
        year: '',
        genre: ''
    })

    const [errors, setErrors] = useState("")

    const movieValidation = () => {
        let isValid = true
        if(movie.title.length < 3 || movie.genre.length < 3 || movie.year < 1900) {
            isValid = false
        }
        return isValid
    }

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // let validator = movieValidation()
        // validator is either true or false
        // if(validator === true){}
        if(movieValidation()) { 
            setAllMovies([...allMovies, movie])
            setMovie({
                title: '',
                year: '',
                genre: ''
            })
            setErrors("")
        }else{
            setErrors("there was an error")
            setMovie({
                title: '',
                year: '',
                genre: ''
            })
        }
       
    }

  return (
    <div>
        <div className="row">
            {errors ? <p>{errors}</p> : null}
            <form action="" className="col-md-4 offset-1" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="form-control" onChange={handleChange} value={movie.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input type="text" name="year" id="year" className="form-control" onChange={handleChange} value={movie.year}/>
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    { movie.genre && movie.genre.length < 3 ? <p>Genre must be at least 3 characters</p> : null}
                    <input type="text" name="genre" id="genre" className="form-control" onChange={handleChange} value={movie.genre}/>
                </div>
                <button className="btn btn-primary">Save</button>

            </form>
        </div>
    </div>
  )
}

export default MovieForm