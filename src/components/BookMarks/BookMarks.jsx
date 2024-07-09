import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3  bg-gray-300 ml-4 mt-2 pt-4">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime} min </h3>
      </div>
      <h2 className="text-3xl text-center">
        Bookmark Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <BookMark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default BookMarks;
