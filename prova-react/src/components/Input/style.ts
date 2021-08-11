import styled from 'styled-components';

export const InputWrapper = styled.input`
    padding-bottom: 1.5rem;
    padding-top: 2.5rem;
    padding-left:3rem;
    border: none;
    font-size: 1.7rem;
    border-bottom: .2rem solid #EBEBEB;
    /* &::-webkit-input-placeholder{
        
        
        font-style: bold;
    } */
    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
         outline: 0;
         border-bottom: .2rem solid #EBEBEB;
        
    }
`;