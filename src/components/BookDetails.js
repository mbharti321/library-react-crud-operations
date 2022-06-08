import React from "react";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  console.log("BookDetails: ", props);

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
          Book Name: <strong>The Obsession</strong>
        </div>
        <div className="" style={myStyleContent}>
          Author: <strong>Nora Robert</strong>
        </div>
        <div className="" style={myStyleContent}>
          Category: <strong>Romance</strong>
        </div>
        <Link to="/">
          <button className="ui button blue">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
