import React from 'react';
import { WineCardTag, InfoDiv, ColDiv, RowDiv } from './WineCardStyles';
import api from '../../services/api';

const WineCard = ({
  id,
  thumbnailUrl,
  wineLabel,
  update,
  comments,
  harvest,
  price,
  type,
}) => {
  const deleteEventHandler = async (id) => {
    try {
      await api.delete(`/wine/${id}`);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WineCardTag>
      <img src={thumbnailUrl} alt="wine bottle test" />
      <InfoDiv>
        <ColDiv>
          <span>{wineLabel}</span>
          <time>{update}</time>
          <p>{comments}</p>
        </ColDiv>
        <RowDiv>
          <span>{harvest}</span>
          <span>{price}</span>
          <span>{type}</span>
          <button onClick={() => deleteEventHandler(id)}>Delete</button>
        </RowDiv>
      </InfoDiv>
    </WineCardTag>
  );
};

export default WineCard;
