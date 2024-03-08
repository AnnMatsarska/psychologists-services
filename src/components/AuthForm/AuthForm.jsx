import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AuthForm.module.css';
import { ReactComponent as OpenEye } from '../../images/eye.svg';
import { ReactComponent as ClosedEye } from '../../images/eye-off.svg';
import { useState } from 'react';

export const AuthForm = ({ formTitle }) => {
  const [showPassword, setShowPassword] = useState(false);

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
        {({ errors, touched }) => (
          <Form>
            <div className={css.formWrapper}>
              {formTitle === 'Registration' && (
                <>
                  <div className={css.wrapper}>
                    <div
                      className={`${css.inputWrapper} ${
                        errors.email && touched.email ? css.inputError : ''
                      }`}
                    >
                      <Field
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Name"
                        className={css.input}
                      />
                    </div>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className={css.errormessage}
                    />
                  </div>
                </>
              )}
              <div className={css.wrapper}>
                <div
                  className={`${css.inputWrapper} ${
                    errors.email && touched.email ? css.inputError : ''
                  }`}
                >
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={css.input}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.errormessage}
                />
              </div>
              <div className={css.wrapper}>
                <div
                  className={`${css.inputWrapper} ${
                    errors.email && touched.email ? css.inputError : ''
                  }`}
                >
                  <Field
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className={css.input}
                  />
                  <div
                    className={css.eyeIcon}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      cursor: 'pointer',
                      marginTop: 'auto',
                      marginBottom: 'auto',
                    }}
                  >
                    {showPassword ? <OpenEye /> : <ClosedEye />}
                  </div>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.errormessage}
                />
              </div>
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
        )}
      </Formik>
    </div>
  );
};
