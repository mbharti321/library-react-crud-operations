const tempBooks = [
  {
    id: 1,
    bookName: "The Obsession",
    author: "Nora Roberts",
    category: "Novel",
  },
  {
    id: 2,
    bookName: "Wings of Fire",
    author: "APJ Abdul Kalam",
    category: "Self Help",
  },
];

// addBook.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./redux/bookSliece";
 
const AddBook = () => {
  const initialBook = {
    bookName: "",
    author: "",
    category: "",
  };
  const dispatch = useDispatch();

  const [book, setBook] = useState(initialBook);
  /**  function to clear the form */
  const claerForm = () => {
    setBook(initialBook);
  }

  /** addBookForm: call addBook reducer from bookSlicer */
  const addBookForm = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    // clear the form
    claerForm();
  };

  return (
    <div>
      <div className="ui main">
        <br />
        <h2>Add Book</h2>
        <form className="ui form" onSubmit={addBookForm}>
          <div className="field">
            <label>Book Name</label>
            <input
              type="text"
              className=""
              name="bookName"
              placeholder="Book Name"
              required
              value={book.bookName}
              onChange={(e) => {
                setBook({...book, bookName: e.target.value });
              }}
            />
          </div>
          
          <div className="field">
            <label>Author</label>
            <input
              type="text"
              className=""
              name="author"
              placeholder="Author"
              required
              value={book.author}
              onChange={(e) => {
                setBook({...book, author: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Category</label>
            <input
              type="text"
              className=""
              name="category"
              placeholder="Select Category"
              required
              value={book.category}
              onChange={(e) => {
                setBook({...book, category: e.target.value });
              }}
            />
          </div>

          <button className="ui button blue">Submit</button>
          {/* <button className="ui button" onClick={claerForm()}>Reset</button> */}
        </form>
      </div>
    </div>
  );
};

export default AddBook;
