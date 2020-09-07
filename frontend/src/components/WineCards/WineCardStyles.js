import styled from 'styled-components';

export const WineCardTag = styled.div`
  width: 100%;
  max-width: 315px;
  cursor: pointer;
  transform: scale(1);
  transition: background-color, transform 0.3s;

  &:hover {
    box-shadow: none;
    transform: scale(1.02);
  }

  img {
    width: 100%;
    max-width: 315px;
    height: 220px;
    object-fit: cover;
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    border-bottom: 5px solid ${({ theme }) => theme.colors.color5};
  }

  div {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.color1};
    background-color: ${({ theme }) => theme.colors.color4};
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};

    span {
      font-size: 1.2rem;
      margin-bottom: 10px;
      font-weight: 700;
    }

    time {
      font-size: 0.8rem;
    }
  }
`;
