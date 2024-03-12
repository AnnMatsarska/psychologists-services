import React from 'react';
import css from './Filter.module.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/psychologists/slice';

export const Filter = () => {
  const defaultFilter = 'Show all';
  const dispatch = useDispatch();

  const handleFilterChange = selectedFilter => {
    dispatch(setFilter(selectedFilter));
  };

  return (
    <div>
      <label className={css.filterLabel}>Filters</label>
      <Dropdown defaultOption={defaultFilter} onSelect={handleFilterChange}>
        <span value="A to Z">A to Z</span>
        <span value="Z to A">Z to A</span>
        <span value="Less than 10$">Less than 10$</span>
        <span value="Greater than 10$">Greater than 10$</span>
        <span value="Popular">Popular</span>
        <span value="Not popular">Not popular</span>
        <span value="Show all">Show all</span>
      </Dropdown>
    </div>
  );
};
