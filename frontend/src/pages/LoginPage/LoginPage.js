import React from 'react';
import { LoginPageDiv, LeftDiv, RightDiv } from './LoginPageStyles';
import { Helmet } from 'react-helmet';

import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = ({history}) => {
  return (
    <LoginPageDiv>
      <Helmet>
        <title>WineList • Login Page</title>
      </Helmet>
        <LeftDiv>
            <LoginForm history={history} />
        </LeftDiv>
        <RightDiv></RightDiv>
    </LoginPageDiv>
  );
};

export default LoginPage;
