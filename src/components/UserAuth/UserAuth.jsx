import { useState } from 'react';
import css from './UserAuth.module.css';
import Modal from 'components/Modal/Modal';
import { AuthForm } from 'components/AuthForm/AuthForm';

export const UserAuth = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isOpen, setTeamModalOpen] = useState(false);

  const handleButtonClick = button => {
    setActiveButton(button);
    setTeamModalOpen(true);
    document.body.classList.add('body-scroll-lock');
  };

  const closeModal = () => {
    setTeamModalOpen(false);
    document.body.classList.remove('body-scroll-lock');
    setActiveButton(null);
  };
  return (
    <>
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
      {isOpen && (
        <Modal onClose={closeModal}>
          <AuthForm
            formTitle={activeButton === 'login' ? 'Log In' : 'Registration'}
          />
        </Modal>
      )}
    </>
  );
};
