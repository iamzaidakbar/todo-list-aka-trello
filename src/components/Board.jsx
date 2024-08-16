import React, { useEffect, useState } from 'react';
import '../styles/Board/Board.scss';
import Column from './Column';
import { useSelector } from 'react-redux';

const Board = () => {
  const board = useSelector(state => state?.columns)
  const [Board, SetBoard] = useState(null)

  useEffect(() => {
    SetBoard(board)
  }, [board])


  return (
    <div className="Board d-flex align-items-start">
      {Board?.columns.map(column => (
        <Column
          key={column.id}
          column={column}
        />
      ))}

    </div>
  );
};

export default Board;
