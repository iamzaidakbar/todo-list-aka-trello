import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import columnSlice from "./slices/columnSlice";
import idSlice from "./slices/idSlice";

const Store = configureStore({
    reducer: {
        modal: modalSlice,
        columns: columnSlice,
        column_Id: idSlice,
    },
});

export default Store;