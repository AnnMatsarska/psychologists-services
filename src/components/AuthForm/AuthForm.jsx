import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AuthForm.module.css';

export const AuthForm = ({ formTitle }) => {
  const loginSchema = yup.object({
    ...(formTitle === `Registration` && {
      name: yup.string().required(),
    }),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(10).required(),
  });
  const initialValues = {
    ...(formTitle === `Registration` && {
      name: '',
    }),
    email: '',
    password: '',
  };
  return (
    <div className={css.formDiv}>
      <h2 className={css.formTitle}>{formTitle}</h2>
      {formTitle === 'Registration' ? (
        <p className={css.formText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      ) : (
        <p className={css.formText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        //    onSubmit={}
      >
        <Form>
          <div className={css.formWrapper}>
            {formTitle === 'Registration' && (
              <>
                <label htmlFor="name">
                  <Field
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Name"
                    className={css.input}
                  />
                </label>
                <ErrorMessage name="name" />
              </>
            )}
            <label htmlFor="email">
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className={css.input}
              />
            </label>
            <ErrorMessage name="email" />
            <label htmlFor="password">
              <Field
                id="password"
                type="text"
                name="password"
                placeholder="Password"
                className={css.input}
              />
            </label>
            <ErrorMessage name="password" />
          </div>
          {formTitle === 'Registration' ? (
            <button type="submit" className={css.buttonForm}>
              Sign Up
            </button>
          ) : (
            <button type="submit" className={css.buttonForm}>
              Log In
            </button>
          )}
        </Form>
      </Formik>
    </div>
  );
};
