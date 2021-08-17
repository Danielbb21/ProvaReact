import styled from 'styled-components';

export const FooterWrapeer = styled.div`
 position: absolute;
    width: 100%;
   /* height of footer */
    bottom: 0px;
    margin-top: -15px; /* height of footer */
    /* background-color: red; */
    border-top: 2px solid #EBEBEB;
  
  
    text-align: center;
    padding-top: 2rem;
    span{
        color: #707070;
        font-size: 1.5rem;
        
        
    }
    @media(max-width: 280px) {
        /* height: 0.1vh; */
    }

`;