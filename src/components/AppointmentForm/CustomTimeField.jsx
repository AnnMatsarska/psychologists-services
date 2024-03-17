import { useState } from 'react';
import css from './AppointmentForm.module.css';
import { generateTimeOptions } from '../../services/timeOptions';
import { ReactComponent as Clock } from '../../images/clock.svg';

export const CustomTimeField = ({ field, form }) => {
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const timeOptions = generateTimeOptions();

  const handleTimeSelect = time => {
    setSelectedTime(time);
    form.setFieldValue(field.name, time);
    setShowTimeDropdown(false);
  };

  return (
    <>
      <div
        className={css.timeDropdownHeader}
        onClick={() => setShowTimeDropdown(!showTimeDropdown)}
        type="button"
      >
        {selectedTime || '00:00'}
        <Clock />
      </div>
      {showTimeDropdown && (
        <>
          <ul className={css.timeDropdown}>
            <p style={{ marginBottom: '16px' }}>Meeting time</p>
            {timeOptions.map(time => (
              <li
                key={time}
                className={css.timeOption}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
