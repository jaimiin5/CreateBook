import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [Book, setBook] = useState([]);

  const fetchBook = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
},[])

  // creating script------------------->

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    console.log("you post data to the server...", response);

    const updateBook = [...Book, response.data];
    console.log("you created a new book", updateBook);
    setBook(updateBook);
  };

  // deleting script\---------------->

  const handleDelete = async (deleteIndex) => {
    await axios.delete(`http://localhost:3001/books/${deleteIndex}`);
    const deleteBooks = Book.filter((book) => {
      return deleteIndex !== book.id;
    });
    console.log("you deleted this book", deleteBooks);
    setBook(deleteBooks);
  };

  // editing script-------------->
  const editTitle = async (id, newTitle) => {
    const editResponse = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log("this is a edit response", editResponse);

    const editBook = Book.map((book) => {
      if (id === book.id) {
        return { ...book, ...editResponse.data };
      }
      return book;
    });
    console.log("you edit the book name....", editBook);
    setBook(editBook);
  };

  const valueToShare = {
    Book,
    fetchBook,
    createBook,
    handleDelete,
    editTitle,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
