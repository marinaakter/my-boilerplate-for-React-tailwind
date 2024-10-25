import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"
const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="w-1/3 bg-gray-300 mt-8 pt-5 rounded-lg">
        <div className="text-center font-bold">
            <h3 className="text-2xl">Reading Time: {readingTime}</h3>
        </div>
      <h2 className="text-xl text-center ">Bookmarked Blogs: {bookmarks.length} </h2>
      {
        bookmarks.map(bookmark => <Bookmark
        key={bookmark.id}
        bookmark={bookmark}
        ></Bookmark>)
      }
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks


