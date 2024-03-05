import { useState } from 'react';
import css from './UserAuth.module.css';

export const UserAuth = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = button => {
    setActiveButton(button);
  };
  return (
    <ul className={css.list}>
      <li>
        <button
          type="button"
          className={`${css.linkItem} ${
            activeButton === 'login' ? css.active : css.linkItem
          }`}
          onClick={() => handleButtonClick('login')}
        >
          Log In
        </button>
      </li>
      <li>
        <button
          type="button"
          className={`${css.linkItem} ${
            activeButton === 'registration' ? css.active : css.linkItem
          }`}
          onClick={() => handleButtonClick('registration')}
        >
          Registration
        </button>
      </li>
    </ul>
  );
};
