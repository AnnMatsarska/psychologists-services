import homeImg from '../../images/home-image-min.png';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.section}>
      <div>
        <h1 className={css.sectionTitle}>
          The road to the <span className={css.spanText}>depths</span> of the
          human soul
        </h1>
        <p className={css.sectionText}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button type="button" className={css.button}>
          Get started
        </button>
      </div>
      <div>
        <img src={homeImg} className={css.homeImg} alt="home img"></img>
      </div>
    </section>
  );
};

export default HomePage;
