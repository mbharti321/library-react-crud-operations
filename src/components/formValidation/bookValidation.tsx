// import * as React from "react";

import { Book, Errors } from "../typescriptObject";

const bookValidation = (values: Book) => {
  const errors: Errors = {};

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

export default bookValidation;
