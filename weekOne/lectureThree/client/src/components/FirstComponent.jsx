import React from 'react';
import SecondComponent from './SecondComponent';

const FirstComponent = (props) => {
    const { firstName, lastName } = props;
  return (
    <div>
        <h1>Hello {firstName} {lastName} from First Component</h1>
        <SecondComponent firstName={firstName} />
    </div>
  )
}

export default FirstComponent