import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateBook } from "./redux/bookSliece";
import { useFormik } from "formik";
import bookValidation from "./formValidation/bookValidation";

const EditBook = (props) => {
  const { id } = useParams();
  // get the bookwith the passed id (filter out from redux state)
  const currentBook = useSelector((state) =>
    state.books.filter((book) => String(book.id) === id)
  );
  const errorStyle = {
    color: "red",
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: currentBook[0],
    validate: bookValidation,
    onSubmit: (values) => {
      const book = values;
      dispatch(updateBook(book));
      // formik.resetForm();
      alert("Book updated successfully!");
    },
  });

  return (
    <div>
      <div className="ui main">
        <br />
        <h2>
          Update Book <strong>{formik.values.id}</strong>
        </h2>
        <form className="ui form" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="bookname">Book Name</label>
            {formik.touched.bookName && formik.errors.bookname ? (
              <span style={errorStyle}>{formik.errors.bookname} </span>
            ) : null}
            <input
              type="text"
              id="bookName"
              name="bookName"
              placeholder="Book Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.bookName}
            />
          </div>

          <div className="field">
            <label htmlFor="author">Author</label>
            {formik.touched.author && formik.errors.author ? (
              <span style={errorStyle}>{formik.errors.author} </span>
            ) : null}
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.author}
            />
          </div>

          <div className="field">
            <label htmlFor="bookname">Category</label>
            {formik.touched.category && formik.errors.category ? (
              <span style={errorStyle}>{formik.errors.category} </span>
            ) : null}
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Category"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.category}
            />
          </div>

          <button className="ui button orange">Update Book</button>
          <Link to="/">
            <button className="ui button blue">Home</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
