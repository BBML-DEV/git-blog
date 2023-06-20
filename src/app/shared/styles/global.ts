import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif;
    }

    body{
        color: ${({ theme }) => theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.colors['base-background']};
    }

    body, input, textarea, button {
        font: 400 ${({ theme }) =>
          theme.textSizes['text-text-m']}, "Nunito, sans-serif";
        line-height: 160%;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    
    button{
        border: none;
        cursor: pointer;
    }
`
