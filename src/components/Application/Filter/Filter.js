import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };

  const filterId = nanoid();

  return (
    <label htmlFor={filterId} className={css.filter_label}>
      Find contacts by name:
      <input
        id={filterId}
        onChange={onFilterChange}
        value={filterValue}
        type="text"
        name="filter"
        className={css.filter_input}
      />
    </label>
  );
}

export default Filter;
