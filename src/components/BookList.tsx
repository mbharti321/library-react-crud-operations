import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookRow from "./BookRow";
import { removeBook, updateBook } from "./redux/bookSlice";
import { tableHader, tableStyle } from "./myStyle";
import { Book } from "./typescriptObject";


const BookList = (props)  => {
  const books = useSelector((state: any) => {
    // console.log("state", state)
    return state.books;
  });

  const dispatch = useDispatch();

  const deleteClickHandler = (id: number) => {
    dispatch(removeBook(id));
  };
  const editClickHandler = (id : number) => {
    dispatch(updateBook(id));
  };

  const renderBookList = books.map((book: Book , index: number) => {
    return (
      <BookRow
        book={book}
        key={book.id}
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
      <div style={tableHader as React.CSSProperties}>
        <h2>Book List</h2>
        <Link to="/add">
          {/* <button className="ui button blue">Add Book</button> */}
        </Link>
      </div>
      <div style={tableStyle}>
        <div
          className="ui grid container"
          style={{
            borderBlockEnd: "1px solid",
          }}
        >
        <div className="one wide column">
            <b>Sl.no</b>
          </div>
          <div className="four wide column">
            <b>Name</b>
          </div>
          <div className="four wide column">
            <b>Author</b>
          </div>
          <div className="four wide column">
            <b>Category</b>
          </div>
          <div className="three wide column">
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
