import React from 'react';
import '../styles/Column/Column.scss';
import Ticket from './Ticket';
import { openModal } from '../store/slices/modalSlice';
import { useDispatch } from 'react-redux';

const Column = ({ column }) => {
  const dispatch = useDispatch()

  const handleOpenTicketModal = () => {
    dispatch(openModal('ticket'));
  };

  return (
    <div className="Column d-flex flex-column">
      <span className='Column__Header d-flex'>
        <p className={`Column__Color__Code status-${column.title.replace(' ', '').toLowerCase()}`}></p>
        <h2 className='Column__Title'>{column.title}</h2>
      </span>
      <div className='Column__Ticket__Section'>
        {column?.tickets.map(ticket => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
        <button className={`Column__New__Ticket status-${column.title.replace(' ', '').toLowerCase()}`} onClick={handleOpenTicketModal}>Add Ticket</button>
      </div>
    </div>
  );
};

export default Column;
