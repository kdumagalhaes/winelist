import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;
  top: 0;
  visibility: ${({ modalVisibility }) => modalVisibility};
  z-index: 1;
  overflow: hidden;
`;

export const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.color4};
  position: absolute;
  top: -14px;
  right: -14px;
  color: ${({ theme }) => theme.colors.color0};
  font-size: 0.8rem;
  font-weight: 400;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.color5};
  }
`;

export const WineFormTag = styled.form`
  width: 100%;
  max-width: 860px;
  height: auto;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  display: flex;
  background-color: ${({ theme }) => theme.colors.color0};
  position: relative;
  z-index: 5;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  input, textarea {
      color: ${({ theme }) => theme.colors.color4};
  }

`;

export const ThumbPreviewArea = styled.div`
  width: 100%;
  max-width: 350px;
  height: 522px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ThumbPreviewDiv = styled.div`
  width: 100%;
  max-width: 350px;
  height: 522px;
  margin: 20px 20px 20px 0;
  border-right: 1px solid ${({ theme }) => theme.colors.color1};
  border-left: 1px solid ${({ theme }) => theme.colors.color1};
  display: flex;
  position: relative;

  .CameraIcon {
    background-color: ${({ theme }) => theme.colors.color4};
    width: 60px;
    height: 60px;
    padding: 15px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.color0};
    color: ${({ theme }) => theme.colors.color2};
    position: absolute;
    top: -30px;
    left: 41%;
    cursor: pointer;
    transition: color, background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.color2};
      color: ${({ theme }) => theme.colors.color4};
    }
  }

  input {
    display: none;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input,
  textarea,
  select {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.color1};
    padding: 10px;
    margin-bottom: 20px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.color3};
    }
  }

  select {
    color: ${({ theme }) => theme.colors.color4};
  }

  option {
      color: ${({ theme }) => theme.colors.color3};
    }

  label {
    margin-bottom: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.color4};
  }

  input, select {
    height: 45px;
  }

  textarea {
    height: 90px;
  }

  button {
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.color4};
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    color: ${({ theme }) => theme.colors.color1};
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.color5};
    }
  }
`;

export const AlertDiv = styled.div `
width: 100%;
height: 40px;
background-color: ${({ theme }) => theme.colors.color2};
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 80px;
font-size: 0.9rem;
font-weight: 700;
color: ${({ theme }) => theme.colors.color4};
margin-top: 20px;
`