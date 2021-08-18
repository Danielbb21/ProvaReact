import { Link } from "react-router-dom";
import styled from "styled-components";

interface FormProps{
    size: number;
}


export const FormTitle = styled.h3`
    font-size: 3.5rem;
    margin: 0;
    text-align: center;
    color: #707070;
    @media(max-width: 280px) {
        /* font-size: 2.8rem; */
  }

`;

export const ButtonAndForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35.2rem;
    height: 55rem;
    flex: 1;


    @media(max-height: 400px) {
      height: 100%;
        
        
  }
    @media(max-width: 800px) {
        
        /* height: 45.4rem; */
        width: 90%;
        align-items: center;
        /* justify-content: center; */
        /* justify-content: center; */
        
  }

  @media(max-width: 280px) {
        /* height: 1.1rem; */
        width: 90%;
        /* height: 45.4rem; */
        /* margin-top: 10rem; */
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

    @media(max-width: 1100px) {
        width: 90%;
        height: 100%;
  }
    @media(max-width: 800px) {
        height: 25rem;
        width: 80%;
        align-items: center;
  }

 
  @media(max-height: 600px) {
        /* height: 1.1rem; */
        width: 90%;
        /* margin-top: 10rem; */
        height: 22rem;
        /* background-color: red; */
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


export const ErrorContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ErrorMessage = styled.span`
    font-size: 1.5rem;
    color: red;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    @media(max-width: 800px) {
      margin:0;
  }

  
  @media(max-height: 400px) and (max-width: 700px){
    line-height: .6;
    margin: 0;
   
  }
  
    
`