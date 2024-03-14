import css from './AppointmentForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export const AppointmentForm = ({ psychologist, onClose }) => {
  const initialValues = {
    name: '',
    number: '',
    time: '',
    email: '',
    comment: '',
  };

  const validationSchema = yup.object({
    name: yup.string().required(),
    number: yup.string().required(),
    // time: yup.string().required(),
    // email: yup.string().email('Invalid email').required(),
    // comment: yup.string(),
  });

  const handleSubmit = () => {
    onClose();
  };
  return (
    <>
      <h3>Make an appointment with a psychologists</h3>
      <p>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <p>Your psychologists</p>
      <img
        src={psychologist.avatar_url}
        alt={psychologist.name}
        width="44px"
        height="44px"
      />
      <p>{psychologist.name}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div>
              <div>
                <div
                  className={`${css.inputWrapper} ${
                    errors.name && touched.name ? css.inputError : ''
                  }`}
                >
                  <Field
                    id="name"
                    type="name"
                    name="name"
                    value={values.name}
                    placeholder="Name"
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className={css.errormessage}
                />
              </div>
              <div className={css.wrapper}>
                <div
                  className={`${css.inputWrapper} ${
                    errors.number && touched.number ? css.inputError : ''
                  }`}
                >
                  <Field
                    id="number"
                    type="tel"
                    name="number"
                    placeholder="+380"
                  />
                </div>
                <ErrorMessage
                  name="number"
                  component="div"
                  className={css.errormessage}
                />
              </div>
            </div>
            <button type="submit" className={css.buttonForm}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
