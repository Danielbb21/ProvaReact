import styled from "styled-components";

interface LineProps{
    colorLine: string;
}

interface BetInfoWordProps{
    colorWord: string;
    size?: string;
}

interface BetInfoProps{
    borderColor: string;
    isList?: boolean;
}

export const CartWrapper = styled.div` 
    height: 48.4rem;
    width: 31.7rem;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    @media(max-width: 1111px) {
        
        /* margin: 0 auto;
         */
        /* order: 1; */
        width: 31.7rem;
        
        margin-top: 2.7rem;
        /* flex-direction: column; */
    }  
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
    height: 25.4rem;
    width: 100%;
    overflow: scroll;
`;
export const CartItemsWrapper =styled.div`
    display: flex;
    
    align-items: center;
    margin-bottom: 4rem;
    
`;

export const DateAndPriceWrapper = styled.span`  

    color: #868686;
    font-size: 1.7rem;
    font-weight: normal;
    margin-top: 1.5rem;
    margin-bottom:1.1rem;
`;

export const BetInfo = styled.div<BetInfoProps>`

    margin-left: ${props => props.isList ? '0rem' : '1.4rem'};
    height: ${props => props.isList? '9.4rem' : ''};
    display: flex;
    flex-direction: column;
    
    padding-left: 1.4rem;
    border-left: 4px solid ${(props) => props.borderColor};
   border-radius: .3rem;
   
`;
export const BetNameAndPrice = styled.div<BetInfoWordProps>`
    /* width: 90%; */
    color: #868686;
    
    display: flex;
    font-size: ${props => props.size ? props.size + 'rem' : '1.6rem'};
    font-weight: ${props => props.size ? 'bold' : 'normal'};
    font-style:${props => props.size ? 'italic' : ''};
    
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

interface CartNumberProps{
    wid?: string;
    size?: string;

}

export const CartNumbers = styled.span<CartNumberProps>`
    width:${(props) => props.wid ? props.wid+'%' : '90%'} ;  
    font-size: ${(props) => props.size ? props.size + 'rem' : '1.5rem'};
    font-style: italic;
    font-weight: bold;
    word-wrap: break-word;
    color: #868686;
`;


export const CartValueWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const CartEmptyWraper = styled.span`
    
    text-align: center;
    font-size: 2.2rem;
    color: #707070;
    font-weight: bold;
    font-style: italic;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;