import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/Forms/ColumnForm.scss";
import { addColumn } from '../store/slices/columnSlice';
import { closeModal } from '../store/slices/modalSlice';
import Dropdown from './Dropdown';
import { COLUMN_OPTIONS } from '../utils/constants';

const ColumnForm = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  // Handle dropdown change
  const handleDropdownChange = (value) => {
    setError(false)
    setSelectedTitle(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTitle === '' || selectedTitle === 'Select Title') {
      setError(true);
      return;
    }

    // Generate a unique ID for the new column
    const newColumnId = `column-${Date.now()}`;

    // Create the new column object
    const newColumn = {
      id: newColumnId,
      title: selectedTitle,
      tickets: [],
    };


    // Dispatch the addColumn action
    dispatch(addColumn(newColumn));


    // Clear form
    setSelectedTitle('');
    setError(false);
    dispatch(closeModal());
  };

  return (
    <form className="Column__Form" onSubmit={handleSubmit}>
      <div className='Column__Form__Group'>
        <Dropdown
          options={COLUMN_OPTIONS}
          selectedValue={selectedTitle}
          onSelect={handleDropdownChange}
          label="Select Column Title"
        />
      </div>

      <p className={`Column__Form__Error__Message Error__Message ${error ? "_Error_" : ""}`}>Please select a column title.</p>

      <div className="Column__Form__Action">
        <button className='Column__Form__Action__Button' type="submit">Create Column</button>
      </div>
    </form>
  );
};

export default ColumnForm;
