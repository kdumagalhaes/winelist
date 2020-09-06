import styled from 'styled-components';
import BackgroundImgLoginPage from '../../assets/winelist-login-page.png';

export const LoginPageDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.color0};
  display: flex;
`;

export const LeftDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p,
  span {
    color: ${({ theme }) => theme.colors.color4};
  }

  p {
    max-width: 370px;
    font-size: 0.95rem;
    text-align: center;
    margin: 20px 0 40px 0;
  }

  span {
    font-size: 1rem;
    margin: 20px;
  }

  h3 {
    a {
      color: ${({ theme }) => theme.colors.color5};
      transition: ${({ theme }) => theme.transitions.primaryTransitionAll};
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: ${({ theme }) => theme.colors.color4};
      }
    }
  }
`;

export const RightDiv = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 895px;
  background-image: url(${BackgroundImgLoginPage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
