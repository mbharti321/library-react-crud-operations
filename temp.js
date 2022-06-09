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



// AddBook
import React from "react";

class AddBook extends React.Component {
  state = {
    bookName: "",
    author: "",
    category: "",
  };

  //   why cant we declere add as const variable
  add = (e) => {
    e.preventDefault();

    if (
      this.state.bookName === "" ||
      this.state.author === "" ||
      this.state.category === ""
    ) {
      alert("All fields are required");
      return;
    }
    // console.log(this.state);
    this.props.addBookHandler(this.state);
    this.setState({ bookName: "", author: "", category: "" });
    // redirect to home page
    // this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <br />
        <h2>Add Book</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Book Name</label>
            <input
              type="text"
              className=""
              name="bookName"
              placeholder="Book Name"
              required
              value={this.state.bookName}
              onChange={(e) => {
                this.setState({ bookName: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Author</label>
            <input
              type="text"
              className=""
              name="author"
              placeholder="Author"
              required
              value={this.state.author}
              onChange={(e) => {
                this.setState({ author: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Category</label>
            <input
              type="text"
              className=""
              name="category"
              placeholder="Select Category"
              required
              value={this.state.category}
              onChange={(e) => {
                this.setState({ category: e.target.value });
              }}
            />
          </div>

          <button className="ui button blue">Submit</button>
          <button className="ui button">Reset</button>
        </form>
      </div>
    );
  }
}

export default AddBook;