import styled from "styled-components";

interface LineProps{
    colorLine: string;
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
`;

export const CartItemsWrapper =styled.div`
    display: flex;
    width: 95%;
    /* height: 9rem; */
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
    height: 100%;
    width: 4rem;
    background: ${(props) => props.colorLine};
    border-radius: .4rem;
`