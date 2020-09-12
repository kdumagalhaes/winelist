import React, { useState, useEffect } from 'react';
import { WinePageDiv } from './WinePageStyles';
import api from '../../services/api';

const WinePage = ({history}) => {
  const user_id = localStorage.getItem('user_id');
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (!user) history.push('/login')
  }, [])

  const [wines, setWines] = useState([]);

  const getWines = async () => {
    const url = '/wines';
    const response = await api.get(url, { headers: { user_id } });

    setWines(response.data);
    console.log(response.data)
  };

  getWines()

  return <WinePageDiv>{wines}</WinePageDiv>;
};

export default WinePage;
