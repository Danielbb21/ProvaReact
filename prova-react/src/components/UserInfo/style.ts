import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    background: #fff;
    width: 50vw;
    height: 60vh;  
    /* margin-top: 17.5rem; */
    border-radius: 1.6rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    word-wrap: break-word;
   
`;

export const UserInfoTitle = styled.span`
    margin: 0;
    font-weight: bold;
    line-height: 1.9;
    font-style: italic;
    color: #707070;
    font-size: 2.8rem;

    @media(max-width: 600px) {
        /* margin: 0 auto;
         */
        font-size: 1.4rem;
        text-align: center;
    }
`;
export const UserLabel = styled.div`
    
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    color: #707070;
    margin-bottom: 2.5rem;
    span{
        
        padding: 1rem;
        border-radius: .6rem;

    }
    @media(max-width: 600px) {
        /* margin: 0 auto;
         */
        font-size: 1.2rem;
    }

`;