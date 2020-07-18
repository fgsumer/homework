import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'iskender', author: 'elif şafak', id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks = ([...books], { title, author, id: uuid() });
  };

  const removeBook = id => {
    // if the id is not equals to the book id, I keep it in the book, if it it equals we will remove it
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
