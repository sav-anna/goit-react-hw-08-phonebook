// import { Navigate, useNavigate } from 'react-router-dom';
import css from './Page.module.css';
// import { contactsApi } from 'redux/contactsApi';
// import { useState } from 'react';

export const LoginPage = () => {
  // if (isLoginSuccess) {
  //   return <Navigate to="/contacts" replace />;
  // }
  // onSubmit={handleSubmit}
  return (
    <form className={css.form}>
      <div className={css.container}>
        <label className={css.label} htmlFor="email">
          Email
        </label>
        <input
          className={css.input}
          id="email"
          type="email"
          name="email"
          placeholder=" "
          required
        ></input>
        <label className={css.label} htmlFor="password">
          Password
        </label>
        <input
          className={css.input}
          id="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
        ></input>
      </div>
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};
