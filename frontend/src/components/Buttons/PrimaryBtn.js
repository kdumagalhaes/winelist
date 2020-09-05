import React from 'react';
import { PrimaryBtnTag } from './PrimaryBtnStyles';

const PrimaryBtn = ({ textContent, height, maxWidth, setModal }) => {
  return <PrimaryBtnTag height={height} maxWidth={maxWidth} setModal={setModal} onClick={() => setModal(true)}>{textContent}</PrimaryBtnTag>;
};

export default PrimaryBtn;
