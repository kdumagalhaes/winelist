import React, { useState } from 'react';
import { LoginFormTag, InputsDiv, AlertDiv } from './LoginFormStyles';
import { RiAlertLine } from 'react-icons/ri';

import Logo from '../../Logo/Logo';
import PrimaryBtn from '../../Buttons/PrimaryBtn';
import ErrorAlert from '../../Alerts/ErrorAlerts/ErrorAlert'

import api from '../../../services/api';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('false');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post('/login', { email, password });
    const userId = response.data._id || false;

    try {
      if (userId) {
        localStorage.setItem('user', userId);
        history.push('/');
      } else {
        const { message } = response.data;
        setError(true);
        setErrorMessage(message);
        setTimeout(() => {
          setError(false);
          setErrorMessage('');
        }, 2000);
      }
    } catch (error) {
      setError(true);
      setErrorMessage('Error, the server returned an error');
    }
  };

  return (
    <LoginFormTag onSubmit={handleSubmit}>
      <Logo padding="20px" />
      <InputsDiv>
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <label htmlFor="name">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••"
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputsDiv>
      <PrimaryBtn textContent="Log in" height="50px" />
      {error ? (
        <ErrorAlert>
          <RiAlertLine />
          
          {errorMessage}
        </ErrorAlert>
      ) : (
        ''
      )}
    </LoginFormTag>
  );
};

export default LoginForm;
