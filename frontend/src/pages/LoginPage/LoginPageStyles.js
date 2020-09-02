import styled from 'styled-components';
import BackgroundImgLoginPage from '../../assets/winelist-login-page.png'

export const LoginPageDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.color1};
  display: flex;
`;

export const LeftDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RightDiv = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 895px;
    background-image: url(${BackgroundImgLoginPage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`