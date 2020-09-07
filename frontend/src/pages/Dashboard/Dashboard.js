import React, { useState, useEffect } from 'react';
import {
  DashboardDiv,
  NavTag,
  ToolTipDiv,
  ButtonToolTipDiv,
  WinesAreaGrid,
} from './DashboardStyles';
import { Helmet } from 'react-helmet';
import { GiWineGlass } from 'react-icons/gi';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import api from '../../services/api';

import Logo from '../../components/Logo/Logo';
import WineForm from '../../components/Forms/WineForm/WineForm';
import WineCard from '../../components/WineCards/WineCard';

const Dashboard = () => {
  const user_id = localStorage.getItem('user');
  const firstName = localStorage.getItem('firstName');
  const [wines, setWines] = useState([]);
  const [search, setSearch] = useState('');
  console.log(search);

  const filteredWines = wines.filter((wine) => {
    return (
      wine.wineLabel.toLowerCase().includes(search.toLocaleLowerCase()) ||
      wine.wineType.toLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  const getWines = async () => {
    const url = '/dashboard';
    const response = await api.get(url, { headers: { user_id } });

    setWines(response.data);
  };

  useEffect(() => {
    getWines();
  }, []);

  const [modal, setModal] = useState(false);
  const modalVisibility = modal ? 'visible' : 'hidden';

  return (
    <DashboardDiv>
      <Helmet>
        <title>WineList • My wines</title>
      </Helmet>
      <NavTag>
        <Logo />
        <input
          id="searchBar"
          name="searchBar"
          type="search"
          placeholder="Find your wine..."
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
        <ButtonToolTipDiv>
          <button onClick={() => setModal(true)}>+</button>
          <ToolTipDiv className="tooltip">
            <GiWineGlass /> Insert a wine!
          </ToolTipDiv>
        </ButtonToolTipDiv>
        <span>
          Welcome, <strong>{firstName}</strong>
        </span>
        <IconContext.Provider value={{ className: 'logout-icon' }}>
          <RiLogoutBoxRLine />
        </IconContext.Provider>
      </NavTag>
      <WineForm modalVisibility={modalVisibility} setModal={setModal} />
      <WinesAreaGrid>
        {filteredWines.map((wine) =>
          wine.user === user_id ? (
            <WineCard key={wine._id}>
              <img src={wine.thumbnail_url} alt="wine bottle test" />
              <div>
                <span>{wine.wineLabel}</span>
                <time>{new Date(wine.updated).toLocaleDateString()}</time>
              </div>
            </WineCard>
          ) : (
            ''
          )
        )}
      </WinesAreaGrid>
    </DashboardDiv>
  );
};

export default Dashboard;
