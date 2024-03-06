import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AuthForm.module.css';

export const AuthForm = () => {
  const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(10).required(),
  });
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <div className={css.formDiv}>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        //    onSubmit={}
      >
        <Form>
          <div className={css.formWrapper}>
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
          <button type="submit" className={css.buttonForm}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};
