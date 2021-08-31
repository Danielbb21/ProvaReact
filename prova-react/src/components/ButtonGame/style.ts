import styled from 'styled-components';

interface ButtonProps {
    backgorund?: string;
    color?: string;
    isClickable?:boolean;

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
    color: ${(props) => props.isClickable ? '#FFF' : props.color};
    /* color: ${(props) => props.backgorund === '#01AC66' ?  '#FFF' : props.color}; */
    font-size: 1.4rem;
    font-weight: bold;
    font-style: italic;
    background: ${(props) => props.isClickable ? props.backgorund : '#FFFFFF'} 0% 0% no-repeat padding-box;
    /* background: ${(props) => props.backgorund === '#01AC66' ? props.backgorund : '#FFFFFF'} 0% 0% no-repeat padding-box; */

    &:hover{
        cursor: pointer;
    }
`;
export const  ButtonFilterWrapper = styled.div`
    display: flex;
    
    width: 100%;
    /* flex-direction: column-reverse; */
    /* align-items: flex-end; */
    /* width: 10%; */
    justify-content: flex-end;
    
    
`;
interface ButtonFilterProps{
    isClicked?: boolean;
}

export const ButtonFilter = styled.button<ButtonFilterProps>`
    width: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.4rem;
    padding: 2rem;
    border-radius: .5rem;
    background-color: ${(props) => props.isClicked ? '#666666' :''};
    color: ${(props) => props.isClicked ? '#fff' :''};
    &:hover{
        background-color: lightblue;
    }
`;