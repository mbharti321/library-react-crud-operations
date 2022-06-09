import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSliece";

export default configureStore({
    reducer: {
        books: bookReducer,
    },
});