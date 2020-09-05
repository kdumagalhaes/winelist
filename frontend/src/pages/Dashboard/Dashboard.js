import React, {useState} from 'react';
import { DashboardDiv, NavTag } from './DashboardStyles';
import { Helmet } from 'react-helmet';

import Logo from '../../components/Logo/Logo'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'
import WineForm from '../../components/Forms/WineForm/WineForm'

const Dashboard = () => {
  const user_id = localStorage.getItem('user');
  const firstName = localStorage.getItem('firstName')

  const [modal, setModal] = useState(false)
  const modalVisibility = modal ? 'visible' : 'hidden'
  console.log(modalVisibility)

  return (
    <DashboardDiv>
      <Helmet>
        <title>WineList • My wines</title>
      </Helmet>
      <NavTag>
        <Logo/>
        <input type="search" placeholder="Find your wine..." />
        <button onClick={() => setModal(true)}>+ Insert Wine</button>
        <span>Hi, <strong>{firstName}</strong></span>
      </NavTag>
      <WineForm modalVisibility={modalVisibility} setModal={setModal}/>

    </DashboardDiv>
  );
};

export default Dashboard;
