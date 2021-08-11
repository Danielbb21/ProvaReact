import styled from "styled-components";


export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
`;

export const LogoTitle = styled.div`
  width: 24.4rem;
  height: 21.7rem;

  h1 {
    width: 100%;
    height: 100%;
    font-size: 6.5rem;
    text-align: center;
    word-wrap: wrap;
  }
 
`;

export const LogoCircle = styled.div`
    text-align: center;
    width: 14.4rem;
    height:3.9rem;
    margin-top:10rem;
    border-radius: 10rem;
    background: #B5C401;

    @media(max-width: 800px) {
        width: 8.4rem;
    height:1.9rem;
    margin-top:5rem;
  }
    span{
     
        color: #fff;
        font-size:2.6rem;
    }
    @media(max-width: 800px) {
       span{
        font-size: 1.3rem;
            
        }
  }
`;

export const LotoWord = styled.div`
    width: 38rem;
    height: 9.9rem;

    h1{
        width: 100%;
        height: 100%;
        font-size: 8.3rem;
        text-align: center;
    }
    @media(max-width: 800px) {
        h1{
        font-size: 2.3rem;
            
        }
  }
`;