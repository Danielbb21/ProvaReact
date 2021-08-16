import styled from "styled-components";


export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    flex: 1;
    @media(max-width: 800px) {
        /* height: 25vh; */
        width: 100%;
  }

  /* @media(max-width: 280px) {
        /* height: 1.1rem;
        width: 90%; */
  /* } */

`;

export const LogoTitle = styled.div`
  width: 24.4rem;
  /* height: 21.7rem; */

  h1 {
    margin: 0;
    width: 100%;
    height: 100%;
    font-size: 6.5rem;
    text-align: center;
    word-wrap: wrap;
    color: #707070;
    font-weight: bold;
    font-style: italic
  }
  @media(max-width: 800px) {
    h1{
      margin: 0;
        font-size: 4.4rem;
    }
  }
  /* @media(max-width: 280px) {
        h1{
          font-size: 2.8rem;
        }
  } */

`;

export const LogoCircle = styled.div`
    text-align: center;
    width: 14.4rem;
    height:3.9rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    border-radius: 10rem;
    background: #B5C401;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 800px) {
        width: 8.4rem;
    height:1.9rem;
   
  }
    span{
        font-weight: bold;
        font-style: italic;
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
      font-weight: bold;
        font-style: italic;
        color: #707070;
      margin:0;
        width: 100%;
        height: 100%;
        font-size: 8.3rem;
        text-align: center;
    }
    @media(max-width: 800px) {
        h1{
          margin:0;
          font-size: 4.4rem;
            
        }
  }
`;