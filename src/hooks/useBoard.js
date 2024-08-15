import { useState } from 'react';
import { addColumn, addTicket } from '../utils/boardUtils';

const useBoard = () => {
  const [board, setBoard] = useState({ columns: [] });

  const handleAddColumn = () => {
    setBoard(prevBoard => addColumn(prevBoard, `New Column ${prevBoard.columns.length + 1}`));
  };

  const handleAddTicket = (columnId, ticketDetails) => {
    setBoard(prevBoard => addTicket(prevBoard, columnId, ticketDetails));
  };

  return {
    board,
    onAddColumn: handleAddColumn,
    onAddTicket: handleAddTicket,
  };
};

export default useBoard;
