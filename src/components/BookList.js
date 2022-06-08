import React from "react";
import { Link } from "react-router-dom";
import BookRow from "./BookRow";

const BookList = (props) => {
  const deleteClickHandler = (id) => {
    props.getBookId(id);
  };

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

  const renderBookList = props.books.map((book) => {
    return <BookRow book={book} key= {book.id} clickHandler={deleteClickHandler} />;
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
          // margin: "20px",
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
