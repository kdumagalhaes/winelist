import styled from 'styled-components';
import BackgroundImgRegisterPage from '../../assets/winelist-register-page.png';

export const RegisterPageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.color2};
  display: flex;
`;

export const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  height: auto;
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
    margin: 20px 0 20px 0;
  }

  span {
    font-size: 1rem;
    margin: 10px;
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
  width: 100%;
  max-width: 895px;
  height: 100vh;
  background-image: url(${BackgroundImgRegisterPage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
