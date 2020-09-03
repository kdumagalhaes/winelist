import React from 'react';
import { RegisterPageDiv, LeftDiv, RightDiv } from './RegisterStyles';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm'

const RegisterPage = ({history}) => {
  return (
    <RegisterPageDiv>
      <Helmet>
        <title>WineList • Register Page</title>
      </Helmet>
      <LeftDiv>
        <Logo />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <RegisterForm history={history}/>
        <span>Already have an account?</span>
        <h3>
          <Link to="/">Log in</Link>
        </h3>
      </LeftDiv>
      <RightDiv></RightDiv>
    </RegisterPageDiv>
  );
};

export default RegisterPage;
