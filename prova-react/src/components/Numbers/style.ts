import styled from "styled-components";

interface NumberProps{
    isChosed?: boolean;
}

export const NumberPlace = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 67rem;
    height: 100%;
    flex-wrap: wrap;
`;
export const NumbersWrapper = styled.div<NumberProps>`
    width:6.3rem;
    
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