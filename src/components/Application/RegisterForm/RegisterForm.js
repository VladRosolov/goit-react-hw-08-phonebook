import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getAuthentication } from 'redux/auth/authSlice';
import { registerUser } from 'redux/auth/authOperation';
import { Loader } from '../Loader/Loader';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setName(value);
        break;
      case 'userEmail':
        setEmail(value);
        break;
      case 'userPassword':
        setPassword(value);
        break;
      default:
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector(getAuthentication);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(registerUser({ name: name, email: email, password: password }));
  };

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  return (
    <form onSubmit={handleSubmit} className={css.registerform}>
      <h1 className={css.registerform_title}>Sign up</h1>
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        type="text"
        name="userName"
        value={name}
        onChange={handleChange}
        required
        placeholder="Choose your Name"
        className
      />
      <label className htmlFor={emailId}>
        Email
      </label>
      <input
        id={emailId}
        type="email"
        name="userEmail"
        value={email}
        onChange={handleChange}
        required
        placeholder="Choose your Email"
        className
      />
      <label className htmlFor={passwordId}>
        Password
      </label>
      <input
        id={passwordId}
        type="password"
        name="userPassword"
        value={password}
        onChange={handleChange}
        required
        placeholder="Choose your Password"
        className
      />
      {!isLoading ? <button type="submit">Sign Up</button> : <Loader />}
    </form>
  );
};
export default RegisterForm;
