import React, { useState } from 'react';
import { DashboardDiv, NavTag, ToolTipDiv, ButtonToolTipDiv } from './DashboardStyles';
import { Helmet } from 'react-helmet';
import { GiWineGlass } from 'react-icons/gi';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import Logo from '../../components/Logo/Logo';
import WineForm from '../../components/Forms/WineForm/WineForm';

const Dashboard = () => {
  const user_id = localStorage.getItem('user');
  const firstName = localStorage.getItem('firstName');

  const [modal, setModal] = useState(false);
  const modalVisibility = modal ? 'visible' : 'hidden';

  return (
    <DashboardDiv>
      <Helmet>
        <title>WineList • My wines</title>
      </Helmet>
      <NavTag>
        <Logo />
        <input type="search" placeholder="Find your wine..." />
        <ButtonToolTipDiv>
        <button onClick={() => setModal(true)}>+</button>
        <ToolTipDiv className="tooltip">
          <GiWineGlass /> Insert a wine!
        </ToolTipDiv>
        </ButtonToolTipDiv>
        <span>
          Welcome, <strong>{firstName}</strong>
        </span>
        <IconContext.Provider value={{className:"logout-icon"}}>
          <RiLogoutBoxRLine />
        </IconContext.Provider>
      </NavTag>
      <WineForm modalVisibility={modalVisibility} setModal={setModal} />
    </DashboardDiv>
  );
};

export default Dashboard;
