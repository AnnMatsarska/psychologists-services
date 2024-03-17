import React, { useState } from 'react';
import css from './Filter.module.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { ReactComponent as IconDropdown } from '../../images/chevron-down.svg';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/psychologists/slice';

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Show all');

  const dispatch = useDispatch();

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
    dispatch(setFilter(option));
  };

  return (
    <div>
      <label className={css.filterLabel}>Filters</label>
      <div className={css.dropdown}>
        <button
          className={css.dropBtn}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {selectedOption}
          <IconDropdown className={isOpen ? css.rotatedIcon : null} />
        </button>
        {isOpen && (
          <Dropdown close={() => setIsOpen(false)}>
            <ul className={css.list}>
              <li onClick={() => handleOptionClick('A to Z')} value="A to Z">
                A to Z
              </li>
              <li onClick={() => handleOptionClick('Z to A')} value="Z to A">
                Z to A
              </li>
              <li
                onClick={() => handleOptionClick('Less than 10$')}
                value="Less than 10$"
              >
                Less than 10$
              </li>
              <li
                onClick={() => handleOptionClick('Greater than 10$')}
                value="Greater than 10$"
              >
                Greater than 10$
              </li>
              <li onClick={() => handleOptionClick('Popular')} value="Popular">
                Popular
              </li>
              <li
                onClick={() => handleOptionClick('Not popular')}
                value="Not popular"
              >
                Not popular
              </li>
              <li
                onClick={() => handleOptionClick('Show all')}
                value="Show all"
              >
                Show all
              </li>
            </ul>
          </Dropdown>
        )}
      </div>
    </div>
  );
};
