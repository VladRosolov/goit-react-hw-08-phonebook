import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuthentication } from 'redux/auth/authSlice';
import { loginUser } from 'redux/auth/authOperation';
import { Loader } from '../Loader/Loader';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
        setEmail('');
        setPassword('');
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuthentication);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(loginUser({ email: email, password: password }));
  };

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit} className={css.loginform}>
      <h1 className={css.loginform_title}>Sign in</h1>
      <label htmlFor={emailId}>Email</label>
      <input
        id={emailId}
        type="email"
        name="userEmail"
        value={email}
        onChange={handleChange}
        required
        placeholder="Enter your Email"
      />
      <label htmlFor={passwordId}>Password</label>
      <input
        id={passwordId}
        type="password"
        name="userPassword"
        value={password}
        onChange={handleChange}
        required
        placeholder="Enter your Password"
      />
      {!isLoading ? <button type="submit">Sign In</button> : <Loader />}
    </form>
  );
};

export default LoginForm;
