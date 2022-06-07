import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddBook from "./AddBook";
import BookList from "./BookList";

function App() {
  const LOCAL_STORAGE_KEY = "books";
  

  // state hook
  const [books, setBooks] = useState([]);

  // to handle the data coming from children component(addBook)
  const addBookHandler = (book) => {
    console.log(book);
    // setBooks([...books, book]);
    setBooks([...books, { id: uuidv4(), ...book }]);
  };

  const removeBookHandler = (id) => {
    const filteredBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(filteredBooks);
  };

  // to Fetch the book data from local storage and update the state
  useEffect(() => {
    const retrivedBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log("retrivedBooks: ", retrivedBooks);
    if (retrivedBooks) setBooks(retrivedBooks);
  }, []);

  // to store data in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  return (
    <div className="ui container">
      <Header />
      <AddBook addBookHandler={addBookHandler} />
      <br />
      <BookList books={books} getBookId={removeBookHandler}/>
    </div>
  );
}

export default App;
