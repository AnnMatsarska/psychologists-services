import css from './PsychologistItem.module.css';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as NormalHeart } from '../../images/normal-heart.svg';
import { ReactComponent as ActiveHeart } from '../../images/hover-heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  selectFavorites,
} from '../../redux/psychologists/slice';

export const PsychologistItem = ({ psychologist }) => {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const { id } = psychologist;

  const isFavoriteCar = id =>
    favorites.some(psychologist => psychologist.id === id);

  const handleToggle = () => {
    if (isFavoriteCar(id)) {
      dispatch(deleteFavorite(psychologist.id));
    } else {
      dispatch(addFavorite(psychologist));
    }
  };

  return (
    <li className={css.item}>
      <div style={{ display: 'flex', gap: '24px' }}>
        <div className={css.imgBorder}>
          <img
            className={css.itemImage}
            src={psychologist.avatar_url}
            alt={psychologist.name}
            width="96px"
            height="96px"
          />
        </div>
        <div style={{ marginLeft: '144px' }}>
          <p className={css.itemTitle}>Psychologist</p>
          <p className={css.itemName}>{psychologist.name}</p>
          <div className={css.infoWrapper}>
            <p className={css.itemMainData}>
              <span className={css.spanItem}>Experience: </span>
              {psychologist.experience}
            </p>
            <p className={css.itemMainData}>
              <span className={css.spanItem}>License: </span>
              {psychologist.license}
            </p>
            <p className={css.itemMainData}>
              <span className={css.spanItem}>Specialization: </span>
              {psychologist.specialization}
            </p>
            <p className={css.itemMainData}>
              <span className={css.spanItem}>Initial_consultation: </span>
              {psychologist.initial_consultation}
            </p>
          </div>
          <p className={css.itemAbout}>{psychologist.about}</p>
          <button className={css.readMoreBtn}>Read More</button>
        </div>
      </div>
      <div className={css.endWrapper}>
        <Star />
        <div style={{ display: 'flex' }}>
          <p className={css.itemData}>Rating: {psychologist.rating}</p>
          <p className={css.itemData}>
            Price / 1 hour:{' '}
            <span className={css.priceSpan}>
              {psychologist.price_per_hour}$
            </span>
          </p>
        </div>
      </div>
      <button className={css.btnHeart} type="button" onClick={handleToggle}>
        {isFavoriteCar(id) ? <ActiveHeart /> : <NormalHeart />}
      </button>
    </li>
  );
};
