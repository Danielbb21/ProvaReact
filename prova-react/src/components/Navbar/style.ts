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
  flex: 1;
`;


export const NavLogo =styled.span`
  font-size: 4.4rem;
  color: #707070;
  font-weight: bold;
  width: 60%;
  font-style: italic;
  text-align: center;
  text-align: center;
`;


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