import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { initialBooks } from "../typescriptObject";

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    // Add new book
    addBook: (state, action: any): void => {
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
    // restore from local storage
    restoreBooks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addBook, removeBook, updateBook, restoreBooks } =
  bookSlice.actions;

export default bookSlice.reducer;
