import styled from 'styled-components';

export const DashboardDiv = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const NavTag = styled.nav`
  width: 100%;
  padding: 0 40px 0 40px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.color1};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  box-shadow: ${({theme}) => theme.shadows.mediumShadow};

  input,
  span {
    margin: 0 40px;
  }

  input {
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 0 15px;
    width: 100%;
    max-width: 600px;
    color: ${({ theme }) => theme.colors.color4};
    font-weight: 700;

    &::placeholder, [value] {
      color: ${({ theme }) => theme.colors.color3};
      font-weight: 400;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.color5};
    font-size: 1.05rem;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.color4};
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    color: ${({ theme }) => theme.colors.color1};
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    transition: background-color 0.3s;

    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.color5};
    }

    &:hover ~ .tooltip {
      opacity: 1;
      transform: scale(1);
    }
  }

  .logout-icon {
    color: ${({ theme }) => theme.colors.color5};
    font-size: 1.4rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.color3};
    }
  }
`;

export const ButtonToolTipDiv = styled.div`
  position: relative;
  z-index: 1;
`;

export const ToolTipDiv = styled.div`
  color: ${({ theme }) => theme.colors.color4};
  width: 140px;
  padding: 10px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.color1};
  position: absolute;
  left: -45px;
  top: 70px;
  border-radius: 5px;
  opacity: 0;
  transform: scale(0);
  transition: opacity, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  box-shadow: ${({theme}) => theme.shadows.mediumShadow};
`;

export const WinesAreaGrid = styled.div`
  width: 100%;
  max-width: 1380px;
  margin: 40px auto;
  padding: 0 40px 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 30px;
  position: relative;
  z-index: 0;
`;