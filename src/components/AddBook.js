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

  const formik = useFormik({
    initialValues: initialBook,
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
            <input
              type="text"
              id="bookName"
              name="bookName"
              placeholder="Book Name"
              onChange={formik.handleChange}
              value={formik.values.bookName}
            />
          </div>

          <div className="field">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author"
              required
              onChange={formik.handleChange}
              value={formik.values.author}
            />
          </div>
          <div className="field">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              className=""
              name="category"
              placeholder="Select Category"
              required
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
