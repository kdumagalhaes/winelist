import styled from 'styled-components';

export const RegisterFormTag = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;

  label {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.color5};
    font-weight: 700;
    font-size: 0.9rem;
  }

  input {
    margin-bottom: 15px;
    height: 45px;
    border: none;
    background-color: ${({ theme }) => theme.colors.color1};
    padding: 0 15px;
    color: ${({ theme }) => theme.colors.color4};

    &::placeholder {
      color: ${({ theme }) => theme.colors.color4};
    }
  }
`;

export const NamesDiv = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
