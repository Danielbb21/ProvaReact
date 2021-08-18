import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLine = styled.div`
  /* width: 100vw; */

  border-bottom: 2px solid #ebebeb;
  @media(max-width: 500px) {
       
       border: none;
       
       
   }
`
export const NavbarWrapper = styled.div`
  width: 90%;
  /* max-width: 980px; */
   
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  

  @media(max-width: 500px) {
       
      /* width: 100vw; */
      margin-bottom: 1.4rem;
      max-width: 100vw;
  }

  
  
`;


export const NavLogoWrapper = styled.div`
  
  display: flex;
  justify-content: space-evenly;
  margin-left: 14.1rem;
  
  align-items: center;

  @media(max-width: 500px) {
       
       margin-left: 0;
       
   }
`;

export const NavLogo =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 4.4rem;
    font-weight: bold;
    margin: -5rem 7.4rem -2.5rem 0rem;
    font-style: italic;
    color: #707070;
    
  div {
        top: 4rem;
        left: 13rem;
        width: 10.7rem;
        height: .7rem;
        background: #b5c401 ;
        border-radius: .6rem;
        opacity: 1;
    }
    /* @media(max-width: 280px) {
        
      font-size: 2.4rem;
        margin: 0;
    } */
  
`;

export const NavHome = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: #707070;
  font-weight: bold;
  justify-content: flex-end;   
  font-style: italic;
  margin-left: 7.4rem;
`

export const NavOptions = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  
  text-align: right;

  @media(max-width: 540px) {
        
        width: 40%;
        
    }
  
`;

export const NavLinks = styled(Link)`
  color: #707070;
  font-weight: bold;
  font-style: italic;
  font-size: 2rem;
  margin-left: 5.7rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  span{
    padding-right: .9rem;
    
  }

`;