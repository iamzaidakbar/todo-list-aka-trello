import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import columnSlice from "./slices/columnSlice";

const Store = configureStore({
    reducer: {
        modal: modalSlice,
        columns: columnSlice
    },
});

export default Store;