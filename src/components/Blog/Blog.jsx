import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog}) => {
    const {title, cover, reading_time,author,posted_date, author_img, hashtags} = blog
    
  return (
    <div className="mb-20">
        <img className="w-9/12 mb-8" src={cover} alt={`cover picture of the title ${title}`} />
        <div className="flex justify-between">
            <div className="flex gap-4">
                <img className="w-14 rounded-full" src={author_img} alt="" />
                <div className="">
                    <h3 className="text-2xl "> {author} </h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button className="ml-2 text-red-500 text-xl"> <FaBookmark /> </button>

            </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
        <p>
            {
                hashtags.map((hash,idx) => <span key={idx}> <a href="">{hash}</a> </span>)
            }
        </p>
      
    </div>
  )
}

Blog.propTypes={
    blog: PropTypes.object.isRequired
}


export default Blog

