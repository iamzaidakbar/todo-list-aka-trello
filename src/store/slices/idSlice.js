import { createSlice } from '@reduxjs/toolkit';

const idSlice = createSlice({
    name: 'column_Id',
    initialState: {
        columnId: '',
    },
    reducers: {
        addColumnId: (state, action) => {
            state.columnId = action.payload;
        },
        resetColumnId: (state, action) => {
            state.columnId = '';
        }
    },
});

export const { addColumnId } = idSlice.actions;
export default idSlice.reducer;
