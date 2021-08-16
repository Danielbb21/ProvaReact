import styled from "styled-components"; 


interface ButtonProps {
    color?: string;
    position?: string;
    
}


export const FormButonWrapper = styled.button<ButtonProps>`

    width: 100%;
    position: ${(props) => props.position ? 'absolute' : ''};
    bottom: 0;
    left:0;
    height: 11rem;
    background: none;
    text-align: center;
    font-size: 3.5rem;
    border: .1rem solid transparent;
    border-radius: 1rem;
    color: ${(props) => props.color ? props.color : '#707070'};

    display: flex;
    align-items: center;
    justify-content: center;

    span{
        padding-right:1rem;
    }
    &:hover{
        cursor: pointer;
    }
    @media(max-width: 1000px) {
        height: 4.5rem;
        font-size: 2.4rem;
        span{
            font-size: 2.4rem;
        }
  }
    @media(max-width: 800px) {
        height: 4.5rem;
        font-size: 1.8rem;
        span{
            font-size: 1.8rem;
        }
  }
`;