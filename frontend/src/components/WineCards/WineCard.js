import React from 'react';
import { WineCardTag } from './WineCardStyles';

const WineCard = ({ children }) => {
  return <WineCardTag>{children}</WineCardTag>;
};

export default WineCard;
