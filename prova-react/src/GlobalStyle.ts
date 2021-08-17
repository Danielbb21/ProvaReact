import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F7F7F7 0% 0% no-repeat padding-box;
    font-family: Helvetica;
    
  }
  html{
    font-size: 62.5%;
  }
  @media(max-width: 800px) {
        
        html{
          font-size: 40%;
        }
  }
  @media(min-height: 1024px) {
        
        html{
          font-size: 75%;
        }
  }

`;

export default GlobalStyle;