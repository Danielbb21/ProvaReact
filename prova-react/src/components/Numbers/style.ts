import styled from "styled-components";

interface NumberProps{
    isChosed?: boolean;
}

export const NumberPlace = styled.div`
    display: flex;
    flex-direction: row;

    max-width: 67rem;
    /* height: 100%; */
    max-height: 54rem;
    overflow: scroll;
    width: 64.4rem;
    margin-top: 2.7rem;
    margin-bottom: 4.4rem;
    flex-wrap: wrap;

  
    @media(max-width: 1111px) {
        
        width: 100%;
        margin: 0 auto;
        /* max-width: 50rem; */
    }
`;
export const NumbersWrapper = styled.div<NumberProps>`
    width:6.3rem;
    margin: 1rem 0.6rem;
   
      
    height: 6.5rem;
    border-radius: 50%;
    display: flex;
    
    align-items: center;    
    justify-content: center;
    background: ${(props) => props.isChosed ? '#01AC66' : '#ADC0C4'};
    span{
        color: #FFFFFF;
        font-size: 2rem;
        font-weight: bold;
     
    }
`