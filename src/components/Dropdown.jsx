import React, { useState } from 'react';
import '../styles/Dropdown/Dropdown.scss';
import { useSelector } from 'react-redux';

const Dropdown = ({ options, selectedValue, onSelect, label }) => {
    const columns = useSelector(state => state?.columns?.columns)
    const [isOpen, setIsOpen] = useState(false);

    // Check if the Selected Option is already created
    const alreadyExist = (option) => {
        return columns?.some(col => col.title === option.value);
    };

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const handleOptionClick = (option) => {
        if (alreadyExist(option)) {
            console.log('Option already exists:', option);
            return;
        }
        onSelect(option.value);
        setIsOpen(false);
    };

    return (
        <div className='Dropdown'>
            <div className='Dropdown__Header' onClick={toggleDropdown}>
                <span className='Dropdown__Selected__Value'>{selectedValue || label}</span>
                <div className={`Dropdown__Arrow ${isOpen ? 'open' : ''}`}></div>
            </div>
            {isOpen && <div className={`Dropdown__Menu`}>
                {options.map(option => (
                    <div
                        key={option.value}
                        className={`Dropdown__Option ${alreadyExist(option) ? "Dropdown__Option__Disabled" : ""}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default Dropdown;
