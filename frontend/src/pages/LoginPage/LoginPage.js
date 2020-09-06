import React from 'react';
import { LoginPageDiv, LeftDiv, RightDiv } from './LoginPageStyles';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/Forms/LoginForm/LoginForm'

const LoginPage = ({ history }) => {
  return (
    <LoginPageDiv>
      <Helmet>
        <title>WineList • Login Page</title>
      </Helmet>
      <LeftDiv>
        <LoginForm history={history} />
        <span>Don't you have an account yet?</span>
        <h3>
          <a onClick={() => history.push('/register')}>Create account</a>
        </h3>
      </LeftDiv>
      <RightDiv></RightDiv>
    </LoginPageDiv>
  );
};

export default LoginPage;
