import React from 'react'
import BlogList from "./BlogList"
import { useState } from 'react';

const HomePage = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

  return (
    <div className='home'>
        <BlogList blogs={blogs} title = "My blogs"/>
    </div>
  )
}

export default HomePage