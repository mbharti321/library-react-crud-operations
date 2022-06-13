import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addBook } from "./redux/bookSliece";

const AddBook = () => {
  const dispatch = useDispatch();

  const initialBook = {
    bookName: "",
    author: "",
    category: "",
  };
  const errorStyle = {
    // backgroundColor: "#44014C",
    color: "red",
  };

  // validation code for form
  const validate = (values) => {
    const errors = {};

    if (!values.bookName) {
      errors.bookName = "Required";
    } else if (values.bookName.length < 5) {
      errors.bookName = "Bookname must be at least 5 characters";
    } else if (values.bookName.length > 50) {
      errors.bookName = "Bookname must not be more than 50 characters";
    }

    if (!values.author) {
      errors.author = "Required";
    } else if (values.author.length < 5) {
      errors.author = "Author name must be at least 5 characters";
    } else if (values.author.length > 50) {
      errors.author = "Author name must not be more than 50 characters";
    }

    if (!values.category) {
      errors.category = "Required";
    } else if (values.category.length < 5) {
      errors.category = "Category name must be at least 5 characters";
    } else if (values.author.length > 50) {
      errors.category = "Category name must not be more than 50 characters";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: initialBook,
    validate,
    onSubmit: (values) => {
      const book = values;
      // call redux redcer
      dispatch(addBook(book));
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
