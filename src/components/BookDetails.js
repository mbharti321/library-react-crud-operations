import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookDetails = (props) => {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.filter((book) => String(book.id) === id)
  );
  const { bookName, author, category } = book[0];

  const myStyle = {
    display: "flex",
    // justifyContent: "center",
    // justifyItems: "center",
    flexDirection: "column",
    margin: "auto",
    marginTop: "50px",
    width: "60%",
    padding: "20px",
    backgroundColor: "gray",
    // alignContent: "center",
  };

  const myStyleContent = {
    margin: "5px",
    padding: "10px",
  };
  return (
    <div>
      <div className="ui container" style={myStyle}>
        <h2>Book Details</h2>
        <div className="" style={myStyleContent}>
          Book Name: <strong>{bookName}</strong>
        </div>
        <div className="" style={myStyleContent}>
          Author: <strong>{author}</strong>
        </div>
        <div className="" style={myStyleContent}>
          Category: <strong>{category}</strong>
        </div>
        <Link to="/">
          <button className="ui button blue">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
