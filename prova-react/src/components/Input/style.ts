
import styled from 'styled-components';

interface InputWrapperProps{
  display?:boolean;
}

export const InputWrapper = styled.input<InputWrapperProps>`
    padding-bottom: 1.5rem;
    padding-top: 2.5rem;
    padding-left: 1.5rem;
    border: none;
    font-size: 1.7rem;
    border-bottom: .2rem solid #EBEBEB;
    display: ${props => props.display ?  'inline-block' : ''};
    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
         outline: 0;
         border-bottom: .2rem solid #EBEBEB;
        

         
    }

    @media(max-width: 800px) {
        
        padding-bottom: .5rem;
    padding-top: 1.5rem;
  }
  

  @media(max-height: 400px) {
   margin: 0;
   padding: 0;
  }



`;