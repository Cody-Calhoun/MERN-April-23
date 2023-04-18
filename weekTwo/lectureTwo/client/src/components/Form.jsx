import React, {useState} from 'react'

const Form = () => {
    // Option 1: Using seperate state
    // const [title, setTitle] = useState("Unicorn")
    // const [year, setYear] = useState(1920)
    // const [genre, setGenre] = useState("")

    // const handleTitle = (event) => {
    //     setTitle(event.target.value)
    // }

    // const handleYear = (event) => {
    //     setYear(event.target.value)
    // }

    // const handleGenre = (event) => {
    //     setGenre(event.target.value)
    // }

    // Option 2: Using one state
    const [movie, setMovie] = useState({
        title: "",
        year: 0,
        genre: ""
    })

    const changeHandler = (e) => {
        console.log(e)
        setMovie({...movie,[e.target.id]: e.target.value})
    }

  return (
    <div>
        <div className="row">
            <form action="" className="col-md-4 offset-1">
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title" id="title" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Release Year:</label>
                    <input type="number" name="year" id="year" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Genre:</label>
                    <input type="text" name="genre" id="genre" className="form-control" onChange={changeHandler}/>
                </div>
                <button className="btn btn-primary mt-3">Create Movie</button>
            </form>

            <div className="col-md-3 offset-1">
                <h3>Title: {movie.title}</h3>
                <h3>Year: {movie.year}</h3>
                <h3>Genre: {movie.genre}</h3>
            </div>
        </div>
    </div>
  )
}

export default Form