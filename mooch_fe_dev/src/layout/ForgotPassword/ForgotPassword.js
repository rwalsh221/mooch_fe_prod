import React, { useRef, useState } from 'react';
import classes from './ForgotPassword.module.css';
import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import ButtonGreen from '../../components/Button/ButtonGreen/ButtonGreen';
const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    console.log(emailRef.current.value);
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('check your inbox for further instructions');
    } catch (error) {
      setError('failed to reset password');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <h3 className={classes.register_card__heading}>Reset Your Password</h3>
      <p>{error}</p>
      <p>{message}</p>
      <form data-margin-bottom={'300'} onSubmit={handleSubmit}>
        <input
          type="email"
          id="register-email"
          aria-label="register email"
          name="register-email"
          placeholder="Email"
          required
          ref={emailRef}
          // autoComplete="new-password"
        />
        <br />
        <ButtonGreen contentProps={'reset password'} disabledProps={loading} />
      </form>
      <Link to="/">Sign In</Link>
    </>
  );
};

export default ForgotPassword;
