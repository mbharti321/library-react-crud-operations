import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookRow from "./BookRow";
import { removeBook, updateBook } from "./redux/bookSliece";

const BookList = (props) => {
  const books = useSelector((state) => {
    // console.log("state", state)
    return state.books;
  });

  const dispatch = useDispatch();

  const deleteClickHandler = (id) => {
    dispatch(removeBook(id));
  };
  const editClickHandler = (id) => {
    dispatch(updateBook(id));
  };

  const renderBookList = books.map((book) => {
    return (
      <BookRow
        book={book}
        key={book.id}
        deleteHandler={deleteClickHandler}
        editHandler={editClickHandler}
      />
    );
  });

  return (
    <div className="main">
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
          // borderBlockEnd: "1px solid",
        }}
      >
        <h2>Book List</h2>
        <Link to="/add">
          {/* <button className="ui button blue">Add Book</button> */}
        </Link>
      </div>
      <div
        class="ui grid container"
        style={{
          borderBlockEnd: "1px solid",
        }}
      >
        <div class="four wide column">
          <b>Name</b>
        </div>
        <div class="four wide column">
          <b>Author</b>
        </div>
        <div class="four wide column">
          <b>Category</b>
        </div>
        <div class="four wide column">
          <b>Action</b>
        </div>
      </div>
      {/* list all books in the list */}
      {renderBookList}
    </div>
  );
};

export default BookList;
