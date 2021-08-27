import styled from 'styled-components';

interface UserInfoProps {
    hei?: number;
    wid?: number;
}
export const UserInfoWrapper = styled.div<UserInfoProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    background: #fff;
    width: ${props => props.wid ? props.wid + 'vw' : '50vw'};
    height: ${props => props.hei ? props.hei + 'vh' : '60vh'};  
    
    border-radius: 1.6rem;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    word-wrap: break-word;
    @media(max-height: 400px) {
        margin-top: 1.4rem;
      height: 70vh;
      
  }
`;
export const InfoWrapper = styled.div`
    display: flex; 
    flex-direction: column;
     
    max-height: 70%; 
    width: 70%;
    overflow: auto;

`;
export const UserInfoTitle = styled.span`
    margin: 0;
    font-weight: bold;
    line-height: 1.9;
    font-style: italic;
    color: #707070;
    font-size: 2.8rem;
    text-align: center;
    @media(max-width: 600px) {
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
        text-align: center;

    }

`;