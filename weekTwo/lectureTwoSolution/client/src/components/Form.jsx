import React, {useState} from 'react'

const Form = () => {
    // Option 1
//     const [movie, setMovie] = useState({
//         title: "",
//         year: "",
//         genre: "",
// })


// Option 2
const [title, setTitle] = useState("")
const [year, setYear] = useState("")
const [genre, setGenre] = useState("")

// Option 1
// const changeHandler = (e) => {
//     setMovie({...movie, [e.target.name]: e.target.value})
// }

// Option 2
const handleTitle = (e) => {
    setTitle(e.target.value)
}

const handleYear = (e) => {
    setYear(e.target.value)
}

const handleGenre = (e) => {
    setGenre(e.target.value)
}



  return (
    <div>
        <div className="row">
            <form action="" className="col-md-4 offset-1">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    {/* Change the onChange to fit whichever option you choose */}
                    <input type="text" name="title" id="title" className="form-control" onChange={handleTitle} value={title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    {/* Change the onChange to fit whichever option you choose */}
                    <input type="text" name="year" id="year" className="form-control" onChange={handleYear} value={year}/>
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    {/* Change the onChange to fit whichever option you choose */}
                    <input type="text" name="genre" id="genre" className="form-control" onChange={handleGenre} value={genre}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="row col-md-4">
                <h1>Movie Title: {title}</h1>
                <h1>Movie Year: {year}</h1>
                <h1>Movie Genre: {genre}</h1>
            </div>
        </div>
    </div>
  )
}

export default Form