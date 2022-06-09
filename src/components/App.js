import React, { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddBook from "./AddBook";
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import EditBook from "./EditBook";

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
      <Router>
        <Header />
        {/* <AddBook addBookHandler={addBookHandler} />
        <BookList books={books} getBookId={removeBookHandler} /> */}
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Fragment>
                <AddBook addBookHandler={addBookHandler} />
                <BookList books={books} getBookId={removeBookHandler} />
              </Fragment>
            }
          />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
