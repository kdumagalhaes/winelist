import React from 'react';
import { DashboardDiv, NavTag } from './DashboardStyles';
import { Helmet } from 'react-helmet';

import Logo from '../../components/Logo/Logo'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'

const Dashboard = () => {
  const user_id = localStorage.getItem('user');
  console.log(user_id);
  const firstName = localStorage.getItem('firstName')
  console.log(typeof firstName)
  return (
    <DashboardDiv>
      <Helmet>
        <title>WineList • My wines</title>
      </Helmet>
      <NavTag>
        <Logo/>
        <input type="search" placeholder="Find your wine..." />
        <PrimaryBtn textContent="+ Insert Wine" height="40px" maxWidth="180px"/>
        <span>Hi, <strong>{firstName}</strong></span>
      </NavTag>

    </DashboardDiv>
  );
};

export default Dashboard;
