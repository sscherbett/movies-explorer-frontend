import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import icon from '../../images/search-icon.svg';

function SearchForm({
  isChecked,
  searchInput,
  setSearchInput,
  searchMovies,
  filterMovies,
}) {
  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <section>
      <form className="search-form" onSubmit={searchMovies} noValidate>
        <div className="search-form__wrapper">
          <div className="search-form__input-fieldset">
            <img
              src={icon}
              alt="иконка поиска"
              className="search-form__image"
            />
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              required={true}
              value={searchInput}
              onChange={handleChange}
            />
            <button type="submit" className="search-form__button">
              Найти
            </button>
          </div>
          <div className="search-form__button-fieldset">
            <div className="search-form__button-wrapper">
              <FilterCheckbox isChecked={isChecked} onChange={filterMovies}>
                Короткометражки
              </FilterCheckbox>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
