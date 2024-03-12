import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../Context/Books";

const BookShow = ({ bookInShow, onSave }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { handleDelete, editTitle} = useContext(BooksContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    handleDelete(bookInShow.id);
  };
  const handleOnSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{bookInShow.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit
        onSubmit={handleOnSubmit}
        editTitle={editTitle}
        bookInEdit={bookInShow}
        onSave={onSave}
      />
    );
  }
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${bookInShow.title}/200`}
        alt="books"
      />
      <div>{content}</div>
      <div className="actions">
        <div className="edit" onClick={handleEditClick}>
          edit
        </div>
        <div className="delete" onClick={handleDeleteClick}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default BookShow;
