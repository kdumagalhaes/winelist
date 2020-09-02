import React from 'react';
import { LoginPageDiv, LeftDiv, RightDiv } from './LoginPageStyles';
import { Helmet } from 'react-helmet';

import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <LoginPageDiv>
      <Helmet>
        <title>WineList • Login Page</title>
      </Helmet>
        <LeftDiv>
            <LoginForm/>
        </LeftDiv>
        <RightDiv></RightDiv>
    </LoginPageDiv>
  );
};

export default LoginPage;
