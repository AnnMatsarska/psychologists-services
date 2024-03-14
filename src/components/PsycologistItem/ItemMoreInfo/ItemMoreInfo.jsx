import React from 'react';
import css from './ItemMoreInfo.module.css';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Star } from '../../../images/star.svg';

export const ItemMoreInfo = ({ psychologist }) => {
  const { reviews } = psychologist;

  return (
    <div>
      <ul className={css.list}>
        {reviews.map(review => (
          <li key={uuidv4()}>
            <p className={css.reviewer}>{review.reviewer}</p>
            <div>
              <Star />
              <p className={css.rating}>{review.rating.toFixed(1)}</p>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
