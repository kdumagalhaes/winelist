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
import socketio from 'socket.io-client';

import Logo from '../../components/Logo/Logo';
import WineForm from '../../components/Forms/WineForm/WineForm';
import WineCard from '../../components/WineCards/WineCard';

const Dashboard = ({ history }) => {
  const user = localStorage.getItem('user');
  const user_id = localStorage.getItem('user_id');
  const firstName = localStorage.getItem('firstName');
  const [wines, setWines] = useState([]);
  const [search, setSearch] = useState('');

  const filteredWines = wines.filter((wine) => {
    return (
      wine.wineLabel.toLowerCase().includes(search.toLocaleLowerCase()) ||
      wine.wineType.toLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  const getWines = async () => {
    try {
      const url = '/dashboard';
      const response = await api.get(url, { headers: { user: user } });
      setWines(response.data.wines);
    } catch (error) {
      history.push('/login');
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    history.push('/login');
  };

  useEffect(() => {
    getWines();
  }, []);

  useEffect(() => {
    const socket = socketio('http://localhost:8000/', { query: { user_id } });
  }, []);

  useEffect(() => {
    if (!user) history.push('/login');
  }, []);

  const [modal, setModal] = useState(false);
  const modalVisibility = modal ? 'visible' : 'hidden';

  return (
    <DashboardDiv>
      <Helmet>
        <title>WineBoard • {firstName} wines</title>
      </Helmet>
      <NavTag>
        <Logo />
        <input
          id="searchBar"
          name="searchBar"
          type="search"
          placeholder="Find your wine by the label or the type..."
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
          <RiLogoutBoxRLine onClick={() => logOutHandler()} />
        </IconContext.Provider>
      </NavTag>
      <WineForm modalVisibility={modalVisibility} setModal={setModal} />
      <WinesAreaGrid>
        {filteredWines.map((wine) =>
          wine.user === user_id ? (
            <WineCard
              id={wine._id}
              thumbnailUrl={wine.thumbnail_url}
              wineLabel={wine.wineLabel}
              update={new Date(wine.updated).toLocaleDateString()}
              comments={wine.comments}
              harvest={wine.harvest}
              price={wine.price.toLocaleString('en', {
                style: 'currency',
                currency: 'USD',
              })}
              type={wine.wineType}
            />
          ) : (
            ''
          )
        )}
      </WinesAreaGrid>
    </DashboardDiv>
  );
};

export default Dashboard;
