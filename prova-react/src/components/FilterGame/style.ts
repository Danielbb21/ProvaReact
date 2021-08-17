import { Link } from "react-router-dom";
import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7.3rem;
  margin-left: 14.1rem;
  
  justify-content: flex-start;
  @media(max-width: 800px) {
        /* width: 50%; */
    margin: 0;

  }
`;

export const FilterHeaderWrapper = styled.div`
    
    display: flex;
    /* width: 100%; */
    @media(max-width: 800px) {  
        align-items: center;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 1.4rem;
        margin-bottom: 1.4rem;
  }
    
`

export const MessageWrapper = styled.h2`
  margin: 0;
  text-align: center;
  
  margin-top: 1.4rem;
  color: #707070;
    font-size: 2.4rem;
    font-weight: bold;
    font-style: italic;

`;
export const FilterHeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    
    margin-right: 13rem;

    @media(max-width: 800px) {
      flex-direction: column;
      /* width: 50%; */
      justify-content: center;
      align-items: center;
      margin :0;
      
      
  }
`;

export const FilterTitle = styled.span`
    color: #707070;
    font-size: 2.4rem;
    font-weight: bold;
    font-style: italic;
    margin-right:4.5rem;
    margin-bottom: 3.5rem;

    @media(max-width: 800px) {
        font-size: 1.8rem;
        align-items: center;
        margin: 0;
        
        text-align: center;
  }
`;
export const FilterWord = styled.span`
    font-size: 1.7rem;
    font-style: italic;
    color: #868686;

    margin-right: 1.7rem;
    @media(max-width: 800px) {
       margin: 1.4rem 0;
       
  }
`;

export const FilterButton = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 800px) {
       flex-direction: column;
       height: 14rem;
       /* justify-content: center; */
       align-items: center;
  }
`;

export const ToNewBetLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #B5C401;
    text-decoration: none;
    font-size: 2.4rem;
    span{
        padding-right:.3rem;
    }
    @media(max-width: 700px) {
      
       /* justify-content: flex-end; */
        margin-bottom: 1.4rem;
        /* margin-left: -3rem; */
        justify-content: flex-end;  
        align-items: flex-end;  
        span{
          margin: 0;

        }
  }
`;