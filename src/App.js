import React, { useContext, useEffect } from "react";
import BookList from "./Components/BookList";
import BooksContext from "./Context/Books";
import BookCreate from "./Components/BookCreate";

const App = () => {
  const { fetchBook } = useContext(BooksContext);
  useEffect(() => {
    console.log("useEffect render and server data's are being shown");
    fetchBook();
  },[fetchBook]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};
export default App;
