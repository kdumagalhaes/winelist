import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

body, input, button, textarea {
    text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
}

button {
    cursor: pointer;
}
`;
