import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../Context/Books";

const BookList = () => {
  
  const { Book } = useContext(BooksContext);
  const renderBooks = Book.map((book) => {
    return <BookShow key={book.id} bookInShow={book} />;
  });
  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
