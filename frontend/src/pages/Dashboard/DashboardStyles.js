import styled from 'styled-components';

export const DashboardDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const NavTag = styled.nav`
  width: 100%;
  padding: 0 20px 0 20px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.color1};
  display: flex;
  align-items: center;
  position: relative;

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

    &::placeholder {
      color: ${({ theme }) => theme.colors.color3};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.color5};
    font-size: 1.2rem;
  }

  button {
    width: 40px;
    height: 40px;
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
`;

export const ToolTipDiv = styled.div`
  color: ${({ theme }) => theme.colors.color4};
  width: 100%;
  max-width: 140px;
  padding: 10px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.color1};
  position: absolute;
  right: 470px;
  top: 85px;
  border-radius: 5px;
  opacity: 0;
  transform: scale(0);
  transition: opacity, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
`;
