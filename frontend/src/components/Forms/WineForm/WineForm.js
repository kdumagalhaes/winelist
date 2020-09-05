import React, { useState, useMemo, Fragment } from 'react';
import {
  WineFormTag,
  ThumbPreviewArea,
  ThumbPreviewDiv,
  InfoDiv,
  ContainerDiv,
  CloseBtn,
} from './WineFormStyles';
import PrimaryBtn from '../../Buttons/PrimaryBtn'
import api from '../../../services/api';

const WineForm = () => {
  const user_id = localStorage.getItem('user');

  const [wineLabel, setWineLabel] = useState('');
  const [harvest, setHarvest] = useState('');
  const [comments, setComments] = useState('');
  const [thumbnail, setThumbNail] = useState(null);
  const [updated, setUpdated] = useState('');
  const [price, setPrice] = useState('');
  const [wineType, setWineType] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContainerDiv>
      <WineFormTag onSubmit={handleSubmit}>
      <CloseBtn>X</CloseBtn>
        <ThumbPreviewDiv>
          <label htmlFor="image">Upload image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setThumbNail(e.target.files[0])}
          />
          <ThumbPreviewArea
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : null}
          />
        </ThumbPreviewDiv>
        <InfoDiv>
          <label htmlFor="wine-label">Label:</label>
          <input
            id="wine-label"
            name="wine-label"
            placeholder="Enter the wine label..."
            required
            type="text"
            value={wineLabel}
            onChange={(e) => setWineLabel(e.target.value)}
            autoFocus
          />
          <label htmlFor="type">Type:</label>
          <input
            id="type"
            name="type"
            placeholder="Enter the wine label..."
            required
            type="text"
            value={wineType}
            onChange={(e) => setWineType(e.target.value)}
            autoFocus
          />
          <label htmlFor="harvest">Harvest:</label>
          <input
            id="harvest"
            name="harvest"
            placeholder="Enter the harvest year..."
            required
            type="number"
            value={harvest}
            onChange={(e) => setHarvest(e.target.value)}
          />
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            placeholder="Enter the price..."
            required
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Make some comments..."
            required
            type="text"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <PrimaryBtn textContent="Insert wine" height="50px" maxWidth="100%"/>
        </InfoDiv>
      </WineFormTag>
    </ContainerDiv>
  );
};

export default WineForm;
