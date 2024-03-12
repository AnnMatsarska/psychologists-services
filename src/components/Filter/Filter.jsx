import React from 'react';
import css from './Filter.module.css';
import { Dropdown } from '../Dropdown/Dropdown';

export const Filter = ({ defaultFilter, onSelect }) => {
  return (
    <div>
      <label className={css.filterLabel}>Filters</label>
      <Dropdown defaultOption={defaultFilter} onSelect={onSelect}>
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
