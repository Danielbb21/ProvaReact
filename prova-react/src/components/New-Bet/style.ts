import styled from 'styled-components';

interface ButtonProps {
    win: number;
}
export const BetPageWrapper = styled.div`

   margin-top: 7.2rem;
    /* margin:0; */
    display: flex;
    justify-content: space-evenly;
    width: 90vw;
    overflow-x: hidden;
    flex: 1;
    
    @media(max-width: 1400px) and (max-height: 1100px){
        width: 75vw;
        /* background-color: blue; */
        margin: 0 auto;
        /* max-width: 50rem; */
        
    }
    @media(max-width: 1440px) {
      
        align-items: center;
        width: 100vw;
        flex-direction: column-reverse;
       
    }
    
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
    
    
    @media(max-width: 800px) {
       width: 85%;

       
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
    
    @media(max-width: 1100px) {
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

    @media(max-width: 1100px) {
       /* width: 90vw; */
       width: ${(props) => props.win-20 + 'rem'};
       margin: 0 auto;
  }


  @media(max-width: 300px) {
       /* width: 90vw; */
       width: ${(props) => props.win-30 + 'rem'};
  }

`;

