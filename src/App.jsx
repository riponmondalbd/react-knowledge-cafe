import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  const handleMarkAsRead = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
