import React, { useState, useMemo, Fragment } from 'react';
import { WineFormTag, ThumbPreviewArea, ThumbPreviewDiv, InfoDiv } from './WineFormStyles';
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
      <Fragment>
      <h2>Insert your wine</h2>

    <WineFormTag onSubmit={handleSubmit}>
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
      />
      <label>Harvest:</label>
      <input
        id="harvest"
        name="harvest"
        placeholder="Enter the harvest year..."
        required
        type="number"
        value={harvest}
        onChange={(e) => setHarvest(e.target.value)}
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
      </InfoDiv>
    </WineFormTag>
    </Fragment>
  );
};

export default WineForm;
