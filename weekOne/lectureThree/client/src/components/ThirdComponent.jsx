import React from 'react'
import SecondComponent from './SecondComponent'

const ThirdComponent = () => {
  return (
    <div>
        <h1>Hello from Third Component</h1>
        <SecondComponent firstName="Jon"/>
    </div>
  )
}

export default ThirdComponent