import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const bookSlice = createSlice({
  name: "books",
  initialState: [
    {
      id: 1,
      bookName: "The Obsession",
      author: "Nora Roberts",
      category: "Novel",
    },
    {
      id: 2,
      bookName: "Book2",
      author: "Nora",
      category: "Novel2",
    },
  ],
  reducers: {
    // Add new book
    addBook: (state, action) => {
      const newBook = {
        id: uuid(),
        ...action.payload,
      };
      state.push(newBook);
    },
    // remove a book
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    // update book details
    updateBook: (state, action) => {
      const updatedState = state.map((book) => {
        if (book.id === action.payload.id) {
          book = action.payload;
        }
        return book;
      });
      return updatedState;
    },
  },
});

export const { addBook, removeBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
