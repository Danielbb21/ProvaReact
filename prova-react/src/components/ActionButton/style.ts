import styled from "styled-components";

interface ButtonActionProps {
    win: number;
    hei: number;
    color?: string;
    background?: string;
}

export const ButtonActionWrapper = styled.button<ButtonActionProps>`
    width: ${(props) => props.win + 'rem'};
    height:${(props) => props.hei + 'rem'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color ? props.color : '#FFFFFF'};
    background: ${(props) => props.background ? props.background : '#FFFFFF'};
`;