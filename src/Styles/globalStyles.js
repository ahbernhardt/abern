import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle `

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
}
`;

export const lightTheme = {
    body:'#f5f5f5',
    text: '#28282a',
    transitionTime: ".5s",
}

export const darkTheme = {
    body: '#28282a',
    text: '#F5F5F5',
    transitionTime: ".1s",
}