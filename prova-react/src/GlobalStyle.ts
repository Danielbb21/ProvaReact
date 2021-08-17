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
  
  @media(max-width: 1024px) {
        
        html{
          font-size: 50%;
        }
  }
  @media(max-width: 812px) {
        
        html{
          font-size: 40%;
        }
  }
  @media(min-height: 1024px) {
        
        html{
          font-size: 85%;
        }
  }

`;

export default GlobalStyle;