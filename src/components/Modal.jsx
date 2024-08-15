import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import "../styles/Modal/Modal.scss";
import ColumnForm from './ColumnForm';
import TicketForm from './TicketForm';
import { closeModal } from '../store/slices/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, modalType } = useSelector((state) => state?.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!isOpen || isOpen === null) return null; 

  return (
    <div className='Modal__Wrapper'>
      <div className='Modal'>
        <div className='Modal__Header'>
          <h2 className='Modal__Title'>
            {modalType === 'column' ? 'Create New Task' : 'Create New Ticket'}
          </h2>
          <IoMdClose onClick={handleClose} className="Modal__CloseIcon" />
        </div>
        <div className='Modal__Content'>
          {modalType === 'column' ? (
            <ColumnForm />
          ) : (
            <TicketForm onCancel={handleClose} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
