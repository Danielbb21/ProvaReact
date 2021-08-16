import styled from "styled-components";

interface ButtonActionProps {
    win: number;
    hei: number;
    color?: string;
    background?: string;
    size?: string;
    border: string;
    end?: boolean;
}

export const ButtonActionWrapper = styled.button<ButtonActionProps>`
    width: ${(props) => props.win + 'rem'};
    height:${(props) => props.hei + 'rem'};
    display: flex;
    align-items: center;
    
    justify-content: center;
    border: .1rem solid ${(props) => props.border};
    font-size: ${(props) => props.size ? props.size + 'rem' : '1.6rem'};
    color: ${(props) => props.color ? props.color : '#FFFFFF'};
    background: ${(props) => props.background ? props.background : '#FFFFFF'};
    border-radius: 1rem;

    border: none;
    &:hover{
        cursor: pointer;
    }
    span{
        margin-left: 1.4rem;
    }
 
`;