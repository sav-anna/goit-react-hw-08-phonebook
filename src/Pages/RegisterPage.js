// import { useDispatch } from 'react-redux';
import css from './Page.module.css';
import { useEffect } from 'react';
import { useSignupMutation } from 'redux/contactsApi';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

export const RegisterPage = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [signup, { isSuccess: signupIsSuccess }] = useSignupMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const credentials = { name, email, password };

    await signup(credentials);
    e.currentTarget.reset();
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  useEffect(() => {
    if (signupIsSuccess) {
      toast.success('User Login Successfully');
      <Navigate to="/contacts" replace />;
    } else {
    }
  }, [signupIsSuccess]);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.container}>
        <label className={css.label} htmlFor="name">
          User name
        </label>
        <input
          className={css.input}
          id="name"
          type="text"
          name="name"
          placeholder=" "
          minLength="6"
          maxLength="20"
          pattern="^[A-Za-z]+\s[A-Za-z]+$"
          title="Enter first and last name, only Latin letters"
          required
        ></input>
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
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
        ></input>
      </div>
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};
