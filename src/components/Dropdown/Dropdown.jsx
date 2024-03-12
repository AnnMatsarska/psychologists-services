import React, { useState, useRef, useEffect } from 'react';
import { ReactComponent as IconDropdown } from '../../images/chevron-down.svg';
import css from './Dropdown.module.css';

export const Dropdown = ({ defaultOption, onSelect, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef(null);

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const closeDropdownEsc = ({ code }) => {
      if (code === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', closeDropdownEsc);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', closeDropdownEsc);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(defaultOption);
  }, [defaultOption]);

  return (
    <div className={css.dropdown} ref={dropdownRef}>
      <button className={css.dropBtn} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <IconDropdown />
      </button>

      {isOpen && (
        <ul className={css.list}>
          {React.Children.map(children, child => (
            <li
              key={child.props.value}
              onClick={() => handleOptionClick(child.props.value)}
            >
              {child}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
