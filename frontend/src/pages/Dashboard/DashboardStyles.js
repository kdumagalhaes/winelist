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

  input, span {
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
          color: ${({theme}) => theme.colors.color3};
      }
  }

  span {
        color: ${({theme}) => theme.colors.color5};
        font-size: 1.2rem;
    } 
`;
