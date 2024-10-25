import PropTypes from "prop-types"
import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"

const Blogs = ({handleAddToBookmarks, handleMarkedAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

  return (
    <div className="w-2/3">
      <h3 className="text-2xl">Blogs: {blogs.length}</h3>
      {
        blogs.map(blog => <Blog 
          key={blog.id}
          blog={blog}
          handleAddToBookmarks ={handleAddToBookmarks}
          handleMarkedAsRead = {handleMarkedAsRead}
          ></Blog>)
      }
    </div>
  )
}

Blogs.propTypes={
  handleAddToBookmarks: PropTypes.func,
  handleMarkedAsRead: PropTypes.func
}

export default Blogs
