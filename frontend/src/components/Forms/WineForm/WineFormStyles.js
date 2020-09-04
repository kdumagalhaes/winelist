import styled from 'styled-components'

export const WineFormTag = styled.form `
width: 100%;
max-width: 860px;
height: auto;
padding: 20px;
box-shadow: ${({theme}) => theme.shadows.primaryShadow};
display: flex;
`

export const ThumbPreviewArea = styled.div `
width: 300px;
height: 500px;
background-size: contain;
background-repeat: no-repeat;
`

export const ThumbPreviewDiv = styled.div ``


export const InfoDiv = styled.div `
display: flex;
flex-direction: column;
`