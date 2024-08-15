import React from 'react'
import '../../styles/Dashboard/Dashboard.scss'
import Board from '../../components/Board';
import useBoard from '../../hooks/useBoard';
import Panel from '../../components/Panel';

const Dashboard = () => {

  const { board } = useBoard();

  return (
    <div className='Dashboard'>
      <Panel />
      <Board
        board={board}
      />
    </div>
  )
}

export default Dashboard