import React from 'react'

import { useState } from 'react';

const HomePage = (e) => {
    const [name, setName] = useState("Arpit");
    const [age, setAge] = useState(23);
    const handleClick = ()=>{
      setName("Ananya");
      setAge(49);
    }
  return (
    <>
        <div className='content'>Home Page</div>
        <p>{name} is {age} years old.</p>
        <button onClick={handleClick}>Click Me!</button>

    </>
  )
}

export default HomePage