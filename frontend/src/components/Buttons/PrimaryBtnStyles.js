import styled from 'styled-components';

export const PrimaryBtnTag = styled.button`
  width: 100%;
  max-width: ${({maxWidth}) => maxWidth};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.colors.color4};
  border: none;
  box-shadow: ${({theme}) => theme.shadows.primaryShadow};
  color: ${({ theme }) => theme.colors.color1};
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;
  transition: ${({ theme }) => theme.transitions.primaryTransitionAll};

  &:hover {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.color5};
  }
`;
