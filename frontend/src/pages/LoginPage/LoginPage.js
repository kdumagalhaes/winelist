import React from 'react';
import { LoginPageDiv, LeftDiv, RightDiv } from './LoginPageStyles';
import { Helmet } from 'react-helmet';

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
          <button onClick={() => history.push('/register')}>Create account</button>
        </h3>
      </LeftDiv>
      <RightDiv></RightDiv>
    </LoginPageDiv>
  );
};

export default LoginPage;
