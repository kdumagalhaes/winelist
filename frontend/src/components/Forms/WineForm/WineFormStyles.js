import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  visibility: ${({ modalVisibility }) => modalVisibility};
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ThumbPreviewArea = styled.div`
  width: 100%;
  max-width: 350px;
  height: 522px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ThumbPreviewDiv = styled.div`
  margin-right: 20px;
  border-right: 1px solid #efefef;

  label {
    font-size: 0;
  }

  input {
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input,
  textarea {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.colors.color1};
    padding: 10px;
    margin-bottom: 20px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.color3};
    }
  }

  label {
    margin-bottom: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.color4};
  }

  input {
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
