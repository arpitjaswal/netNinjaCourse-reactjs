import React, { useEffect } from 'react'
import BlogList from "./BlogList"
import { useState } from 'react';

const HomePage = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])


    const handleDelete = (id)=>{
      const newBlogs = blogs.filter((b)=>b.id!==id);
      setBlogs(newBlogs);
    }

    useEffect(()=>{
      console.log("useEffect fired!")
    })
  return (
    <div className='home'>
        <BlogList blogs={blogs} title = "My blogs" handleDelete={handleDelete}/>
    </div>
  )
}

export default HomePage