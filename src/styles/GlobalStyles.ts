import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html, body, #root{
        height: 100%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button{
        cursor: pointer;
    }

`;
