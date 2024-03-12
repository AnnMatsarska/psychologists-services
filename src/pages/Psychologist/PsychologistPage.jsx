import { PsychologistList } from '../../components/PsychologistList/PsychologistList';
import css from './PsychologistPage.module.css';
import { Filter } from '../../components/Filter/Filter';

const PsychologistPage = () => {
  return (
    <div className={css.container}>
      <section className={css.section}>
        <Filter />
        <PsychologistList />
      </section>
    </div>
  );
};

export default PsychologistPage;
