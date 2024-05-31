import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f9f9f9;
    font-family: 'Montserrat', sans-serif;
  }

  button,a{
    cursor: pointer;
    transition: filter 0.3s;
  }

  
`;
export const corPrimaria = "#0F52BA";
export const cardColor = "#ffffff";
export const priceColor = "#373737";
