import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addBook } from "./redux/bookSliece";
import bookValidation from "./formValidation/bookValidation";

const AddBook = () => {
  const dispatch = useDispatch();

  const initialBook = {
    bookName: "",
    author: "",
    category: "",
  };
  const errorStyle = {
    color: "red",
  };

  const formik = useFormik({
    initialValues: initialBook,
    validate: bookValidation,
    onSubmit: (values) => {
      const book = values;
      // call redux redcer
      dispatch(addBook(book));
      alert("Book updated successfully!");
      // clear the form
      formik.resetForm();
    },
  });

  return (
    <div>
      <div className="ui main">
        <br />
        <h2>Add Book</h2>

        <form className="ui form" onSubmit={formik.handleSubmit}>
          <div className="field">
            <label htmlFor="bookName">Book Name</label>
            {formik.touched.bookName && formik.errors.bookName ? (
              <div style={errorStyle}>{formik.errors.bookName}</div>
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
              <div style={errorStyle}>{formik.errors.author}</div>
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
              <div style={errorStyle}>{formik.errors.category}</div>
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

          <button type="submit" className="ui button blue">
            Submit
          </button>
          {/* <button className="ui button" onClick={claerForm()}>Reset</button> */}
        </form>
      </div>
    </div>
  );
};

export default AddBook;
