import React, { useContext, useState } from "react";
import BooksContext from "../Context/Books";

const BookCreate = () => {
  const [title, setTitle] = useState("");

  const {createBook} = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Book name</label>
        <input
          className="input"
          type="text"
          value={title}
          onChange={handleChange}
          required
        />
        <button className="button">create!!</button>
      </form>
    </div>
  );
};

export default BookCreate;
