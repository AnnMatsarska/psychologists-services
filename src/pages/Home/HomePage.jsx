import homeImg from '../../images/home-image-min.webp';
import css from './HomePage.module.css';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { ReactComponent as Check } from '../../images/check.svg';
import { ReactComponent as Question } from '../../images/question.svg';
import { ReactComponent as Group } from '../../images/group.svg';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.layout}>
      <div className="container">
        <section className={css.section}>
          <div>
            <h1 className={css.sectionTitle}>
              The road to the <span className={css.spanText}>depths</span> of
              the human soul
            </h1>
            <p className={css.sectionText}>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </p>
            <NavLink to="/psychologists" className={css.button}>
              <span className={css.buttonSpan}>Get started</span> <Arrow />
            </NavLink>
          </div>
          <div className={css.imgBlockWrapper}>
            <img
              src={homeImg}
              className={css.homeImg}
              alt="home img"
              width="464px"
              height="526px"
            />
            <span className={css.groupSpan}>
              <Group />
            </span>
            <span className={css.violetSpan}>
              <Question className={css.iconQuestion} />
            </span>
            <div className={css.greenWrapper}>
              <div className={css.iconWrapper}>
                <Check />
              </div>
              <div>
                <p className={css.greenWrText}>Experienced psychologists</p>
                <p className={css.greenWrNumber}>15,000</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
