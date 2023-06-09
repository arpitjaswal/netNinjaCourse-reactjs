

const BlogList = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs;
  // const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
        {blogs.map(
            (blogs)=>(
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blogs.title}</h2>
                    <p>Written by: {blogs.author}</p>
                    <button onClick={()=>handleDelete(blogs.id)}>Delete Blog Post</button>
                </div>
        ))}
        </div>
  );
}

export default BlogList