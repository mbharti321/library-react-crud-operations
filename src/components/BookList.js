import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookRow from "./BookRow";
import { removeBook, updateBook } from "./redux/bookSliece";
import { tableHader, tableStyle } from "./myStyle";

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

  const renderBookList = books.map((book, index) => {
    return (
      <BookRow
        book={book}
        count={index}
        deleteHandler={deleteClickHandler}
        editHandler={editClickHandler}
      />
    );
  });
  

  return (
    <div className="main">
      <br />
      <br />
      <div style={tableHader}>
        <h2>Book List</h2>
        <Link to="/add">
          {/* <button className="ui button blue">Add Book</button> */}
        </Link>
      </div>
      <div style={tableStyle}>
        <div
          class="ui grid container"
          style={{
            borderBlockEnd: "1px solid",
          }}
        >
        <div class="one wide column">
            <b>Sl.no</b>
          </div>
          <div class="four wide column">
            <b>Name</b>
          </div>
          <div class="four wide column">
            <b>Author</b>
          </div>
          <div class="four wide column">
            <b>Category</b>
          </div>
          <div class="three wide column">
            <b>Action</b>
          </div>
        </div>
        {/* list all books in the list */}
        {renderBookList}
      </div>
    </div>
  );
};

export default BookList;
