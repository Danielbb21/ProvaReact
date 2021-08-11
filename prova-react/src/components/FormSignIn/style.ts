import { Link } from "react-router-dom";
import styled from "styled-components";

interface FormProps{
    size: number;
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

export const FormWrapper = styled.form<FormProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: ${(props) => props.size + '%'};
    background: #fff;
    border: 1px solid #DDDDDD;
    border-radius: 14px;
    position: relative;
    input{
        margin-top: 10px;
        width: 91%;
    }
    @media(max-width: 800px) {
        height: 250px;
        width: 95%;
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




export const ErrorMessage = styled.span`
    font-size: 1.5rem;
    color: red;
`