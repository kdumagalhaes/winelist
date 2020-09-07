import React, { useState } from 'react';
import { RegisterFormTag, NamesDiv } from './RegisterFormStyles';
import api from '../../../services/api';
import { RiAlertLine } from 'react-icons/ri';

import PrimaryBtn from '../../Buttons/PrimaryBtn';
import ErrorAlert from '../../Alerts/ErrorAlerts/ErrorAlert';

const RegisterForm = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      email !== '' &&
      password !== '' &&
      firstName !== '' &&
      lastName !== ''
    ) {
      const response = await api.post('/user/register', {
        email,
        password,
        firstName,
        lastName,
      });
      const userId = response.data._id || false;

      if (userId) {
        localStorage.setItem('user', userId);
        localStorage.setItem('firstName', firstName);
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
    } else {
      setError(true);
      setErrorMessage('You need to fill all the fields.');
      setTimeout(() => {
        setError(false);
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <RegisterFormTag onSubmit={handleSubmit}>
      <NamesDiv>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name..."
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name..."
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </NamesDiv>
      <label htmlFor="name">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="name">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="••••••"
        onChange={(e) => setPassword(e.target.value)}
      />
      <PrimaryBtn textContent="Register" height="50px" />
      {error ? (
        <ErrorAlert>
          <RiAlertLine />
          
          {errorMessage}
        </ErrorAlert>
      ) : (
        ''
      )}{' '}
    </RegisterFormTag>
  );
};

export default RegisterForm;
