import React from 'react';
import { PrimaryBtnTag } from './PrimaryBtnStyles';

const PrimaryBtn = ({ textContent, height, maxWidth }) => {
  return <PrimaryBtnTag height={height} maxWidth={maxWidth}>{textContent}</PrimaryBtnTag>;
};

export default PrimaryBtn;
