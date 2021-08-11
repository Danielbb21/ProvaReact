import { Link } from "react-router-dom";
import styled from "styled-components";


interface ButtonProps {
    color?: string;
    position?: string;
}

export const FormTitle = styled.h3`
    font-size: 35px;
    text-align: center;
    color: #707070;
`;

export const ButtonAndForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 352px;
    height: 550px;
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 85%;
    background: #fff;
    border: 1px solid #DDDDDD;
    border-radius: 14px;
    position: relative;
    input{
        margin-top: 10px;
        width: 91%;
    }
`;

export const FormText = styled(Link)`
    align-self: flex-end;
    font-size:17px;
    text-decoration: none;
    margin-right: 27px;
    color:#C1C1C1;
    margin-top: 26px;

`;

export const FormButon = styled.button<ButtonProps>`
    width: 100%;
    position: ${(props) => props.position ? 'absolute' : ''};
    bottom: 0;
    left:0;
    height: 110px;
    background: none;
    text-align: center;
    font-size: 35px;
    border: 1px solid transparent;
    border-radius: 10px;
    color: ${(props) => props.color ? props.color : '#707070'};
    &:hover{
        cursor: pointer;
    }
`;
