// MultiSelect.js
import React, { useState } from 'react';
import './MultiSelect.css';

export const MultiSelect = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(value);
  };

  return (
    <div className="multi-select">
      <select multiple={true} value={selectedOptions} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="selected-options">
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'seleccionar...'}
      </div>
    </div>
  );
}
