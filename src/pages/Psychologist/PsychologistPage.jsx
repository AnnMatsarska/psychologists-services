import { PsychologistList } from '../../components/PsychologistList/PsychologistList';
import css from './PsychologistPage.module.css';

const PsychologistPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <PsychologistList />
      </div>
    </section>
  );
};

export default PsychologistPage;
