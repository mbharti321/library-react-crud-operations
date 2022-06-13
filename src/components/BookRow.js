import React from "react";
import { Link } from "react-router-dom";

const BookRow = (props) => {
  const { id, bookName, author, category } = props.book;
  return (
    <div class="ui grid container">
      <div class="one wide column">{props.count}.</div>

      <div class="four wide column">
        <Link to={{ pathname: `/book/${id}`, state: { book: props.book } }}>
          <div>{bookName}</div>
        </Link>
      </div>
      <div class="four wide column">{author}</div>
      <div class="four wide column">{category}</div>
      <div class="three wide column">
        <Link to={{ pathname: `/edit/${id}`, state: { book: props.book } }}>
          <i className="edit alternate outline green icon"></i>
        </Link>
        <i
          className="trash alternate outline red icon"
          style={{ marginLeft: "15px" }}
          onClick={() => {
            props.deleteHandler(id);
          }}
        ></i>
      </div>
    </div>
  );
};

export default BookRow;
