import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import css from './AuthForm.module.css';
import { ReactComponent as OpenEye } from '../../images/eye.svg';
import { ReactComponent as ClosedEye } from '../../images/eye-off.svg';

import { useState } from 'react';
import { auth } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (formTitle === 'Registration') {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log(user);
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log(user);
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Authentication error:', errorCode, errorMessage);
    }

    resetForm();
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
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
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
                        onChange={e => {
                          handleChange(e);
                        }}
                        type="name"
                        name="name"
                        value={values.name}
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
                    onChange={e => {
                      handleChange(e);
                    }}
                    type="email"
                    name="email"
                    value={values.email}
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
                    onChange={e => {
                      handleChange(e);
                    }}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={values.password}
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
