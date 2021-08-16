import styled from 'styled-components';

interface ButtonProps {
    win: number;
}
export const BetPageWrapper = styled.div`
    width: 100vw;
    
    display: flex;
    
    margin-top: 7.2rem;
    justify-content: space-evenly;
    @media(max-width: 1111px) {
        /* margin: 0 auto;
         */
        /* justify-content: center; */
        flex-direction: column;
        /* flex-direction: row; */
      
    }
`;

export const BetNumbers = styled.div`
    width: 50vw;
    /* height: 100%; */
    
`;
export const TitleWrapper = styled.h3`
    
    margin: 0;
    font-size: 2.4rem;
    color: #707070;
    font-weight: bold;
    font-style: italic;

    span{
        font-weight: lighter;
    }
`;

export const DescriptionWrapper = styled.div`
    width: 64.8rem;
    
`;

export const DescriptionTitle = styled.p`
    font-size: 1.7rem;
    color: #868686;
    font-weight: bold;
    font-style: italic;
`;

export const DescriptionInfo = styled.span`
    font-size: 1.7rem;
    font-style: italic;
    color: #868686;
    word-wrap: break-word;
`;

export const ButtonInActionWrapper = styled.div<ButtonProps>`
    display: flex;
    width: ${(props) => props.win + 'rem'};
    align-items: center;
    justify-content: space-between;
`;

