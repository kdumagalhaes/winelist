import React, {useState} from 'react';
import { DashboardDiv, NavTag, ToolTipDiv } from './DashboardStyles';
import { Helmet } from 'react-helmet';
import {GiWineGlass} from 'react-icons/gi'

import Logo from '../../components/Logo/Logo'
import WineForm from '../../components/Forms/WineForm/WineForm'

const Dashboard = () => {
  const user_id = localStorage.getItem('user');
  const firstName = localStorage.getItem('firstName')

  const [modal, setModal] = useState(false)
  const modalVisibility = modal ? 'visible' : 'hidden'

  return (
    <DashboardDiv>
      <Helmet>
        <title>WineList • My wines</title>
      </Helmet>
      <NavTag>
        <Logo/>
        <input type="search" placeholder="Find your wine..." />
        <button onClick={() => setModal(true)}>+</button>
        <ToolTipDiv className="tooltip"><GiWineGlass/> Insert a wine!</ToolTipDiv>
        <span>Hi, <strong>{firstName}</strong></span>
      </NavTag>
      <WineForm modalVisibility={modalVisibility} setModal={setModal}/>

    </DashboardDiv>
  );
};

export default Dashboard;
