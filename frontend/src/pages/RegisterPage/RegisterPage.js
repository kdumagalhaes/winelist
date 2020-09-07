import React from 'react';
import { RegisterPageDiv, LeftDiv, RightDiv } from './RegisterStyles';
import { Helmet } from 'react-helmet';

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
          <button onClick={() => history.push("/login")}>Log in</button>
        </h3>
      </LeftDiv>
      <RightDiv></RightDiv>
    </RegisterPageDiv>
  );
};

export default RegisterPage;
