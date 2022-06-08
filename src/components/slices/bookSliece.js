import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    value: [
      {
        id: 1,
        bookName: "The Obsession",
        author: "Nora Roberts",
        category: "Novel",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state = { ...state, action };
    },
    remove: (state, action) => {
      state = state.filter((book) => {
        return book.id !== action;
      });
    },
    update: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.id) {
          book = { ...book };
        }
      });
    },
  },
});

export const { add, remove, update } = bookSlice.actions;

export default bookSlice.reducer;
