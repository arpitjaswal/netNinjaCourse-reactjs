import React from 'react'

const HomePage = (e) => {
    const handleClick = ()=>{
        console.log("Clicked!",e);
    }
    const handleclickagain= (name,e)=>{
        console.log("Clicked again, "+name+e);
    }
  return (
    <>
        <div className='content'>Home Page</div>
        <button onClick={handleClick}>Click Me!</button>
        <button onClick={(e)=>{
            handleclickagain("Bro",e);
        }}>Click me again!</button>
    </>
  )
}

export default HomePage