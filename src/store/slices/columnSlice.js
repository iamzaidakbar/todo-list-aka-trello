import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  columns: JSON.parse(localStorage.getItem('board')) || [], 
};

const columnSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns.push(action.payload);
      localStorage.setItem('board', JSON.stringify(state.columns)); 
    },
    addTicket: (state, action) => {
      const { columnId, ticket } = action.payload;
      const column = state.columns.find(col => col.id === columnId);
      if (column) {
        column.tickets.push(ticket);
        localStorage.setItem('board', JSON.stringify(state.columns));
      }
    },
  },
});

export const { addColumn, addTicket } = columnSlice.actions;
export default columnSlice.reducer;
