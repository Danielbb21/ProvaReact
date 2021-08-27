import styled from 'styled-components';

export const FieldTitle = styled.span`
    margin: 0;
    color: #707070;
    font-size: 1.6rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1.5rem;
    

    @media(max-width: 800px) {
        font-size: 1.4rem;
        align-items: center;
        margin: 0;
        
        text-align: center;
  }
`;

export const UpdateForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: row;
    width: 100%;
`;