import React, { useState } from 'react';
    
const Counter = () => {
    const [count, setCount] = useState(20);    
 
    return (
        <div>
            { count }  
            <button onClick={() => setCount(count + 20)}>Click Me</button>
        </div>
    );
}
    
export default Counter;

