import styled from 'styled-components';

export const WineCardTag = styled.div`
  width: 100%;
  max-width: 315px;
  transition: transform 0.3s;
  margin-bottom: 30px;
  break-inside: avoid-column;

  &:hover {
    box-shadow: none;
  }

  img {
    width: 100%;
    max-width: 315px;
    height: 220px;
    object-fit: cover;
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    border-bottom: 5px solid ${({ theme }) => theme.colors.color5};
  }
`;

export const InfoDiv = styled.div`
  padding: 15px;
  color: ${({ theme }) => theme.colors.color1};
  background-color: ${({ theme }) => theme.colors.color4};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
`;

export const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span,
  time,
  p {
    margin-bottom: 10px;
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;
  }

  time,
  p {
    width: 100%;
  }

  time {
    font-size: 0.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.color5};
    text-align: center;
    padding-bottom: 10px;
  }

  p {
    font-size: 0.8rem;
    line-height: 22px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.color5};
  }
`;

export const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  span {
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: capitalize;
  }

  button {
    background-color: ${({ theme }) => theme.colors.color5};
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.color3};
    transition: background-color, color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.color3};
      color: ${({ theme }) => theme.colors.color5};
    }
  }
`;
