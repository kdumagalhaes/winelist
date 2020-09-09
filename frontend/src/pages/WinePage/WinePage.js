import React, { useState } from 'react';
import { WinePageDiv } from './WinePageStyles';
import api from '../../services/api';

const WinePage = () => {
  const user_id = localStorage.getItem('user');

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
