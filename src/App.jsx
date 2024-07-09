import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToCart = (blog) => {
    console.log("bookmark adding soon");
  };

  return (
    <>
      <Header />
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToCart={handleAddToCart} />
        <BookMarks />
      </div>
    </>
  );
}

export default App;
