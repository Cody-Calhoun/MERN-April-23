import React from 'react'

const Event = () => {

    const handleClick = () => {
        alert("This button has been clicked!")
    }

  return (
    <div>
         <button onClick={handleClick}>Click Me</button>
         <button onClick={() => alert("The second button has been clicked")}> Second button</button>
    
    </div>
  )
}

export default Event

