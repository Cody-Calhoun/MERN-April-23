import React, {useState} from 'react'

const FirstComponent = () => {
            //getter  //setter
    // const [firstName, setFirstName] = useState("John")
    // const [lastName, setLastName] = useState("Doe")
    // const [age, setAge] = useState(0)
    // const [hairColor, setHairColor] = useState("Brown")
    // const [eyeColor, setEyeColor] = useState("Brown")

    const [user, setUser] = useState({
        firstName: "John",
        lastName: "Doe",
        age: 0,
        hairColor: "Brown",
        eyeColor: "Brown"
    })

  return (
    <div>
        <h1>First Component</h1>
        <h2>Woah, we did it!</h2>
        
        <h3>My name is {user.firstName}</h3>
    </div>
  )
}

export default FirstComponent