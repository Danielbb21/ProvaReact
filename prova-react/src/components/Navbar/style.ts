import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLine = styled.div`
  /* width: 100vw; */

  border-bottom: 2px solid #ebebeb;
`
export const NavbarWrapper = styled.div`
  width: 90%;
  /* max-width: 980px; */

  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  

  /* @media(max-width: 280px) {
        
      width: 100vw;
      background-color: red;
  } */

  
  
`;


export const NavLogoWrapper = styled.div`
  /* width: 60%;s */
  display: flex;
  justify-content: space-evenly;
  margin-left: 14.1rem;
  
  align-items: center;
`;

export const NavLogo =styled.span`
  font-size: 4.4rem;
  color: #707070;
  font-weight: bold;
  /* width: 100%; */
  
  
  font-style: italic;
  
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