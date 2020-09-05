import React, { useState, useMemo } from 'react';
import {
  WineFormTag,
  ThumbPreviewArea,
  ThumbPreviewDiv,
  InfoDiv,
  ContainerDiv,
  CloseBtn,
  AlertDiv,
} from './WineFormStyles';
import { BiCamera } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { RiAlertLine } from "react-icons/ri";
import api from '../../../services/api'

const WineForm = ({ modalVisibility, setModal }) => {
  const [wineLabel, setWineLabel] = useState('');
  const [harvest, setHarvest] = useState('');
  const [comments, setComments] = useState('');
  const [thumbnail, setThumbNail] = useState(null);
  const [updated, setUpdated] = useState('');
  const [price, setPrice] = useState('');
  const [wineType, setWineType] = useState('');
  const [errorMessage, setErrorMessage] = useState(false)

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_id = localStorage.getItem('user');

    const wineData = new FormData();

    wineData.append('wineLabel', wineLabel);
    wineData.append('harvest', harvest);
    wineData.append('comments', comments);
    wineData.append('thumbnail', thumbnail);
    wineData.append('updated', updated);
    wineData.append('price', price);
    wineData.append('wineType', wineType);

    try {
      if (
        wineLabel !== '' &&
        harvest !== '' &&
        comments !== '' &&
        price !== '' &&
        wineType !== '' &&
        thumbnail !== null
      ) {
        await api.post('/wine', wineData, { headers: { user_id } });
        console.log('Wine has been sent');
      } else {
        setErrorMessage(true)
        setTimeout(() => {
          setErrorMessage(false)
        }, 2000)
      }
    } catch (error) {
      Promise.reject(error)
    }


  };

  return (
    <ContainerDiv modalVisibility={modalVisibility}>
      <WineFormTag onSubmit={handleSubmit}>
        <CloseBtn onClick={() => setModal(false)}>X</CloseBtn>
        <ThumbPreviewDiv>
          <div>
            <input
              type="file"
              id="upload-image"
              name="image"
              onChange={(e) => setThumbNail(e.target.files[0])}
            />
            <label htmlFor="upload-image">
              <IconContext.Provider value={{ className: 'CameraIcon' }}>
                <BiCamera />
              </IconContext.Provider>
            </label>
          </div>

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
            type="number"
            value={harvest}
            onChange={(e) => setHarvest(e.target.value)}
          />
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            placeholder="Enter the price..."
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Make some comments..."
            type="text"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <button type="submit">Insert Wine</button>
          {errorMessage ? (
          <AlertDiv><RiAlertLine/> You have to complete all the fields!</AlertDiv>
        ) : ''}
        </InfoDiv>
      </WineFormTag>
    </ContainerDiv>
  );
};

export default WineForm;
