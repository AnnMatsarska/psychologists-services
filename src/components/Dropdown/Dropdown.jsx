import React, { useRef, useEffect } from 'react';

export const Dropdown = ({ close, children }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        close();
      }
    };
    const closeDropdownEsc = ({ code }) => {
      if (code === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', closeDropdownEsc);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', closeDropdownEsc);
    };
  }, [close]);

  return <div ref={dropdownRef}>{children}</div>;
};
