import styled from 'styled-components'

export const SuccessAlertDiv = styled.div `
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.color6};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.color0};
  margin-top: 20px;

  svg {
      margin-right: 5px;
  }`