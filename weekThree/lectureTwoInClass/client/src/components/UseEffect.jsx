import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("We added to the count")
    }, [count])

    useEffect(() => {
        console.log("We mounted the component")
    }, [])

    // [] is the dependency array

  return (
    <div>
        <h1>UseEffect</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default UseEffect