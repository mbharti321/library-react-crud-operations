import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { flexBoxStyle, marginTop, myStyle, myStyleContent } from "./myStyle";

const BookDetails = (props) => {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.filter((book) => String(book.id) === id)
  );
  const { bookName, author, category } = book[0];

  return (
    <div style={marginTop}>
      <div className="ui container" style={myStyle}>
        <h2>Book Details</h2>

        <div style={flexBoxStyle}>
          <div className="" style={myStyleContent}>
            <div>Name of the book:</div>{" "}
            <div>
              <strong>{bookName}</strong>
            </div>
          </div>
          <div className="" style={myStyleContent}>
            <div>Author:</div>{" "}
            <div>
              <strong>{author}</strong>
            </div>
          </div>
          <div className="" style={myStyleContent}>
            <div>Category:</div>{" "}
            <div>
              <strong>{category}</strong>
            </div>
          </div>
          <div>
            <Link to="/">
              <button className="ui button blue">Home</button>
            </Link>
            <Link to={`/edit/${id}`}>
              <button className="ui button green">Edit Book Details </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
