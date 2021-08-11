import styled from 'styled-components';

export const InputWrapper = styled.input`
    padding-bottom: 15px;
    padding-top: 25px;
    padding-left:30px;
    border: none;
    font-size: 17px;
    border-bottom: 2px solid #EBEBEB;
    /* &::-webkit-input-placeholder{
        
        
        font-style: bold;
    } */
    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
         outline: 0;
         border-bottom: 2px solid #EBEBEB;
        
    }
`;