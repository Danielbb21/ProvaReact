import styled from 'styled-components';

export const FooterWrapeer = styled.div`
 position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2rem;

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