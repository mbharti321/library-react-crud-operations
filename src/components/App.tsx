import * as React from "react";
import  { Fragment } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddBook from "./AddBook";
import BookList from "./BookList";
import BookDetails from "./BookDetails";
import EditBook from "./EditBook";
// import { restoreBooks } from "./redux/bookSliece";
// import { useDispatch, useSelector } from "react-redux";

function App() {
  // const LOCAL_STORAGE_KEY = "books";
  // const dispatch = useDispatch();
  // // state hook
  // const books = useSelector((state) => state.books);

  // // to store data in local storage
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  // }, [books]);

  // // to Fetch the book data from local storage and update the state
  // useEffect(() => {
  //   const retrivedBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   // console.log("retrivedBooks: ", retrivedBooks);
  //   if (retrivedBooks) dispatch(restoreBooks(retrivedBooks));
  // }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        {/* <AddBook addBookHandler={addBookHandler} />
        <BookList books={books} getBookId={removeBookHandler} /> */}
        <Routes>
          <Route
            path="/"
            // exact
            element={
              <Fragment>
                <AddBook />
                <BookList />
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
