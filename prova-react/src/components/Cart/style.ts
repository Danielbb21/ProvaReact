import styled from "styled-components";

interface LineProps{
    colorLine: string;
}

interface BetInfoWordProps{
    colorWord: string;
}

export const CartWrapper = styled.div` 
    height: 48.4rem;
    width: 31.7rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    
`;

export const CartTitle = styled.h2`
    color: #707070;
    font-size: 2.4rem;
    font-weight: bold;
    font-style: italic;
    padding-left: 1.9rem;
    span{
        font-weight: lighter;

    }
`;

export const CartMax = styled.div`
    /* max-height: 34.4rem; */
    overflow: scroll;
`;
export const CartItemsWrapper =styled.div`
    display: flex;
    /* max-width: 95%; */
    
    margin-bottom: 4rem;
    
    /* height: 10%;; */
    
`;

export const BetInfo = styled.div`
    margin-left: 1.4rem;
    display: flex;
    flex-direction: column;
    
    padding-left: 1.4rem;
    border-left: 4px solid red;
   border-radius: .3rem;
`;
export const BetNameAndPrice = styled.div<BetInfoWordProps>`
    /* width: 90%; */
    color: #868686;
    
    display: flex;
    font-size: 1.6rem;
    font-weight: normal;
    
    span{
        color: ${(props) => props.colorWord};
        font-weight: bold;
        font-style: italic;
        margin-right: .4rem;
    }

`;

export const CartRemoveButton = styled.div`
    
    color: #888888;
    width: 2rem;
    height: 2.4rem;
    /* border: none; */
    &:hover{
        cursor: pointer;
    }
`;

export const CartLine = styled.div<LineProps>`
    /* max-height: 100%; */
    width: .4rem;
    background: ${(props) => props.colorLine};
    border-radius: .4rem;
    /* margin: 0 1.2rem; */
`

export const CartNumbers = styled.span`
        width: 90%;  
    font-size:1.5rem;
    font-style: italic;
    font-weight: bold;
    word-wrap: break-word;
    color: #868686;
`;


export const CartValueWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`