import * as React from "react";
import { Link } from "react-router-dom";

const BookRow = (props) => {
  const { id, bookName, author, category } = props.book;
  return (
    <div className="ui grid container">
      <div className="one wide column">{props.count + 1}.</div>

      <div className="four wide column">
        <Link to={{ pathname: `/book/${id}`}}>
          <div>{bookName}</div>
        </Link>
      </div>
      <div className="four wide column">{author}</div>
      <div className="four wide column">{category}</div>
      <div className="three wide column">
        <Link to={{ pathname: `/edit/${id}`}}>
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
