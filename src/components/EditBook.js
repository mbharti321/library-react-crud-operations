import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateBook } from "./redux/bookSliece";

const EditBook = (props) => {
  const { id } = useParams();
  // get the bookwith th epassed id (filter out from redux state)
  const currentBook = useSelector((state) =>
    state.books.filter((book) => String(book.id) === id)
  );

  const dispatch = useDispatch();
  const [book, setBook] = useState(currentBook[0]);

  const updateBookForm = (e) => {
    e.preventDefault();
    dispatch(updateBook(book));
    // <Redirect to="/" />
    //  useNavigate("/");
  };

  return (
    <div>
      <div className="ui main">
        <br />
        <h2>
          Update Book <strong>{book.id}</strong>
        </h2>
        <form className="ui form" onSubmit={updateBookForm}>
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
                setBook({ ...book, bookName: e.target.value });
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
                setBook({ ...book, author: e.target.value });
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
                setBook({ ...book, category: e.target.value });
              }}
            />
          </div>

          <button className="ui button orange">Update Book</button>
          <Link to="/">
            <button className="ui button blue">Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
