import React from "react";

const BookRow = (props) => {
  const {id, bookName, author, category}= props.book;
  return (
    <div class="ui grid container">
      <div class="four wide column">{bookName}</div>
      <div class="four wide column">{author}</div>
      <div class="four wide column">{category}</div>
      <div class="four wide column">
        <i className="edit alternate outline green icon" ></i>
        <i className="trash alternate outline red icon" onClick={()=>{props.clickHandler(id)}}></i>
      </div>
    </div>
  );
};

export default BookRow;
