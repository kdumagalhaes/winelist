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
  transition: ${({ theme }) => theme.transitions.primaryTransitionAll};

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
  height: 425px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ThumbPreviewDiv = styled.div`
  background-color: red;
  margin-right: 20px;
  background-color: #efefee;

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
`;
