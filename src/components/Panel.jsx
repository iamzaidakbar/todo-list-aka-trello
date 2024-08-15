import React from 'react'
import '../styles/Panel/Panel.scss'
import Button from './Button';
import { openModal } from '../store/slices/modalSlice';
import { useDispatch } from 'react-redux';

const Panel = () => {
  const dispatch = useDispatch();

  const handleOpenColumnModal = () => {
    dispatch(openModal('column'));
  };


  return (
    <div className='Panel d-flex align-items-start justify-content-between'>
      <span className='Panel__Row__One d-flex flex-column'>
        <h2 className='Panel__Row__One__Title'>My ToDo</h2>
        <input placeholder='Search' type='search' className='Panel__Row__One__Search__Bar' />
      </span>
      <span className='Panel__Row__Two'>
        <Button onClick={handleOpenColumnModal} btnText={"New Task"} />
      </span>
    </div>
  )
}

export default Panel