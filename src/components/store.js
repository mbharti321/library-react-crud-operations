import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSliece";

export default configureStore({
    reducer: {
        bookReducer: bookReducer,
    },
});