import React from 'react';
import { LoginFormTag, InputsDiv } from './LoginFormStyles';

import Logo from '../../components/Logo/Logo';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'

const LoginForm = () => {
  return (
    <LoginFormTag>
      <Logo padding="20px" />
      <InputsDiv>
        <label for="name">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <label for="name">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••"
        />
      </InputsDiv>
      <PrimaryBtn/>
    </LoginFormTag>
  );
};

export default LoginForm;
