import React, { useContext, useState } from "react";
import BooksContext from "../Context/Books";

const BookEdit = ({ bookInEdit, onSubmit }) => {
  const [title, setTitle] = useState(bookInEdit.title);

  const {editTitle} = useContext(BooksContext);
  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    editTitle(bookInEdit.id, title);
    onSubmit();
    
  };
  return (
    <form className="book-edit" onSubmit={handleOnSubmit}>
      <label htmlFor="title">title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button className="button is-primary">save!</button>
    </form>
  );
};

export default BookEdit;
