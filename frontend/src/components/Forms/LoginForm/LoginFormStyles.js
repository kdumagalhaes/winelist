import styled from 'styled-components'

export const LoginFormTag = styled.form`
width: 100%;
max-width: 350px;
height: 400px;
margin: 20px;
display: flex;
flex-direction: column;
align-items: center;
`

export const InputsDiv = styled.div `
width: 100%;
display: flex;
flex-direction: column;
margin-top: 40px;

    label {
        margin-bottom: 10px;
        color: ${({theme}) => theme.colors.color5};
        font-weight: 700;
        font-size: 0.9rem;
    }

    input {
        margin-bottom: 15px;
        height: 45px;
        border: none;
        background-color: ${({theme}) => theme.colors.color1};
        padding: 0 15px;

        &::placeholder {
            color: ${({theme}) => theme.colors.color4};
        }
        
        &:last-child {
            margin-bottom: 30px;
        }
    }
`