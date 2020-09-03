import React, { useState } from 'react';
import { LoginFormTag, InputsDiv } from './LoginFormStyles';

import Logo from '../../Logo/Logo';
import PrimaryBtn from '../../Buttons/PrimaryBtn';

import api from '../../../services/api';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post('/login', { email, password });
    const userId = response.data._id || false;

    if (userId) {
      localStorage.setItem('user', userId);
      history.push('/dashboard');
    } else {
      const { message } = response.data;
      console.log(message);
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
      </InputsDiv>
      <PrimaryBtn textContent="Log in" height="50px"/>
    </LoginFormTag>
  );
};

export default LoginForm;
