import * as React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addBook } from "./redux/bookSliece";
import bookValidation from "./formValidation/bookValidation";
import { errorStyle } from "./myStyle";

const AddBook = () => {
  const dispatch = useDispatch();

  const initialBook = {
    bookName: "",
    author: "",
    category: "",
  };

  const formik = useFormik({
    initialValues: initialBook,
    validate: bookValidation,
    onSubmit: (values) => {
      const book = values;
      // call redux redcer
      dispatch(addBook(book));
      alert(`Book "${book.bookName}" added successfully!`);
      // clear the form
      formik.resetForm();
    },
  });

  return (
    <div className="ui main">
      <h2>Add Book</h2>

      <form className="ui form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="bookName">Book Name</label>
          {formik.touched.bookName && formik.errors.bookName ? (
            <div style={errorStyle}>{formik.errors.bookName as string}</div>
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
            <div style={errorStyle}>{formik.errors.author as string}</div>
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
          <label htmlFor="category">Category</label>
          {formik.touched.category && formik.errors.category ? (
            <div style={errorStyle}>{formik.errors.category as string}</div>
          ) : null}
          <input
            type="text"
            id="category"
            className=""
            name="category"
            placeholder="Select Category"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.category}
          />
        </div>

        <div className="">
          <button type="submit" className="ui button blue">
            Submit
          </button>
          <button
            type="button"
            className="ui button red"
            onClick={() => {
              formik.resetForm();
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
