import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3  bg-gray-300 ml-4 mt-2 pt-4">
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
};

export default BookMarks;
