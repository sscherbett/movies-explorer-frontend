import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ children, isChecked, onChange }) {
  return (
    <div className='toggle'>
      <label>
        <input
          type='checkbox'
          className='toggle__invisible-checkbox'
          id='uniqueID'
          checked={isChecked}
          onChange={onChange}
        />
        <span className='toggle__visible-checkbox'></span>
      </label>
      {children}
    </div>
  );
}

export default FilterCheckbox;
