import React, { useState } from 'react';
import { RegisterFormTag, NamesDiv } from './RegisterFormStyles';
import api from '../../../services/api';

import PrimaryBtn from '../../Buttons/PrimaryBtn';

const RegisterForm = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      history.push('/dashboard');
    } else {
      const { message } = response.data;
      console.log(message);
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
            required
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
            required
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
        required
      />

      <label htmlFor="name">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="••••••"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <PrimaryBtn textContent="Register" height="50px" />
    </RegisterFormTag>
  );
};

export default RegisterForm;
