import styled from 'styled-components';

interface ButtonProps {
    win: number;
}
export const BetPageWrapper = styled.div`
   margin-top: 7.2rem;
    /* margin:0; */
    display: flex;
    width: 90vw;
    overflow-x: hidden;
    flex: 1;
    
    
    @media(max-width: 1111px) {
        /* margin: 0 auto;
         */
        
        margin: 0;
        width: 100vw;
        /* justify-content: center; */
        flex-direction: column-reverse;
        /* flex-direction: row; */
      
    }
`;

export const BetNumbers = styled.div`
    width: 50%;
    /* height: 100%; */
    
    margin-left: 14.4rem;
    @media(max-width: 800px) {
       width: 85%;
       margin: 0 auto;
  }
`;
export const TitleWrapper = styled.h3`
    
    margin: 0;
    font-size: 2.4rem;
    color: #707070;
    font-weight: bold;
    font-style: italic;
    width: 100vw;
    span{
        font-weight: lighter;
    }
`;

export const DescriptionWrapper = styled.div`
    width: 64.8rem;
    
    @media(max-width: 800px) {
        width: 90%;
        

  }
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

    @media(max-width: 800px) {
       /* width: 90vw; */
       width: ${(props) => props.win-20 + 'rem'};
  }

`;

