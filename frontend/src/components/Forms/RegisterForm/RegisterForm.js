import React from 'react';
import { RegisterFormTag, NamesDiv } from './RegisterFormStyles';

import PrimaryBtn from '../../Buttons/PrimaryBtn';

const RegisterForm = () => {
  return (
    <RegisterFormTag>
      <NamesDiv>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First name..."
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last name..."
          />
        </div>
      </NamesDiv>
      <label htmlFor="name">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
      />

      <label htmlFor="name">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="••••••"
      />

      <PrimaryBtn textContent="Register" />
    </RegisterFormTag>
  );
};

export default RegisterForm;
