import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmarks, handleMarkedAsRead}) => {
    const {title, cover, reading_time,author,posted_date, author_img, hashtags} = blog
    
  return (
    <div className="mb-20 space-y-3">
        <img className="w-15 mb-8" src={cover} alt={`cover picture of the title ${title}`} />
        <div className="flex justify-between">
            <div className="flex gap-4">
                <img className="w-14 rounded-full" src={author_img} alt="" />
                <div className="">
                    <h3 className="text-2xl "> {author} </h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className="flex items-center">
                <span>{reading_time} min read</span>
                <button onClick={()=>handleAddToBookmarks(blog)} className="ml-2 text-red-500 text-xl"> <FaBookmark /> </button>

            </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <p className="text-gray-500 mt-2">
            {
                hashtags.map((hash,idx) => <span key={idx}> <a href="">{hash}</a> </span>)
            }
        </p>
      <button 
      className="text-purple-800 font-bold underline" 
      onClick={()=>handleMarkedAsRead(reading_time)}>Mark As Read</button>
    </div>
  )
}

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkedAsRead: PropTypes.func
}


export default Blog

