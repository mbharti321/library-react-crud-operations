import React from "react";
import BookRow from "./BookRow";

const BookList = (props) => {

  const deleteClickHandler= (id) =>{
    props.getBookId(id);
  }
  const renderBookList = props.books.map((book) => {
    return (
      <BookRow book={book} clickHandler={deleteClickHandler} />
    );
  });

  return (
    <div>
      <h2>Book List</h2>
      <div class="ui grid container">
        <div class="four wide column"><b>Name</b></div>
        <div class="four wide column"><b>Author</b></div>
        <div class="four wide column"><b>Category</b></div>
        <div class="four wide column"><b>Action</b></div>
      </div>
      {/* list all books in the list */}
      {renderBookList}
    </div>
  );
};

export default BookList;
