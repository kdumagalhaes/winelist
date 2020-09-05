import React, {useState} from 'react';
import { DashboardDiv, NavTag } from './DashboardStyles';
import { Helmet } from 'react-helmet';

import Logo from '../../components/Logo/Logo'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'
import WineForm from '../../components/Forms/WineForm/WineForm'

const Dashboard = () => {
  const user_id = localStorage.getItem('user');
  console.log(user_id);
  const firstName = localStorage.getItem('firstName')
  console.log(typeof firstName)

  const [modal, setModal] = useState(false)

  return (
    <DashboardDiv>
      <Helmet>
        <title>WineList • My wines</title>
      </Helmet>
      <NavTag>
        <Logo/>
        <input type="search" placeholder="Find your wine..." />
        <PrimaryBtn textContent="+ Insert Wine" height="40px" maxWidth="180px" onClick={() => setModal(!modal)}/>
        <span>Hi, <strong>{firstName}</strong></span>
      </NavTag>
      <WineForm/>

    </DashboardDiv>
  );
};

export default Dashboard;
