import { Link } from "react-router-dom";
import styled from "styled-components";

interface FormProps{
    size: number;
}


export const FormTitle = styled.h3`
    font-size: 35px;
    margin: 0;
    text-align: center;
    color: #707070;
    @media(max-width: 280px) {
        font-size: 2.8rem;
  }

`;

export const ButtonAndForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35.2rem;
    height: 55rem;
    flex: 1;

    @media(max-width: 800px) {
        height: 100vh;
        width: 90%;
        align-items: center;
  }

  @media(max-width: 280px) {
        /* height: 1.1rem; */
        width: 90%;
        margin-top: 10rem;
  }

`;

export const FormWrapper = styled.form<FormProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
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

  @media(max-width: 800px) {
    height: 250px;
        /* width: 90%; */
        align-items: center;
  }

`;

export const FormText = styled(Link)`
    align-self: flex-end;
    font-size: 1.7rem;
    text-decoration: none;
    margin-right: 2.7rem;
    color:#C1C1C1;
    margin-top: 2.6rem;

`;




export const ErrorMessage = styled.span`
    font-size: 1.5rem;
    color: red;
    font-weight: bold;
    font-style: italic;
    @media(max-width: 800px) {
      font-size: 1rem;
  }
    
`