import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ children }) {
  return (
    <div className='toggle'>
      <label>
        <input
          type='checkbox'
          className='toggle__invisible-checkbox'
          id='uniqueID'
        />
        <span className='toggle__visible-checkbox'></span>
      </label>
      {children}
    </div>
  );
}

export default FilterCheckbox;
