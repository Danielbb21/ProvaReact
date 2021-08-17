import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body {
    position: absolute;
    width: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
}
  body {
    margin: 0;
    padding: 0;
    background: #F7F7F7 0% 0% no-repeat padding-box;
    font-family: Helvetica;
    margin: 0 0 50px; /* bottom = footer height */
  }

  body:after {
    line-height: 100px; /* height of footer */
    white-space: pre;
    content: "\A";
}
  html{
    font-size: 62.5%;
    position: relative;
    min-height: 100%;
    
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