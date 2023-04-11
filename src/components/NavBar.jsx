import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h1>My arpitrary thoughts</h1>
        <div className='links'>
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
    </nav>
  )
}

export default NavBar;