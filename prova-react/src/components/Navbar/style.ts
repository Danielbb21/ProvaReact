import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLine = styled.div`
  width: 100%;
  border-bottom: 2px solid #ebebeb;
`
export const NavbarWrapper = styled.div`
  width: 80%;

  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;


export const NavLogoWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  
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
`

export const NavOptions = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  
  text-align: right;
  
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