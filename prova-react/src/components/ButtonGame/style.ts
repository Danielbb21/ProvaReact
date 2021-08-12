import styled from 'styled-components';

interface ButtonProps {
    backgorund?: string;
    color?: string;

}

export const ButtonGameWrapper = styled.button<ButtonProps>`
    width: 11.3rem;
    height: 3.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 2px solid ;
    border-radius: 10rem;
    color: ${(props) => props.backgorund === '#01AC66' ?  '#FFF' : props.color};
    font-size: 1.4rem;
    font-weight: bold;
    font-style: italic;
    background: ${(props) => props.backgorund === '#01AC66' ? props.backgorund : '#FFFFFF'} 0% 0% no-repeat padding-box;

    &:hover{
        cursor: pointer;
    }
`;