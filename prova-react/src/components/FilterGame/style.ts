import { Link } from "react-router-dom";
import styled from "styled-components";


export const FilterHeaderWrapper = styled.div`

    display: flex;
    /* width: 100%; */
    @media(max-width: 800px) {
        width: 50%;
        align-items: center;

  }
    
`

export const FilterHeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    
    margin-right: 13rem;

    @media(max-width: 800px) {
      flex-direction: column;
      width: 50%;
      
  }
`;

export const FilterTitle = styled.span`
    color: #707070;
    font-size: 2.4rem;
    font-weight: bold;
    font-style: italic;
    margin-right:4.5rem;
    margin-left:4.5rem;

    @media(max-width: 800px) {
        font-size: 1.8rem;
        align-items: center;
  }
`;
export const FilterWord = styled.span`
    font-size: 1.7rem;
    font-style: italic;
    color: #868686;

    margin-right: 1.7rem;
`;

export const FilterButton = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 800px) {
       flex-direction: column;
       height: 14rem;
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
       justify-content: flex-end;
  }
`;